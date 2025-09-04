import { defineConfig } from "umi";

export default defineConfig({
  // 环境变量配置
  define: {
    "process.env.NODE_ENV": process.env.NODE_ENV,
    "process.env.API_BASE_URL": process.env.API_BASE_URL,
    "process.env.REACT_APP_API_SSO_URL": process.env.REACT_APP_API_SSO_URL,
  },

  routes: [
    { path: "/", redirect: "/landing" },
    {
      path: "/landing",
      layout: false,
      component: "landingPage",
    },
    {
      path: "/login",
      layout: false,
      component: "user/login",
    },

    {
      path: "/login/magic-link",
      layout: false,
      component: "user/magicLink",
    },
  ],
  npmClient: "pnpm",
});
