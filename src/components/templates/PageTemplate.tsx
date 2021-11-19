import * as React from "react";

import { SEOTemplate } from "./SEOTemplate";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

import content from "../../content/Content.json";
import { ContentData } from "../../types/content_types/Content";

interface PageTemplateProps extends React.HTMLProps<HTMLDivElement> {
	isHomepage: boolean;
	activePage: string;
}

/**
 * Handles meta data, header and footer
 */

const PageTemplate: React.FC<PageTemplateProps> = ({
	children,
	isHomepage,
	className,
	activePage,
	...props
}) => {
	content as unknown as ContentData;
	const { siteData } = content;
	return (
		<div
			className={`${className ?? ""} ${!isHomepage ? "page" : ""}`}
			{...props}
		>
			<SEOTemplate siteData={siteData} />
			<Header
				headerTitle={siteData.title}
				headerSubtitle={siteData.subtitle}
				headerLinks={siteData.pages}
				headerIcon={siteData.icon}
				isHomepage={isHomepage}
				activePage={activePage}
			/>
			{children}
			<Footer contentData={content} />
		</div>
	);
};

export { PageTemplate };
