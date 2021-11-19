import * as React from "react";

interface ReadMoreLinkProps extends React.HTMLProps<HTMLAnchorElement> {}

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({ className, ...props }) => {
	return <a className={`${className ?? ""} link`} {...props}></a>;
};

export { ReadMoreLink };
