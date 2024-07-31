import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text
} from '@react-email/components'
import * as React from 'react'

import { RegistrationSchema } from '@/schema/registration'

interface WelcomeEmailProps
	extends Pick<RegistrationSchema, 'fullName' | 'id' | 'bankAccount'> {}

const WelcomeEmail = ({ fullName, id, bankAccount }: WelcomeEmailProps) => (
	<Html>
		<Head />
		<Preview>FIMI - Giải pháp bán hàng đa kênh</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src='https://iili.io/dxCuz5N.png'
					width='377'
					height='163'
					alt='Fimi'
					style={logo}
				/>
				<div style={brand}>Thông tin người dùng</div>
				<Text style={paragraph}>Chào, {fullName},</Text>
				<Text style={paragraph}>
					Mã giới thiệu của bạn là:{' '}
					<span style={{ fontWeight: 'bold' }}>{id}</span>
				</Text>
				<Text style={paragraph}>
					Số tài khoản ngân hàng của bạn là:{' '}
					<span style={{ fontWeight: 'bold' }}>{bankAccount}</span>
				</Text>
				<Text style={paragraph}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
					incidunt saepe inventore fuga hic soluta beatae aut, nostrum veritatis
					sapiente molestias, velit recusandae? Nemo, adipisci nihil tempora
					velit quo corporis.
				</Text>
				<Section style={btnContainer}>
					<Button
						style={button}
						href='https://getkoala.com'
					>
						Nhận chiến dịch đầu tiên
					</Button>
				</Section>
				<Text style={paragraph}>
					Best,
					<br />
					<p
						style={{
							color: '#8c0f10',
							fontWeight: 'bold'
						}}
					>
						FIMI - Giải pháp bán hàng đa kênh
					</p>
				</Text>
				<Hr style={hr} />
				<Text style={footer}>
					Tầng 1, Tòa Nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4, TP.HCM.
				</Text>
			</Container>
		</Body>
	</Html>
)

// WelcomeEmail.PreviewProps = {
// 	fullName: 'Nguyễn văn A',
// 	id: 'FIMI908512',
// 	bankAccount: '123456789'
// } as WelcomeEmailProps

export default WelcomeEmail

const main = {
	backgroundColor: '#ffffff',
	width: '100%',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
	margin: '0 auto',
	padding: '20px 0 48px',
	width: '100%',
	backgroundColor: '#ffffff'
}

const brand = {
	background: 'black',
	opacity: '.8',
	width: '100%',
	padding: '1rem',
	margin: '1rem 0',
	color: 'white',
	fontWeight: 'bold'
}

const logo = {
	aspectRatio: '377/163',
	width: '5rem',
	height: '2.5rem'
}

const paragraph = {
	fontSize: '16px',
	lineHeight: '26px'
}

const btnContainer = {
	textAlign: 'center' as const
}

const button = {
	backgroundColor: '#8c0f10',
	borderRadius: '3px',
	color: '#fff',
	fontSize: '16px',
	textDecoration: 'none',
	textAlign: 'center' as const,
	display: 'block',
	width: '100%',
	padding: '12px'
}

const hr = {
	borderColor: '#cccccc',
	margin: '20px 0'
}

const footer = {
	color: '#8898aa',
	fontSize: '12px'
}
