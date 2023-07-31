import NodeIcon from "/public/icons/node.svg";
import ExpressIcon from "/public/icons/express.svg";
import PrismaIcon from "/public/icons/prisma.svg";
import TRPCIcon from "/public/icons/trpc.svg";

import type { SkillListItem } from "./Skills";

export const backendSkills: SkillListItem[] = [
  {
    icon: <NodeIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-green-500",
    state: "Node",
    name: "Node",
    level: 1,
  },
  {
    icon: <ExpressIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-black" />,
    color: "bg-white",
    state: "Express",
    name: "Express",
    level: 1,
  },
  {
    icon: <PrismaIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-indigo-700",
    state: "Prisma",
    name: "Prisma",
    level: 1,
  },
  {
    icon: <TRPCIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-cyan-600",
    state: "TRPC",
    name: "Trpc",
    level: 1,
  },
];
