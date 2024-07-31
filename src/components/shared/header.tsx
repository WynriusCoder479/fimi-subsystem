import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Header = () => {
	return (
		<div className='boder-b sticky inset-x-0 top-0 z-[10000] mb-4 border-foreground/15 bg-background shadow-md'>
			<div className='container flex items-center justify-between p-4'>
				<Image
					src='/main-logo.png'
					alt='main logo'
					width={377}
					height={163}
					className='aspect-[377/163] w-24'
				/>
				<Button
					asChild
					className='text-lg tracking-wide'
				>
					<Link href='https://zalo.me/g/oshjhc449'>Liên hệ hỗ trợ</Link>
				</Button>
			</div>
		</div>
	)
}

export default Header
