/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const arr = [
  {
    src: "./img1.jpg",
    title: "اینجا قرار است رو تیتر قرار بگیرد :",
    about:
      "هر شخص میتواند با هر دوربین تصویر برداری یا تلفن همراه از سوژهای اطراف خود فیلم بسازد و با خوبی و خوشی تمام بشه و دیگر است .",
    date: "1395/07/08",
    key: 1,
  },
  {
    src: "./cabin-001.jpg",
    title: "سلام بر شما :",
    about:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون ب ن",
    date: "1398/01/52",
    key: 2,
  },
  {
    src: "./cabin-002.jpg",
    title: "شامل حروفچینی دستاوردهایوی :",
    about:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجلهد ن",
    date: "1399/04/14",
    key: 3,
  },
  {
    src: "./cabin-003.jpg",
    title: "شامل حروفچینی دستاوردهای اصلی ی :",
    about:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در س ن",
    date: "1391/06/02",
    key: 4,
  },
];

function RightFooter() {
  const [on, setOn] = useState(1);
  const hover = (key) => {
    setOn(key);
  };
  useEffect(() => {
    const time = setInterval(function () {
      setOn((s) => (s === 4 ? (s = 1) : s + 1));
    }, 3000);
    return () => clearInterval(time);
  }, []);
  return (
    <div className="h-[575px] w-full border-4 border-blue-950 flex flex-col justify-between">
      {arr.map((item) => (
        <Item
          item={item}
          key={item.key}
          hover={hover}
          on={on === item.key ? "inline-block" : "hidden"}
        />
      ))}
      <div className="flex justify-between items-center px-[10px] pb-[6px]">
        {" "}
        {arr.map((item) => (
          <ItemChoseP
            key={item.key}
            item={item}
            hover={hover}
            on={on === item.key ? "inline-block" : "hidden"}
            onn={on === item.key ? "bg-blue-950" : "bg-gray-400"}
          />
        ))}
        <div className="flex gap-1 ml-2 w-full justify-end items-center">
          {arr.map((item) => (
            <ItemChose
              key={item.key}
              item={item}
              hover={hover}
              on={on === item.key ? "inline-block" : "hidden"}
              onn={on === item.key ? "bg-blue-950" : "bg-gray-400"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Item = ({ item, hover, on }) => {
  return (
    <div className={`${on}`}>
      <img className="h-[350px] w-full" src={item.src} alt={item.src} />
      <div className="px-[10px] pt-[15px]">
        <p className="text-[14px] text-gray-500 font-semibold">{item.title}</p>
        <p className="text-[15px] pt-[8px]">{item.about}</p>
      </div>
    </div>
  );
};

const ItemChose = ({ item, hover, onn }) => {
  return (
    <>
      <div onClick={() => hover(item.key)} className={`w-3 h-3 ${onn} `}></div>
    </>
  );
};
const ItemChoseP = ({ item, on }) => {
  return (
    <>
      <p className={`${on} text-[14px] text-gray-500 font-medium`}>
        {item.date}
      </p>
    </>
  );
};

export default RightFooter;
