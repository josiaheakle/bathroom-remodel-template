import * as React from "react";

interface SitemapLinkProps {
	title: string;
	href: string;
	className?: string;
	children?: Array<SitemapLinkProps>;
}

const SitemapLink: React.FC<SitemapLinkProps> = ({
	title,
	href,
	className,
	children,
}) => {
	return (
		<li className={className}>
			<a className="link" href={href}>
				{title}
			</a>
		</li>
	);
};

export { SitemapLink };
