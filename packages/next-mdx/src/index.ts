import { Buffer } from "node:buffer";
import { compile } from "@mdx-js/mdx";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

export default async function loader(code: string): Promise<void> {
  // @ts-expect-error
  let callback = this.async();
  // @ts-expect-error
  let options = this.getOptions();

  let result = await compile(code, {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeMdxCodeProps],
    providerImportSource: options.providerImportSource,
  });

  callback(
    undefined,
    Buffer.from(result.value),
    result.map || undefined,
    undefined,
  );
}
