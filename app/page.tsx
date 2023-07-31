"use client";

// Components
import Index from "@/app/sections/Index/Index";
import AboutMe from "@/app/sections/AboutMe/AboutMe";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";

// hooks
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { createContext } from "react";

export const PageIndexContext = createContext({ prevIndex: 0, index: 0 });

export default function Home() {
  const [index, setIndex] = useState<0 | 1 | 2 | 3>(0);
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
          prevIndex.current = state;
          return 0;
        });
      }, 600);
    } else if (index === 1) {
      setTimeout(() => {
        setMountedPageIndex((state) => {
          prevIndex.current = state;
          return 1;
        });
      }, 600);
    } else if (index === 2 && mountedPageIndex === 1) {
      setTimeout(() => {
        setMountedPageIndex((state) => {
          prevIndex.current = state;
          return 2;
        });
      }, 600);
    } else if (index === 2 && mountedPageIndex === 3) {
      setTimeout(() => {
        setMountedPageIndex((state) => {
          prevIndex.current = state;
          return 2;
        });
      }, 1000);
    } else if (index === 3) {
      setTimeout(() => {
        setMountedPageIndex((state) => {
          prevIndex.current = state;
          return 3;
        });
      }, 1000);
    }
  }, [index]);

  const scrollCallback = (e: WheelEvent) => {
    const isScrollDown = e.deltaY > 0;
    if (isScrollDown) {
      setIndex((state) => (state === 3 ? 3 : state + 1) as 0 | 1 | 2 | 3);
    } else if (!isScrollDown && e.deltaY !== 0) {
      setIndex((state) => (state === 0 ? 0 : state - 1) as 0 | 1 | 2 | 3);
    }
  };
  const debouncedScrollCallback = useDebounce<WheelEvent>(scrollCallback, 300);

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
      className={`flex min-h-screen h-max overflow-hidden flex-col items-center justify-between`}>
      <PageIndexContext.Provider
        value={{ index, prevIndex: prevIndex.current }}>
        {mountedPageIndex === 0 && <Index />}
        {mountedPageIndex === 1 && <AboutMe />}
        {mountedPageIndex === 2 && <Skills />}
        {mountedPageIndex === 3 && <Projects />}
      </PageIndexContext.Provider>
    </main>
  );
}
