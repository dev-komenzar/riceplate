// MSW browser integration.
// See https://mswjs.io/docs/integrations/browser

import { dev } from '$app/environment'

if (dev) {
	const { worker } = await import('./mocks/browsers.js')

	await worker.start({
		onUnhandledRequest: 'warn',
	})
}
