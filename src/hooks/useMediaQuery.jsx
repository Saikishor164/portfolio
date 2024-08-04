import { useState, useEffect  } from "react" ;

const useMediaQuery = (query) => {
    const [matches, setmaches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setmaches(media.matches);
        }
            
        const listener = () => setmaches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
};

export default useMediaQuery
