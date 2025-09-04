import { sendEmailForLogin } from "@/services/api/api";
import { Icon } from "@iconify/react";
import { useRequest } from "ahooks";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "umi";
import validator from "validator";
import { useIntl } from 'react-intl';
// import Settings from "../../../../config/defaultSettings";

const LoginView: React.FC = () => {
  const [searchParams] = useSearchParams();
  const callbackUrl = searchParams.get("callback_url");
  const urlEmail = searchParams.get("email");
  const [email, setEmail] = useState<string>("");
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const intl = useIntl();

  const { loading: loading, run: sendEmail } = useRequest(
    async () => {
      const data = await sendEmailForLogin(email, callbackUrl);
      if (data.status === "success") {
        if (sendSuccess) {
          // 使用daisyui的toast替代antd的message
          const toast = document.createElement("div");
          toast.className = "toast toast-top toast-end";
          toast.innerHTML = `
            <div class="alert alert-success">
              <span>{intl.formatMessage({ id: 'login.toast.resendSuccess' })}</span>
            </div>
          `;
          document.body.appendChild(toast);
          setTimeout(() => document.body.removeChild(toast), 3000);
        }
        setSendSuccess(true);
      }
    },
    {
      manual: true,
    }
  );
  const handleSubmit = async () => {
    // 登录
    if (!email) {
      const toast = document.createElement("div");
      toast.className = "toast toast-top toast-end";
      toast.innerHTML = `
        <div class="alert alert-warning">
          <span>{intl.formatMessage({ id: 'login.toast.pleaseInputEmail' })}</span>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => document.body.removeChild(toast), 3000);
      return;
    }
    // 验证邮箱格式
    if (!validator.isEmail(email)) {
      const toast = document.createElement("div");
      toast.className = "toast toast-top toast-end";
      toast.innerHTML = `
        <div class="alert alert-warning">
          <span>{intl.formatMessage({ id: 'login.toast.invalidEmail' })}</span>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => document.body.removeChild(toast), 3000);
      return;
    }
    sendEmail();
  };
  useEffect(() => {
    if (urlEmail) {
      setEmail(urlEmail);
    }
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>
          {intl.formatMessage({
            id: "menu.login",
            defaultMessage: "Landing-Login",
          })}{" "}
          | {Settings.title}
        </title>
      </Helmet> */}
      {sendSuccess ? (
        <div className="backdrop-blur-sm rounded-2xl max-w-md w-full text-center">
          <div className="text-white text-xl font-semibold mb-4">
            {intl.formatMessage({ id: 'login.sentLink.title' })}
          </div>

          <div className="text-white text-lg font-medium mb-6 bg-slate-700/50 rounded-lg py-3 px-4">
            {email}
          </div>

          <div className="mb-6">
            <div className="text-slate-300 text-sm mb-1">
              {intl.formatMessage({ id: 'login.sentLink.notReceived' })}
                <button
                  aria-label={intl.formatMessage({ id: 'login.sentLink.resendBtn' })}
                  className="btn btn-link text-blue-400 hover:text-blue-300 transition-colors px-1"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                {loading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Resend"
                )}
              </button>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
            <div className="text-slate-400 text-xs leading-relaxed mb-3">
              {intl.formatMessage({ id: 'login.sentLink.checkSpam' })}
            </div>
            <div className="text-slate-400 text-xs">
              {intl.formatMessage({ id: 'login.sentLink.needHelp' })}
              <button
                className="btn btn-link text-blue-400 hover:text-blue-300 transition-colors px-1"
                onClick={() => {
                  window.open(
                    "https://dv16x.share.hsforms.com/2-KH1Ktu7QqeHJOmZIEycHg"
                  );
                }}
              >
                {intl.formatMessage({ id: 'login.form.contactSupport' })}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {intl.formatMessage({ id: 'login.form.title' })}
            </div>
          </div>

          <div className="tip-card rounded-lg p-4 mt-6">
            <div className="flex items-center space-x-3">
              <Icon
                icon="mdi:information"
                className="text-orange-400 text-[40px]"
              />
              <div>
                <div className="text-slate-300 text-sm">
                {intl.formatMessage({ id: 'login.tip.message' })}
              </div>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-300">
                Work Email
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={intl.formatMessage({ id: 'login.form.emailPlaceholder' })}
                  className="input input-bordered w-full bg-slate-700 border-slate-600 text-white placeholder-slate-500 pl-10"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                  <Icon icon="mdi:email" className="text-slate-400 text-lg" />
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary w-full h-12"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                intl.formatMessage({ id: 'login.form.sendLink' })
              )}
            </button>

            <div className="text-center text-sm text-slate-400 mt-6">
              {intl.formatMessage({ id: 'login.form.trouble' })}
              <button
                className="btn btn-link px-1 h-5"
                onClick={() => {
                  window.open(
                    "https://dv16x.share.hsforms.com/2-KH1Ktu7QqeHJOmZIEycHg"
                  );
                }}
              >
                {intl.formatMessage({ id: 'login.form.contactSupport' })}
              </button>
            </div>

            <div className="flex items-center my-6">
              <div
                className="flex-grow border-t border-slate-700"
                style={{ borderTopStyle: "solid" }}
              ></div>
              <span className="flex-shrink mx-4 text-slate-500 text-sm">
                {intl.formatMessage({ id: 'login.form.or' })}
              </span>
              <div
                className="flex-grow border-t border-slate-700"
                style={{ borderTopStyle: "solid" }}
              ></div>
            </div>
            <button
              className="btn btn-outline btn-primary w-full h-14"
              onClick={() => {
                let url = `${window.location.protocol}//${window.location.host}/login/magic-link`;
                if (callbackUrl) {
                  url = url + "?callback_url=" + callbackUrl;
                }
                const ssoUrl = `${process.env.REACT_APP_API_SSO_URL || "https://sso.yodo1.com/login?redirect="}${encodeURIComponent(url)}`;

                window.location.href = ssoUrl;
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 23 23" fill="currentColor">
                <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
              </svg>
              {intl.formatMessage({ id: 'login.form.ssoLogin' })}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default LoginView;
