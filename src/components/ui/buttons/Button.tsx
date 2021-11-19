import * as React from "react";

import * as css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
	return (
		<button
			className={`hover-enlarge ${className || ""} ${css.Button}`}
			{...props}
		></button>
	);
};

export { Button };
