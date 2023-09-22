import styled, { css } from "styled-components"

export const ModalDialog = styled.dialog`
	position: relative;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	background-color: rgba(58, 58, 58);
	border-width: 0;
	padding: 0;
	width: 50rem;
	border-radius: 0.5rem;

	&::backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(1px);
		animation: none;
	}
`

export const ModalDialogContainer = styled.div`
	box-sizing: border-box;
	min-height: 50px;
	min-width: 50px;
	padding: 2.5rem;
`

export const ModalFormContainer = styled.form`
	position: relative;
	color: var(--aluminium);
`

export const ModalFormCancel = styled.button`
	color: rgba(255, 255, 255, 0.5);
	font-size: 150%;
	text-align: right;
	background: none;
	border: none;
	cursor: pointer;
	position: absolute;
	left: 95%;
`

export const ModalFormInput = styled.input`
	padding: 0.5rem 0;
	font: inherit;
	background: transparent !important;
	color: var(--aluminium);
	border: none;
	outline: none;
	width: 100%;
	max-width: 100%;
	vertical-align: bottom;
`

export const ModalFormActionsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 3rem 0rem 0rem 0rem;
	margin-bottom: -1rem;
`
