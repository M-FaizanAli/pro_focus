// Desc: Home page of the website
import React, { useState, useEffect } from "react";
import { Tooltip, initTWE } from "tw-elements";
import ReactCompareImage from "react-compare-image";
// Styles
import "../css/home.css";
// Assets
import decor from "../src/assets/Group 5.png";
import thinking from "../src/assets/Thinking 3D Model 1 (2).png";
import icon1 from "/icons/Layer_1.png";
import icon2 from "/icons/Vector.png";
import icon3 from "/icons/Layer_1 (1).png";
import icon4 from "/icons/Layer_1 (2).png";
import before from "/bef-aft-imgs/DSC09896 1.png";
import after from "/bef-aft-imgs/IMG_1716 1.png";
// Components
import TrueFocus from "../components/TrueFocus";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

// Slider Images
const slides = [
  {
    url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const Home = () => {
  useEffect(() => {
    initTWE({ Tooltip });
  }, []);

  const [MemCount, setMemCount] = useState(0);
  const [PhotosCount, setPhotosCount] = useState(0);
  const [VideosCount, setVideosCount] = useState(0);
  const [HoursCount, setHoursCount] = useState(0);
  const [sno, setSno] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSno((prevSno) => (prevSno + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const countUp = (setter, maxCount, increment, intervalTime) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count <= maxCount) {
        setter(count);
        count += increment;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
    return () => clearInterval(interval);
  };

  useEffect(() => countUp(setMemCount, 10, 2, 100), []);
  useEffect(() => countUp(setPhotosCount, 5000, 50, 10), []);
  useEffect(() => countUp(setVideosCount, 100, 10, 100), []);
  useEffect(() => countUp(setHoursCount, 10000, 100, 10), []);

  return (
    <div>
      <MainHeader />
      <div className="w-full md:px-[80px] md:w-full px-4 my-12 md:my-20 h-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col w-full  md:w-[50%]  gap-4 text-start items-start justify-center md:px-0">
          <TrueFocus
            sentence="Pro Focus"
            manualMode={false}
            blurAmount={1}
            borderColor="#3652AD"
            animationDuration={1.5}
            pauseBetweenAnimations={1}
          />
          <h1 className=" md:leading-13 leading-10 w-full font-bold text-3xl md:text-4xl text-pretty">
            Elevate Your Visual Experience with Stunning{" "}
            <span className="rounded-md px-[5px] bg-[#3652AD] text-[#FFD445]">
              HDR Editing
            </span>{" "}
            &{" "}
            <span className="rounded-md px-[5px] bg-[#3652AD] text-[#FFD445]">
              Video Services
            </span>
          </h1>
          <p className="text-lg md:text-lg">
            Unlock the full potential of your visuals with our expert HDR
            editing and professional video services. Whether you're a
            photographer looking to enhance your stunning landscapes or a
            content creator aiming to <b>captivate your audience,</b> we bring
            your vision to life with <b>precision and artistry</b>.
          </p>
          <button className="button-custom font-sans text-lg px-8">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-[50%]">
          <img className="w-full" src={after} alt="" />
        </div>
      </div>
      <div className="gap-8 px-4 my-8 md:px-[80px] md:py-[80px] h-auto  w-full flex flex-col md:flex-row items-center justify-center">
        <div className="relative gradient-border rounded w-full md:w-[50%] md:mb-0">
          <video className="w-full shadow-lg" autoPlay loop muted>
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1385256404173613218/TEAM/b16b/c881/-e574-486c-a184-bd5af6d4913c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jXCuUOA-KxAGbfSRWG3sU2onJlo~-HWKCjXPaCGiNy6Wm7RUVLpuPgK-GyCf~XZyZlbPgmnGNOebyhsQdDzKGyOYZhKx0nVjpE~S-hGK-RYsCig7QG1J-34bNyfpRSI0lld8UtSrP6gZ0EH3r8UjSScsoy1JmWOKiCwlnYd3O5qPkGcHoYO2SPNuLEtPRmOA2RyQHBdsAAxWxKgyEl0oanNmqfGpScAZoQOfJQ1utFk1ebVUJ0~1wIaMOzPp47HnO0cYJjK3bYZQjnbWU1v0v-3nLJA28XmKzpzCMq~ZY9QfEMQm75dJ~M5VOEVqql11-oZPeE8CvZsFRycZcY857Q__"
              type="video/mp4"
            />
          </video>
          <img
            className="absolute hidden md:block top-[-120px] right-[-90px] w-[180px] up-and-down"
            src={thinking}
            alt=""
          />
        </div>
        <div className="w-full md:w-[50%]">
          <div className=" text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <img src={decor} className="w-[38px]" alt="" />
            <h5 className="mb-2 text-[#3652AD] text-4xl font-medium leading-tight">
              What We Do
            </h5>
            <p className="mb-4 text-lg text-black">
              Welcome to Pro Focus Editing, where passion meets expertise in HDR
              editing and video services! Founded in July 2024, our dynamic team
              of 10 dedicated professionals in Pakistan has quickly become a
              trusted name in the industry.
            </p>
            <button className="button-custom font-sans text-lg px-8">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="gap-8 py-8 px-4 md:px-[40px] my-8 flex flex-col md:flex-row bg-[#3652AD] h-auto md:h-[324px] w-full">
        <div className="w-full md:w-1/4 gap-2 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon1} className="w-[85px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{MemCount} +</span>
          <p className="text-[#FFD445] text-2xl">Members</p>
        </div>
        <div className="w-full md:w-1/4 gap-2 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon2} className="w-[85px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{PhotosCount} +</span>
          <p className="text-[#FFD445] text-2xl">Photos Edited</p>
        </div>
        <div className="w-full md:w-1/4 gap-2 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon3} className="w-[85px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{VideosCount} +</span>
          <p className="text-[#FFD445] text-2xl">Videos Edited</p>
        </div>
        <div className="w-full md:w-1/4 gap-2 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon4} className="w-[85px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{HoursCount} +</span>
          <p className="text-[#FFD445] text-2xl">Hours Spent</p>
        </div>
      </div>
      <div className="my-8 px-4 h-auto md:px-[80px] md:h-[324px] flex flex-col gap-8 items-center justify-center w-full">
        <div className="flex flex-col gap-[10px] items-center text-center justify-center">
          <h2 className="text-4xl text-[#3652AD]">Services Offered</h2>
          <div className="h-[5px] w-[140px] bg-gradient-to-r from-[#FFD445] to-[#3652AD]"></div>
        </div>
        <div className="mt-[15px] md:px-[80px] text-lg md:leading-10 w-full flex flex-col md:justify-between md:flex-row gap-4">
          <div className="">
            <li> Remove Objects </li>
            <li> Remove and add Swimming pools </li>
            <li> Grass Replacement </li>
            <li> Floor Plans </li>
          </div>
          <div className="">
            <li> Replace Floors </li>
            <li> Remove Dirt </li>
            <li> Real Estate Video Editing </li>
            <li> Cloning </li>
          </div>
          <div className="">
            <li> Virtual Staging </li>
            <li> Renovation </li>
            <li> 360 </li>
          </div>
        </div>
      </div>
      <section className="px-4 my-8 h-auto md:px-[80px] flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-[10px] items-center text-center justify-center">
          <h2 className="text-4xl text-[#3652AD]">Our portfolio</h2>
          <div className="h-[5px] w-[140px] bg-gradient-to-r from-[#FFD445] to-[#3652AD]"></div>
        </div>
        <div className="gap-8 my-8 items-start justify-center">
          <img src={decor} className="w-[38px]" alt="" />
          <h5 className="mb-2 text-[#3652AD] text-4xl font-medium leading-tight">
            Interior HDR
          </h5>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col gap-12 md:flex-row w-full">
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col gap-12 md:flex-row w-full">
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gap-8 my-8 items-start justify-center">
          <img src={decor} className="w-[38px]" alt="" />
          <h5 className="mb-2 text-[#3652AD] text-4xl font-medium leading-tight">
            Exterior HDR
          </h5>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col gap-12 md:flex-row w-full">
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col gap-12 md:flex-row w-full">
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
              <div className="w-full md:w-[50%]">
                <ReactCompareImage
                  leftImage={before}
                  rightImage={after}
                  sliderLineColor="#FFD445"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="md:w-[150px] button-custom font-sans text-lg px-8">
            View More
        </button> 
      </section>
      <Footer />
    </div>
  );
};

export default Home;
