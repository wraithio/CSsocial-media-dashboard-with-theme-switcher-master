import { useState, useEffect } from "react";
import "./App.css";
import { HeaderCard } from "./components/HeaderCard";
import OverviewCard from "./components/OverviewCard";
import { fetchData } from "../services/dataservices";

function App() {
  const [t, setT] = useState(null);
  const [checkBox, setChecked] = useState();
  webpage.classList.add(localStorage.getItem("DashTheme", 0));
  body.className = localStorage.getItem("DashTheme") == "dark" ? "dark-bg" : "";
  
  const toggleDark = () => {
    // if (check != undefined) {
    //   check.checked =
    //     localStorage.getItem("DashTheme", 0) == "dark" ? true : false;
    // }
    if (webpage.className == "dark") {

      webpage.className = "light";
      body.classList.remove("dark-bg");
      localStorage.setItem("DashTheme", "light");
    } else {
      webpage.className = "dark";
      body.classList.add("dark-bg");
      localStorage.setItem("DashTheme", "dark");
    }
    console.log(localStorage.getItem("DashTheme", 0));
  };

  useEffect(() => {
    const asyncData = async () => {
      setT(await fetchData());
    };
    asyncData();
  }, []);

  return (
    <div>
      {t == null ? (
        <div className="text-2xl mt-12">fetch loading, please wait...</div>
      ) : (
        <div className="relative">
          <span className=" h-60 block w-sc dark:bg-[#1f212e]"></span>
          <div className="absolute w-full top-16 min-h-screen xl:px-40 sm:px-10 px-2 lg:pb-0 pb-12 transition-all duration-500 ease-in-out">
            <div className="flex sm:mb-16 mb-4">
              <div className="w-[50%]">
                <h1 className="2xl:text-5xl text-4xl dark:text-white text-start font-bold">
                  Social Media Dashboard
                </h1>
                <h3
                  id="totalFollowers"
                  className="text-2xl pt-2 text-start font-bold text-gray-600"
                >
                  Total Followers: {t.totalFollowers}
                </h3>
              </div>
              <div className="w-[50%] justify-end">
                <div className="flex justify-end place-items-center">
                  <h3 className="me-3 text-xl dark:text-white text-gray-600">
                    Dark Mode
                  </h3>
                  <input
                    onClick={toggleDark}
                    type="checkbox"
                    id="check"
                    className="hidden"
                  />
                  <label
                    htmlFor="check"
                    className="button hover:bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]"
                  ></label>
                </div>
              </div>
            </div>

            <div className=" grid lg:grid-rows-1 lg:grid-cols-4 grid-rows-2 grid-cols-2  sm:gap-8 gap-2">
              <HeaderCard
                socialMedia="facebook"
                name={t.facebook.name}
                followers={t.facebook.followers}
                followerChange={t.facebook.followerchange}
                icon={t.facebook.icon}
                leftGrad="hsl(208, 92%, 53%)"
                rightGrad="hsl(208, 92%, 53%)"
              />
              <HeaderCard
                socialMedia="twitter"
                name={t.twitter.name}
                followers={t.twitter.followers}
                followerChange={t.twitter.followerchange}
                icon={t.twitter.icon}
                leftGrad="hsl(203, 89%, 53%)"
                rightGrad="hsl(203, 89%, 53%)"
              />
              <HeaderCard
                socialMedia="instagram"
                name={t.instagram.name}
                followers={t.instagram.followers}
                followerChange={t.instagram.followerchange}
                icon={t.instagram.icon}
                leftGrad="hsl(37, 97%, 70%)"
                rightGrad="hsl(329, 70%, 58%)"
              />
              <HeaderCard
                socialMedia="youtube"
                name={t.youtube.name}
                followers={t.youtube.followers}
                followerChange={t.youtube.followerchange}
                icon={t.youtube.icon}
                leftGrad="hsl(348, 97%, 39%)"
                rightGrad="hsl(348, 97%, 39%)"
              />
            </div>
            <h1 className="text-3xl text-gray-600 font-bold text-start lg:mt-14 lg:mb-8 sm:my-8 my-4">
              Overview - Today
            </h1>
            <div className="grid lg:grid-rows-2 lg:grid-cols-4 sm:grid-rows-4 sm:grid-cols-2 grid-rows-2 grid-cols-4 sm:gap-8 gap-2">
              <OverviewCard
                socialMedia="facebook"
                icon={t.facebook.icon}
                count={t.facebook.views}
                countChange={t.facebook.viewschange}
                category="Page Views"
              />
              <OverviewCard
                socialMedia="facebook"
                icon={t.facebook.icon}
                count={t.facebook.likes}
                countChange={t.facebook.likeschange}
                category="Likes"
              />
              <OverviewCard
                socialMedia="instagram"
                icon={t.instagram.icon}
                count={t.instagram.likes}
                countChange={t.instagram.likeschange}
                category="Likes"
              />
              <OverviewCard
                socialMedia="instagram"
                icon={t.instagram.icon}
                count={t.instagram.views}
                countChange={t.instagram.viewschange}
                category="Profile Views"
              />
              <OverviewCard
                socialMedia="twitter"
                icon={t.twitter.icon}
                count={t.twitter.views}
                countChange={t.twitter.viewschange}
                category="Retweets"
              />
              <OverviewCard
                socialMedia="twitter"
                icon={t.twitter.icon}
                count={t.twitter.likes}
                countChange={t.twitter.likeschange}
                category="Likes"
              />
              <OverviewCard
                socialMedia="youtube"
                icon={t.youtube.icon}
                count={t.youtube.likes}
                countChange={t.youtube.likeschange}
                category="Likes"
              />
              <OverviewCard
                socialMedia="youtube"
                icon={t.youtube.icon}
                count={t.youtube.views}
                countChange={t.youtube.viewschange}
                category="Total Views"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
