import { React, useEffect, useState } from "react";
import { fetchData } from "../../services/dataservices";

const OverviewViewsCard = ({ socialMedia, category }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const asyncData = async () => {
      setData(await fetchData(socialMedia));
    };
    asyncData();
  }, []);

  let textColor = { color: data.viewschange < 0 ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)" };
  let upOrDown =
    data.viewschange < 0 ? "./images/icon-down.svg" : "./images/icon-up.svg";

  return (
    <div className="transition-all duration-500 ease-in-out bg-slate-100 hover:bg-slate-200 dark:bg-[#252a41] dark:hover:bg-[#3d476d]">
      <div className="flex justify-between p-8">
        <h2 className="text-xl text-gray-600 font-bold dark:text-[#8b97c6]">{category}</h2>
        <img src={data.icon} alt={data.name} className="w-7" />
      </div>
      <div className="flex justify-between px-8 pb-8">
        <h2 className="2xl:text-5xl lg:text-3xl text-5xl font-bold dark:text-white">{data.views}</h2>
        <div className="flex justify-center gap-2 place-items-center">
          <div className="flex place-items-center">
            <img src={upOrDown} alt="increment symbol" className="h-2" />
          </div>
          <h3 style={textColor}>{data.viewschange}%</h3>
        </div>
      </div>
    </div>
  );
};

export default OverviewViewsCard;
