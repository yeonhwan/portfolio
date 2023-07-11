import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { PageIndexContext } from "@/app/page";
import { useAnimate, stagger } from "framer-motion";

import { useLayoutEffect, useState } from "react";
import { animate } from "framer-motion";

//Icons
import Email from "public/icons/email.svg";
import Github from "public/icons/github.svg";
import Velog from "public/icons/velog.svg";

export default function AboutMe() {
  const index = useContext(PageIndexContext);

  useLayoutEffect(() => {
    if (index === 1) {
      animate([
        [
          ".slide",
          { x: ["30%", "-30%"], y: ["-100%", "-20%"], rotate: 45 },
          {
            duration: 1.2,
            ease: "easeInOut",
            delay: stagger(0.15, { startDelay: 0, from: "first" }),
          },
        ],
        [
          ".brush-stroke",
          { width: ["0%", "100%"], opacity: [0, 1] },
          { duration: 0.5 },
        ],
        [
          ".profile",
          {
            opacity: [0, 1],
            rotate: [90, 0],
          },
          {
            duration: 1,
            type: "spring",
            mass: 1.5,
            ease: "easeInOut",
            at: "<",
          },
        ],
        [
          ".content-container",
          { opacity: [0, 1], y: [20, 0] },
          {
            duration: 0.5,
            delay: stagger(0.15, { startDelay: 0.1 }),
            ease: "easeInOut",
            at: "<",
          },
        ],
        [
          ".page-number",
          {
            opacity: [0, 1],
            y: [10, 0],
          },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        [
          ".path-strokes",
          { pathLength: [0, 1] },
          { duration: 3, ease: "easeInOut" },
        ],
      ]);
    } else {
      animate([
        [".brush-stroke", { opacity: [1, 0] }],
        [
          ".path-strokes",
          { opacity: [1, 0], pathLength: [1, 0] },
          { duration: 0.5, at: "<" },
        ],
        [".page-number", { opacity: [1, 0] }, { duration: 0.5, at: "<" }],
        [
          ".profile",
          {
            opacity: [1, 0],
          },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        [
          ".content-container",
          {
            opacity: [1, 0],
          },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
      ]);

      animate(
        ".slide",
        { x: ["-30%", "100%"], y: ["-20%", "-100%"], rotate: 45 },
        {
          duration: 0.7,
          ease: "easeInOut",
          delay: stagger(0.15, { startDelay: 0, from: "last" }),
        }
      );
    }
  }, [index]);

  return (
    <div className="relative bg-black/90 overflow-hidden w-screen h-screen flex flex-col items-center">
      <div className="flex w-[70%] h-full items-center justify-evenly z-50 py-20">
        <div className="about-me flex flex-col items-center justify-center w-max h-[75%]">
          <img className="w-82 profile origin-center mb-4" src="/profile.png" />
          <div className="flex flex-col items-center justify-evenly w-max min-h-max h-1/3">
            <p className="page-number text-6xl font-extrabold text-orange-400 z-50">
              1.
            </p>
            {/* about me */}
            <div className="w-full h-max flex flex-col">
              <svg
                className="z-50 w-56"
                viewBox="0 0 228 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  exit={{ pathLength: 0 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  className="path-strokes"
                  d="M2.00388 29.8109L1.72233 30.5H2.46674H9.10674H9.45511L9.57578 30.1732L11.3751 25.3H23.2358L24.9965 30.17L25.1158 30.5H25.4667H32.1067H32.8502L32.5698 29.8114L21.1698 1.81144L21.043 1.49998H20.7067H13.9067H13.5709L13.4439 1.81087L2.00388 29.8109ZM36.6514 30V30.5H37.1514H49.5914C52.5934 30.5 55.4315 29.9953 57.5351 28.6898C59.6735 27.3627 61.0114 25.2312 61.0114 22.12C61.0114 20.0892 60.3741 18.4416 59.3062 17.1947C58.5346 16.2939 57.551 15.6169 56.4507 15.1524C58.6223 13.9995 59.8914 11.8286 59.8914 9.07998C59.8914 6.5747 58.926 4.64513 57.1155 3.36204C55.3319 2.09796 52.7834 1.49998 49.6714 1.49998H37.1514H36.6514V1.99998V30ZM101.456 1.49998H100.956V1.99998V19.12C100.956 23.4125 102.501 26.4155 104.926 28.3322C107.333 30.2341 110.546 31.02 113.816 31.02C117.087 31.02 120.31 30.2342 122.726 28.3329C125.161 26.4166 126.716 23.4137 126.716 19.12V1.99998V1.49998H126.216H120.016H119.516V1.99998V18.76C119.516 20.8239 118.927 22.2017 117.974 23.0706C117.014 23.9472 115.604 24.38 113.816 24.38C112.05 24.38 110.65 23.9478 109.694 23.0714C108.746 22.2023 108.156 20.8239 108.156 18.76V1.99998V1.49998H107.656H101.456ZM139.711 30V30.5H140.211H146.411H146.911V30V8.05998H155.011H155.511V7.55998V1.99998V1.49998H155.011H131.571H131.071V1.99998V7.55998V8.05998H131.571H139.711V30ZM167.901 30V30.5H168.401H174.521H175.021V30V14.5039L181.424 24.1956L181.572 24.42H181.841H185.321H185.59L185.738 24.1963L192.141 14.5389V30V30.5H192.641H198.801H199.301V30V1.99998V1.49998H198.801H193.161H192.891L192.743 1.72633L183.561 15.7664L174.38 1.72633L174.232 1.49998H173.961H168.401H167.901V1.99998V30ZM206.19 30V30.5H206.69H226.89H227.39V30V24.68V24.18H226.89H213.39V18.94H225.37H225.87V18.44V13.32V12.82H225.37H213.39V7.77998H226.65H227.15V7.27998V1.99998V1.49998H226.65H206.69H206.19V1.99998V30ZM13.5426 19.3L17.305 9.03907L21.0331 19.3H13.5426ZM49.1914 24.54H43.8514V18.38H49.5914C50.6981 18.38 51.7598 18.5479 52.5295 19.0089C53.2584 19.4454 53.7714 20.1695 53.7714 21.44C53.7714 22.1215 53.6333 22.6332 53.4135 23.0222C53.1948 23.4097 52.879 23.7043 52.4776 23.9285C51.6546 24.3881 50.4936 24.54 49.1914 24.54ZM49.3514 12.86H43.8514V7.45998H48.9914C50.2829 7.45998 51.2318 7.70327 51.8458 8.14185C52.431 8.55988 52.7714 9.19749 52.7714 10.16C52.7714 11.0982 52.4234 11.7452 51.8632 12.1724C51.284 12.6141 50.4244 12.86 49.3514 12.86ZM64.982 16C64.982 19.8864 66.2572 23.6436 68.8347 26.4342C71.4189 29.232 75.2772 31.02 80.362 31.02C85.4467 31.02 89.3146 29.2321 91.9087 26.435C94.4963 23.6447 95.7821 19.8875 95.7821 16C95.7821 12.1125 94.4963 8.35523 91.9087 5.56499C89.3146 2.76782 85.4467 0.97998 80.362 0.97998C75.2772 0.97998 71.4189 2.76794 68.8347 5.56573C66.2572 8.35636 64.982 12.1135 64.982 16ZM80.362 24.26C77.7846 24.26 75.8038 23.3664 74.4644 21.9158C73.12 20.4598 72.382 18.3989 72.382 16C72.382 13.6011 73.12 11.5402 74.4644 10.0842C75.8038 8.63355 77.7846 7.73998 80.362 7.73998C82.9604 7.73998 84.9404 8.63408 86.2741 10.0835C87.6131 11.5387 88.342 13.5994 88.342 16C88.342 18.4006 87.6131 20.4612 86.2741 21.9164C84.9404 23.3659 82.9604 24.26 80.362 24.26Z"
                  stroke="white"
                  strokeWidth={1.3}
                  key="aboutMe"
                />
              </svg>
              {/* about me */}
              <div className="z-0 w-full h-max flex items-center mt-2">
                <div className="brush-stroke h-1 bg-white z-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%] h-full justify-center">
          <div className="content-container flex flex-col text-white w-full h-[35%] p-14 pb-0 mb-4">
            <p className="font-nanum font-semibold text-2xl mb-2 text-orange-200">
              안녕하세요!
            </p>
            <p className="font-suite mb-1">
              새로운 걸 배워나가는 것이 가장 즐거운 신입
              <span className="fontsuite"> 프론트엔드 개발자&nbsp;</span>"
              <span className="font-suite font-bold text-cyan-300">
                &nbsp;박연환&nbsp;
              </span>
              " 입니다.
            </p>
            <p className="font-suite mb-1">
              막연히 PPT 만들기를 좋아했던 대학생이었던 저는 디자인을 통해
              무언가 만들어 볼 수 없을까 하는 생각 하나로 개발자의 길을 걷게
              되었습니다.
            </p>
            <p className="font-suite mb-1">
              프론트엔드의 역할을 디자인을 통해 어떻게 효과적으로 달성할 수
              있을지 고민하는 것을 좋아하고 개발 과정에서 동료들과의 소통과
              협력을 가장 중요한 가치로 생각합니다.
            </p>
            <p className="font-suite mb-1">
              현재는 기술과 이론을 학습하고, 토이 프로젝트들을 통해 적용하고
              있습니다.
            </p>
          </div>
          <div className="content-container flex flex-col w-full h-[10%] px-14 mb-2">
            <div className="flex items-center w-full h-1/2">
              <p className="text-teal-300 font-semibold mr-4 w-24">Contacts</p>
              <Email
                onClick={() => {
                  window.open("mailto:yeonhwan619@gmail.com");
                }}
                className="w-4 fill-white mx-2 hover:cursor-pointer"
              />
              <p className="text-sm text-white">yeonhwan619@gmail.com</p>
              <Github
                onClick={() => {
                  window.open("https://github.com/yeonhwan");
                }}
                className="w-4 fill-white mx-2 hover:cursor-pointer"
              />
              <Velog
                onClick={() => {
                  window.open("https://velog.io/@yeonhwan619");
                }}
                className="w-4 fill-white hover:cursor-pointer"
              />
            </div>
            <div className="content-container flex w-full items-center text-white h-1/2">
              <p className="font-semibold text-teal-300 mr-4 w-24">keywords</p>
              <p className="rounded-xl bg-orange-500 text-sm px-2 py-1 font-nanum mr-2">
                성장하는
              </p>
              <p className="rounded-xl bg-red-400 text-sm px-2 py-1 font-nanum mr-2">
                집요한
              </p>
              <p className="rounded-xl bg-teal-500 text-sm px-2 py-1 font-nanum mr-2">
                활용하는
              </p>
              <p className="rounded-xl bg-indigo-500 text-sm px-2 py-1 font-nanum mr-2">
                소통하는
              </p>
            </div>
          </div>
          <div className="content-container flex flex-col w-full h-[18%] px-14">
            <div className="w-full h-1/2 flex text-white">
              <p className="font-semibold mb-1 text-teal-300 w-24 mr-4">
                Education
              </p>
              <div className="w-[45%] h-1/3 flex flex-col px-2">
                <p className="font-nanum">
                  코드스테이츠 41<sup>th </sup>
                  SEB FE
                </p>
                <p className="font-nanum font-light text-xs">
                  2022 08 ~ 2023 02
                </p>
                <p className="font-nanum mb-4 text-sm">프론트엔드 과정 수료</p>
              </div>
              <div className="w-[45%] h-1/3 flex flex-col px-2">
                <p className="font-nanum">중앙대학교 영어영문학과</p>
                <p className="font-nanum text-xs font-light">
                  2015 03 ~ 2022 02
                </p>
                <p className="font-nanum text-sm">영어영문학사 졸업</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full min-w-[1980px] min-h-[1024px] absolute top-0 left-0">
        <div className="slide w-[400%] h-[250%] bg-black/10 absolute z-0"></div>
        <div className="slide w-[400%] h-[250%] bg-teal-800/20 absolute z-0"></div>
        <div className="slide w-[400%] h-[250%] bg-gradient-to-br from-teal-500 to-teal-800 absolute z-0"></div>
      </div>
    </div>
  );
}
