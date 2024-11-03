import { evaluate } from "@mdx-js/mdx";
import { Fragment } from "react";
import * as jsxRuntime from "react/jsx-runtime";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

// export default async function loader(code: string): Promise<void> {
//   // @ts-expect-error
//   let callback = this.async();
//   // @ts-expect-error
//   let options = this.getOptions();

//   let result = await compile(code, {
//     remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
//     rehypePlugins: [rehypeMdxCodeProps],
//     providerImportSource: options.providerImportSource,
//   });

//   callback(
//     undefined,
//     Buffer.from(result.value),
//     result.map || undefined,
//     undefined,
//   );
// }

type Options = {
  code: string;
  useMDXComponents: () => Record<string, React.ComponentType>;
};

type Result = {
  Component: React.ComponentType;
  frontmatter: Record<string, unknown>;
};

export async function mdxTransformer({
  code,
  useMDXComponents,
}: Options): Promise<Result> {
  let result = await evaluate(code, {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeMdxCodeProps],
    Fragment,
    useMDXComponents,
    jsx: jsxRuntime.jsx,
    jsxs: jsxRuntime.jsxs,
    // @ts-expect-error
    jsxDEV: jsxRuntime.jsxDEV,
  });

  return {
    Component: result.default,
    frontmatter: result.frontmatter ?? {},
  } as Result;
}
