import request from "umi-request";
import { history } from "umi";
import { toast } from "@/components/common/Toast";
import { getIntl, IntlHelper } from "@/utils/intl";

// 创建一个request拦截器配置
const requestConfig = () => {
  // 请求拦截器
  request.interceptors.request.use((url, options) => {
    // 从localStorage获取token
    const token = localStorage.getItem("dream-token");

    // 如果有token，就添加到请求头中
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return {
      url,
      options: {
        ...options,
      },
    };
  });

  // 响应拦截器
  request.interceptors.response.use((response) => {
    // 对于200系列的响应，表示请求成功
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    // 获取国际化消息
    const intl = getIntl();

    // 处理不同类型的错误
    switch (response.status) {
      case 401:
      case 403:
        // 清除本地存储的token
        localStorage.removeItem("dream-token");

        // 显示token权限问题的错误提示
        toast.error(intl.formatMessage("api.error.unauthorized"));

        // 重定向到登录页
        history.replace("/login");
        break;
      case 400:
        // 处理请求参数错误
        toast.error(intl.formatMessage("api.error.badRequest"));
        break;
      case 404:
        // 处理资源未找到错误
        toast.error(intl.formatMessage("api.error.notFound"));
        break;
      case 500:
        // 处理服务器内部错误
        toast.error(intl.formatMessage("api.error.serverError"));
        break;
      default:
        // 处理其他类型的错误
        toast.error(intl.formatMessage("api.error.unknown"));
    }

    // 抛出错误以便上层处理
    throw response;
  });
};

export default requestConfig;
