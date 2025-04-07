import React from "react";
import Category from "./components/Category";

const page = async () => {
  return (
    <div className="min-h-[600px]">
      <div className="mt-9"></div>
      <Category />
      <div className="h-[500px] bg-netral-700">HomePage</div>
      <div className="h-[500px] bg-netral-700">HomePage</div>
      <div className="h-[500px] bg-netral-700">HomePage</div>
    </div>
  );
};

export default page;
