import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    // { path: "/", component: "index" },
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
