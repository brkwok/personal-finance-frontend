import { useState, useEffect, useCallback } from "react";

const useParentDimension = (ref) => {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	const getParentDim = useCallback(
		() => [ref.current.offsetHeight, ref.current.offsetWidth],
		[ref]
	);

	useEffect(() => {
		const updateDimensions = () => {
			const [parentHeight, parentWidth] = getParentDim();

			setHeight(~~parentHeight);
			setWidth(~~parentWidth);
		};

    window.addEventListener("resize", updateDimensions);

    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
	}, [setHeight, setWidth, getParentDim, ref]);

	return [height, width];
};

export default useParentDimension;
