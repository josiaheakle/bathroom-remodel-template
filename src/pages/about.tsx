import * as React from "react";

import { About } from "../components/sections/about/About";
import { PageTemplate } from "../components/templates/PageTemplate";

import content from "../content/Content.json";
import { ContentData } from "../types/content_types/Content";

import { TextSection } from "../types/content_types/reusable/TextSection";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
	const { about } = content as unknown as ContentData;
	return (
		<PageTemplate isHomepage={false} activePage="/about">
			<About isOwnPage={true} {...about} />
		</PageTemplate>
	);
};

export default about;
