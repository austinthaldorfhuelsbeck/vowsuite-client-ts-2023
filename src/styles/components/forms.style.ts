import styled from "styled-components"
import { TransparentButton } from "./buttons.style"

export const Form = styled.form`
	position: relative;
	color: var(--aluminium);

	label {
		font-family: monospace;
		margin-top: 1rem;
		margin: 0 1rem;
	}

	input,
	select {
		padding: 1rem;
		font: inherit;
		background: transparent !important;
		border-top: none;
		border-left: none;
		border-right: none;
		outline: none;
		max-width: 100%;
		vertical-align: bottom;
		color: var(--aluminium);
	}

	p {
		font-size: 75%;
		margin-left: auto;
		margin-bottom: 0;
	}
`

interface FormInputProps {
	text?: boolean
	color?: boolean
}

export const FormInput = styled.input<FormInputProps>`
	min-width: ${(props) => (props.text ? "30rem" : "10rem")};
	min-height: ${(props) => (props.color ? "10rem" : "none")};
	border: ${(props) => (props.color ? "none" : "solid")};
`

export const FormRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 3rem 0rem 0rem 0rem;
`

export const FormColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`

interface AlertProps {
	error?: boolean
	success?: boolean
}

export const Alert = styled.div<AlertProps>`
	font-family: monospace;
	padding: 0.5rem;
	margin: 0 0.5rem;
	margin-top: 1rem;
	border-radius: 1rem;
	background-color: ${(AlertProps) => {
		if (AlertProps.error) return "var(--orange)"
		if (AlertProps.success) return "var(--emerald)"
		return "var(--aluminium)"
	}};
	color: ${(AlertProps) =>
		AlertProps.error ? "var(--white)" : "var(--dark-aluminium)"};
`

interface PreviewImgProps {
	circle?: boolean
}

export const PreviewImg = styled.img<PreviewImgProps>`
	border-radius: ${(props) => (props.circle ? "100%" : "0%")};
	object-fit: cover;
	width: ${(props) => (props.circle ? "10rem" : "25rem")};
	height: ${(props) => (props.circle ? "10rem" : "15rem")};
`

export const PreviewVideo = styled.video``

interface PreviewHeaderProps {
	font?: string
}

export const PreviewHeader = styled.h1<PreviewHeaderProps>`
	margin-left: auto;
	font-family: ${(props) => `"${props.font}"`};
`

export const DragUploadButton = styled(TransparentButton)`
    height: 100%;
    width: 30rem;
    font-size: 400%;
    background: none;
    color: var(--aluminium);
    padding: 3rem 0;
    margin: auto 3rem auto 0;

    &:hover {
        background-color: var(--dark-aluminium);
		color: var(--white);
	}
`