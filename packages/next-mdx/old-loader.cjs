let { Buffer } = require("node:buffer");
let { compile } = require("@mdx-js/mdx");
let { default: rehypeMdxCodeProps } = require("rehype-mdx-code-props");
let { default: remarkFrontmatter } = require("remark-frontmatter");
let { default: remarkGfm } = require("remark-gfm");
let { remarkMdxFrontmatter } = require("remark-mdx-frontmatter");

module.exports = async function loader(code) {
  let callback = this.async();
  let options = this.getOptions();

  let result = await compile(code, {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeMdxCodeProps],
    providerImportSource: options.providerImportSource,
  });

  callback(undefined, Buffer.from(result.value), result.map || undefined);
  return;
};
