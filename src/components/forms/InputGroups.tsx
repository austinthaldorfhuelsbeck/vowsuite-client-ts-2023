import React, { ChangeEvent, PropsWithChildren } from "react"

import { Alert } from "../../styles/components/content.style"
import { ErrorProps } from "./utils/inputValidation"
import { FormColumn, FormInput } from "../../styles/components/forms.style"
import { IOption } from "../../data/temp-data"

// Data
interface BaseProps {
	label: string
	id: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	validation: any
}
interface InputProps extends BaseProps {
	type: string
	placeholder?: string
	value: string
}
interface ControlProps extends BaseProps {
	options: IOption[]
	value: string
}

function InputError({ validation, value }: PropsWithChildren<ErrorProps>) {
	if (validation.required.value && value?.length === 0) {
		return <Alert error>{validation.required.message}</Alert>
	}
	if (value && value.length > validation.maxLength?.value) {
		return <Alert error>{validation.maxLength.message}</Alert>
	}
	return <></>
}

function InputGroup({
	label,
	type,
	id,
	placeholder,
	value,
	onChange,
	validation,
}: PropsWithChildren<InputProps>) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<FormColumn>
				<FormInput
					name={id}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					text={type === "text"}
					color={type === "color"}
				/>
				{(type === "color") && <h4>{value}</h4>}
			</FormColumn>
			<InputError validation={validation} value={value}/>
		</>
	)
}

function ControlGroup({
	label,
	id,
	options,
	value,
	onChange,
	validation,
}: PropsWithChildren<ControlProps>) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<select
				name={id}
				value={value}
			>
				<option>--Select a font--</option>
				{options.map((option: IOption) => (
					<option key={option.id}>{option.name}</option>
				))}
			</select>
			<InputError validation={validation} value={value}/>
		</>
	)
}

export { InputGroup, ControlGroup }
