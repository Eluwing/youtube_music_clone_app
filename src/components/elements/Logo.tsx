"use client";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { IoCloseOutline } from "react-icons/io5";

const Logo = ({
  isHamburgerOpen = false,
  onClickClose = () => {},
}: LogoTypes) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {
    push("/");
  };

  return (
    <section className="flex flex-row items-center gap-3">
      {isHamburgerOpen ? (
        <IconButton
          icon={<IoCloseOutline size={30} />}
          onClickIcon={onClickClose}
        />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickMenu}
        />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;

type LogoTypes = {
  isHamburgerOpen?: Boolean;
  onClickClose?: () => void | React.Dispatch<React.SetStateAction<boolean>>;
};
