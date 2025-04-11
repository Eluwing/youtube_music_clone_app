"use client";
import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PlayListCard = ({playList}: PlayListCardProps) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playList;

  const songListLen = songList?.length;
  const imageSrc = getRandomElementFromArray(songList).imageSrc;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };

  return (
    <article className="h-[240px] cursor-pointer">
      <section className="relative h-[136px]">
        <Image
          src={imageSrc}
          fill={true}
          alt="thumbnail"
          className="object-cover"
        />
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;

export type PlayListCardProps = {
  playList: Playlist;
};
