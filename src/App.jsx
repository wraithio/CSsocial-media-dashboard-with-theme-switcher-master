import { useState } from "react";
import "./App.css";
import {HeaderCard} from "./components/HeaderCard";
import OverviewLikesCard from "./components/OverviewLikesCard";
import OverviewViewsCard from "./components/OverviewViewsCard";

function App() {
let [darkMode,setDark] = useState("")

  const toggleDark = () =>{
    setDark(darkMode)
    webpage.classList.toggle('dark')
    body.classList.toggle('dark-bg')
  }

  return (
    <div className="relative">
    
      <span className=" h-60 block w-sc dark:bg-[#1f212e]"></span>
    <div className="absolute w-full top-16 min-h-screen xl:px-40 px-10 lg:pb-0 pb-12 transition-all duration-500 ease-in-out">
      <div className="flex mb-16">
        <div className="w-[50%]">
        <h1 className="2xl:text-5xl text-4xl dark:text-white text-start font-bold">Social Media Dashboard</h1>
        <h3 id="totalFollowers" className="text-2xl pt-2 text-start font-bold text-gray-600">Total Followers: 23,004</h3>
        </div>
        <div className="w-[50%] justify-end">
          <div className="flex justify-end place-items-center">
          <h3 className="me-3 text-xl dark:text-white text-gray-600">Dark Mode</h3>

            <input onClick={toggleDark} type="checkbox" id="check" className="hidden"/>
            <label htmlFor="check" className="button hover:bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]"></label>

          </div>
        </div>
      </div>
      
      <div className=" grid lg:grid-rows-1 lg:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2  gap-8">
        <HeaderCard socialMedia="facebook" leftGrad="hsl(208, 92%, 53%)" rightGrad="hsl(208, 92%, 53%)" />
        <HeaderCard socialMedia="twitter" leftGrad="hsl(203, 89%, 53%)" rightGrad="hsl(203, 89%, 53%)"/>
        <HeaderCard socialMedia="instagram" leftGrad="hsl(37, 97%, 70%)" rightGrad="hsl(329, 70%, 58%)"/>
        <HeaderCard socialMedia="youtube" leftGrad="hsl(348, 97%, 39%)" rightGrad="hsl(348, 97%, 39%)"/>
      </div>
      <h1 className="text-3xl text-gray-600 font-bold text-start lg:mt-14 lg:mb-8 my-8">Overview - Today</h1>
      <div className="grid lg:grid-rows-2 lg:grid-cols-4 sm:grid-rows-4 sm:grid-cols-2 grid-cols-1 grid-row-8 gap-8">
        <OverviewViewsCard socialMedia="facebook" category="Page Views"/>
        <OverviewLikesCard socialMedia="facebook" category="Likes"/>
        <OverviewLikesCard socialMedia="instagram" category="Likes"/>
        <OverviewViewsCard socialMedia="instagram" category="Profile Views"/>
        <OverviewViewsCard socialMedia="twitter" category="Retweets"/>
        <OverviewLikesCard socialMedia="twitter" category="Likes"/>
        <OverviewLikesCard socialMedia="youtube" category="Likes"/>
        <OverviewViewsCard socialMedia="youtube" category="Total Views"/>
      </div>
    </div>
    </div>
  );
}

export default App;
