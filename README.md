# Next MDX Turbo

This repo is a bit of an experiment to figure out how to get MDX working well with Next 15 (using `turbopack` for development), while also supporting both remark and rehype plugins (since the current rust-based mdx compiler doesn't support those).

I had originally attempted to write a custom webpack loader that should have worked in development with turbopack and in production builds with webpack - however I kept running into quirks where the build process will just exit without any additional context.

TL;DR:

This repo sets up a minimal library that wraps `evaluate` from `@mdx-js/mdx` for use at **runtime** vs _build time_.

---

Check out the [Guidebook](./GUIDEBOOK.md) for more details on how to use this repo setup!
