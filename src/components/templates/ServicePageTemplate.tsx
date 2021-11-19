import * as React from "react";
import { Service as ServiceType } from "../../types/content_types/Services";
import { Service } from "../sections/services/Service";
import { PageTemplate } from "./PageTemplate";

interface ServicePageTemplateProps {
	pageContext: {
		service: ServiceType;
	};
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
	pageContext,
}) => {
	return (
		<PageTemplate isHomepage={false} activePage={"/services"}>
			<Service
				title={pageContext.service.title}
				summary={pageContext.service.summary}
				additionalText={pageContext.service.additionalText}
			/>
		</PageTemplate>
	);
};

export default ServicePageTemplate;
