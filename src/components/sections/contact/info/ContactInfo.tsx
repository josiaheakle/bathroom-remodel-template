import * as React from "react";

import content from "../../../../content/Content.json";

import PhoneIcon from "../../../../assets/images/icons/phone-call.svg";
import HomeIcon from "../../../../assets/images/icons/homepage.svg";

import * as css from "./ContactInfo.module.css";
import { ContentData } from "../../../../types/content_types/Content";

interface ContactInfoProps {
	phoneNumber?: string;
	addressLn1?: string;
	addressLn2?: string;
	hidden?: boolean;
	className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
	phoneNumber,
	addressLn1,
	addressLn2,
	hidden,
	className,
}) => {
	const { contact } = content as unknown as ContentData;
	return (
		<address
			className={`${css.ContactInfo} ${hidden ? css.hidden : ""} ${className} `}
		>
			<a className={`${css.Phone} link`} href={`tel:${contact.phoneNumber}`}>
				<img
					className={`${css.ContactIcon}`}
					src={PhoneIcon}
					alt="Phone Icon"
				/>
				{contact.phoneNumber}
			</a>
			<span className={`${css.AddressContainer}`}>
				<img className={`${css.ContactIcon}`} src={HomeIcon} alt="House Icon" />
				<span>
					<span>{contact.address.street}</span> <br />
					<span>
						{contact.address.city}, {contact.address.state}{" "}
						{contact.address.zip}{" "}
					</span>
				</span>
			</span>
		</address>
	);
};

export { ContactInfo };
