// MSW browser integration.
// See https://mswjs.io/docs/integrations/browser

import { dev } from '$app/environment'
import { PUBLIC_ENABLE_MSW_CLIENT } from '$env/static/public'

if (dev && PUBLIC_ENABLE_MSW_CLIENT === 'true') {
	const { worker } = await import('./mocks/browser.js')

	await worker.start({
		onUnhandledRequest: 'warn',
	})
}
