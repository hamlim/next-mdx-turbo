import "server-only";
import { evaluate } from "@mdx-js/mdx";
import { Fragment } from "react";
import * as jsxRuntime from "react/jsx-runtime";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

type Options = {
  content: string;
  useMDXComponents: () => Record<string, React.ComponentType>;
};

type Result = {
  Component: React.ComponentType;
  frontmatter: Record<string, unknown>;
};

export async function transformMDX({
  content,
  useMDXComponents,
}: Options): Promise<Result> {
  let result = await evaluate(content, {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "frontmatter" }],
      remarkGfm,
    ],
    rehypePlugins: [rehypeMdxCodeProps],
    Fragment,
    useMDXComponents,
    jsx: jsxRuntime.jsx,
    jsxs: jsxRuntime.jsxs,
    // @ts-expect-error - not sure what's happening here
    jsxDEV: jsxRuntime.jsxDEV,
  });

  return {
    Component: result.default,
    frontmatter: result.frontmatter ?? {},
  } as Result;
}

export async function loadMDX(path: string): Promise<string> {
  let baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return fetch(`${baseUrl}/${path}`).then((r) => r.text());
}
