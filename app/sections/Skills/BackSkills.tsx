import NodeIcon from "/public/icons/node.svg";
import ExpressIcon from "/public/icons/express.svg";
import PrismaIcon from "/public/icons/prisma.svg";
import TRPCIcon from "/public/icons/trpc.svg";

import type { SkillListItem } from "./Skills";

export const backendSkills: SkillListItem[] = [
  {
    icon: <NodeIcon className="w-4 h-4 fill-white" />,
    color: "bg-green-500",
    state: "Node",
    name: "Node",
    desc: [
      "Node의 개념을 이해하고 브라우저가 아닌 환경에서 자바스크립트를 사용할 수 있습니다.",
      "Node 환경에서 간단한 REPL을 활용할 수 있습니다.",
    ],
    level: 1,
  },
  {
    icon: <ExpressIcon className="w-4 h-4 fill-black" />,
    color: "bg-white",
    state: "Express",
    name: "Express",
    desc: [
      "Express를 활용해 간단한 서버를 제작하고 사용할 수 있습니다.",
      "Express 미들웨어를 사용해서 서버기능을 확장할 수 있습니다.",
    ],
    level: 1,
  },
  {
    icon: <PrismaIcon className="w-4 h-4 fill-white" />,
    color: "bg-indigo-700",
    state: "Prisma",
    name: "Prisma",
    desc: [
      "Database ORM의 의미를 이해하고 사용할 수 있습니다.",
      "Prisma Schema를 제작해 DB에 연결할 수 있습니다.",
      "Prisma API를 통해 서버에서 활용할 수 있습니다.",
    ],
    level: 1,
  },
  {
    icon: <TRPCIcon className="w-6 h-6 fill-white" />,
    color: "bg-cyan-600",
    state: "TRPC",
    name: "Trpc",
    desc: [
      "Trpc를 통해 백엔드와 프론트엔드의 타입 일관성을 유지할 수 있습니다.",
      "개발한 API를 Trpc를 통해 백엔드와 프론트엔드에서 사용할 수 있습니다.",
    ],
    level: 1,
  },
];
