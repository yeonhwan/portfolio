"use client";

// Components
import Index from "@/app/sections/Index/Index";
import AboutMe from "@/app/sections/AboutMe/AboutMe";

// hooks
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { createContext } from "react";
import Skills from "./sections/Skills/Skills";

export const PageIndexContext = createContext({ prevIndex: 0, index: 0 });

export default function Home() {
  const [index, setIndex] = useState<0 | 1 | 2>(0);
  const [mountedPageIndex, setMountedPageIndex] = useState(0);
  const prevIndex = useRef(0);

  useEffect(() => {
    // const mainEl = document.querySelector("main");
    // if (mainEl) {
    //   const lastClassName = mainEl.classList.item(mainEl.classList.length - 1);
    //   if (lastClassName && lastClassName.includes("translate")) {
    //     mainEl.classList.remove(lastClassName);
    //   }
    //   const translate = index * 50;
    //   mainEl.classList.add(`-translate-y-[${translate}%]`);
    // }

    if (index === 0) {
      setTimeout(() => {
        setMountedPageIndex((state) => {
          console.log(state);
          prevIndex.current = state;
          return 0;
        });
      }, 600);
    } else if (index === 1) {
      setTimeout(() => {
        setMountedPageIndex((state) => {
          console.log(state);
          prevIndex.current = state;
          return 1;
        });
      }, 600);
    } else if (index === 2) {
      setTimeout(() => {
        setMountedPageIndex((state) => {
          console.log(state);
          prevIndex.current = state;
          return 2;
        });
      }, 600);
    }
  }, [index]);

  const scrollCallback = (e: WheelEvent) => {
    const isScrollDown = e.deltaY > 0;
    if (isScrollDown) {
      setIndex((state) => (state === 2 ? 2 : state + 1) as 0 | 1 | 2);
    } else {
      setIndex((state) => (state === 0 ? 0 : state - 1) as 0 | 1 | 2);
    }
  };
  const debouncedScrollCallback = useDebounce<WheelEvent>(scrollCallback, 200);

  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      debouncedScrollCallback(e);
    },
    { passive: false }
  );

  return (
    <main
      className={`flex min-h-screen h-max overflow-y-auto overflow-x-hidden flex-col items-center justify-between`}>
      <PageIndexContext.Provider
        value={{ index, prevIndex: prevIndex.current }}>
        {mountedPageIndex === 0 && <Index />}
        {mountedPageIndex === 1 && <AboutMe />}
        {mountedPageIndex === 2 && <Skills />}
      </PageIndexContext.Provider>
    </main>
  );
}
