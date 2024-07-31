import { z } from 'zod'

export const registrationSchema = z
	.object({
		id: z.string(),
		fullName: z.string().min(1, { message: 'Vui lòng nhập họ và tên' }),
		email: z.string().email({ message: 'Vui lòng nhập email' }),
		phoneNumber: z.string().min(1, { message: 'Vui lòng nhập số điện thoại' }),
		identityNumber: z.string(),
		gender: z.string(),
		birthDate: z.union([z.coerce.date(), z.string()]),
		position: z.string(),
		address: z.string(),
		bankAccount: z.string(),
		bank: z.string(),
		taxCode: z.string(),
		affiliateChanel: z.string(),
		saleDirector: z.string(),
		workStatus: z.string(),
		tnc: z.boolean(),
		createdAt: z.string()
	})
	.refine(
		({ tnc }) => {
			if (!tnc) return false

			return true
		},
		{
			message: 'Vui lòng đồng ý với các điểu khoản của chúng tôi',
			path: ['tnc']
		}
	)

export type RegistrationSchema = z.infer<typeof registrationSchema>
