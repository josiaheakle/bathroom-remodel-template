// deps
import * as React from "react";

// hooks
import {
	useIsMobile,
	useScrollYPosition,
	useScrollDirection,
} from "../../../hooks/ReactiveHooks";

// types
import HeaderLinkType from "../../../types/prop_types/HeaderLinkType";

// img
import BrandIcon from "../../../assets/images/icon.png";

// css
import * as css from "./Header.module.css";
import { MobileNavbar } from "./navbar/MobileNavbar";
import { Navbar } from "./navbar/Navbar";
import { ContactInfo } from "../../sections/contact/info/ContactInfo";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";

// props

interface HeaderProps extends React.HTMLProps<HTMLElement> {
	hidden?: boolean;
	headerTitle: string;
	headerSubtitle: string;
	headerIcon: {
		src: string;
		alt: string;
	};
	headerLinks: Array<HeaderLinkType>;
	isHomepage: boolean;
	activePage: string;
}

const Header: React.FC<HeaderProps> = ({
	headerTitle,
	headerSubtitle,
	headerLinks,
	headerIcon,
	className,
	isHomepage,
	activePage,
	...props
}) => {
	const [isShrunk, setIsShrunk] = React.useState(false);

	const [isMobileOpen, setIsMobileOpen] = React.useState(false);
	const [isMobileHidden, setIsMobileHidden] = React.useState(true);

	const isMobile = useIsMobile();
	const scrollY = useScrollYPosition();
	const scrollDirection = useScrollDirection();

	const checkScroll = () => {
		if (scrollY > 80) setIsShrunk(true);
		else setIsShrunk(false);
	};

	const checkScrollDirection = () => {
		if (scrollDirection === "down" && !isMobileOpen) {
			setIsMobileHidden(true);
		} else setIsMobileHidden(false);
	};

	React.useEffect(() => {
		checkScroll();
	}, [scrollY]);
	React.useEffect(() => {
		checkScrollDirection();
	}, [scrollDirection]);

	return (
		<header
			className={`${css.Header} ${className || ""} ${
				!isShrunk && !isMobile ? css.large : css.small
			} ${isMobileHidden && isMobile && !isMobileOpen ? css.MobileHidden : ""}`}
			{...props}
		>
			<a href="/" className={`${css.HeadingContainer}`}>
				<img
					className={`${css.HeadingIcon}`}
					src={BrandIcon}
					alt={headerIcon.alt}
				></img>
				<span className={`${css.TitleContainer}`}>
					<span className={`${css.Title}`}>{headerTitle}</span>
					<span className={`${css.Subtitle}`}>{headerSubtitle}</span>
				</span>
			</a>
			{/* {isShrunk && !isMobile ? <CallNowButton /> : null} */}
			{isMobile ? (
				<MobileNavbar
					setMobileOpen={(bool) => setIsMobileOpen(bool)}
					activePage={activePage}
					isHomepage={isHomepage}
					links={headerLinks}
				/>
			) : (
				<div className={`${css.NavContainer} ${isShrunk ? css.hidden : ""}`}>
					<ContactInfo className="small-text" hidden={isShrunk} />
					<Navbar
						activePage={activePage}
						isHomepage={isHomepage}
						links={headerLinks}
					/>
				</div>
			)}
		</header>
	);
};

export { Header };
