import * as React from "react";

import * as css from "./TextInput.module.css";

interface TextAreaInputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	[index: string]: any;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
	label,
	className,
	...props
}) => {
	const [isFocued, setFocused] = React.useState<boolean>(false);
	const [input, setInput] = React.useState<string>();

	const inputRef: React.RefObject<HTMLTextAreaElement> = React.createRef();

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setInput(event.target.value);
		if (props.onChange) props.onChange(event);
	};

	const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
		setFocused(true);
	};

	const onBlur = (event: React.FocusEvent): void => {
		if (!input) {
			setFocused(false);
		}
	};

	React.useEffect(() => {
		if (props.reset) {
			if (inputRef.current) inputRef.current.innerHTML = "";
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
		<div className={`${css.Container}`}>
			<div className={`${css.InputContainer}`}>
				<label
					className={`${css.Label} ${isFocued ? css.focused : ""}`}
					htmlFor={props.id}
				>
					{label}
				</label>
				<textarea
					className={`${css.Input} ${className ?? ""}`}
					ref={inputRef}
					{...props}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
				></textarea>
			</div>
		</div>
	);
};
