import * as React from "react";
import { Button } from "../Button";

import * as css from "./CallNowButton.module.css";

import contactData from "../../../../content/Contact.json";
import { ContactData } from "../../../../types/content_types/Contact";

interface FreeEstimateButtonProps extends React.HTMLProps<HTMLAnchorElement> {}

const FreeEstimateButton: React.FC<FreeEstimateButtonProps> = ({
	className,
	...props
}) => {
	contactData as ContactData;
	return (
		<a
			{...props}
			className={`${className || ""}`}
			href={`//leads.leadbuyerclub.com/?api_key=${process.env.GATSBY_LEAD_BUYER_KEY}&affiliate_source=${process.env.GATSBY_LEAD_BUYER_AFFILIATE_SOURCE}&category=0&funnel=3&buttons=btn-success&step=1`}
		>
			<Button className={css.Button}>Get your Free Estimate</Button>
		</a>
	);
};

export { FreeEstimateButton };
