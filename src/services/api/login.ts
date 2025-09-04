// @ts-ignore
/* eslint-disable */
import request from "umi-request";
import { env } from '../env';

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
