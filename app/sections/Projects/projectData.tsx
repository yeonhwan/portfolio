import type { CardData } from "./Card";
import ReactIcon from "/public/icons/react.svg";
import JavascriptIcon from "/public/icons/javascript.svg";
import TypescriptIcon from "/public/icons/typescript.svg";
import NextIcon from "/public/icons/next.svg";

export const cardsData: Omit<CardData, "preventHastyClick">[] = [
  {
    thumbnail_vert: "/cards/portfolio-vert.png",
    thumbnail_horizon: "/cards/portfolio-horizon.png",
    title: "Portfolio",
    duration: "2023 07 ~ 2023 07",
    index: 1,
    imgs: [
      "portfolio_1.png",
      "portfolio_2.png",
      "portfolio_3.png",
      "portfolio_4.png",
    ].map((name) => "/project_img/portfolio/" + name),
    descs: [
      "현재 보고 계시는 포트폴리오 프로젝트 입니다.",
      "항상 awwwards와 같은 사이트에서 보게되는 훌륭한 포트폴리오를 나도 한 번 만들어보자는 생각으로 제작하게 되었습니다.",
      "본 프로젝트는 백엔드와 연결되는 프론트엔드의 로직 보다는 보다 화면에 집중시킬 수 있는 디자인과 애니메이션에 중점을 두어 개발했습니다.",
      "",
      "React Three Fiber 를 통해서 첫 화면의 모델링을 구현하여 표현하였습니다.",
      "Tailwind CSS 시스템을 활용해 디자인 및 CSS를 작성하였습니다.",
      "Framer Motion을 통해서 간단한 트랜지션 부터 보다 복잡한 애니메이션을 구현하였습니다.",
    ],
    gitHub: "https://github.com/yeonhwan/portfolio",
    stacks: [
      {
        icon: <NextIcon className="w-3 h-3 fill-white" />,
        color: "bg-black",
      },
      {
        icon: <TypescriptIcon className="w-3 h-3 fill-white" />,
        color: "bg-blue-500",
      },
    ],
  },
  {
    thumbnail_vert: "/cards/crossout-vert.png",
    thumbnail_horizon: "/cards/crossout-horizon.png",
    title: "Crossout",
    duration: "2023 04 ~ 2023 06",
    index: 2,
    imgs: [
      "crossout_1.png",
      "crossout_2.png",
      "crossout_3.png",
      "crossout_4.png",
      "crossout_5.png",
      "crossout_6.png",
      "crossout_7.png",
      "crossout_8.png",
    ].map((name) => "/project_img/crossout/" + name),
    descs: [
      "크로스아웃은 Typescript와 Next 환경을 학습하기 위해 개발하게 된 풀스택 하루 관리 토이프로젝트 입니다.",
      "과거 기초적으로 학습하고 제작했던 React / Express 기반 풀스택 토이 프로젝트를 확장해 완성했습니다.",
      "간단한 투두리스트와 이를 관리할 수 있는 리스트보드, 기분 일기, 가계부, 사용자 테마 및 소셜 로그인 등의 기능을 제공합니다.",
      "스스로 기획, 디자인, 프론트엔드, 백엔드 API, DB Schema 를 개발하였습니다.",
      "",
      "Typescript를 기반으로 Next - tRPC - server - Prisma - DB 로 이어지는 웹 어플리케이션의 흐름을 이해하고 학습하였습니다.",
      "회원 기반 서비스이기 때문에, Next의 SSR 기능을 통해 서버에서 로그인 여부와 회원 정보를 받아 routing을 분리하여 제작하였습니다.",
      "배포는 Vercel을 통해서 진행했고, PlanetScale 을 통해 DB 를 관리하였습니다.",
      "크로스아웃은 모바일 기기의 웹 브라우저 및 PWA 형태로 다운로드 받아 사용할 수 있습니다.",
    ],
    link: "https://crossout.vercel.app",
    gitHub: "https://github.com/yeonhwan/crossout",
    stacks: [
      {
        icon: <NextIcon className="w-3 h-3 fill-white" />,
        color: "bg-black",
      },
      {
        icon: <TypescriptIcon className="w-3 h-3 fill-white" />,
        color: "bg-blue-500",
      },
    ],
  },
  {
    thumbnail_vert: "/cards/indiego-vert.png",
    thumbnail_horizon: "/cards/indiego-horizon.png",
    title: "Indiego",
    duration: "2023 01 ~ 2023 06",
    index: 3,
    imgs: [
      "indiego_1.png",
      "indiego_2.png",
      "indiego_3.png",
      "indiego_4.png",
      "indiego_5.png",
      "indiego_6.png",
    ].map((name) => "/project_img/indiego/" + name),
    descs: [
      "인디고 프로젝트는 지역 연극, 공연 문화를 활성화 시켜보자는 의미에서 시작된 지역 기반 예매 / 커뮤니티 서비스입니다.",
      "프론트엔드 3명, 백엔드 3명의 팀원이 힘을 합쳐 기획, 디자인, API 개발, 프론트엔드 개발을 진행했습니다.",
      "내가 살고 있는 위치를 기반으로 하여, 현재 진행하고 있는 공연을 검색 및 예매를 진행할 수 있습니다.",
      "공연에 관심있는 누구나라면 회원 가입 후 커뮤니티에서 이야기를 나눌 수 있습니다.",
      "",
      "프론트엔드의 팀장 역할을 맡아 디자인, 프론트엔드 서비스 로직 등을 전체적으로 조율하여 개발을 진행했습니다.",
      "인디고 서비스의 메인페이지, 재활용할 수 있는 컴포넌트, 공연 검색, 지도 검색 기능을 개발했습니다.",
      "인디고 서비스는 모바일로 사용할 수 있도록 반응형으로 개발되었습니다.",
      "프로젝트 개발기간 종료 후 실제 서비스 환경을 상정하여 유지 보수 및 베타 테스트를 진행했습니다.",
    ],
    team: true,
    link: "https://indiego.site",
    gitHub: "https://github.com/indiego-project",
    stacks: [
      {
        icon: <ReactIcon className="w-3 h-3 fill-white" />,
        color: "bg-cyan-500",
      },
      {
        icon: <JavascriptIcon className="w-3 h-3 fill-white" />,
        color: "bg-yellow-500",
      },
    ],
  },
  {
    thumbnail_vert: "/cards/mystck-vert.png",
    thumbnail_horizon: "/cards/mystck-horizon.png",
    title: "My Stackoverflow",
    duration: "2022 12 ~ 2023 01",
    index: 4,
    team: true,
    imgs: [
      "mystk_1.png",
      "mystk_2.png",
      "mystk_3.png",
      "mystk_4.png",
      "mystk_5.png",
    ].map((name) => "/project_img/mystk/" + name),
    descs: [
      "프론트엔드 팀원 3명과 백엔드 팀원 3명이 스택오버플로우를 클론 코딩해보는 프로젝트를 진행했습니다.",
      "프론트엔드 부분의 팀장 역할을 맡아 서비스의 디자인과 로직을 재현하는 것에 중점을 두었습니다.",
      "백엔드 API에 데이터를 요청하고 적절하게 화면에 디스플레이 하는 연습을 하였습니다.",
      "프론트엔드 검색, 페이지네이션, 질문 글 작성 및 유효성 검사 기능을 개발하였습니다.",
      "모든 페이지는 반응형 디자인을 적용하였습니다.",
    ],
    gitHub: "https://github.com/codestates-seb/seb41_pre_037",
    stacks: [
      {
        icon: <ReactIcon className="w-3 h-3 fill-white" />,
        color: "bg-cyan-500",
      },
      {
        icon: <JavascriptIcon className="w-3 h-3 fill-white" />,
        color: "bg-yellow-500",
      },
    ],
  },
];
