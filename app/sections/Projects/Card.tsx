import { motion } from "framer-motion";
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";
import type { CardIndex } from "./Projects";
import NextArrow from "public/icons/right.svg";
import BackgArrow from "public/icons/back.svg";

type OverlayProps = {
  isSelected: boolean;
};

export type CardData = {
  index: 1 | 2 | 3 | 4;
  thumbnail_vert: string;
  thumbnail_horizon: string;
  title: string;
  duration: string;
  imgs: string[];
  descs: string[];
  deploy?: string;
  repo?: string;
  team?: boolean;
};

type CardProps = CardData & {
  selectedIndex: CardIndex;
  setSelectedIndex: Dispatch<SetStateAction<CardIndex>>;
};

export default function Card({
  thumbnail_vert,
  title,
  duration,
  selectedIndex,
  index,
  imgs,
  descs,
  team,
  setSelectedIndex,
}: CardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const isVerticalImage = useWindowWidth(false, 1024);
  const isMobileImage = useWindowWidth(false, 640);

  function Overlay({ isSelected }: OverlayProps) {
    return (
      <motion.div
        initial={{ opacity: isSelected ? 1 : 0 }}
        animate={{ opacity: isSelected ? 1 : 0 }}
        onClick={(e) => {
          e.stopPropagation();
          if (isSelected) {
            setIsSelected(false);
          }
        }}
        className={`absolute top-0 left-0 w-screen h-screen bg-black/90 z-0 ${
          isSelected ? "" : "pointer-events-none"
        }`}></motion.div>
    );
  }

  return (
    <motion.div
      whileHover="hover"
      className="card flex w-full h-[140px] lg:w-[250px] lg:h-[400px] relative group">
      <motion.div
        layoutRoot
        initial={{ scale: 1 }}
        data-open={isSelected}
        style={{ borderRadius: 6 }}
        onAnimationEnd={() => {
          if (!isSelected) {
            setSelectedIndex(undefined);
          }
        }}
        transition={{
          delay: isSelected ? 0.3 : 0,
          ease: "easeInOut",
        }}
        onClick={(e) => {
          if (!isSelected) {
            setIsSelected(true);
            setSelectedIndex(index);
          }
        }}
        className={`flex items-center hover:cursor-pointer shadow-md ${
          selectedIndex === index ? "z-[100]" : ""
        } ${
          isSelected
            ? "fixed top-0 left-0 w-full h-full py-8 px-4 mobile:py-10 mobile:px-10 md:p-20 justify-center pointer-events-auto"
            : "justify-start w-full h-[95%] xl:w-[250px] xl:h-[400px] lg:w-[200px] lg:h-[320px]"
        }`}>
        <Overlay isSelected={isSelected} />
        <motion.div
          layout
          data-open={isSelected}
          transition={{ delay: isSelected ? 0.3 : 0, ease: "easeInOut" }}
          className={`${
            isSelected
              ? "min-w-[350px] mobile:min-w-[420px] sm:min-w-[450px] md:min-w-0"
              : "min-w-[250px] mobile:min-w-[380px] sm:min-w-[450px] md:min-w-0"
          } max-w-[780px] overflow-hidden w-full h-full flex flex-col items-center`}>
          <motion.div
            initial={{ borderRadius: 0 }}
            transition={{ delay: isSelected ? 0.3 : 0, ease: "easeInOut" }}
            animate={{ borderRadius: isSelected ? 10 : 0 }}
            layout
            whileHover="none"
            className={`w-full flex flex-col overflow-hidden h-full relative bg-neutral-700 ${
              isSelected ? "" : "pt-3 px-2"
            }`}>
            {!isSelected && (
              <div className="absolute rounded-full bg-gray-300 top-[45%] left-[45%] z-[200] pointer-events-none group-hover:w-10 h-10 group-hover:animate-ripple" />
            )}
            {isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: isSelected ? 0.3 : 0 }}
                className="w-full h-full flex flex-col justify-start sm:justify-between items-center">
                <div className="w-full max-w-[800px] h-[25%] sm:h-[45%] overflow-hidden relative">
                  <div className="flex w-full h-full relative">
                    {imgs.map((src, i) => {
                      return (
                        <motion.img
                          initial={{
                            opacity: imgIndex === i ? 0 : 1,
                          }}
                          animate={{
                            opacity: imgIndex === i ? 1 : 0,
                          }}
                          className="w-full max-w-[800px] h-full absolute top-0 left-0"
                          src={src}
                        />
                      );
                    })}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (imgIndex > 0) {
                        setImgIndex((state) => state - 1);
                      }
                    }}
                    className="flex items-center justify-center p-2 absolute w-6 h-6 left-0 top-1/2 z-[200] bg-neutral-500 rounded-full ml-2">
                    <BackgArrow className="w-3 fill-white" />
                  </button>
                  <div className="bottom-2 absolute flex items-center justify-center w-full h-max">
                    {imgs.map((_, i) => {
                      return (
                        <span
                          className={`${
                            imgIndex === i ? "bg-neutral-200" : "bg-neutral-600"
                          } w-2 h-2 rounded-full mr-2`}
                        />
                      );
                    })}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (imgIndex < imgs.length - 1) {
                        setImgIndex((state) => state + 1);
                      }
                    }}
                    className="flex items-center justify-center p-2 absolute w-6 h-6 right-0 top-1/2 z-[200] bg-neutral-500 rounded-full mr-2">
                    <NextArrow className="w-3 fill-white" />
                  </button>
                </div>
                <div className="flex flex-col w-full h-[55%] p-4 text-white font-nanum">
                  <p className="text-lg font-bold font-nanum">
                    {title}
                    <sub className="text-xs font-nanum"> ({duration})</sub>
                  </p>
                  <div className="flex items-center mb-2">
                    <p className="font-bold font-suite mr-2">
                      {team ? "Team " : "Solo "}/
                    </p>
                    <p className="text-sm font-suite">Stacks</p>
                  </div>
                  {descs.map((paragraph) => {
                    return (
                      <p
                        className={`font-suite text-xs sm:text-sm ${
                          paragraph === "" ? "mb-2" : "mb-1"
                        }`}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            )}
            {!isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: isSelected ? 0 : 0.2 }}
                animate={{ opacity: 1 }}
                className="w-full flex flex-col absolute top-0 justify-center items-center">
                <motion.p className="text-white font-bold w-full font-nanum z-50">
                  {title}
                </motion.p>
                <motion.p className="text-white font-bold w-full text-xs font-nanum z-50">
                  {duration}
                </motion.p>
              </motion.div>
            )}
            {isVerticalImage ? (
              <motion.img
                layout
                data-open={isSelected}
                transition={{ duration: 0.2, delay: isSelected ? 0 : 0.3 }}
                initial={{ opacity: 1 }}
                animate={isSelected ? { opacity: 0 } : { opacity: 1 }}
                className="w-full xl:w-[250px] xl:h-[400px] lg:w-[200px] lg:h-[320px] max-w-[100vw] absolute top-0 left-0 scale-105"
                src={thumbnail_vert}
              />
            ) : isMobileImage ? (
              <motion.div
                layout
                data-open={isSelected}
                transition={{ duration: 0.2, delay: isSelected ? 0 : 0.3 }}
                initial={{ opacity: 1 }}
                animate={isSelected ? { opacity: 0 } : { opacity: 1 }}
                className={`h-[145px] w-[110%] -left-[10%] md:w-full absolute top-0 md:left-0 ${
                  title === "Porfolio"
                    ? "bg-portfolio_horizon"
                    : title === "Crossout"
                    ? "bg-crossout_horizon"
                    : title === "Indiego"
                    ? "bg-indiego_horizon"
                    : "bg-mystck_horizon"
                } bg-center`}
              />
            ) : (
              <motion.div
                layout
                data-open={isSelected}
                transition={{ duration: 0.2, delay: isSelected ? 0 : 0.3 }}
                initial={{ opacity: 1 }}
                animate={isSelected ? { opacity: 0 } : { opacity: 1 }}
                className={`h-[145px] w-full absolute top-0 left-0 ${
                  title === "Porfolio"
                    ? "bg-portfolio_mobile"
                    : title === "Crossout"
                    ? "bg-crossout_mobile"
                    : title === "Indiego"
                    ? "bg-indiego_mobile"
                    : "bg-mystck_mobile"
                } bg-center`}
              />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
