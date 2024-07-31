import { google } from 'googleapis'

export const getGoogleAuth = async () =>
	await google.auth.getClient({
		projectId: process.env.GOOGLE_CLOUD_ID,
		credentials: {
			type: process.env.GOOGLE_ACCOUNT_TYPE,
			project_id: process.env.GOOGLE_CLOUD_ID,
			private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
			private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
			client_email: process.env.GOOGLE_CLIENT_EMAIL,
			universe_domain: 'googleapis.com'
		},
		scopes: ['https://www.googleapis.com/auth/spreadsheets']
	})
