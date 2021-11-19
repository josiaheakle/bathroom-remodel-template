// deps
import * as React from "react";

// types
import HeaderLinkType from "../../../../types/prop_types/HeaderLinkType";
import { ContactInfo } from "../../../sections/contact/info/ContactInfo";
import { Button } from "../../../ui/buttons/Button";
import { CallNowButton } from "../../../ui/buttons/CallNowButton/CallNowButton";

// css
import * as css from "./Navbar.module.css";

interface MobileNavbarProps {
	isHomepage?: boolean;
	links: Array<HeaderLinkType>;
	activePage: string;
	setMobileOpen: (b: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
	links,
	isHomepage,
	activePage,
	setMobileOpen,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleLinkClick = (index: number) => {
		setIsOpen(false);
		document
			.getElementById(links[index].linkElemId || "")
			?.scrollIntoView({ behavior: "smooth" });
	};

	React.useEffect(() => {
		setMobileOpen(isOpen);
	}, [isOpen]);

	return (
		<nav className={css.MobileNav}>
			<ul className={`${css.MobileNavList} ${isOpen ? css.NavOpen : ""}`}>
				{links.map((link, index) => (
					<li className={css.MobileNavListItem} key={index}>
						<a
							className={`${css.MobileNavLink} ${
								activePage === link.page ? css.ActiveLink : ""
							}`}
							onClick={(e) => {
								if (isHomepage) {
									e.preventDefault();
									handleLinkClick(index);
								}
							}}
							key={index}
							href={isHomepage ? `#${link.linkElemId}` : link.page}
						>
							{link.title}
						</a>
					</li>
				))}
				<CallNowButton />
			</ul>
			<div
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className={`${css.MobileNavButton} ${isOpen ? css.NavOpen : ""}`}
			>
				<div className={css.MobileNavButtonTop}></div>
				<div className={css.MobileNavButtonMiddle}></div>
				<div className={css.MobileNavButtonBottom}></div>
			</div>
		</nav>
	);
};

export { MobileNavbar };
