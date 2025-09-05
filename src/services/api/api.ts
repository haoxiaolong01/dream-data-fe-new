import request from "umi-request";
import { env } from "../env";

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    user: API.CurrentUser;
  }>(`${env.API_BASE_URL}/user/me`, {
    method: "GET",
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`${env.API_BASE_URL}/login/outLogin`, {
    method: "POST",
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(
  body: API.LoginParams,
  options?: { [key: string]: any }
) {
  return request<API.LoginResult>(`${env.API_BASE_URL}/userlogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.FakeCaptcha>(`${env.API_BASE_URL}/login/captcha`, {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

// 登录相关api
/**
 * 向邮箱发送登录链接
 * @param email - 邮箱地址
 */
export async function sendEmailForLogin(
  email: string,
  callbackUrl: string | null
) {
  let url = `${env.API_BASE_URL}/user/email-login`;
  const data: { email: string; callback_url?: string } = { email };
  if (callbackUrl) {
    data.callback_url = callbackUrl;
  }
  return request<{ status: string }>(url, {
    method: "POST",
    data,
  });
}

/**
 * 验证魔法链接代码的有效性
 * @param magic_key - 用于验证的魔法链接代码
 */
export async function validateMagicCodeApi(magic_key: string) {
  let url = `${env.API_BASE_URL}/user/magic-code`;

  return request<API.MagicLinkResponse>(url, {
    method: "POST",
    data: {
      magic_key,
    },
  });
}

/**
 * 获取新的 SSO 令牌
 * @param jwt - 用于获取新 SSO 令牌的 JWT 令牌
 */
export async function getNewSsoToken(jwt: string) {
  let url = `${env.API_BASE_URL}/user/yodo1-sso`;

  return request<API.MagicLinkResponse>(url, {
    method: "POST",
    data: {
      jwt,
    },
  });
}

/**
 * 从后端接口获取用户信息
 */
export async function getUserinfoApi() {
  let url = `${env.API_BASE_URL}/user/profile`;

  return request<API.UserProfile>(url, {
    method: "GET",
  });
}

/**
 * 提交用户信息到接口
 * @param data - 用户信息对象，包含用户姓名、职位和主要目的
 * @param data.name - 用户的称呼
 * @param data.job_title - 用户的职位
 * @param data.goal - 用户的主要目的，多个目的以字符串形式存储
 */
export async function submitUserinfoApi(data: {
  name: string;
  job_title: string;
  goal: string;
}) {
  let url = `${env.API_BASE_URL}/user/profile`;

  return request<API.UserProfile>(url, {
    method: "PUT",
    data,
  });
}
export async function getLandingPageEventsApi() {
  return request<any>(env.API_BASE_URL + "/collab/get-landing-page-events", {
    method: "GET",
  });
}
