import * as React from "react";

import * as css from "./TextInput.module.css";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
	label?: string;
	reset?: boolean;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
	const [isFocued, setFocused] = React.useState<boolean>(false);
	const [input, setInput] = React.useState<string>();

	const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(event.target.value);
		if (props.onChange) props.onChange(event);
	};

	const onFocus = (): void => {
		setFocused(true);
	};

	const onBlur = (): void => {
		if (!input) {
			setFocused(false);
		}
	};

	React.useEffect(() => {
		if (props.reset) {
			if (inputRef.current) inputRef.current.value = "";
			setInput(undefined);
			setFocused(false);
		}
		if (props.defaultValue) {
			setFocused(true);
		}
	}, [props]);

	React.useEffect(() => {
		if (input && input.length > 0) setFocused(true);
		else setFocused(false);
	}, [input]);

	return (
		<div
			className={`${css.Container} ${props.className ? props.className : ""}`}
		>
			<span className={`${css.InputContainer}`}>
				<label
					className={`${css.Label} ${isFocued ? css.focused : ""}`}
					htmlFor={props.id}
				>
					{props.label}
				</label>
				<input
					className={css.Input}
					ref={inputRef}
					{...props}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
				></input>
			</span>
		</div>
	);
};
