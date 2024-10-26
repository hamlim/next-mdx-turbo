/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.mdx": {
          loaders: [
            {
              loader: "@hamstack/next-mdx/loader",
              options: {
                providerImportSource: "~/use-mdx-components",
              },
            },
          ],
          as: "*.js",
        },
      },
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
};

export default nextConfig;
