import React from "react";
import backButton from "../../assets/icons/ArrowLeft.svg";
import banner from "../../assets/images/banner.svg";

export default function Banner() {
  return (
    <div className="h-[200px] w-full relative rounded">
      <div className="absolute top-4 left-4 z-1 h-[48px] w-[48px] bg-[rgba(255,255,255,0.2)] flex justify-center items-center">
        <img src={backButton} alt="Arrow left" className="" />
      </div>
      <img
        src={banner}
        alt="banner image"
        className="h-full w-full object-cover rounded"
      />
    </div>
  );
}
