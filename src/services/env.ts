// 环境变量类型定义

export interface EnvConfig {
  NODE_ENV: string;
  API_BASE_URL: string;
  REACT_APP_API_SSO_URL: string;
}

// 获取环境变量配置
export const getEnvConfig = (): EnvConfig => {
  return {
    NODE_ENV: process.env.NODE_ENV || "development",
    API_BASE_URL:
      process.env.API_BASE_URL || "https://dream-data-api-v4.yodo1.me/api",
    REACT_APP_API_SSO_URL:
      process.env.REACT_APP_API_SSO_URL ||
      "https://sso.yodo1.me/auth?callback_url=",
  };
};

// 导出当前环境配置
export const env = getEnvConfig();
