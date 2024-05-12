// MSW browser integration.
// See https://mswjs.io/docs/integrations/node

import { dev } from '$app/environment'

if (dev) {
	const { server } = await import('./mocks/servers')

	server.listen()
}
