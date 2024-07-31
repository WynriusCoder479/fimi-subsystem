import { google } from 'googleapis'
import nodemailer from 'nodemailer'

type MailPayload = {
	html: string
	subject: string
}

export const mailerHelper = async (to: string, payload: MailPayload) => {
	console.log('Begin send')

	const oaut2Client = new google.auth.OAuth2(
		process.env.GOOGLE_CLIENT_ID,
		process.env.GOOGLE_CLIENT_SECRET,
		'https://developers.google.com/oauthplayground'
	)

	oaut2Client.setCredentials({
		refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN
	})

	const accessToken = (await oaut2Client.getAccessToken()).token

	const transport = nodemailer.createTransport({
		service: 'gmail',
		port: 465,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: process.env.MAIL_ADDRESS,
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			refreshToken: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
			accessToken: accessToken as string
		},
		tls: {
			rejectUnauthorized: false
		}
	})

	const info = await transport.sendMail({
		from: `No Reply <${process.env.MAIL_ADDRESS}>`,
		to,
		subject: payload.subject,
		html: payload.html
	})
}
