// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   experimental: {
//     turbo: {
//       rules: {
//         "*.mdx": {
//           loaders: [
//             {
//               loader: "@hamstack/next-mdx/loader",
//               options: {
//                 providerImportSource: "~/use-mdx-components",
//               },
//             },
//           ],
//           as: "*.js",
//         },
//       },
//       resolveExtensions: [
//         ".mdx",
//         ".tsx",
//         ".ts",
//         ".jsx",
//         ".js",
//         ".mjs",
//         ".json",
//       ],
//     },
//   },
//   webpack(config) {
//     config.stats = "verbose";
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         {
//           loader: "@hamstack/next-mdx/loader",
//           options: {
//             providerImportSource: "~/use-mdx-components",
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// export default nextConfig;

// import createMDX from "@next/mdx";
// import rehypeMdxCodeProps from "rehype-mdx-code-props";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkGfm from "remark-gfm";
// import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  // pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.mdx": {
          loaders: ["raw-loader"],
          // as: "*.js",
        },
      },
    },
  },
  // experimental: {
  //   mdxRs: {
  //     mdxType: "gfm",
  //   },
  // },
};

export default nextConfig;

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   options: {
//     remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
//     rehypePlugins: [rehypeMdxCodeProps],
//   },
// });

// // Merge MDX config with Next.js config
// export default withMDX(nextConfig);
