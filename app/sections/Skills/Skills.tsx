import { animate, AnimatePresence, motion, stagger } from "framer-motion";
import { useLayoutEffect, useState, useEffect } from "react";

import { useContext } from "react";
import { PageIndexContext } from "@/app/page";
import { frontendSkills } from "./FrontSkills";
import { backendSkills } from "./BackSkills";
import { tools } from "./Tools";

type StateList =
  | "HTML"
  | "CSS"
  | "JS"
  | "TS"
  | "React"
  | "Next"
  | "Tailwind"
  | "SC"
  | "Motion"
  | "MUI"
  | "WebPack"
  | "Node"
  | "Express"
  | "Prisma"
  | "Git"
  | "Github"
  | "Vercel"
  | "Adobe"
  | "Figma"
  | "VSC"
  | "TRPC"
  | "SCSS"
  | "Zustand"
  | "ReactQuery";

export type SkillListItem = {
  icon: JSX.Element;
  color: string;
  state: StateList;
  name: string;
  level: 1 | 2 | 3;
};

export type ToolListItem = Omit<SkillListItem, "level">;

export default function Skills() {
  const { index, prevIndex } = useContext(PageIndexContext);
  const [selectedIcon, setSelectedIcon] = useState<StateList>();
  const [iconName, setIconName] = useState<string>();
  const [iconDesc, setIconDesc] = useState<string[]>();

  useLayoutEffect(() => {
    if (index === 2 && prevIndex === 1) {
      animate([
        [
          ".info-container",
          { y: [30, 0] },
          { type: "spring", mass: 1.5, ease: "easeInOut" },
        ],
        [
          ".content-container",
          {
            opacity: [0, 1],
            y: [30, 0],
          },
          {
            duration: 0.5,
            type: "spring",
            mass: 1.5,
            ease: "easeInOut",
            at: "<",
          },
        ],
        [
          ".path-strokes",
          { pathLength: [0, 1] },
          { duration: 3, ease: "easeInOut", at: "-2" },
        ],
        [
          ".stroke",
          { width: ["0%", "100%"], opacity: [0, 1] },
          { duration: 0.5, at: "<" },
        ],
        [".cover", { opacity: [1, 0] }, { at: "-2.8" }],
        [
          ".toolbox",
          { opacity: [0, 1] },
          {
            duration: 0.5,
          },
        ],
        [
          ".page-number",
          {
            opacity: [0, 1],
          },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        [
          ".list-name",
          {
            y: [10, 0],
            opacity: [0, 1],
          },
          { duration: 0.5, ease: "easeInOut", at: "-0.5" },
        ],
        [
          ".category",
          {
            y: [10, 0],
            opacity: [0, 1],
          },
          { duration: 0.5, ease: "easeInOut", at: "<" },
        ],
        [
          ".front-item",
          {
            opacity: [0, 1],
            y: [-5, 0],
          },
          {
            duration: 0.5,
            ease: "easeInOut",
            at: "<",
            delay: stagger(0.05),
          },
        ],
        [
          ".back-item",
          {
            opacity: [0, 1],
            y: [-5, 0],
          },
          {
            duration: 0.5,
            ease: "easeInOut",
            at: "<",
            delay: stagger(0.05),
          },
        ],
        [
          ".tool-item",
          {
            opacity: [0, 1],
            y: [-5, 0],
          },
          {
            duration: 0.5,
            ease: "easeInOut",
            at: "<",
            delay: stagger(0.05),
          },
        ],
      ]);
    } else if (index === 2 && prevIndex === 3) {
      animate([
        [".cover", { opacity: 0 }, { duration: 0 }],
        [
          ".outer-container",
          { opacity: [0, 1], y: [50, 0] },
          { type: "spring" },
        ],
        [
          ".path-strokes",
          { pathLength: [0, 1] },
          { duration: 3, ease: "easeInOut", at: "-2" },
        ],
      ]);
    } else if (index === 1) {
      animate(
        ".cover",
        { opacity: [0, 1] },
        {
          duration: 0.5,
        }
      );
      animate([
        [
          ".outer-container",
          { y: [0, -20, 100], opacity: [1, 1, 0] },
          {
            duration: 0.7,
            type: "spring",
            ease: "easeInOut",
            opacity: { duration: 0.6 },
          },
        ],
        [".background", { opacity: [1, 0] }, { at: "-0.3" }],
      ]);
    } else if (index === 3) {
      animate([
        [
          ".outer-container",
          { opacity: [1, 0] },
          {
            duration: 0.5,
            type: "spring",
            ease: "easeInOut",
            opacity: { duration: 0.6 },
          },
        ],
        [".curtain-container", { opacity: [0, 1] }, { at: "<" }],
        [
          ".curtain",
          { opacity: [0, 1], width: ["0%", "14.285%"] },
          { delay: stagger(0.05, { startDelay: 0 }) },
        ],
      ]);
    }
  }, [index]);

  return (
    <div className="relative w-screen h-screen flex flex-col overflow-hidden items-center">
      <div className="absolute background bg-orange-400 w-screen h-screen"></div>
      <div className="cover absolute w-[400%] h-[250%] bg-teal-600 translate-x-[0%] -translate-y-[20%] rotate-45"></div>
      <div className="outer-container flex flex-col-reverse md:flex-row w-full sm:w-[80%] xl:w-[70%] 2xl:w-[55%] h-full items-center justify-evenly z-50 py-10 mobile:py-14 xl:py-20">
        <div className="content-container flex flex-col w-[93%] mobile:w-[90%] md:w-[50%] xl:w-[60%] 2xl:w-[50%] h-full justify-center mobile:justify-center md:justify-center text-white pt-0 md:pb-10">
          <div className="flex flex-col w-full h-max justify-evenly mb-2 mobile:mb-6">
            <p className="list-name font-extrabold font-suite text-xl sm:text-3xl mb-2">
              🧰 SKILLS
            </p>
            <p className="category text-white font-suite font-semibold mb-2">
              Frontend
            </p>
            <ul className="grid w-full h-full grid-cols-skills items-center justify-items-center mobile:gap-x-3 gap-y-2">
              {frontendSkills.map((skill, index) => {
                const classname = `front-item flex items-center justify-center rounded-full w-5 h-5 mobile:w-7 mobile:h-7 ${skill.color} mb-1 hover:cursor-pointer`;
                return (
                  <motion.li
                    key={`front_${index}`}
                    className="flex flex-col w-full justify-center items-center">
                    <motion.span
                      tabIndex={-1}
                      animate={
                        selectedIcon === skill.state
                          ? { scale: 1.2 }
                          : { scale: 1 }
                      }
                      className={classname}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIcon(skill.state);
                        setIconName(skill.name);
                        const descContainerEl = document.querySelector(
                          ".desc"
                        ) as HTMLElement;
                        if (descContainerEl) {
                          descContainerEl.focus();
                        }
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 },
                      }}>
                      {skill.icon}
                    </motion.span>
                    <p className="sm:text-xs text-[8px] w-full text-center tool-item">
                      {skill.name}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col w-full h-max justify-evenly mb-10">
            <p className="category text-white font-suite font-semibold mb-2">
              Backend
            </p>
            <ul className="grid w-full h-full grid-cols-skills items-center justify-items-center moible:gap-x-3 gap-y-2">
              {backendSkills.map((skill, index) => {
                const classname = `back-item flex items-center justify-center rounded-full w-5 h-5 mobile:w-7 mobile:h-7 ${skill.color} mb-1 hover:cursor-pointer`;
                return (
                  <motion.li
                    key={`back_${index}`}
                    className="flex flex-col w-full justify-center items-center">
                    <motion.span
                      tabIndex={-1}
                      className={classname}
                      animate={
                        selectedIcon === skill.state
                          ? { scale: 1.2 }
                          : { scale: 1 }
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIcon(skill.state);
                        setIconName(skill.name);
                        const descContainerEl = document.querySelector(
                          ".desc"
                        ) as HTMLElement;
                        if (descContainerEl) {
                          descContainerEl.focus();
                        }
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 },
                      }}>
                      {skill.icon}
                    </motion.span>
                    <p className="sm:text-xs text-[8px] w-full text-center back-item">
                      {skill.name}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col w-full h-max justify-evenly mb-4">
            <p className="list-name font-bold font-suite text-xl sm:text-3xl mb-2">
              ⚒️ TOOLS
            </p>
            <ul className="grid w-full h-full grid-cols-skills items-center justify-items-center moible:gap-x-3 gap-y-2">
              {tools.map((skill, index) => {
                const classname = `tool-item flex items-center justify-center rounded-full w-5 h-5 mobile:w-7 mobile:h-7 ${skill.color} mb-1 hover:cursor-pointer`;
                return (
                  <motion.li
                    key={`tool_${index}`}
                    className="flex flex-col w-full justify-center items-center">
                    <motion.span
                      tabIndex={-1}
                      className={classname}
                      animate={
                        selectedIcon === skill.state
                          ? { scale: 1.2 }
                          : { scale: 1 }
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIcon(skill.state);
                        setIconName(skill.name);
                        const descContainerEl = document.querySelector(
                          ".desc"
                        ) as HTMLElement;
                        if (descContainerEl) {
                          descContainerEl.focus();
                        }
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 },
                      }}>
                      {skill.icon}
                    </motion.span>
                    <p className="sm:text-xs text-[8px] w-full text-center front-item">
                      {skill.name}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="info-container flex md:flex-col items-center justify-center w-max md:w-[20%] h-[35%] md:h-[75%]">
          <div className="w-82 h-max flex flex-col">
            <p className="page-number w-full text-end text-4xl sm:text-6xl font-extrabold text-teal-500 z-50 mb-2">
              2.
            </p>
            {/* skills */}
            <svg
              className="z-50 w-28 mobile:w-32 sm:w-40 path-box"
              viewBox="0 0 146 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="path-strokes"
                d="M1.00888 28V28.2942L1.26606 28.4371C4.22812 30.0827 7.95328 31.02 11.9089 31.02C14.9129 31.02 17.8068 30.4947 19.9641 29.0724C22.1552 27.6278 23.5289 25.2948 23.5289 21.84C23.5289 19.4969 22.4927 17.7862 20.9792 16.4891C19.4851 15.2086 17.5161 14.3213 15.6093 13.5837C14.9873 13.343 14.376 13.1196 13.7865 12.904C12.533 12.4457 11.3779 12.0234 10.4272 11.5489C9.0033 10.8382 8.32888 10.1464 8.32888 9.31998C8.32888 8.65708 8.64611 8.19223 9.28545 7.85812C9.95774 7.5068 10.9643 7.31984 12.2327 7.29998C15.0289 7.30077 18.4971 8.15977 21.0926 9.70929L21.8489 10.1608V9.27998V3.59998V3.29765L21.5812 3.15721C19.0548 1.83193 15.1714 0.97998 11.6689 0.97998C8.7589 0.97998 6.06395 1.66534 4.08268 3.12216C2.08242 4.59294 0.848877 6.82359 0.848877 9.79998C0.848877 12.272 1.86785 14.0323 3.37808 15.3382C4.86558 16.6245 6.82543 17.4671 8.71701 18.1595C9.28556 18.3676 9.84449 18.5613 10.3854 18.7487C11.6816 19.1977 12.8743 19.6109 13.8476 20.1015C15.2296 20.798 15.9289 21.5343 15.9289 22.52C15.9289 22.9081 15.8296 23.2079 15.6603 23.4489C15.488 23.6942 15.2215 23.9093 14.8417 24.0872C14.0681 24.4497 12.9077 24.62 11.4289 24.62C8.39517 24.62 4.93078 23.8026 1.77899 21.7792L1.00888 21.2848V22.2V28ZM46.6713 30.2879L46.8207 30.5H47.0801H54.2401H55.1996L54.65 29.7136L44.7305 15.5205L54.0095 2.28704L54.5614 1.49998H53.6001H46.5201H46.2528L46.1043 1.72228L38.8528 12.58H35.8201V1.99998V1.49998H35.3201H29.1201H28.6201V1.99998V30V30.5H29.1201H35.3201H35.8201V30V19.14H38.8207L46.6713 30.2879ZM58.4326 30V30.5H58.9326H65.1326H65.6326V30V1.99998V1.49998H65.1326H58.9326H58.4326V1.99998V30ZM72.5029 30V30.5H73.0029H92.9229H93.4229V30V24.4V23.9H92.9229H79.7029V1.99998V1.49998H79.2029H73.0029H72.5029V1.99998V30ZM97.9795 30V30.5H98.4795H118.4H118.9V30V24.4V23.9H118.4H105.18V1.99998V1.49998H104.68H98.4795H97.9795V1.99998V30ZM122.22 28V28.2942L122.477 28.4371C125.439 30.0827 129.164 31.02 133.12 31.02C136.124 31.02 139.018 30.4947 141.175 29.0724C143.366 27.6278 144.74 25.2948 144.74 21.84C144.74 19.4969 143.704 17.7862 142.19 16.4891C140.696 15.2086 138.727 14.3213 136.82 13.5837C136.198 13.343 135.587 13.1196 134.997 12.904C133.744 12.4457 132.589 12.0234 131.638 11.5489C130.214 10.8382 129.54 10.1464 129.54 9.31998C129.54 8.65708 129.857 8.19223 130.496 7.85812C131.169 7.5068 132.175 7.31984 133.444 7.29998C136.24 7.30077 139.708 8.15977 142.304 9.70929L143.06 10.1608V9.27998V3.59998V3.29765L142.792 3.15721C140.266 1.83193 136.382 0.97998 132.88 0.97998C129.97 0.97998 127.275 1.66534 125.294 3.12216C123.293 4.59294 122.06 6.82359 122.06 9.79998C122.06 12.272 123.079 14.0323 124.589 15.3382C126.077 16.6245 128.036 17.4671 129.928 18.1595C130.496 18.3676 131.055 18.5613 131.596 18.7487C132.893 19.1977 134.085 19.6109 135.059 20.1015C136.441 20.798 137.14 21.5343 137.14 22.52C137.14 22.9081 137.041 23.2079 136.871 23.4489C136.699 23.6942 136.432 23.9093 136.053 24.0872C135.279 24.4497 134.119 24.62 132.64 24.62C129.606 24.62 126.142 23.8026 122.99 21.7792L122.22 21.2848V22.2V28Z"
                stroke="white"
                strokeWidth={1.3}
              />
            </svg>
            {/* skills */}
            <div className="z-0 w-full h-max flex items-center mt-2">
              <div className="stroke h-0.5 bg-white z-0" />
            </div>
          </div>
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: [0.5],
              type: "spring",
              stiffness: 200,
              ease: "easeInOut",
            }}
            className="toolbox w-28 mobile:w-32 sm:w-40 md:w-48 mb-4"
            src="/toolbox.png"
          />
        </div>
      </div>
      <div className="curtain-container absolute flex w-screen h-screen opacity-0">
        <div className="curtain h-full bg-white w-1/7 z-50"></div>
        <div className="curtain h-full bg-white w-1/7 z-50"></div>
        <div className="curtain h-full bg-white w-1/7 z-50"></div>
        <div className="curtain h-full bg-white w-1/7 z-50"></div>
        <div className="curtain h-full bg-white w-1/7 z-50"></div>
        <div className="curtain h-full bg-white w-1/7 z-50"></div>
        <div className="curtain h-full bg-white w-1/7 z-50"></div>
      </div>
    </div>
  );
}
