import GitIcon from "/public/icons/git.svg";
import GithubIcon from "/public/icons/github.svg";
import VercelIcon from "/public/icons/vercel.svg";
import AdobeIcon from "/public/icons/adobe.svg";
import FigmaIcon from "/public/icons/figma.svg";
import VSCodeIcon from "/public/icons/vscode.svg";

import type { ToolListItem } from "./Skills";

export const tools: ToolListItem[] = [
  {
    icon: <GitIcon className="w-4 h-4 fill-white" />,
    color: "bg-orange-700",
    state: "Git",
    name: "Git",
    desc: [
      "Git 명령어들을 이해하고 상황에 맞게 적용할 수 있습니다.",
      "Git을 명령어를 이용하여 프로젝트의 버전 관리를 할 수 있습니다.",
    ],
  },
  {
    icon: <GithubIcon className="w-4 h-4 fill-white" />,
    color: "bg-black",
    state: "Github",
    name: "Github",
    desc: [
      "Github을 통해 공동 프로젝트를 개발 / 유지 / 배포한 경험이 있습니다.",
      "Github actions를 사용해 자동화 배포를 진행해 본 경험이 있습니다.",
    ],
  },
  {
    icon: <VercelIcon className="w-4 h-4 fill-white" />,
    color: "bg-neutral-800",
    state: "Vercel",
    name: "Vercel",
    desc: [
      "Vercel를 통해서 Next 풀스택 프로젝트를 배포해 본 경험이 있습니다.",
      "Vercel를 통해서 Github과 연동하여 프로젝트를 배포한 경험이 있습니다.",
    ],
  },
  {
    icon: <VSCodeIcon className="w-4 h-4 fill-white" />,
    color: "bg-cyan-600",
    state: "VSC",
    name: "VS Code",
    desc: [
      "주요한 IDE 로써, 현재 모든 프로젝트에 사용하고 있습니다.",
      "필요한 VSC 확장 패키지를 찾아 적용할 수 있습니다.",
    ],
  },
  {
    icon: <FigmaIcon className="w-4 h-4 fill-white" />,
    color:
      "bg-gradient-to-br from-red-300 from-30% via-green-400 via-60% to-blue-500",
    state: "Figma",
    name: "Figma",
    desc: [
      "Figma로 프로젝트 디자인의 와이어프레임 및 프로토타입을 작성한 경험이 있습니다.",
      "Figma를 활용하여 디자인을 제작하고 사용할 수 있습니다.",
    ],
  },
  {
    icon: <AdobeIcon className="w-4 h-4 fill-white" />,
    color: "bg-red-500",
    state: "Adobe",
    name: "Adobe",
    desc: [
      "Illustartor 를 통해 간단한 벡터 편집을 해본 경험이 있습니다.",
      "Photoshop을 통해 필요한 이미지를 제작해 사용한 경험이 있습니다.",
      "After Effects를 통해 lottie 애니메이션을 제작해본 경험이 있습니다.",
    ],
  },
];
