import { Loader2 } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { Control } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface Step1Props {
	control?: Control<any, any>
	isPending?: boolean
}

interface Step1FootProps {
	step: number
	setStep: Dispatch<SetStateAction<number>>
	isPending?: boolean
}

export const Step1: FC<Step1Props> = ({ control, isPending }) => {
	return (
		<>
			<FormField
				control={control}
				name='fullName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Họ và tên</FormLabel>
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
				name='email'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email</FormLabel>
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
				name='phoneNumber'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Số điện thoại</FormLabel>
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
		</>
	)
}

export const Step1Head = () => {
	return <CardTitle>Thông tin chung</CardTitle>
}

export const Step1Foot: FC<Step1FootProps> = ({ step, setStep, isPending }) => {
	return (
		<div className='flex w-full items-center justify-end'>
			<Button
				disabled={isPending}
				className='gap-3'
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
