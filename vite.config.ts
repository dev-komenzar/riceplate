import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import msw from '@iodigital/vite-plugin-msw'
import { handlers } from './src/mocks/handlers.js'

export default defineConfig({
	plugins: [sveltekit(), msw({ handlers }),
	],
})
