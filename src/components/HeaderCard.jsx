import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../../services/dataservices";

const HeaderCard = ({leftGrad, rightGrad, socialMedia }) => {
  const [data, setData] = useState("");

  // useEffect(() => {
  //   const asyncData = async () => {
  //     setData(await fetchData(socialMedia));
  //   };
  //   asyncData();
  // }, []);

  let audience = socialMedia === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS";
  const barColor = {background: `linear-gradient(to right,${leftGrad},${rightGrad}`,};
  let textColor = { color: data.followerchange < 0 ? "red" : "green" };
  let upOrDown = data.followerchange < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg";

  return (
    <div>
      <span className="block h-2 border-none" style={barColor}></span>
      <div className="bg-slate-100 hover:bg-slate-200">
        <div className="flex justify-center gap-3 py-7">
          <img src={data.icon} alt={data.name} />
          <h3 className="text-sm">{data.name}</h3>
        </div>
        <h1 className="text-7xl font-bold">{data.followers}</h1>
        <h3 className="tracking-[.5em] text-gray-600 pt-3">{audience}</h3>
        <div className="flex justify-center gap-2 py-6">
          <div className="flex place-items-center">
            <img src={upOrDown} alt="increment symbol" className="h-2" />
          </div>
          <h3 style={textColor}>{data.followerchange} Today</h3>
        </div>
      </div>
    </div>
  );
};

export { HeaderCard };
