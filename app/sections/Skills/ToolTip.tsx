import type { SkillList } from "./Skills";

type ToolTipProps = {
  level: 1 | 2 | 3;
  selectedSkill: SkillList | undefined;
  skill: SkillList;
};

export default function ToolTip({ level, selectedSkill, skill }: ToolTipProps) {
  const desc =
    level === 1
      ? "학습 경험 있음"
      : level === 2
      ? "취미 개발 수준"
      : "프로덕션 가능";

  return (
    <div
      tabIndex={-1}
      className={`flex items-center justify-center w-max transition-opacity h-max absolute -top-[70px] ${
        selectedSkill === skill ? "opacity-1" : "opacity-0 z-[-10]"
      } `}>
      <div className="flex flex-col justify-center items-center w-24 mobile:w-28 h-14 rounded-full relative bg-teal-500 shadow-md">
        <p className="text-white text-[8px] mobile:text-xs">Level : {level}</p>
        <p className="text-white text-[8px] mobile:text-xs">{desc}</p>
        <span className="absolute -bottom-2 left-[42%] w-0 h-0 border-8 border-t-8 border-b-0 border-r-transparent border-l-transparent border-teal-500 shadow-md"></span>
      </div>
    </div>
  );
}
