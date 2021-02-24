import React from "react";

import AboutMe from "./component/AboutMe";
import Article from "./component/Article";
import Gallery from "./component/Gallery";
import SNS from "./component/SNS";
import Footer from "./component/Footer";

const App = () => {

  const eventItems = [
    {
      link: "https://rakus.connpass.com/event/200838/",
      image: "./img/210209LT.png",
      title: "UI/UXのトレンド（2020年／2021年）LT会に登壇しました",
      text: "2020~2021年のUIデザイントレンドのNeumorphismについてお話しました"
    },
    {
      link: "https://youtu.be/i9ibnwtrRbE",
      image: "./img/yjtc2021.png",
      title: "Yahoo! JAPAN Tech Confernece 2021に登壇しました",
      text: "「スマホ Web 版トップページの事例で学ぶ デザインシステム導入の過程で意識すべきポイント」についてお話しました"
    },
  ]

  const articleItems = [
    {
      link:
        "https://techblog.yahoo.co.jp/entry/2020120530052930/",
      image: "./img/techblog2020.png",
      title: "スマホWeb版 Yahoo! JAPANトップページ デザインシステム導入",
      text:
        "デザインシステムを導入した経緯や手法について書いています"
    },
    {
      link:
        "https://techblog.yahoo.co.jp/advent-calendar-2018/design-endearing-vui/",
      image: "./img/vui.png",
      title: "愛される Voice User Interface への道のり",
      text:
        "プロトタイピングから得たVUIデザインのTipsについてまとめています"
    }
  ];
  const lineStampItems = [
    {
      link: "https://store.line.me/stickershop/product/7154677/ja",
      image: "./img/omochiguma.png",
      title: "おもちぐまのスタンプ",
      text:
        "オリジナルキャラ「おもちぐま」のスタンプです"
    },
    {
      link: "https://store.line.me/stickershop/product/1333908/ja",
      image: "./img/kuma_stamp.png",
      title: "KUMA'S STICKER ~1st IMPACT~",
      text: "はじめて作ったLINEスタンプです"
    }
  ];
  const galleryItems = [
    {
      link:
        "https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_01.png"
    },
    {
      link:
        "https://www.instagram.com/p/CECOKcLDqge/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_02.png"
    },
    {
      link:
        "https://www.instagram.com/p/CGxRbMpDRAh/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_03.png"
    },
    {
      link:
        "https://www.instagram.com/p/CEmGTd0jkCD/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_04.png"
    },
    {
      link:
        "https://www.instagram.com/p/BykxbaTDLsa/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_05.png"
    },
    {
      link:
        "https://www.instagram.com/p/Bxpi11tHsjc/?utm_source=ig_web_copy_link",
      image: "./img/omochiguma_06.png"
    }
  ];

  return (
    <div className="App">
        <AboutMe />
        <Article articleItems={eventItems}>Event</Article>
        <Article articleItems={articleItems}>Article</Article>
        <Gallery galleryItems={galleryItems} />
        <Article articleItems={lineStampItems}>LINE Stamp</Article>
        <SNS />
        <Footer />
    </div>
  );
};

export default App;
