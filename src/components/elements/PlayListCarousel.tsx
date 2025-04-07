import { Playlist } from "@/types";
import React from "react";

const PlayListCarousel = ({
  title,
  subTitle,
  thumnail,
  playlistArray,
}: PlayListCarouselProps) => {
  return <div>PlayListCarousel
    {thumnail}
    {title} - {subTitle}
    {JSON.stringify(playlistArray)}

  </div>;
};

export default PlayListCarousel;

type PlayListCarouselProps = {
  title: string;
  subTitle: string;
  thumnail: React.ReactNode;
  playlistArray?: Playlist[];
};
