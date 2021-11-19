const splitAtSpace = (str: string, index: number): string => {
	return str.substring(0, str.indexOf(" ", index)) || str;
};

export { splitAtSpace };
