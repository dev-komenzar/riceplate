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
- Mocking library: MSW
- Avoid mistakenly running npm, yarn, and pnpm commands

## Installation

Read [this installation](https://bun.sh/docs/installation) to install Bun. Clone this repository to your local and run `bun install`.

**DON'T** use npm, yarn, pnpm or other package managers!!!

## VS Code

*Search Bar > Show and Run Command (Shift + Command + P) > Tasks: Run task*
Tasks are already configured to use Bun.

## Mock

Use MSW for mock testing. Write handlers to `src/mocks/handlers.ts`. MSW is loaded only when development mode. See `src/hooks.client.ts` and `src/hooks.server.ts`.

Create `.env` file in root dir and set two values: `ENABLE_MSW_SERVER, PUBLIC_ENABLE_MSW_CLIENT` as `true` if you want to use msw.
