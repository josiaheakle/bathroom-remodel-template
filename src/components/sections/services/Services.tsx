import * as React from "react";
import { ServicesData } from "../../../types/content_types/Content";

import { Button } from "../../ui/buttons/Button";
import { ServiceCard } from "./ServiceCard";

import * as css from "./Services.module.css";

interface ServicesProps extends ServicesData {
	isOwnPage?: boolean;
}

const Services: React.FC<ServicesProps> = ({
	isOwnPage,
	title,
	subtitle,
	services,
}) => {
	const content = (
		<>
			<span className={`${css.Subtitle}`}>{subtitle}</span>
			{isOwnPage ? (
				<h1 className={`${css.Title}`}>{title}</h1>
			) : (
				<h2 className={`${css.Title}`}>{title}</h2>
			)}
			<div className={` ${css.ServicesContainer}`}>
				{services.map((service, index) => {
					if (!isOwnPage && index > 2) return null;
					return (
						<ServiceCard
							className={`${index % 2 === 0 ? "" : css.rightAlign}`}
							key={index}
							isOwnPage={isOwnPage}
							slug={service.slugs ? service.slugs[0] : ""}
							title={service.title}
							summary={service.summary}
							// image={service.image}
							src={service.image?.src || ""}
						/>
					);
				})}
			</div>
			{isOwnPage ? null : (
				<a href="/services">
					<Button className={css.ReadMore}>See All</Button>
				</a>
			)}
		</>
	);

	return isOwnPage ? (
		<main id="Services" className={`${css.Services}`}>
			{content}
		</main>
	) : (
		<section id="Services" className={`section ${css.Services}`}>
			{content}
		</section>
	);
};

export { Services };
