import { React, useEffect, useState } from "react";
import { fetchData } from "../../services/dataservices";

const OverviewCard = ({icon, count, countChange, socialMedia, category }) => {

  //changes follower count subtitle and follower change arrow and text color (red/green)
  let textColor = { color: countChange < 0 ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" };
  let upOrDown = countChange < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg";

  return (
    <div className="transition-all hover:cursor-pointer duration-500 ease-in-out bg-slate-100 hover:bg-slate-200 dark:bg-[#252a41] dark:hover:bg-[#3d476d]">
      <div className="flex justify-between sm:p-8 p-2">
        <h2 className="sm:text-xl text-gray-600 font-bold dark:text-[#8b97c6]">{category}</h2>
        <img src={icon} alt={socialMedia} className="w-7 h-7" />
      </div>
      <div className="flex sm:justify-between sm:flex-row flex-col sm:px-8 sm:pb-8">
        <h2 className="2xl:text-5xl lg:text-3xl sm:text-5xl text-xl font-bold dark:text-white">{count}</h2>
        <div className="flex justify-center gap-2 place-items-center">
          <div className="flex place-items-center">
            <img src={upOrDown} alt="increment symbol" className="h-2" />
          </div>
          <h3 style={textColor}>{countChange}%</h3>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
