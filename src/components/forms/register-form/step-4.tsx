import { Loader2 } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { Control } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { chanelList } from '@/constants/chanel-list'
import { positionList } from '@/constants/position-list'
import { cn } from '@/lib/utils'

interface StepProps {
	control?: Control<any, any>
	isPending?: boolean
}

interface StepFootProps {
	step: number
	setStep: Dispatch<SetStateAction<number>>
	isPending?: boolean
}

export const Step4: FC<StepProps> = ({ control, isPending }) => {
	return (
		<>
			<FormField
				control={control}
				name='position'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Vị trí</FormLabel>
						<Select
							disabled={isPending}
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn vị trí' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent>
								{positionList.map(position => (
									<SelectItem
										key={position}
										value={position}
									>
										{position}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='affiliateChanel'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Kênh tiếp thị</FormLabel>
						<Select
							disabled={isPending}
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn vị trí' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent>
								{chanelList.map(chanel => (
									<SelectItem
										key={chanel}
										value={chanel}
									>
										{chanel}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='workStatus'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Trạng thái công việc</FormLabel>
						<Select
							disabled={isPending}
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn trạng thái công việc' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent defaultValue='Đang làm việc'>
								<SelectItem value='Đang làm việc'>Đang làm việc</SelectItem>
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='saleDirector'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Hỗ trợ</FormLabel>
						<Select
							disabled={isPending}
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn AM hỗ trợ' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent defaultValue='Lê Thị Lệ Huyền'>
								<SelectItem value='AM hỗ trợ'>AM hỗ trợ</SelectItem>
								<SelectItem value='Lê Thị Lệ Huyền'>Lê Thị Lệ Huyền</SelectItem>
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='tnc'
				render={({ field }) => (
					<FormItem
						className={cn(
							'flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4',
							{
								'opacity-50': isPending
							}
						)}
					>
						<FormControl>
							<Checkbox
								disabled={isPending}
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
						<div className='space-y-1 leading-none'>
							<FormLabel className='text-foreground/50'>
								Tôi đồng ý cung cấp thông tin dữ liệu cá nhân và FIMI được quyền
								xử lý dữ liệu cá nhân của tôi trong quá trình làm việc tại FIMI.
							</FormLabel>
						</div>
					</FormItem>
				)}
			/>
		</>
	)
}

export const Step4Head = () => {
	return <CardTitle>Thông tin thêm</CardTitle>
}

export const Step4Foot: FC<StepFootProps> = ({ step, setStep, isPending }) => {
	return (
		<div className='flex w-full items-center justify-between'>
			<Button
				variant='outline'
				disabled={isPending}
				onClick={e => {
					e.preventDefault()

					setStep(step - 1)
				}}
			>
				{isPending && <Loader2 className='h-5 w-4 animate-spin' />}
				Prev
			</Button>
			<Button type='submit'>Đăng ký</Button>
		</div>
	)
}
