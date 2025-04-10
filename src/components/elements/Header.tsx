"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import { FiSearch } from "react-icons/fi";
import { FaChromecast } from "react-icons/fa";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./Logo";
import Navigator from "./Navigator";
import { cn } from "@/lib/utils";
import useUiState from "@/hooks/useUiState";

const HeaderDrawer = ({children}: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isHamburgerOpen onClickClose={()=>setIsOpen(false)} />
          </div>
        </div>
        <Navigator />
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const {headerImageSrc} = useUiState();

  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(()=>{
    const handleScroll = () => {
      const scrollValue = headerRef?.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };

    headerRef?.current?.addEventListener("scroll", handleScroll);
    
    return () => {
      headerRef?.current?.addEventListener("scroll", handleScroll);
    }
  },[]);
  return (
    <header ref={headerRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src={headerImageSrc || "https://images.unsplash.com/photo-1707833558984-3293e794031c"}
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section>
      <section className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500"
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo isHamburgerOpen={false} onClickClose={()=>{}} />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
