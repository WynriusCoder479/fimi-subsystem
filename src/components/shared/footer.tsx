import { Clock, Home, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex w-full flex-col bg-gradient-to-r from-primary to-red-700 p-4 px-6 text-white'>
				<div className='container relative flex items-center justify-between py-2'>
					<div className='flex flex-1 flex-col gap-2'>
						<Image
							src='/sub-logo.png'
							alt='main logo'
							width={377}
							height={163}
							className='aspect-[377/163] w-24'
						/>
						<h3 className='text-xl font-bold tracking-wider lg:text-2xl'>
							Công Ty TNHH Công Nghệ FIMI
						</h3>
						<div className='mt-2 flex-1 flex-col items-start space-y-4'>
							<div className='flex items-center gap-4'>
								<div className='rounded-full bg-white p-2 text-primary'>
									<Home className='h-6 w-6' />
								</div>
								<p className='text-base font-semibold'>
									Hội sở: Tầng 72, Landmark 81, Vinhomes Central Park, 720A Điện
									Biên Phủ, P.22, Q.Bình Thạnh, TP.HCM.
								</p>
							</div>
							<div className='flex items-center gap-4'>
								<div className='rounded-full bg-white p-2 text-primary'>
									<MapPin className='h-6 w-6' />
								</div>
								<p className='text-base font-semibold'>
									CN HCM: Tầng 1, Tòa Nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4,
									TP.HCM.
								</p>
							</div>
							<div className='flex flex-wrap gap-4 lg:space-x-28'>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-2 text-primary'>
										<Mail className='h-6 w-6' />
									</div>
									<p className='text-base font-semibold'>admin@fimi.tech</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-2 text-primary'>
										<Phone className='h-6 w-6' />
									</div>
									<p className='text-base font-semibold'>0393 017 031</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-2 text-primary'>
										<Clock className='h-6 w-6' />
									</div>
									<p className='text-base font-semibold'>
										8:30 - 17:30 | Thứ 2 - Thứ 6
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='absolute right-2 top-2 flex flex-row items-center space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2'>
						<Link href='https://www.facebook.com/fimipubs'>
							<Image
								src='/facebook.svg'
								alt='facebook-logo'
								width={100}
								height={100}
								className='aspect-auto w-11 lg:w-16'
							/>
						</Link>
						<Link href='https://www.youtube.com/channel/UChE5adX4GQgsFahptRJWbbg'>
							<Image
								src='/youtube.svg'
								alt='youtube-logo'
								width={100}
								height={100}
								className='aspect-auto w-11 lg:w-16'
							/>
						</Link>
						<Link href='https://www.tiktok.com/@fimitech?_t=8iXQNh23a8P&_r=1'>
							<Image
								src='/tiktok.svg'
								alt='tiktok-logo'
								width={100}
								height={100}
								className='aspect-auto w-11 lg:w-16'
							/>
						</Link>
						<Link href='https://zalo.me/349258862182110585'>
							<Image
								src='/zalo.svg'
								alt='zalo-logo'
								width={100}
								height={100}
								className='aspect-auto w-8 rounded-xl bg-white lg:w-11'
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className='container bg-background py-3'>
				<p className='font-bold text-primary'>
					Copyright © FIMI Tech Co., Ltd, all right reserved.
				</p>
			</div>
		</div>
	)
}

export default Footer
