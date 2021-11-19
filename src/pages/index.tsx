// deps
import * as React from "react";

// comps
import { PageTemplate } from "../components/templates/PageTemplate";
import { Hero } from "../components/sections/hero/Hero";
import { Services } from "../components/sections/services/Services";
import { About } from "../components/sections/about/About";
import { Contact } from "../components/sections/contact/Contact";
import { Location } from "../components/sections/location/Location";
import { CallNowButton } from "../components/ui/buttons/CallNowButton/CallNowButton";
import { CallNowBanner } from "../components/ui/buttons/CallNowButton/CallNowBanner";

// content
import content from "../content/Content.json";

import { ContentData } from "../types/content_types/Content";

// css
import "../assets/index.css";

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = ({}) => {
	const { hero, about, services, location } = content as unknown as ContentData;

	return (
		<PageTemplate isHomepage={true} activePage="/">
			<main>
				<Hero {...hero} linkTo="#services" />
				<About {...about} />
				<CallNowBanner />
				<Services {...services} />
				<Location {...location} />
				<Contact />
			</main>
		</PageTemplate>
	);
};

export default IndexPage;
