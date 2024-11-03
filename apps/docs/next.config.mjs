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
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        {
          loader: "@hamstack/next-mdx/loader",
          options: {
            providerImportSource: "~/use-mdx-components",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
