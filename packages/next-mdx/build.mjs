import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "node",
  target: ["node22"],
  outfile: "./loader.cjs",
  external: [
    // "@mdx-js/mdx",
    // "rehype-mdx-code-props",
    // "remark-frontmatter",
    // "remark-gfm",
    // "remark-mdx-frontmatter",
    // "@mdx-js/mdx",
    // "rehype-mdx-code-props",
    // "remark-frontmatter",
    // "remark-gfm",
    // "remark-mdx-frontmatter",
  ],
});
