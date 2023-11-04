import { ChangeEvent, PropsWithChildren } from "react"

import { ErrorProps } from "./inputValidation"
import {
	Alert,
	FormInput,
	FormRow,
} from "../../../styles/components/forms.style"
import { IFont } from "../../../interfaces/models"

// Data
interface BaseProps {
	label: string
	id: string
	onChange: (e: ChangeEvent<any>) => void
	validation: any
}
interface InputProps extends BaseProps {
	type: string
	placeholder?: string
	value: string
}
interface ControlProps extends BaseProps {
	options: IFont[]
	value: number
}

function InputError({ validation, value }: PropsWithChildren<ErrorProps>) {
	if (validation.required.value && value?.length === 0) {
		return <Alert error>{validation.required.message}</Alert>
	}
	if (
		value &&
		validation.maxLength &&
		value.length > validation.maxLength.value
	) {
		return <Alert error>{validation.maxLength?.message}</Alert>
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
		<FormRow>
			<label htmlFor={id}>{label}</label>
			<FormInput
				name={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				text={type === "text"}
				color={type === "color"}
			/>
			<InputError validation={validation} value={value} />
		</FormRow>
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
		<FormRow>
			<label htmlFor={id}>{label}</label>
			<select name={id} value={value} onChange={onChange}>
				{options.map((option: IFont) => (
					<option key={option.font_id} value={option.font_id}>
						{option.font_name}
					</option>
				))}
			</select>
			<InputError validation={validation} value={value.toString()} />
		</FormRow>
	)
}

export { InputError, InputGroup, ControlGroup }
