import * as React from "react";
import { Button } from "../Button";

import * as css from "./CallNowButton.module.css";

import content from "../../../../content/Content.json";
import { ContentData } from "../../../../types/content_types/Content";

interface CallNowButtonProps extends React.HTMLProps<HTMLAnchorElement> {}

const CallNowButton: React.FC<CallNowButtonProps> = ({
	className,
	...props
}) => {
	const { contact } = content as unknown as ContentData;
	return (
		<a
			{...props}
			className={`${css.Button} ${className || ""}`}
			href={`tel:${contact.phoneNumber}`}
		>
			<Button className={css.Button}>Call Now</Button>
		</a>
	);
};

export { CallNowButton };
