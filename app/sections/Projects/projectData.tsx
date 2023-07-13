import type { CardData } from "./Card";

export const cardsData: CardData[] = [
  {
    thumbnail: "/cards/portfolio-vert.png",
    title: "Portfolio",
    duration: "2023 07 ~ 2023 07",
    index: 1,
    imgs: [
      "portfolio_1.png",
      "portfolio_2.png",
      "portfolio_3.png",
      "portfolio_4.png",
    ].map((name) => "/project_img/portfolio/" + name),
  },
  {
    thumbnail: "/cards/crossout-vert.png",
    title: "Crossout",
    duration: "2023 04 ~ 2023 06",
    index: 2,
    imgs: [
      "crossout_1.png",
      "crossout_2.png",
      "crossout_3.png",
      "crossout_4.png",
      "crossout_5.png",
      "crossout_6.png",
      "crossout_7.png",
      "crossout_8.png",
    ].map((name) => "/project_img/crossout/" + name),
  },
  {
    thumbnail: "/cards/indiego-vert.png",
    title: "Indiego",
    duration: "2023 01 ~ 2023 06",
    index: 3,
    imgs: [
      "indiego_1.png",
      "indiego_2.png",
      "indiego_3.png",
      "indiego_4.png",
      "indiego_5.png",
      "indiego_6.png",
    ].map((name) => "/project_img/indiego/" + name),
    team: true,
  },
  {
    thumbnail: "/cards/mystck-vert.png",
    title: "My Stackoverflow",
    duration: "2022 12 ~ 2022 01",
    index: 4,
    team: true,
    imgs: ["mystk_1.png", "mystk_2.png", "mystk_3.png", "mystk_4.png"].map(
      (name) => "/project_img/mystk/" + name
    ),
  },
];
