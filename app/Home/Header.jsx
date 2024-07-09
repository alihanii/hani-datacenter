/* eslint-disable @next/next/no-img-element */
"use client";

const arr = [
  { src: "./ic1.png", name: "صفحه اصلی" },
  { src: "./ic2.png", name: "بازخورد اکران" },
  { src: "./ic3.png", name: "فیلم ها" },
  { src: "./ic4.png", name: "اکران بلیتی" },
  { src: "./ic5.png", name: "ارسال بازخورد" },
  { src: "./ic6.png", name: "درباره ما" },
];
function Header() {
  return (
    <div className="bg-yellow-500 flex items-center justify-center h-[80px]">
      <div className="flex justify-between items-center container max-w-[1200px] ">
        <div className="flex items-center justify-center gap-[8px]">
          <span className="h-[45px] w-[45px]">
            <img src="./logo.png" alt="" />
          </span>
          <div>
            {" "}
            <p className="text-white">سامانه اکران</p>
            <p className="text-blue-900">جشنواره فیلم مردمی عمار</p>
          </div>
        </div>
        <div className=" flex flex-nowrap  h-[80px]">
          {arr.map((item) => (
            <Item key="" item={item} />
          ))}
        </div>
        <div className="flex flex-col  gap-1 text-[13px]	">
          <div className="flex gap-1">
            <input
              className="focus:outline-none w-[130px] rounded-md pr-2 h-[20px]"
              placeholder="شماره تماس"
              type="text"
            />
            <button className="bg-green-600 w-[60px] h-[20px] text-white rounded-md flex items-center justify-center pb-2">
              ورود
            </button>
          </div>
          <div className="flex gap-1">
            {" "}
            <input
              type="text"
              placeholder="رمز عبور"
              className="h-[20px] focus:outline-none w-[130px] rounded-md  pr-2"
            />
            <button className="bg-red-500 w-[60px] text-white rounded-md h-[20px] flex items-center justify-center pb-1">
              ثبت نام
            </button>
          </div>
          <p className="flex justify-end text-[12px] "> فراموشی رمز عبور</p>
        </div>
      </div>
    </div>
  );
}

const Item = ({ item }) => {
  return (
    <div className="hover:bg-blue-950 w-[90px] text-[12px] transition-all font-tktherma flex flex-col justify-center items-center cursor-pointer font-semibold  px-[10px]">
      <span className="h-[35px] w-[35px]">
        <img src={item.src} alt={item.name} />
      </span>
      <p className="text-white">{item.name}</p>
    </div>
  );
};

export default Header;
