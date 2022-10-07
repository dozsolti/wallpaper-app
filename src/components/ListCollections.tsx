/*
    Unfortunately, loremflickr.com doesn't offer data about users.
*/
import React from "react";
import ThumbnailCarousel from "./ThumbnailCarousel";

export const ListCollections = () => {
  return (
    <>
      <ThumbnailCarousel title="People" />
      <ThumbnailCarousel title="Technology" />
      <ThumbnailCarousel title="Travel" />
    </>
  );
};
