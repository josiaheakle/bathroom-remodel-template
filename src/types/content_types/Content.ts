import { Image } from "./reusable/Image";
import { TextSection } from "./reusable/TextSection";

interface ContactData {
	phoneNumber: string;
	email: string;
	address: {
		street: string;
		city: string;
		state: string;
		zip: string;
	};
	facebook: string;
	youtube: string;
}

interface AttributionsData {
	link: string;
	title: string;
	authors: Array<{ link?: string; name: string }>;
}

interface HeroData {
	title: string;
	subtitle: string;
	image: Image;
}

interface LocationData extends TextSection {
	city: string;
	state: string;
}

interface Service {
	slugs: string[];
	title: string;
	summary: string[];
	additionalText: string[];
	altTitles?: string[];
	image?: Image;
}

interface ServicesData {
	title: string;
	subtitle: string;
	services: Service[];
}

interface SiteData {
	url: string;
	title: string;
	subtitle: string;
	description: string;
	image: Image;
	icon: Image;
	pages: Array<{
		title: string;
		page?: string;
		linkElemId?: string;
	}>;
}

interface ContentData {
	title: string;
	contact: ContactData;
	siteData: SiteData;
	hero: HeroData;
	about: TextSection;
	services: ServicesData;
	location: LocationData;
	attributions: Array<AttributionsData>;
}

export type { SiteData, ContentData, LocationData, ContactData, ServicesData };
