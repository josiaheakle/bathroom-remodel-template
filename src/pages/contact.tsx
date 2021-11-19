import * as React from "react";
import { Contact } from "../components/sections/contact/Contact";

import { PageTemplate } from "../components/templates/PageTemplate";

interface contactProps {}

const contact: React.FC<contactProps> = ({}) => {
	return (
		<PageTemplate isHomepage={false} activePage="/contact">
			<Contact />
		</PageTemplate>
	);
};

export default contact;
