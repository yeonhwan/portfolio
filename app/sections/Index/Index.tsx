import Models from "./Models";
import { useProgress } from "@react-three/drei";

import { useLayoutEffect, useContext } from "react";
import { PageIndexContext } from "@/app/page";
import { animate } from "framer-motion";

export default function Index() {
  const index = useContext(PageIndexContext);
  const { loaded, total } = useProgress();
  const loadComplete = loaded === total;

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
      <h1 className="hello absolute text-5xl w-max top-[6rem] font-extrabold text-white font-suite">
        반갑습니다 !
      </h1>
      <h1 className="name-1 absolute text-3xl w-max top-[10rem] font-extrabold text-orange-400 font-suite">
        프론트엔드 개발자
      </h1>
      <h1 className="name-2 absolute text-4xl w-max top-[13rem] font-extrabold text-white font-suite">
        &lt; <span className="text-4xl text-cyan-500">박연환&nbsp;</span>
        /&gt; 입니다.
      </h1>
      <p className="scroll-info absolute text-lg w-max top-[18rem] text-neutral-400 font-suite">
        스크롤을 밑으로 내려 내용을 확인해주세요.
      </p>
      <Models />
    </div>
  );
}
