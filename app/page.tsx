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

// svg
import YH from "public/YH.svg";

const IndexContext = createContext({ prevIndex: 0, index: 0 });

export default function Home() {
  const [index, setIndex] = useState<0 | 1 | 2 | 3>(0);
  const [mountedPageIndex, setMountedPageIndex] = useState(0);
  const prevIndex = useRef(0);
  const touchEventYStartPoint = useRef<number>();

  useEffect(() => {
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

  // scroll event callback using wheels (moving screen slider)
  const scrollCallback = (e: WheelEvent) => {
    const isScrollDown = e.deltaY > 0;
    if (isScrollDown) {
      setIndex((state) => (state === 3 ? 3 : state + 1) as 0 | 1 | 2 | 3);
    } else if (!isScrollDown) {
      setIndex((state) => (state === 0 ? 0 : state - 1) as 0 | 1 | 2 | 3);
    }
  };

  // scroll event callback using touch devices (moving screen slider)
  const touchStartCallback = (e: TouchEvent) => {
    const startPoint = e.changedTouches[0].screenY;
    touchEventYStartPoint.current = startPoint;
  };

  const touchEndCallback = (e: TouchEvent) => {
    const endPoint = e.changedTouches[0].screenY;
    if (touchEventYStartPoint.current) {
      const startPoint = touchEventYStartPoint.current;
      if (Math.abs(startPoint - endPoint) < 100) return;
      if (startPoint < endPoint) {
        setIndex((state) => (state === 0 ? 0 : state - 1) as 0 | 1 | 2 | 3);
      } else if (startPoint > endPoint) {
        setIndex((state) => (state === 3 ? 3 : state + 1) as 0 | 1 | 2 | 3);
      }
    }
  };

  const debouncedScrollCallback = useDebounce<WheelEvent>(scrollCallback, 500);
  const debouncedTouchStartCallback = useDebounce<TouchEvent>(
    touchStartCallback,
    500
  );
  const debouncedTouchEndCallback = useDebounce<TouchEvent>(
    touchEndCallback,
    500
  );

  useEffect(() => {
    document.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY !== 0 && e.deltaY !== -0) {
          debouncedScrollCallback(e);
        }
      },
      { passive: false }
    );

    document.addEventListener("touchstart", (e) => {
      debouncedTouchStartCallback(e);
    });
    document.addEventListener("touchend", (e) => {
      debouncedTouchEndCallback(e);
    });
  }, []);

  return (
    <main
      className={`flex min-h-screen h-max overflow-hidden flex-col items-center justify-between`}>
      <header className="absolute flex justify-between items-center top-0 left-0 px-10 h-10 w-full z-[100]">
        <YH
          className={`w-10 mobile:w-16 md:w-24 ${
            index === 3 ? "fill-black" : "fill-white"
          } transition-colors delay-700 duration-300`}
        />
        <div className="flex w-max items-center justify-center">
          <p
            className={`text-xs mobile:text-base font-akrobat transition-colors delay-700 duration-300 ${
              index === 1
                ? "text-teal-300"
                : index === 3
                ? "text-neutral-400"
                : "text-white"
            } mx-1`}>
            ABOUT ME
          </p>
          <p
            className={`w-4 h-0.5 transition-colors delay-700 duration-300 ${
              index === 3 ? "bg-neutral-400" : "bg-white"
            }`}></p>
          <p
            className={`text-xs mobile:text-base font-akrobat transition-colors delay-700 duration-300 ${
              index === 2
                ? "text-orange-700"
                : index === 3
                ? "text-neutral-400"
                : "text-white"
            } mx-1`}>
            SKILLS
          </p>
          <p
            className={`w-4 h-0.5 transition-colors delay-700 duration-300 ${
              index === 3 ? "bg-neutral-400" : "bg-white"
            }`}></p>
          <p
            className={`text-xs mobile:text-base font-akrobat transition-colors delay-700 duration-300 ${
              index === 3 ? "text-black" : "text-white"
            } mx-1`}>
            PROJECTS
          </p>
        </div>
      </header>
      <IndexContext.Provider value={{ index, prevIndex: prevIndex.current }}>
        {mountedPageIndex === 0 && <Index IndexContext={IndexContext} />}
        {mountedPageIndex === 1 && <AboutMe IndexContext={IndexContext} />}
        {mountedPageIndex === 2 && <Skills IndexContext={IndexContext} />}
        {mountedPageIndex === 3 && <Projects IndexContext={IndexContext} />}
      </IndexContext.Provider>
    </main>
  );
}
