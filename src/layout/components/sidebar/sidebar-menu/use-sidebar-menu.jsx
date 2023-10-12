import { useEffect, useState } from "react";

// windows's size function
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
export const useSidebarMenu = ({ item }) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [smallScreenWidth, setSmallScreenWidth] = useState();

    // UseEffect to get the width of window when load
    useEffect(() => {
        const handleWindowResize = () => setWindowSize(getWindowSize());
        window.addEventListener("resize", handleWindowResize);

        if (windowSize.innerWidth <= 600) setSmallScreenWidth(true);
        else setSmallScreenWidth(false);
    }, [windowSize.innerWidth]);

    
    return {
        smallScreenWidth
    }
}