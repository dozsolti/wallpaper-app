import { useState, useRef } from "react";
import { ViewToken } from "react-native";

export const useScrollSpy = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewRef = useRef(({ changed }: { changed: ViewToken[] }) => {
        const index = changed[0]?.index;
        if (index != null) setCurrentIndex(index);
    });
    const viewConfigRef = useRef({
        viewAreaCoveragePercentThreshold: 50,
    });

    return {
        currentIndex,
        listProps: {
            onViewableItemsChanged: onViewRef.current,
            viewabilityConfig: viewConfigRef.current,
        },
    };
};
