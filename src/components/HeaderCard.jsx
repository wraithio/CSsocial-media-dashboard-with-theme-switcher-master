import React from "react";

const HeaderCard = ({ leftGrad, rightGrad, socialMedia, name,icon,followers,followerChange }) => {

  //sets color bar gradient
  const barColor = {
    background: `linear-gradient(to right,${leftGrad},${rightGrad}`,
  };
  
  //changes follower subtititle and follower change arrow and text color (red/green)
  let audience = socialMedia === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS";
  let textColor = { color: followerChange < 0 ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" };
  let upOrDown = followerChange < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg";

  return (
    <div>
      <span className="block h-2 border-none" style={barColor}></span>
      <div className="bg-slate-100 hover:cursor-pointer hover:bg-slate-200 dark:bg-[#252a41] dark:hover:bg-[#3d476d] transition-all duration-500 ease-in-out">
        <div className="flex justify-center gap-3 sm:py-7 py-4">
          <img src={icon} alt={socialMedia} className="lg:w-fit w-8" />
          <h3 className="lg:text-sm sm:text-2xl text-xl text-gray-600 dark:text-[#8b97c6]">
            {name}
          </h3>
        </div>
        <h1 className="2xl:text-7xl lg:text-5xl sm:text-7xl text-4xl font-bold dark:text-white">{followers}</h1>
        <h3 className="tracking-[.5em] text-gray-600 pt-3 dark:text-[#8b97c6]">{audience}</h3>
        <div className="flex justify-center gap-2 sm:py-6 py-2">
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
