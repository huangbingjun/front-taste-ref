import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { isAbsolute, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const root = new URL('../', import.meta.url);
const rootPath = fileURLToPath(root);
const readme = readFileSync(new URL('README.md', root), 'utf8').replaceAll('\r\n', '\n');
const sections = readme.split(/^<!-- readme:(zh|en) -->$/m);
if (sections.length !== 5 || sections[1] !== 'zh' || sections[3] !== 'en' ||
    !sections[2].trim() || !sections[4].trim()) {
  throw new Error('README.md 应包含完整的中文和英文区块，按 zh、en 的顺序标记。');
}

const repository = process.env.GITHUB_REPOSITORY || 'huangbingjun/front-taste-ref';
const revision = process.env.GITHUB_SHA || 'main';
const markdown = new MarkdownIt({ linkify: true });

markdown.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
  const token = tokens[index];
  const href = token.attrGet('href');
  if (href && !href.startsWith('#')) {
    const target = new URL(href, root);
    if (target.protocol === 'file:') {
      const path = fileURLToPath(target);
      const repoPath = relative(rootPath, path);
      if (isAbsolute(repoPath) || repoPath === '..' || repoPath.startsWith('..' + sep)) {
        throw new Error(`README 链接超出仓库范围：${href}`);
      }
      const kind = statSync(path).isDirectory() ? 'tree' : 'blob';
      const encoded = repoPath.split(sep).map(encodeURIComponent).join('/');
      token.attrSet('href', `https://github.com/${repository}/${kind}/${revision}/${encoded}${target.search}${target.hash}`);
    }
  }
  return renderer.renderToken(tokens, index, options);
};

const template = readFileSync(new URL('index.html', import.meta.url), 'utf8');
const page = template.replace(/<!-- content:(zh|en) -->/g, (_, language) =>
  markdown.render(sections[language === 'zh' ? 2 : 4].trim()),
);
const output = new URL('dist/pages/', root);
mkdirSync(output, { recursive: true });
writeFileSync(new URL('index.html', output), page);
