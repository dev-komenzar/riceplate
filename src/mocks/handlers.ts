import { HttpResponse, http } from 'msw'

// Define mock handlers below
// Used in `./browsers` and `./servers`
// Read [this](https://mswjs.io/docs/network-behavior/rest)

// For example post to `login` and return success
export const handlers = [
	http.post('https://example.com/login', () => {
		return HttpResponse.json({
			success: true,
			message: 'Login successful',
			user:    {
				id:    1,
				name:  'John Doe',
				email: 'john.doe@example.com',
			},
		}, { status: 200 })
	}),
]
