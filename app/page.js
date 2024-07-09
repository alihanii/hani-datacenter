import Image from "next/image";
import RightFooter from "./Home/RightFooter";
import Main from "./Home/Main";

export default function Home() {
  return (
    <div className="flex container max-w-[1200px] h-full bg-slate-100 bg-opacity-60 justify-end py-[12px] px-[15px]">
      <RightFooter />
      <Main />
    </div>
  );
}
