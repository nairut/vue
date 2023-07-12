import Vue from "vue";
import Router from "vue-router";
import X1502 from "./components/X1502";
import IPhone14ProMax2 from "./components/IPhone14ProMax2";
import X1500 from "./components/X1500";
import X1501 from "./components/X1501";
import IPhone14ProMax1 from "./components/IPhone14ProMax1";
import { iPhone14ProMax2Data, x1500Data, x1501Data } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/1502",
      component: X1502,
      props: {
        group12:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af3351c3cf1656376d14fb/img/group-1-1@2x.png",
      },
    },
    {
      path: "/iphone-14-pro-max-2",
      component: IPhone14ProMax2,
      props: {
        title: "Professional Translation Services",
        address:
          "120 languages that fits in your budget<br />11,000+ translators<br />Easy, Technological, Professional",
        group11:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af375dede621da433baccd/img/group-1-1@2x.png",
        group2Props: iPhone14ProMax2Data.group2Props,
      },
    },
    {
      path: "/1501",
      component: X1501,
      props: {
        rectangle5:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af1644c5775f81b534b7b4/img/rectangle-5-1@2x.png",
        rectangle2:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af1644c5775f81b534b7b4/img/rectangle-2-1@2x.png",
        rectangle3:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af1644c5775f81b534b7b4/img/rectangle-3-1@2x.png",
        vector1Props: x1501Data.vector1Props,
      },
    },
    {
      path: "/iphone-14-pro-max-1",
      component: IPhone14ProMax1,
      props: {
        title: "Professional Translation Services",
        address:
          "120 languages that fits in your budget<br />11,000+ translators<br />Easy, Technological, Professional",
        overlapGroup:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af185c2fc3ee3073c1d331/img/group-1-1@2x.png",
        vector4:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af2841539340af073e430e/img/vector-3.png",
      },
    },
    {
      path: "*",
      component: X1500,
      props: {
        rectangle5:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af1644c5775f81b534b7b4/img/rectangle-5-1@2x.png",
        rectangle2:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af1644c5775f81b534b7b4/img/rectangle-2-1@2x.png",
        rectangle3:
          "https://anima-uploads.s3.amazonaws.com/projects/64aeda1297f54546bfc9d7eb/releases/64af1644c5775f81b534b7b4/img/rectangle-3-1@2x.png",
        vector1Props: x1500Data.vector1Props,
      },
    },
  ],
});
