import { SelectValue } from '@radix-ui/react-select'
import { Loader2 } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { Control } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import { DateTimePicker } from '@/components/ui/date-picker'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger
} from '@/components/ui/select'
import { cityList } from '@/constants/city-list'

interface StepProps {
	control?: Control<any, any>
	isPending?: boolean
}

interface StepFootProps {
	step: number
	setStep: Dispatch<SetStateAction<number>>
	isPending?: boolean
}

export const Step2: FC<StepProps> = ({ control, isPending }) => {
	return (
		<>
			<FormField
				control={control}
				name='identityNumber'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Số căn cước công dân</FormLabel>
						<FormControl>
							<Input
								{...field}
								disabled={isPending}
								className='border-foreground/20'
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='birthDate'
				render={({ field }) => (
					<FormItem className='flex flex-col'>
						<FormLabel>Ngày sinh</FormLabel>
						<FormControl>
							<DateTimePicker
								{...field}
								className='w-full'
								placeholder='dd/mm/yyyy'
								value={field.value}
								onChange={field.onChange}
								displayFormat={{ hour24: 'dd/MM/yyyy' }}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='gender'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Giới tính</FormLabel>
						<Select
							disabled={isPending}
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn giới tính' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent defaultValue='Nam'>
								<SelectItem value='Nam'>Nam</SelectItem>
								<SelectItem value='Nữ'>Nữ</SelectItem>
								<SelectItem value='Khác'>Khác...</SelectItem>
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='address'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Tỉnh thành công tác</FormLabel>
						<Select
							disabled={isPending}
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn tỉnh/thành' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent>
								{cityList.map(city => (
									<SelectItem
										value={city}
										key={city}
									>
										{city}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
		</>
	)
}

export const Step2Head = () => {
	return <CardTitle>Thông tin thêm</CardTitle>
}

export const Step2Foot: FC<StepFootProps> = ({ step, setStep, isPending }) => {
	return (
		<div className='flex w-full items-center justify-between'>
			<Button
				variant='outline'
				disabled={isPending}
				className='gap-3'
				onClick={e => {
					e.preventDefault()

					setStep(step - 1)
				}}
			>
				{isPending && <Loader2 className='h-5 w-4 animate-spin' />}
				Prev
			</Button>
			<Button
				onClick={e => {
					e.preventDefault()

					setStep(step + 1)
				}}
			>
				{isPending && <Loader2 className='h-5 w-4 animate-spin' />}
				Next
			</Button>
		</div>
	)
}
