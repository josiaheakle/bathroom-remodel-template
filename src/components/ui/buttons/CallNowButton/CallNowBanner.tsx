import * as React from "react";
import { CallNowButton } from "./CallNowButton";

import * as css from "./CallNowButton.module.css";

interface CallNowBannerProps {}

const CallNowBanner: React.FC<CallNowBannerProps> = ({}) => {
	return (
		<div className={`${css.CallNowBanner}`}>
			<span>
				Looking for a free quote?
				<CallNowButton />
			</span>
		</div>
	);
};

export { CallNowBanner };
