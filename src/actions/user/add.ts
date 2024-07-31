'use server'

import { render } from '@react-email/components'

import { checkUserDuplicated } from '@/actions/user/get'
import WelcomeEmail from '@/emails/welcome-email'
import { getSheets } from '@/lib/google-sheets'
import { mailerHelper } from '@/lib/mailer'
import { RegistrationSchema, registrationSchema } from '@/schema/registration'

export const addUser = async (values: RegistrationSchema) => {
	const invalidatedValues = registrationSchema.safeParse(values)

	if (!invalidatedValues.success) {
		return { error: 'Thông tin không chính xác' }
	}

	const userData = invalidatedValues.data

	const isDuplicated = await checkUserDuplicated(
		userData.email,
		userData.identityNumber,
		userData.phoneNumber
	)

	if (isDuplicated) {
		return { error: 'Người dùng đã tồn tại' }
	}

	const identityNumberPartern = /^\d{9,9}|\d{12,12}$/

	if (!identityNumberPartern.test(userData.identityNumber)) {
		return { error: 'Số căn cước không đúng định dạng' }
	}

	const sheets = await getSheets()

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.GOOGLE_SHEET_ID,
		range: 'HR_LIST!A2:V1',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					userData.id,
					userData.createdAt,
					userData.affiliateChanel,
					userData.position,
					userData.fullName,
					userData.gender,
					userData.birthDate,
					userData.email,
					userData.identityNumber,
					userData.phoneNumber,
					userData.address,
					userData.bank,
					userData.bankAccount,
					userData.taxCode,
					userData.saleDirector,
					'FIMI',
					userData.workStatus,
					'Chưa bổ sung',
					'["Tôi đồng ý cung cấp thông tin dữ liệu cá nhân và FIMI được quyền xử lý dữ liệu cá nhân của tôi trong quá trình làm việc tại FIMI."]'
				]
			]
		}
	})

	const html = render(
		WelcomeEmail({
			fullName: userData.fullName,
			id: userData.id,
			bankAccount: userData.bankAccount
		})
	)

	await mailerHelper(userData.email, {
		subject: 'Thông tin đăng ký',
		html
	})

	return {
		success: `Truy cập "${userData.email}" để nhận mail xác nhận đăng ký thành công`
	}
}
