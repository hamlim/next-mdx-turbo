import { mdxTransformer } from "@hamstack/next-mdx";
import { useMDXComponents } from "~/mdx-components";
import mdxContext from "./testing.mdx";

// let pendingMDX = fetch("./testing.mdx").then((r) => r.text());
export default async function Home() {
  // let mdxContext = await pendingMDX;

  const { Component, frontmatter } = await mdxTransformer({
    code: mdxContext,
    useMDXComponents,
  });

  console.log(frontmatter);

  return (
    <main>
      <Component />
    </main>
  );
}
