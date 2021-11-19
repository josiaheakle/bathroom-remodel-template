import * as React from "react";
import { Button } from "../../../ui/buttons/Button";
import { CallNowButton } from "../../../ui/buttons/CallNowButton/CallNowButton";

// comps
import { TextAreaInput } from "../../../ui/input/TextAreaInput";
import { TextInput } from "../../../ui/input/TextInput";

// css
import * as css from "../Contact.module.css";

interface LeadBuyerFormProps extends React.HTMLProps<HTMLFormElement> {}

interface FormInputs {
	zip: string; // text
	full_name: string; // text
	phone: string; // tel
	email: string; // email
	message: string; // textarea
}

const LeadBuyerForm: React.FC<LeadBuyerFormProps> = ({
	className,
	...props
}) => {
	const apiUrl = `https://leads.leadbuyerclub.com/?api_key=${process.env.GATSBY_LEAD_BUYER_KEY}&affiliate_source=${process.env.GATSBY_LEAD_BUYER_AFFILIATE_SOURCE}&funnel=5&category=0&buttons=btn-success&step=1&save=1`;

	return (
		<form
			className={`${className || ""} ${css.Form}`}
			action={apiUrl}
			method="POST"
			{...props}
		>
			<CallNowButton />
			<span className={`${css.Seperator}`}>- or -</span>
			<TextInput name="zip" type="text" label="Zip" />
			<TextInput name="full_name" type="text" label="Full Name" />
			<TextInput name="phone" type="text" label="Phone" />
			<TextInput name="email" type="email" label="Email" />
			<TextAreaInput name="message" label="Brief Project Description" />
			<Button className={`${css.FormSubmit}`}>GET A FREE QUOTE</Button>
		</form>
	);
};

export { LeadBuyerForm };
