import * as React from "react";

import { PageTemplate } from "../components/templates/PageTemplate";

import * as css from "../assets/Page.module.css";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = ({}) => {
	return (
		<PageTemplate activePage="404" isHomepage={false}>
			<main className={`${css.NotFound}`}>
				Page not found
				<br />
				<a className="link" href="/">
					Back to Home
				</a>
			</main>
		</PageTemplate>
	);
};

export default NotFoundPage;
