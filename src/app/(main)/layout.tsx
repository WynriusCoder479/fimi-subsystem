import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='h-full'>
			<Header />
			<div className='flex h-screen flex-1 flex-col gap-4 lg:gap-0'>
				<div className='flex-1'>
					<div className='relative flex w-full flex-col items-center justify-center'>
						<div className='container flex flex-1 items-center justify-center gap-4'>
							<Image
								src='/banner.png'
								width={5000}
								height={5000}
								alt='banner'
								className='hidden h-[calc(100vh-4rem)] w-1/2 select-none lg:block'
							/>
							{children}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default MainLayout
