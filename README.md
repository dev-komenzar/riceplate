# Riceplate

![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?maxAge=43200)

Rice-plate is my frontend app boilerplate for developping with SvelteKit.

- [SvelteKit](https://kit.svelte.jp/)
- Runtime: [Bun](https://github.com/oven-sh/bun?tab=readme-ov-file)
- PostCSS and TailwindCSS
- Autoprefixer
- Format & Lint: ESLint
- CSS Lint: StyleLint
  - ❌ No Prettier
- Husky + staged
- Avoid mistakenly running npm, yarn, and pnpm commands

## Installation

Read [this installation](https://bun.sh/docs/installation) to install Bun. Clone this repository to your local and run `bun install`.

**DON'T** use npm, yarn, pnpm or other package managers!!!

## Mock

Use MSW for mock testing. Write handlers to `src/mocks/handlers.ts`. MSW is loaded only when development mode. See `src/hooks.client.ts` and `src/hooks.server.ts`
