import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/daisyui", component: "daisyui-test" },
    { path: "/tailwindcss", component: "test-tailwind" },
    { path: "/test-i18n", component: "test-i18n" },
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
