import React from "react";
import ThumbnailCarousel from "./ThumbnailCarousel";

export const ListCollections = () => {
    const data = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    return (
        <>
            <ThumbnailCarousel title="People" />
            <ThumbnailCarousel title="Technology" />
            <ThumbnailCarousel title="Travel" />
        </>
    );
};