import React, { useState, useEffect } from "react";
import { Tooltip, initTWE } from "tw-elements";
import "../css/home.css";
import decor from "../src/assets/Group 5.png";
import thinking from '../src/assets/Thinking 3D Model 1 (2).png';
import icon1 from "../src/assets/icons/Layer_1.png";
import icon2 from "../src/assets/icons/Vector.png";
import icon3 from "../src/assets/icons/Layer_1 (1).png";
import icon4 from "../src/assets/icons/Layer_1 (2).png";

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

  const [Membcount, setMembCount] = useState(0);
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

  useEffect(() => countUp(setMembCount, 10, 1, 100), []);
  useEffect(() => countUp(setPhotosCount, 5000, 50, 10), []);
  useEffect(() => countUp(setVideosCount, 100, 1, 100), []);
  useEffect(() => countUp(setHoursCount, 10000, 100, 10), []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${slides[sno].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        className="bg-opacity-50 p-8 md:p-[230px] w-full h-screen flex items-center justify-center"
      >
        <div className="flex flex-col gap-8 text-center items-center justify-center md:px-0">
          <h1 className=" md:leading-19 text-white w-full md:w-[816px] text-3xl md:text-6xl text-pretty">
            Elevate Your Visual Experience with Stunning{" "}
            <span className="rounded-md px-[5px] bg-[#3652AD] text-[#FFD445]">
              HDR Editing
            </span>{" "}
            &{" "}
            <span className="rounded-md px-[5px] bg-[#3652AD] text-[#FFD445]">
              Video Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white">
            Unlock the full potential of your visuals with our expert HDR
            editing and professional video services. Whether you're a
            photographer looking to enhance your stunning landscapes or a
            content creator aiming to captivate your audience, we bring your
            vision to life with precision and artistry.
          </p>
          <button className="button-custom font-sans text-lg px-8">
            Contact
          </button>
        </div>
      </div>
      <div className="gap-8 px-4 md:px-[130px] md:py-[80px] h-auto w-full flex flex-col md:flex-row items-center justify-center">
        <div className="relative gradient-border rounded-3xl w-full md:w-[50%] mt-8 md:mb-0">
          <video className="w-full shadow-lg" autoPlay loop muted>
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1385256404173613218/TEAM/b16b/c881/-e574-486c-a184-bd5af6d4913c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l8iJbGVbmYisJi02bH2X07Y0quWEHL-UdaYDBTh8pWBcrqtnGY5Nefrem2D8r5nWxrGljMiEBHHFwSJ3A9LzvLZysXxlomzzL7wnB6T0nisQNLSCWTqj3IrxSNSRYTNbk93a5apAvxyGjABer4r25Gweef-lvrSES8eYj2K~O4azFgAzA04fnoF0or9jJH-23a8YanUITDOV6l7IceUrWtKbpQ5RsRRvRUqSoBam7q9VRImHMt2SeNgk8AW0WnhcX~pXeVbrMYN9Rh11SpGzo2nMvFz-0guS7eKQQdcqLlQnejUSAxfkikdgc5v67FksAr7mqnDONMQCzjePEKxv5Q__"
              type="video/mp4"
            />
          </video>
          <img
            className="absolute top-0 right-0 w-[120px]"
            src={thinking}
            alt=""
          />
        </div>
        <div className="w-full md:w-[50%]">
          <div className="p-2 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <img src={decor} className="w-[38px]" alt="" />
            <h5 className="mb-2 text-[#3652AD] text-4xl font-medium leading-tight">
              What We Do
            </h5>
            <p className="mb-4 text-lg">
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
      <div className="flex flex-col md:flex-row bg-[#3652AD] h-auto md:h-[324px] w-full">
        <div className="w-full md:w-1/4 gap-1 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon1} className="w-[80px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{Membcount} +</span>
          <p className="text-[#FFD445] text-2xl">Members</p>
        </div>
        <div className="w-full md:w-1/4 gap-1 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon2} className="w-[80px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{PhotosCount} +</span>
          <p className="text-[#FFD445] text-2xl">Photos Edited</p>
        </div>
        <div className="w-full md:w-1/4 gap-1 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon3} className="w-[80px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{VideosCount} +</span>
          <p className="text-[#FFD445] text-2xl">Videos Edited</p>
        </div>
        <div className="w-full md:w-1/4 gap-1 flex flex-col justify-center items-center text-white text-center p-4 md:p-0">
          <img src={icon4} className="w-[80px]" alt="" />
          <span className="text-[#FFD445] text-2xl">{HoursCount} +</span>
          <p className="text-[#FFD445] text-2xl">Hours Spent</p>
        </div>
      </div>
      <div className="px-4 h-auto md:h-[324px] flex flex-col gap-12 items-center justify-center w-full">
        <div className="flex flex-col gap-[10px] items-center text-center justify-center">
          <h2 className="text-4xl text-[#3652AD]">Services Offered</h2>
          <div className="h-[5px] w-[140px] bg-gradient-to-r from-[#FFD445] to-[#3652AD]"></div>
        </div>
        <div className="mt-[15px] flex flex-col md:flex-row gap-4 md:gap-[100px]">
          <div className="text-2xl">
            <li> Remove Objects </li>
            <li> Remove and add Swimming pools </li>
            <li> Grass Replacement </li>
            <li> Floor Plans </li>
          </div>
          <div className="text-2xl">
            <li> Replace Floors </li>
            <li> Remove Dirt </li>
            <li> Real Estate Video Editing </li>
            <li> Cloning </li>
          </div>
          <div className="text-2xl">
            <li> Virtual Staging </li>
            <li> Renovation </li>
            <li> 360 </li>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-[130px] flex flex-col gap-12 items-center justify-center w-full">
        <div className="flex flex-col gap-[10px] items-center text-center justify-center">
          <h2 className="text-4xl text-[#3652AD]">Our portfolio</h2>
          <div className="h-[5px] w-[140px] bg-gradient-to-r from-[#FFD445] to-[#3652AD]"></div>
        </div>
      </div>
      <div className="px-4 md:px-[130px] h-auto md:h-[324px] flex flex-col gap-12 items-start justify-start w-full">
        <div>
          <img src={decor} className="w-[38px]" alt="" />
          <h5 className="mb-2 text-[#3652AD] text-4xl font-medium leading-tight">
            Interior HDR
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
