import Models from "./Models";
import { useLayoutEffect, useContext } from "react";
import { PageIndexContext } from "@/app/page";
import { animate } from "framer-motion";

export default function Index() {
  const { index } = useContext(PageIndexContext);

  useLayoutEffect(() => {
    if (index === 0) {
      animate([
        [
          ".hello",
          { scale: [0, 1], opacity: [0, 1] },
          { duration: 0.5, delay: 1.0 },
        ],
        [".name-1", { y: [-10, 0], opacity: [0, 1] }, { duration: 0.5 }],
        [".name-2", { y: [-10, 0], opacity: [0, 1] }, { duration: 0.5 }],
      ]);
      animate(
        ".scroll-info",
        { opacity: [0, 1] },
        { delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }
      );
      animate(
        ".scroll-dot",
        { y: [-7, 0] },
        { duration: 2, repeat: Infinity, repeatType: "loop" }
      );
    } else {
      animate([
        [".hello", { opacity: [1, 0] }, { duration: 0.5 }],
        [".name-1", { opacity: [1, 0] }, { duration: 0.5, at: "<" }],
        [".name-2", { opacity: [1, 0] }, { duration: 0.5, at: "<" }],
        [".scroll-info", { opacity: [1, 0] }, { duration: 0.5, at: "<" }],
      ]);
    }
  }, [index]);

  return (
    <div
      key="index-container"
      className="relative w-screen h-screen flex flex-col items-center bg-black/90">
      <h1 className="hello absolute text-4xl sm:text-5xl top-[6rem] font-extrabold text-white font-suite">
        반갑습니다 !
      </h1>
      <h1 className="name-1 absolute text-2xl sm:text-3xl w-max top-[9rem] sm:top-[10rem] font-extrabold text-orange-400 font-suite">
        프론트엔드 개발자
      </h1>
      <h1 className="name-2 absolute text-3xl sm:text-4xl w-max top-[11.5rem] sm:top-[13rem] font-extrabold text-white font-suite">
        &lt; <span className="text-4xl text-cyan-500">박연환&nbsp;</span>
        /&gt; 입니다.
      </h1>
      <p className="flex items-center scroll-info absolute text-sm sm:text-lg w-max h-max top-[15rem] sm:top-[18rem] text-neutral-400 font-suite">
        스크롤을 밑으로 내려 내용을 확인해주세요.
        <span className="relative rounded-full border border-neutral-400 w-4 h-5 px-1 mx-2">
          <span className="scroll-dot absolute rounded-full bg-neutral-400 w-[3px] h-[3px] top-1/2 left-[5px]"></span>
        </span>
      </p>
      <div className="absolute bottom-10 left-0 w-full h-[80%] sm:h-[90%] md:h-full">
        <Models />
      </div>
    </div>
  );
}
