/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import MoviesList from "./MoviesList";
import SimpleSlider from "./MoviesList";
const arr = [
  {
    about: "اکران از صفر مرزی و ادامه ماجرا",
    src: "./image1.jpg",
    key: "1",
    head: "اکران از صفر مرزی",
    info: { loc: "قم", where: "قم", max: "25 نفر", date: " فردا" },
  },
  {
    about:
      "در این اکران اتفاق افتاد و دیگه هیچ اتفاقی نیافتاد تاب عدش ببینیم چی میشه.",
    src: "./cabin-001.jpg",
    key: "2",
    head: "اکرانی برای همه روز های سال",
    info: {
      loc: "علمک-هنگامه-لک-آذرخش",
      where: "خوزستان-آبادان_دبیرستان هدف",
      max: "24 نفر در 7 نوبت اکران",
      date: "29 مهر ماه سال 1396",
    },
  },
  {
    about: "اکران های جهانی ما  ادامه ماجرا",
    src: "./cabin-002.jpg",
    key: "3",
    head: "اکران های جهانی ما",
    info: { loc: "تهران", where: "ابر", max: "27 نفر", date: "اخر تیر" },
  },
  {
    about: "میلان در تب جشنواره عمار و ادامه ماجرا",
    src: "./cabin-003.jpg",
    key: "4",
    head: " میلان در تب جشنواره عمار",
    info: { loc: "مشهد", where: "خورشید", max: "35 نفر", date: "25 تیر" },
  },
];

function Main() {
  const [on, setOn] = useState("1");
  const hover = (key) => {
    setOn(key);
  };
  return (
    <div className="mr-[10px]">
      <div className="bg-white w-[870px] opacity-100 transition-all delay-1000	text-gray-500">
        {arr.map((item) => (
          <Item
            key={item.key}
            item={item}
            on={on === item.key ? "block" : "hidden"}
          />
        ))}
        <div className="flex justify-between bg-slate-200  cursor-pointer  text-slate-500 font-semibold text-[15px]">
          {" "}
          {arr.map((item) => (
            <ItemName
              key={item.key}
              item={item}
              hover={hover}
              on={on === item.key ? "bg-blue-950 text-white" : ""}
              onn={on === item.key ? "#172554" : "#ffff"}
            />
          ))}
        </div>
      </div>
      <div>
        <SimpleSlider />
      </div>
    </div>
  );
}

export default Main;

const Item = ({ item, on }) => {
  return (
    <div className={`${on} p-[25px] pb-[10px] `}>
      <div className="flex items-center  relative h-[215px]">
        <img className="absolute h-full w-3/5 left-0"  src={item.src} alt="" />
        <div className="w-3/5 left-0 h-full bg-gradient-to-l  from-white absolute"></div>
        <div className="space-y-[3px] absolute h-full w-full  mr-5 text-bg-gray-600	text-[14px] mb-4">
          {" "}
          <h3 className="text-[23px] font-semibold my-[7px] text-blue-950">
            {item.head}
          </h3>
          <div className="flex items-center ">
            <img
              className="w-[34.5px] h-[34.5px] flex  p-[4px] justify-center items-center bg-yellow-500"
              src="./ic2.png"
              alt=""
            />
            <p className="bg-gray-300 pr-[9px] h-[34.5px] flex items-center w-[210px]">
              {item.info.loc}{" "}
            </p>
          </div>
          <div className="flex items-center">
            {" "}
            <img
              className="w-[34.5px] h-[34.5px] flex p-[4px]  justify-center items-center bg-blue-950"
              src="./ic2.png"
              alt=""
            />
            <p className="bg-gray-300 pr-[9px] flex items-center h-[34.5px] w-[210px]">
              {item.info.where}
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[34.5px] h-[34.5px] flex  p-[4px] justify-center items-center bg-blue-950"
              src="./ic2.png"
              alt=""
            />
            <p className="bg-gray-300 pr-[9px] flex items-center h-[34.5px] w-[210px]">
              {item.info.max}{" "}
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-[34.5px] h-[34.5px] flex  p-[4px] justify-center items-center bg-blue-950"
              src="./ic2.png"
              alt=""
            />
            <p className="bg-gray-300 flex items-center h-[34.5px] pr-[9px] w-[210px]">
              {item.info.date}
            </p>
          </div>
        </div>
        {/* <img
          className=" h-[270px] right-0 bg-gradient-to-r from-inherit"
          src={item.src}
          alt=""
        /> */}
      </div>
      <p className="mt-[16px] my-[14px] font-medium text-[16px] mr-5">
        {item.about}
      </p>
    </div>
  );
};
const ItemName = ({ item, hover, on, onn }) => {
  return (
    <div className="w-full relative">
      <svg
        className={`absolute m-auto right-0 left-0 top-[-16.5px] `}
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill={onn}
      >
        <path d="m80-160 400-640 400 640H80Z" />
      </svg>
      <div
        onMouseEnter={() => hover(item.key)}
        className={`${on} font-medium text-[15px] transition-all 	ease-out opacity-100 py-[10px] w-full flex justify-center text-centert hover:bg-blue-950 hover:text-white  `}
      >
        {item.head}
      </div>
    </div>
  );
};
