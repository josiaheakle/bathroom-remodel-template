import * as React from "react";

import { Helmet } from "react-helmet";

import { SiteData } from "../../types/content_types/Content";

interface SEOTemplateProps {
	siteData: SiteData;
}

const SEOTemplate: React.FC<SEOTemplateProps> = ({ siteData }) => {
	return (
		<Helmet
			title={siteData.title}
			htmlAttributes={{
				lang: "en",
			}}
		>
			<meta name="description" content={siteData.description} />
			<meta name="image" content={siteData.image.src} />
			<meta property="og:url" content={siteData.url} />
			<meta property="og:description" content={siteData.description} />
			<meta
				property="og:image"
				content={`${siteData.url}${siteData.image.src}`}
			/>
			<meta
				name="google-site-verification"
				content="2wyxJDrtQ9WjQILVjTmbtno06i8F1pd0EVl0jWcIu_c"
			/>
		</Helmet>
	);
};

export { SEOTemplate };
