import * as React from "react";

import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";
import { Sitemap } from "./sitemap/Sitemap";

import { ContentData } from "../../../types/content_types/Content";

import FacebookIcon from "../../../assets/images/icons/facebook.svg";
import YoutubeIcon from "../../../assets/images/icons/youtube.svg";

import * as css from "./Footer.module.css";

interface FooterProps extends React.HTMLProps<HTMLDivElement> {
	contentData: ContentData;
}

const Footer: React.FC<FooterProps> = ({
	className,
	contentData,
	...props
}) => {
	const { siteData, contact } = contentData;
	return (
		<footer {...props} className={`${className || ""} ${css.Footer}`}>
			<Sitemap className={`${css.Sitemap}`} />
			<CallNowButton className={`${css.CallButton}`} />
			<span id="brand-copyright">
				<br />© 2021 {siteData.title}.
				<span className={`${css.PrivatePolicy}`}>
					<br />
					<a className={`link ${css.left}`} href="/terms-of-service">
						Terms of Services
					</a>
					/
					<a className={`link ${css.right}`} href="/private-policy">
						Private Policy
					</a>
					.
					<br />
					Website created by{" "}
					<a className={`link ${css.right}`} href="https://www.josiaheakle.com">
						Josiah Eakle
					</a>
					.
				</span>
			</span>
			<span id="social-links" className={css.SocialLinks}>
				{contact.facebook ? (
					<a href={contact.facebook} title={`${contentData.title} Facebook`}>
						<img src={FacebookIcon} alt={`${contentData.title} Facebook`} />
					</a>
				) : null}
				{contact.youtube ? (
					<a href={contact.youtube} title={`${contentData.title} YouTube`}>
						<img src={YoutubeIcon} alt={`${contentData.title} YouTube`} />
					</a>
				) : null}
			</span>
		</footer>
	);
};

export { Footer };
