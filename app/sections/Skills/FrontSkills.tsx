import HTML5Icon from "/public/icons/html5.svg";
import CSS3Icon from "/public/icons/css3.svg";
import JavascriptIcon from "/public/icons/javascript.svg";
import TypescriptIcon from "/public/icons/typescript.svg";
import ReactIcon from "/public/icons/react.svg";
import NextIcon from "/public/icons/next.svg";
import TailwindIcon from "/public/icons/tailwind.svg";
import StyledComponentsIcon from "/public/icons/styledcomponents.svg";
import FramerIcon from "/public/icons/framer.svg";
import MUIIcon from "/public/icons/mui.svg";
import WebPackIcon from "/public/icons/webpack.svg";
import SCSSIcon from "/public/icons/sass.svg";
import ReactQueryIcon from "/public/icons/reactquery.svg";

import type { SkillListItem } from "./Skills";

export const frontendSkills: SkillListItem[] = [
  {
    icon: <HTML5Icon className="w-4 h-4 fill-white" />,
    color: "bg-orange-400",
    state: "HTML",
    name: "HTML 5",
    desc: [
      "태그의 종류와 의미를 이해하고 적절히 사용할 수 있습니다",
      "태그의 어트리뷰트를 적절히 사용할 수 있습니다.",
      "시멘틱 HTML 구조를 적용할 수 있습니다.",
      "img, svg, audio, video, canvas 등의 멀티 미디어 태그를 사용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <CSS3Icon className="w-4 h-4 fill-white" />,
    color: "bg-cyan-400",
    state: "CSS",
    name: "CSS",
    desc: [
      "CSS의 속성을 이해하고 디자인에 맞게 적용할 수 있습니다.",
      "CSS의 선택자를 구분할 수 있고 활용할 수 있습니다.",
      "CSS flex box, grid 레이아웃 시스템을 이해하고 배치할 수 있습니다.",
      "CSS를 활용해 transition 과 animation을 작성할 수 있습니다.",
      "CSS를 미디어쿼리를 통해 반응형 디자인을 구현할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <JavascriptIcon className="w-4 h-4 fill-white" />,
    color: "bg-yellow-400",
    state: "JS",
    name: "Javascript",
    desc: [
      "Javascript의 기초 및 심화 문법(ES Next)을 이해하고 사용할 수 있습니다.",
      "Javascript의 동작 원리를 이해하고 활용할 수 있습니다.",
      "배열, 객체, Map, Set 등의 자료구조를 사용할 수 있습니다.",
      "DOM 구조를 조절하고 변형하여 사용할 수 있습니다.",
      "Event를 활용해 브라우저와 적절히 상호작용 할 수 있습니다.",
      "비동기 API를 사용해 서버와 AJAX 통신을 할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <TypescriptIcon className="w-4 h-4 fill-white" />,
    color: "bg-blue-500",
    state: "TS",
    name: "Typescript",
    desc: [
      "기본 Typescript의 문법을 이해하고 사용할 수 있습니다.",
      "Typescript의 타입 시스템을 이해하고 적절히 사용할 수 있습니다.",
      "제네릭을 활용해 필요에 맞게 동적으로 타입을 생성하고 사용할 수 있습니다.",
      "타입 변형 및 타입 체킹을 필요에 맞게 사용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <ReactIcon className="w-4 h-4 fill-white" />,
    color: "bg-cyan-500",
    state: "React",
    name: "React",
    desc: [
      "React 프레임워크의 시스템을 이해하고 JSX 문법을 사용할 수 있습니다.",
      "React의 props와 state 시스템을 이해하고 적절히 활용할 수 있습니다.",
      "React 함수 컴포넌트를 통해 재사용 가능한 컴포넌트를 만들 수 있습니다.",
      "React hooks을 적절히 사용할 수 있고, custom hook을 작성할 수 있습니다.",
      "React context를 작성하고 전역적으로 상태를 관리할 수 있습니다.",
      "React 생명주기를 이해하고 이에 맞게 상태를 생성, 관리할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <NextIcon className="w-4 h-4 fill-white" />,
    color: "bg-neutral-900",
    state: "Next",
    name: "Next",
    desc: [
      "React 와 Next의 차이점을 이해하고 필요에 맞게 사용할 수 있습니다.",
      "SPA, SSR, SSG 렌더링 방식을 활용해 어플리케이션을 만들 수 있습니다.",
      "Next를 통해 간단한 node 서버를 작성하고 사용할 수 있습니다.",
      "Next 13의 문법을 이해하고 사용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <img className="w-4 h-4" src="/icons/zustand.png" />,
    color: "bg-purple-300",
    state: "Zustand",
    name: "Zustand",
    desc: [
      "Zustand를 활용해 상태관리 store를 만들고 사용할 수 있습니다.",
      "Immer 라이브러를 활용해 상태를 불변하게 관리할 수 있습니다.",
      "Persist 미들웨어를 활용해 브라우저에 상태를 저장할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <TailwindIcon className="w-4 h-4 fill-white" />,
    color: "bg-cyan-400",
    state: "Tailwind",
    name: "Tailwind CSS",
    desc: [
      "Tailwind의 utility first 시스템을 이해하고 적절히 사용할 수 있습니다.",
      "Tailwind config를 통해 필요에 맞는 시스템을 추가할 수 있습니다.",
      "적절한 커스텀 utility 클래스를 생성해 사용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <StyledComponentsIcon className="w-6 h-6 fill-white" />,
    color: "bg-pink-400",
    state: "SC",
    name: "Styled Components",
    desc: [
      "CSS in JS 시스템과 문법을 이해하고 적절히 사용할 수 있습니다.",
      "Styled Components와 states를 활용해 사용할 수 있습니다.",
      "재사용 가능한 Styled Components를 만들어 사용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <SCSSIcon className="w-4 h-4 fill-white" />,
    color: "bg-pink-600",
    state: "SCSS",
    name: "SCSS",
    desc: [
      "SCSS의 문법을 이해하고 사용할 수 있습니다.",
      "CSS 변수와 믹스인을 만들어 사용할 수 있습니다.",
    ],
    level: 2,
  },
  {
    icon: <MUIIcon className="w-4 h-4 fill-white" />,
    color: "bg-indigo-500",
    state: "MUI",
    name: "Material UI",
    desc: [
      "상황과 필요에 맞는 UI 컴포넌트를 찾아 사용할 수 있습니다.",
      "UI 컴포넌틀르 필요에 맞게 커스텀하게 변경하여 사용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <WebPackIcon className="w-4 h-4 fill-white" />,
    color: "bg-blue-400",
    state: "WebPack",
    name: "WebPack",
    desc: [
      "모듈링과 번들링의 개념을 이해하고 웹팩을 사용할 수 있습니다.",
      "프로젝트를 빌드하고 배포 가능한 상태를 만들 수 있습니다.",
      "webpack config을 통해서 필요에 맞게 extend해서 사용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <FramerIcon className="w-4 h-4 fill-white" />,
    color: "bg-indigo-800",
    state: "Motion",
    name: "Framer Motion",
    desc: [
      "Motion 라이브러리를 통해서 css animation을 제작해 사용할 수 있습니다.",
      "보다 복잡한 animation 트랜지션과 시퀀싱을 작성할 수 있습니다.",
      "제스쳐를 활용한 인터랙션 animation을 활용할 수 있습니다.",
    ],
    level: 3,
  },
  {
    icon: <ReactQueryIcon className="w-4 h-4 fill-white" />,
    color: "bg-red-600",
    state: "Motion",
    name: "React Query",
    desc: [
      "React Query를 통해 필요한 프론트엔드 AJAX API를 사용할 수 있습니다.",
      "서버 API의 맞게 query, mutation 요청을 보낼 수 있습니다.",
    ],
    level: 3,
  },
];
