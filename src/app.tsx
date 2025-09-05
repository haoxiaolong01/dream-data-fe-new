import { history } from "umi";
import { LocaleProvider } from "./contexts/LocaleContext";
import requestConfig from "./services/requestConfig";

// 路由白名单，不需要验证token的页面
const WHITE_LIST = [
  "/landing",
  "/login",
  "/login/magic-link",
  "/",
  "/404",
  "/403",
];

// 配置request拦截器 - 立即执行
requestConfig();
const checkToken = (location: Location) => {
  if (location && location.pathname) {
    // 获取当前路径
    const { pathname } = location;

    // 检查是否在白名单中
    if (
      WHITE_LIST.some(
        (path) => pathname === path || pathname.startsWith(path + "/")
      )
    ) {
      return;
    }
    // 检查是否有token
    const token = localStorage.getItem("dream-token");
    // 如果没有token，重定向到登录页
    if (!token) {
      history.replace("/login");
    }
  }
};
export function rootContainer(container: any) {
  // 在rootContainer中设置路由守卫，确保history已经初始化
  if (!window.__ROUTE_GUARD_SET__) {
    window.__ROUTE_GUARD_SET__ = true;
    checkToken(history.location as unknown as Location);
    // 监听路由变化
    history.listen(({ location }) => {
      console.log("222222", history, location);
      checkToken(location as unknown as Location);
    });
  }

  return <LocaleProvider>{container}</LocaleProvider>;
}

// 为window添加类型声明
declare global {
  interface Window {
    __ROUTE_GUARD_SET__?: boolean;
  }
}
