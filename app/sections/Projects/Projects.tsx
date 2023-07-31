import { useLayoutEffect, useState } from "react";
import { animate, delay, stagger, motion } from "framer-motion";
import { useContext } from "react";
import { PageIndexContext } from "@/app/page";

import Card from "./Card";
import { cardsData } from "./projectData";

export type CardIndex = undefined | 1 | 2 | 3 | 4;

export default function Projects() {
  const { index, prevIndex } = useContext(PageIndexContext);
  const [selectedIndex, setSelectedIndex] = useState<CardIndex>();

  useLayoutEffect(() => {
    if (index === 3) {
      animate([
        [
          ".path-stroke",
          { pathLength: [0, 1] },
          { duration: 0.8, delay: stagger(0.1) },
        ],
        [
          ".path-stroke",
          { fillOpacity: [0, 1], strokeOpacity: [1, 0] },
          { duration: 0.5 },
        ],
        [
          ".stroke",
          { width: ["0%", "50%"], opacity: [0, 1] },
          { duration: 0.5, at: "<" },
        ],
        [
          ".card",
          { opacity: [0, 1], y: [20, 0] },
          { type: "spring", delay: stagger(0.1, { startDelay: 0.05 }) },
        ],
      ]);
    } else {
      animate([
        [".outer-container", { opacity: [1, 0] }, { duration: 0.2 }],
        [".ellipse", { opacity: [1, 0] }, { duration: 0.2, at: "<" }],
        [".curtain-container", { opacity: [0, 1] }, { at: "<" }],
        [
          ".curtain",
          { width: ["0%", "14.285%"], opacity: [0, 1] },
          { delay: stagger(0.07, { startDelay: 0, from: "last" }) },
        ],
      ]);
    }
  }, [index]);

  return (
    <div className="relative flex w-screen h-screen bg-white">
      <svg
        className="absolute top-[5%] left-[0%] w-full h-full z-0"
        viewBox="0 0 1617 1160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 1,
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 4,
            ease: "easeOut",
          }}
          className="ellipse"
          d="M837.373 1078.51L836.878 1078.55L836.505 1078.88C808.141 1104 764.417 1122.88 713.218 1135.89C662.052 1148.89 603.567 1155.98 545.817 1157.62C488.066 1159.26 431.099 1155.44 382.971 1146.64C334.781 1137.82 295.674 1124.05 273.448 1105.93C245.773 1083.38 216.068 1063.05 186.864 1043.06C184.934 1041.74 183.006 1040.42 181.081 1039.1C150.006 1017.81 119.693 996.775 93.0663 973.639C39.8579 927.405 1.5 872.907 1.5 791.597C1.5 762.27 8.6809 722.33 20.7288 677.323C32.77 632.341 49.6466 582.392 68.9799 533.08C107.666 434.406 156.11 338.483 195.213 290.039C251.871 219.845 304.643 185.352 382.688 151.594C416.09 137.146 454.101 122.842 499.037 105.931C506.655 103.064 514.473 100.122 522.5 97.0922C577.865 76.1944 643.185 51.1137 722.088 17.4766C758.995 1.74333 805.005 -0.693199 854.578 5.54605C904.131 11.7828 957.109 26.671 1007.85 45.4479C1109.37 83.0117 1201.72 136.048 1239.57 166.174L1239.8 166.362L1240.09 166.444C1303.78 184.357 1397.55 238.583 1475.38 325.486C1553.19 412.358 1615 531.79 1615 680.097C1615 751.874 1583.06 811.228 1530.88 860.298C1478.67 909.394 1406.25 948.152 1325.47 978.628C1163.91 1039.58 969.322 1067.26 837.373 1078.51Z"
          stroke="#eaeaea"
          opacity={0.5}
          stroke-width="2"
        />
      </svg>
      <div className="outer-container w-screen h-screen flex flex-col items-center px-10 py-5 mobile:px-20 mobile:py-8 md:py-20">
        <div className="lg:h-52 md:h-44 mobile:h-36 h-28 w-80 flex flex-col items-center justify-center">
          {/* PROJECTS */}
          <svg
            viewBox="0 0 262 29"
            fill="none"
            className="z-40 w-52 mobile:w-60 lg:w-72"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 28.4041V0.59589H22.8505C28.788 0.59589 32.3565 3.61507 32.3565 11.0041C32.3565 18.3534 28.788 21.3726 22.8805 21.3726H8.99625V28.4041H0ZM8.99625 13.7849H20.5714C22.1907 13.7849 23.1503 12.911 23.1503 11.0041C23.1503 9.09726 22.1608 8.26301 20.5714 8.26301H8.99625V13.7849Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
            <path
              d="M34.7902 28.4041V0.59589H57.7606C63.0984 0.59589 67.0567 3.0589 67.0567 10.6068C67.0567 15.0562 65.7972 17.7973 63.7881 19.3068L68.0163 28.4041H57.7906L54.6419 20.8164H43.7864V28.4041H34.7902ZM43.7864 13.5863H55.3616C56.801 13.5863 57.8805 12.7918 57.8805 10.6863C57.8805 8.97808 56.801 8.26301 55.3616 8.26301H43.7864V13.5863Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
            <path
              d="M87.2367 29C72.6028 29 68.6444 22.4452 68.6444 14.5C68.6444 6.5548 72.6028 0 87.2367 0C101.901 0 105.859 6.5548 105.859 14.5C105.859 22.4452 101.901 29 87.2367 29ZM77.9705 14.5C77.9705 18.3534 79.6798 20.7767 87.2367 20.7767C94.8535 20.7767 96.5328 18.3534 96.5328 14.5C96.5328 10.5671 94.8535 8.22329 87.2367 8.22329C79.6798 8.22329 77.9705 10.5671 77.9705 14.5Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
            <path
              d="M118.545 29C114.497 29 110.809 28.5233 107.03 27.6493V19.2274C110.449 19.9027 113.448 20.4589 117.256 20.4589C121.934 20.4589 123.044 19.6644 123.044 16.1288V8.46164H108.83V0.59589H132.04V17.1616C132.04 26.0603 128.921 29 118.545 29Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
            <path
              d="M135.207 28.4041V0.59589H164.925V8.14383H144.204V10.9247H163.965V17.9562H144.204V20.8562H165.105V28.4041H135.207Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
            <path
              d="M185.874 29C172.619 29 167.012 24.5507 167.012 14.3808C167.012 4.33014 172.529 0 185.694 0C190.222 0 193.94 0.59589 198.468 1.8274V10.3685C194 9.17671 190.762 8.73973 186.713 8.73973C178.947 8.73973 176.338 10.2493 176.338 14.3808C176.338 18.8301 178.857 20.2603 186.683 20.2603C190.882 20.2603 193.91 19.8233 198.588 18.4726V27.1329C194.15 28.4438 190.432 29 185.874 29Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
            <path
              d="M211.074 28.4041V9.13699H199.949V0.59589H230.836V9.13699H219.711V28.4041H211.074Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
            <path
              d="M246.586 29C240.079 29 235.131 28.2055 231.713 26.5767V18.1548C235.221 19.9425 239.839 20.9356 246.017 20.9356C251.384 20.9356 252.194 20.5384 252.194 19.4658C252.194 16.2082 231.533 21.6507 231.533 9.65342C231.533 2.97945 235.431 0 246.257 0C252.164 0 257.322 0.754794 260.741 2.14521V10.3685C257.232 8.81918 253.843 8.18356 248.476 8.18356C241.848 8.18356 241.309 8.62055 241.309 9.6137C241.309 12.9904 262 7.50822 262 18.9493C262 26.4178 258.162 29 246.586 29Z"
              fill="black"
              className="path-stroke"
              strokeWidth={1}
              stroke="gray"
            />
          </svg>
          {/* PROJECTS */}
          <div className="stroke h-1 bg-black z-40 mt-3" />
        </div>
        <motion.div
          layout
          className="flex flex-col lg:flex-row w-full md:w-[90%] max-w-[1500px] h-[80%] lg:h-[60%] justify-evenly items-center">
          {cardsData.map((data) => {
            return (
              <Card
                selectedIndex={selectedIndex}
                thumbnail_vert={data.thumbnail_vert}
                thumbnail_horizon={data.thumbnail_horizon}
                title={data.title}
                duration={data.duration}
                index={data.index}
                imgs={data.imgs}
                descs={data.descs}
                team={data.team}
                setSelectedIndex={setSelectedIndex}
              />
            );
          })}
        </motion.div>
      </div>
      <div className="curtain-container absolute flex justify-end w-screen h-screen opacity-0 z-0 pointer-events-none">
        <div className="curtain h-full bg-orange-400 w-1/7 z-0"></div>
        <div className="curtain h-full bg-orange-400 w-1/7 z-0"></div>
        <div className="curtain h-full bg-orange-400 w-1/7 z-0"></div>
        <div className="curtain h-full bg-orange-400 w-1/7 z-0"></div>
        <div className="curtain h-full bg-orange-400 w-1/7 z-0"></div>
        <div className="curtain h-full bg-orange-400 w-1/7 z-0"></div>
        <div className="curtain h-full bg-orange-400 w-1/7 z-0"></div>
      </div>
    </div>
  );
}
