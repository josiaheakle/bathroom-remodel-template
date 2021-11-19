import * as React from "react";

import { ReadMoreLink } from "../../ui/links/ReadMoreLink";

import BathroomIcon from "../../../assets/images/icons/toilet.svg";
import KitchenIcon from "../../../assets/images/icons/food-restaurant.svg";
import HomeIcon from "../../../assets/images/icons/homepage.svg";

import * as css from "./About.module.css";

interface AboutProps {
	isOwnPage?: boolean;
	title: string;
	subtitle?: string;
	summary: string[];
	additionalText: string[];
}

const About: React.FC<AboutProps> = ({
	title,
	subtitle,
	summary,
	additionalText,
	isOwnPage,
}) => {
	const content = (
		<div className={`${css.AboutContent}`}>
			{subtitle ? <span className={`${css.Subtitle}`}>{subtitle}</span> : null}
			{isOwnPage ? (
				<h1 className={`${css.Title}`}>{title}</h1>
			) : (
				<h2 className={`${css.Title}`}>{title}</h2>
			)}
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
				<>
					<div className={`${css.IconContainer}`}>
						<a
							href="/services/bathroom-remodeling"
							title="Bathroom Remodel | Hendersonville Home Remodel"
						>
							<img
								src={BathroomIcon}
								alt="Bathroom Remodel | Call Now for a Free Estimate"
							/>
						</a>
						<a
							href="/services/kitchen-remodeling"
							title="Kitchen Remodel | Hendersonville Home Remodel"
						>
							<img
								src={KitchenIcon}
								alt="Kitchen Remodel | Call Now for a Free Estimate"
							/>
						</a>
						<a
							href="/services/new-home-construction"
							title="New Home Construction | Hendersonville Home Remodel"
						>
							<img
								src={HomeIcon}
								alt="Home Remodel | Call Now for a Free Estimate"
							/>
						</a>
					</div>
					<div className={`${css.ReadMoreContainer}`}>
						<ReadMoreLink title="About Page" href="/about">
							More About Us
						</ReadMoreLink>
					</div>
				</>
			)}
		</div>
	);

	return isOwnPage ? (
		<main id="About" className={`${css.About}`}>
			{content}
		</main>
	) : (
		<section id="About" className={`section ${css.About}`}>
			{content}
		</section>
	);
};

export { About };
