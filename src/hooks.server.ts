// MSW browser integration.
// See https://mswjs.io/docs/integrations/node

import { dev } from '$app/environment'
import { ENABLE_MSW_SERVER } from '$env/static/private'

if (dev && ENABLE_MSW_SERVER === 'true') {
	const { server } = await import('./mocks/server')

	server.listen()
}
