import { Layout } from "gatsby-plugin-image";
import { MainImageProps } from "gatsby-plugin-image/dist/src/components/main-image";
import { PlaceholderProps } from "gatsby-plugin-image/dist/src/components/placeholder";

export interface IGatsbyImageData {
	layout: Layout;
	width: number;
	height: number;
	backgroundColor?: string;
	images: Pick<MainImageProps, "sources" | "fallback">;
	placeholder?: Pick<PlaceholderProps, "sources" | "fallback">;
}
