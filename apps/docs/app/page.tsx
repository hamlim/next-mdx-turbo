import { loadMDX, transformMDX } from "@hamstack/next-mdx";
import { useMDXComponents } from "~/mdx-components";

// preload the mdx file:
let pendingMDX = loadMDX("testing.mdx");

export default async function Home() {
  // resolve it:
  let mdxContext = await pendingMDX;

  // transform it:
  const { Component, frontmatter } = await transformMDX({
    content: mdxContext,
    useMDXComponents,
  });

  console.log(frontmatter);

  return (
    <main>
      <Component />
    </main>
  );
}
