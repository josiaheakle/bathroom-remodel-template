import * as React from "react";

import content from "../../../../content/Content.json";
import { ContentData } from "../../../../types/content_types/Content";

import * as css from "./Sitemap.module.css";
import { SitemapLink } from "./SitemapLink";

interface SitemapProps extends React.HTMLProps<HTMLDivElement> {}

const Sitemap: React.FC<SitemapProps> = ({ className, ...props }) => {
	const { siteData } = content as unknown as ContentData;
	return (
		<nav {...props} className={`${className || ""} ${css.Sitemap}`}>
			<span className={`${css.Heading}`}>Page Links</span>
			<ul className={`${css.List}`}>
				{siteData.pages.map((page, i) => (
					<SitemapLink
						key={i}
						className={css.Link}
						title={page.title}
						href={page.page || ""}
					/>
				))}
			</ul>
		</nav>
	);
};

export { Sitemap };
