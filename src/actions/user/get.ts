'use server'

import { getSheets } from '@/lib/google-sheets'

export const getUsers = async () => {
	const sheets = await getSheets()

	const users = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.GOOGLE_SHEET_ID,
		range: 'HR_List!H1:J'
	})

	// console.log(
	// 	users.data.values?.map(value => [
	// 		value.at(7),
	// 		value.at(8),
	// 		`0${value.at(9)}`
	// 	])
	// )

	console.log(users.data.values)

	return users.data.values
}

export const checkUserDuplicated = async (
	email: string,
	identity: string,
	phoneNumber: string
) => {
	const sheets = await getSheets()

	const users = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.GOOGLE_SHEET_ID,
		range: 'HR_List!H2:J'
	})

	const isDupEmail = users.data.values
		?.map(value => value.at(0))
		.includes(email)
	const isDupIdentity = users.data.values
		?.map(value => value.at(1))
		.includes(identity)
	const isDupPhoneNumber = users.data.values
		?.map(value => value.at(2))
		.includes(phoneNumber)

	if (isDupEmail || isDupIdentity || isDupPhoneNumber) {
		return true
	}

	return false
}
