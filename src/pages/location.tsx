import * as React from "react";

// comps
import { Location } from "../components/sections/location/Location";
import { PageTemplate } from "../components/templates/PageTemplate";

// data
import content from "../content/Content.json";
import { ContentData } from "../types/content_types/Content";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
	const { location } = content as unknown as ContentData;
	return (
		<PageTemplate isHomepage={false} activePage="/location">
			<Location isOwnPage={true} {...location} />
		</PageTemplate>
	);
};

export default about;
