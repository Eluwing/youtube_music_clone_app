import React from "react";
import Category from "./components/Category";
import PlayListCarousel from "@/components/elements/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import { UserIcon } from "lucide-react";

const page = async () => {
  const dummyPlaylist = [...dummyPlaylistArray];
  return (
    <div className="min-h-[600px]">
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <PlayListCarousel
        title="다시 듣기"
        subTitle="도도"
        thumnail={
          <div className="w-[56px] h-[56px]">
            <UserIcon />
          </div>
        }
        playlistArray={dummyPlaylist}
      />
      <div className="h-[500px] bg-netral-700">HomePage</div>
      <div className="h-[500px] bg-netral-700">HomePage</div>
      <div className="h-[500px] bg-netral-700">HomePage</div>
    </div>
  );
};

export default page;
