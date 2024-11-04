import { transformMDX } from "@hamstack/next-mdx";
import { useMDXComponents } from "~/mdx-components";

async function loadMDX(path: string): Promise<string> {
  let baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return fetch(`${baseUrl}/${path}`).then((r) => r.text());
}

// preload the mdx file:
let pendingMDX = loadMDX("testing.mdx");

export default async function Home() {
  // resolve it:
  let mdxContext = await pendingMDX;

  // transform it:
  const { Component, frontmatter } = await transformMDX<{
    title: string;
  }>({
    content: mdxContext,
    useMDXComponents,
  });

  console.log(frontmatter);

  return (
    <main className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
      <Component />
    </main>
  );
}
