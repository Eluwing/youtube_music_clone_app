import React, { ReactNode } from "react";

const IconButton = ({ icon, onClickIcon = () => {} }: IconButtonType) => {
  return (
    <div
      className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.5)] rounded-full"
      onClick={onClickIcon}
    >
      {icon}
    </div>
  );
};

export default IconButton;

type IconButtonType = {
    icon: ReactNode;
    onClickIcon: () => void;
}