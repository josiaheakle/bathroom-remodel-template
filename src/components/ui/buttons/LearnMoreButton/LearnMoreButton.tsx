import * as React from "react";

import { Link } from "react-scroll";
import { DownArrow } from "../../svg-icons/DownArrow";

import * as css from "./LearnMoreButton.module.css";

interface LearnMoreButtonProps extends React.HTMLProps<HTMLDivElement> {
	linkTo?: string;
	linkTitle?: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
	linkTo,
	linkTitle,
	className,
	...props
}) => {
	return (
		<div {...props} className={`${css.Button} ${className ?? ""}`}>
			{linkTo?.charAt(0) === "#" ? (
				<Link className={`${css.Link}`} to={linkTo.slice(1)} smooth={true}>
					<span className={`${css.Title}`}>Learn More</span>
					<DownArrow className={`${css.DownArrow}`} />
				</Link>
			) : (
				<a className={`${css.Link}`} href={linkTo}>
					<span className={`${css.Title}`}>Learn More</span>
					<DownArrow className={`${css.DownArrow}`} />
				</a>
			)}
		</div>
	);
};

export { LearnMoreButton };
