# `@hamstack/next-mdx`

A turbopack compatible MDX loader that works with both webpack and turbopack!

## Getting Started:

```sh
bun add @hamstack/next-mdx
```

Also make sure to install the peer dependencies:

```sh
bun add @mdx-js/mdx@3.1.0 remark-gfm@4.0.0 remark-frontmatter@5.0.0 remark-mdx-frontmatter@1.0.0 rehype-mdx-code-props@3.0.1
```

Then add the following to your `next.config`:

```ts
export default {
  experimental: {
    turbo: {
      rules: {
        "*.mdx": {
          loaders: [
            {
              loader: "@hamstack/next-mdx/loader",
              options: {
                // Must be provided
                // Any resolvable path to a file that provides
                // a named export of `useMDXComponents`
                // e.g. export function useMDXComponents(): Record<string, ComponentLike>
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
  }
}
```

## Contributing:

### Building:

This library uses [`swc`](https://swc.rs/) and [`TypeScript`](https://www.typescriptlang.org/docs/) to build the source code and generate types.

To build the library, run `bun run build` from the root, or from this workspace!

### Code Quality:

#### Type Checking:

This library uses TypeScript to perform type checks, run `bun run type-check` from the root or from this workspace!

#### Linting

This library uses [BiomeJS](https://biomejs.dev/) for linting, run `bun run lint` from the root or from this workspace!

#### Tests

This library uses Bun for running unit tests, run `bun run test` from the root or from this workspace!

### Publishing:

To publish the library, run `bun run pub` from the workspace root. This will prompt you to login to npm and publish the package.

> Note: In the future, we will automate this process using GitHub Actions. And also add in tooling to manage releases / changelogs!
