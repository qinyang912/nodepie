import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "NodePie",
  description: "A blog demo for vuepress-theme-hope",

  theme,

  dest: 'docs',

  // Enable it with pwa
  // shouldPrefetch: false,
});
