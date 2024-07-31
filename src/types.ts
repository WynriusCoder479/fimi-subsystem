import { HTMLInputTypeAttribute } from 'react'

export type FormField = {
	name: string
	type: HTMLInputTypeAttribute
	label: string
}

export type StepField = {
	step: number
	fields: FormField[]
	next: boolean
}
