import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../../services/dataservices";

const HeaderCard = ({ leftGrad, rightGrad, socialMedia, name,icon,followers,followerChange }) => {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   const asyncData = async () => {
  //     setData(await fetchData(socialMedia));
  //   };
  //   asyncData();
  // }, []);

  let audience = socialMedia === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS";
  const barColor = {
    background: `linear-gradient(to right,${leftGrad},${rightGrad}`,
  };
  let textColor = { color: followerChange < 0 ? "red" : "green" };
  let upOrDown = followerChange < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg";
  // console.log(name);
  return (
    <div>
      <span className="block h-2 border-none" style={barColor}></span>
      <div className="bg-slate-100 hover:bg-slate-200 dark:bg-[#252a41] dark:hover:bg-[#3d476d] transition-all duration-500 ease-in-out">
        <div className="flex justify-center gap-3 py-7">
          <img src={icon} alt={socialMedia} />
          <h3 className="lg:text-sm text-2xl text-gray-600 dark:text-[#8b97c6]">
            {name}
          </h3>
        </div>
        <h1 className="2xl:text-7xl lg:text-5xl text-7xl font-bold dark:text-white">{followers}</h1>
        <h3 className="tracking-[.5em] text-gray-600 pt-3 dark:text-[#8b97c6]">{audience}</h3>
        <div className="flex justify-center gap-2 py-6">
          <div className="flex place-items-center">
            <img src={upOrDown} alt="increment symbol" className="h-2" />
          </div>
          <h3 style={textColor}>{followerChange} Today</h3>
        </div>
      </div>
    </div>
  );
};

export { HeaderCard };
