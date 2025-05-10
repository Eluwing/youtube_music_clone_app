import { Playlist } from "@/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "../PlayListCard";

const PlayListCarousel = ({
  title,
  subTitle,
  thumbnail,
  playlistArray,
}: PlayListCarouselProps) => {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent>
          {playlistArray?.map((item, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PlayListCard playList={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;

type PlayListCarouselProps = {
  title: string;
  subTitle: string;
  thumbnail: React.ReactNode;
  playlistArray?: Playlist[];
};
