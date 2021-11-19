import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import * as React from "react";
import { IGatsbyImageData } from "../../../types/prop_types/IGatsbyImageData";

import * as css from "./BackgroundImage.module.css";

interface BackgroundImageProps {
	alt: string;
	image: IGatsbyImageData;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ alt, image }) => {
	return (
		<div className={`${css.Container}`}>
			<GatsbyImage className={`${css.BgImage}`} image={image} alt={alt} />
		</div>
	);
};

export { BackgroundImage };
