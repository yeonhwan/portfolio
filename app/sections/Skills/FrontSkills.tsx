import HTML5Icon from "/public/icons/html5.svg";
import CSS3Icon from "/public/icons/css3.svg";
import JavascriptIcon from "/public/icons/javascript.svg";
import TypescriptIcon from "/public/icons/typescript.svg";
import ReactIcon from "/public/icons/react.svg";
import NextIcon from "/public/icons/next.svg";
import TailwindIcon from "/public/icons/tailwind.svg";
import StyledComponentsIcon from "/public/icons/styledcomponents.svg";
import FramerIcon from "/public/icons/framer.svg";
import WebPackIcon from "/public/icons/webpack.svg";
import ReactQueryIcon from "/public/icons/reactquery.svg";

import type { SkillListItem } from "./Skills";

export const frontendSkills: SkillListItem[] = [
  {
    icon: <HTML5Icon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-orange-300",
    state: "HTML",
    name: "HTML 5",

    level: 3,
  },
  {
    icon: <CSS3Icon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-cyan-400",
    state: "CSS",
    name: "CSS",
    level: 3,
  },
  {
    icon: (
      <JavascriptIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />
    ),
    color: "bg-yellow-400",
    state: "JS",
    name: "Javascript",
    level: 3,
  },
  {
    icon: (
      <TypescriptIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />
    ),
    color: "bg-blue-500",
    state: "TS",
    name: "Typescript",
    level: 3,
  },
  {
    icon: <ReactIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-cyan-500",
    state: "React",
    name: "React",
    level: 3,
  },
  {
    icon: <NextIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-neutral-900",
    state: "Next",
    name: "Next",
    level: 3,
  },
  {
    icon: (
      <img className="mobile:w-4 mobile:h-4 w-3 h-3" src="/icons/zustand.png" />
    ),
    color: "bg-purple-300",
    state: "Zustand",
    name: "Zustand",
    level: 3,
  },
  {
    icon: <TailwindIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-cyan-400",
    state: "Tailwind",
    name: "Tailwind",
    level: 3,
  },
  {
    icon: <WebPackIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-blue-400",
    state: "WebPack",
    name: "WebPack",
    level: 3,
  },
  {
    icon: (
      <StyledComponentsIcon className="w-4 h-4 mobile:w-6 mobile:h-6 fill-white" />
    ),
    color: "bg-pink-400",
    state: "SC",
    name: "Styled Components",
    level: 3,
  },
  {
    icon: <FramerIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-indigo-800",
    state: "Motion",
    name: "Framer Motion",
    level: 3,
  },
  {
    icon: (
      <ReactQueryIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />
    ),
    color: "bg-red-600",
    state: "ReactQuery",
    name: "React Query",
    level: 3,
  },
];
