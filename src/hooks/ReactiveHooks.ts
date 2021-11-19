import React, { useEffect, useLayoutEffect, useState } from "react";

const useWindowSize = () => {
	const [size, setSize] = useState({ x: 0, y: 0 });
	function updateSize() {
		setSize({ x: window.innerWidth, y: window.innerHeight });
	}
	useLayoutEffect(() => {
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
};

const useIsMobile = () => {
	const size = useWindowSize();
	const [isMobile, setIsMobile] = useState(size.x < 1024 ? true : false);
	useEffect(() => {
		if (size.x < 1024) setIsMobile(true);
		else setIsMobile(false);
	}, [size]);
	return isMobile;
};

const useScrollYPosition = () => {
	const [scrollY, setScrollY] = useState(0);
	const updateScroll = () => {
		setScrollY(window.scrollY);
	};
	useLayoutEffect(() => {
		window.addEventListener("scroll", updateScroll);
		updateScroll();
		return () => window.removeEventListener("scroll", updateScroll);
	}, []);
	return scrollY;
};

const useScrollDirection = () => {
	const scrollY = useScrollYPosition();
	const [lastScroll, setLastScroll] = useState(scrollY);
	const [scrollDirection, setScrollDirection] = useState<
		"up" | "down" | "center"
	>();
	useEffect(() => {
		if (scrollY > lastScroll) setScrollDirection("down");
		else if (scrollY < lastScroll) setScrollDirection("up");
		else setScrollDirection("center");
		setLastScroll(scrollY);
	}, [scrollY]);
	return scrollDirection;
};

export { useWindowSize, useIsMobile, useScrollYPosition, useScrollDirection };
