import { motion } from "framer-motion";
import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import type { CardIndex } from "./Projects";
import NextArrow from "public/icons/right.svg";
import BackgArrow from "public/icons/back.svg";

type OverlayProps = {
  isSelected: boolean;
};

export type CardData = {
  index: 1 | 2 | 3 | 4;
  thumbnail: string;
  title: string;
  duration: string;
  imgs?: string[];
  descs?: string[];
  deploy?: string;
  repo?: string;
  team?: boolean;
};

type CardProps = CardData & {
  selectedIndex: CardIndex;
  setSelectedIndex: Dispatch<SetStateAction<CardIndex>>;
};

export default function Card({
  thumbnail,
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

  useEffect(() => {
    console.log(imgIndex);
  }, [imgIndex]);

  return (
    <motion.div
      whileHover="hover"
      className="card flex w-[250px] h-[400px] relative group">
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
          delay: isSelected ? 0.2 : 0,
          ease: "easeInOut",
        }}
        onClick={(e) => {
          if (!isSelected) {
            setIsSelected(true);
            setSelectedIndex(index);
          }
        }}
        className={`flex items-center hover:cursor-pointer ${
          selectedIndex === index ? "z-[100]" : ""
        } ${
          isSelected
            ? "fixed top-0 left-0 w-full h-full p-20 justify-center pointer-events-auto"
            : "justify-start h-[400px] w-[250px]"
        }`}>
        <Overlay isSelected={isSelected} />
        <motion.div
          layout
          data-open={isSelected}
          transition={{ delay: isSelected ? 0.2 : 0, ease: "easeInOut" }}
          className="max-w-[780px] overflow-hidden w-full h-full flex flex-col items-center">
          <motion.div
            initial={{ borderRadius: 0 }}
            transition={{ delay: isSelected ? 0.2 : 0, ease: "easeInOut" }}
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
                className="w-full h-full flex flex-col justify-between items-center">
                <div className="w-full max-w-[800px] h-[45%] overflow-hidden relative">
                  <div className="flex w-full h-full relative">
                    {imgs && imgs.length ? (
                      imgs.map((src, i) => {
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
                      })
                    ) : (
                      <>
                        <motion.img
                          initial={{ opacity: imgIndex === 0 ? 1 : 0 }}
                          animate={{ opacity: imgIndex === 0 ? 0 : 1 }}
                          className="w-full max-w-[800px] h-full absolute top-0 left-0"
                          src="/project_img/example.png"
                        />
                        <motion.img
                          initial={{ opacity: imgIndex === 1 ? 1 : 0 }}
                          animate={{ opacity: imgIndex === 1 ? 0 : 1 }}
                          className="w-full max-w-[800px] h-full absolute top-0 left-0"
                          src="/project_img/example2.png"
                        />
                      </>
                    )}
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
                  <div className="bottom-2 right-[45%] absolute flex items-center w-max h-max">
                    {imgs?.map((_, i) => {
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
                      if (
                        imgIndex < (imgs && imgs.length ? imgs.length - 1 : 1)
                      ) {
                        setImgIndex((state) => state + 1);
                      }
                    }}
                    className="flex items-center justify-center p-2 absolute w-6 h-6 right-0 top-1/2 z-[200] bg-neutral-500 rounded-full mr-2">
                    <NextArrow className="w-3 fill-white" />
                  </button>
                </div>
                <div className="flex flex-col w-full h-[55%] p-4 text-white font-nanum">
                  <p className="text-lg font-bold">
                    {title}
                    <sub className="text-xs font-nanum"> ({duration})</sub>
                  </p>
                  <div className="flex items-center">
                    <p className="font-bold font-suite mr-2">
                      {team ? "Team " : "Solo "}/
                    </p>
                    <p className="text-sm font-suite">Stacks</p>
                  </div>
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
            <motion.img
              layout
              data-open={isSelected}
              transition={{ duration: 0.2, delay: isSelected ? 0 : 0.3 }}
              initial={{ opacity: 1 }}
              animate={isSelected ? { opacity: 0 } : { opacity: 1 }}
              className="w-[250px] max-w-[100vw] h-[400px] absolute top-0 left-0 scale-105"
              src={thumbnail}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
