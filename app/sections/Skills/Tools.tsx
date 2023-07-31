import GitIcon from "/public/icons/git.svg";
import GithubIcon from "/public/icons/github.svg";
import VercelIcon from "/public/icons/vercel.svg";
import AdobeIcon from "/public/icons/adobe.svg";
import FigmaIcon from "/public/icons/figma.svg";
import VSCodeIcon from "/public/icons/vscode.svg";

import type { ToolListItem } from "./Skills";

export const tools: ToolListItem[] = [
  {
    icon: <GitIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-orange-700",
    state: "Git",
    name: "Git",
  },
  {
    icon: <GithubIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-black",
    state: "Github",
    name: "Github",
  },
  {
    icon: <VercelIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-neutral-800",
    state: "Vercel",
    name: "Vercel",
  },
  {
    icon: <VSCodeIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-cyan-600",
    state: "VSC",
    name: "VS Code",
  },
  {
    icon: <FigmaIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color:
      "bg-gradient-to-br from-red-300 from-30% via-green-400 via-60% to-blue-500",
    state: "Figma",
    name: "Figma",
  },
  {
    icon: <AdobeIcon className="mobile:w-4 mobile:h-4 w-3 h-3 fill-white" />,
    color: "bg-red-500",
    state: "Adobe",
    name: "Adobe",
  },
];
