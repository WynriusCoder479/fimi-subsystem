import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

import { cn } from '@/lib/utils'
import ClientProvider from '@/providers/client.provider'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FIMI',
	description: 'FIMI-Subsystem'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={cn('antialiased', font.className)}>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	)
}
