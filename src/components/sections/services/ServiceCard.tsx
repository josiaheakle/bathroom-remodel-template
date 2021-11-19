import * as React from "react";

import * as css from "./Services.module.css";

// types
import { Image } from "../../../types/content_types/reusable/Image";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";

interface ServiceCardProps {
	title: string;
	summary: string[];
	slug: string;
	image?: GatsbyImageProps;
	isOwnPage?: boolean;
	className?: string;
	src: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	summary,
	slug,
	image,
	isOwnPage,
	className,
	...props
}) => {
	const imgData = useStaticQuery(graphql`
		query MyQuery {
			file(relativePath: { eq: "contact.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);
	return (
		<article className={`${css.Service} ${className}`}>
			{image ? <GatsbyImage alt="alt" image={image.image} /> : null}
			{isOwnPage ? (
				<h2 className={css.ServiceTitle}>{title}</h2>
			) : (
				<h3 className={css.ServiceTitle}>{title}</h3>
			)}
			{summary.map((para, i) => (
				<p key={i} className={css.ServiceDescription}>
					{para}
				</p>
			))}
			<a title={title} href={`/services/${slug}`} className="link">
				Read More
			</a>
		</article>
	);
};

export { ServiceCard };
