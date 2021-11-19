import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { ReadMoreLink } from "../../ui/links/ReadMoreLink";

import { useIsMobile } from "../../../hooks/ReactiveHooks";

import { LocationData } from "../../../types/content_types/Content";

import * as css from "./Location.module.css";

interface LocationProps extends LocationData {
	isOwnPage?: boolean;
}

const Location: React.FC<LocationProps> = ({
	isOwnPage,
	title,
	subtitle,
	summary,
	city,
	state,
	additionalText,
}) => {
	const isMobile = useIsMobile();
	const content = (
		<div className={`${css.Content}`}>
			<div>
				{isMobile ? null : (
					<StaticImage
						layout="constrained"
						src="../../../assets/images/location.jpg"
						alt="Sunset in Hendersonville, TN"
						className={`${css.Image}`}
					/>
				)}
				{subtitle ? (
					<span className={`${css.Subtitle}`}>{subtitle}</span>
				) : null}
				{isOwnPage ? (
					<h1 className={`${css.Title}`}>{title}</h1>
				) : (
					<h2 className={`${css.Title}`}>{title}</h2>
				)}
			</div>
			{isMobile ? (
				<StaticImage
					layout="constrained"
					src="../../../assets/images/location.jpg"
					alt="Sunset in Hendersonville, TN"
					className={`${css.Image}`}
				/>
			) : null}
			{summary.map((para, i) => (
				<p className={`${css.Paragraph}`} key={i}>
					{para}
				</p>
			))}

			{isOwnPage ? (
				additionalText.map((para, i) => (
					<p className={`${css.Paragraph}`} key={i}>
						{para}
					</p>
				))
			) : (
				<div className={`${css.ReadMoreContainer}`}>
					<ReadMoreLink title="Location Page" href="/location">
						More of Us in {city}, {state}
					</ReadMoreLink>
				</div>
			)}
		</div>
	);
	return isOwnPage ? (
		<main id="Location" className={`${css.Location}`}>
			{content}
		</main>
	) : (
		<section id="Location" className={`section ${css.Location}`}>
			{content}
		</section>
	);
};

export { Location };
