import { compile } from "@mdx-js/mdx";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

export default async function loader(
  code: string,
  callback: (error?: Error, result?: string) => void,
  options: {
    providerImportSource: string;
  },
): Promise<void> {
  let result = await compile(code, {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeMdxCodeProps],
    providerImportSource: options.providerImportSource,
  });

  callback(undefined, result.value.toString());
  return;
}
