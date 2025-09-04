// import LoadingSpin from "@/components/common/LoadingSpin";
import { getNewSsoToken, validateMagicCodeApi } from "@/services/api/api";
import { useRequest } from "ahooks";
import React, { useEffect } from "react";
import UserLayout from "../components/Layout";
import { useNavigate, useSearchParams } from "umi";
import { useIntl } from "react-intl";
import { toast } from "@/components/common/Toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const linkKey = searchParams.get("key");
  const ssoKey = searchParams.get("access_token");
  const callbackUrl = searchParams.get("callback_url");
  // const { refresh } = useModel("@@initialState");
  const intl = useIntl();

  const toPage = (token: string) => {
    localStorage.setItem("dream-token", token);
    if (callbackUrl) {
      navigate(decodeURIComponent(callbackUrl));
    } else {
      navigate("/events");
    }
    setTimeout(() => {
      // 更新初始化信息
      // refresh();
    });
  };
  const { loading: loading, run: validateMagicCode } = useRequest(
    async (magic_key) => {
      const data = await validateMagicCodeApi(magic_key);
      if (data.status === "success") {
        toPage(data.token);
      }
    },
    {
      manual: true,
    }
  );
  const { loading: getTokenLoading, run: getNewToken } = useRequest(
    async (magic_key) => {
      const data = await getNewSsoToken(magic_key);
      if (data.status === "success") {
        toPage(data.token);
      }
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    if (!linkKey && !ssoKey) {
      // 使用全局 toast 方法显示错误提示
      toast.error(intl.formatMessage({ id: "magicLink.toast.invalid" }));
    } else if (linkKey) {
      validateMagicCode(linkKey);
    } else if (ssoKey) {
      getNewToken(ssoKey);
    }
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>
          {intl.formatMessage({
            id: "menu.magicLink",
            defaultMessage: "Magic Link",
          })}{" "}
          | {Settings.title}
        </title>
      </Helmet> */}
      <UserLayout>
        <>
          <div className="text-center my-8 relative">
            {/* <LoadingSpin loading={loading || getTokenLoading} /> */}
            <h2 className="text-2xl font-bold text-white mb-8">
              {intl.formatMessage({ id: "magicLink.title" })}
            </h2>

            <button
              className="btn btn-outline btn-primary w-full"
              onClick={() => {
                navigate("/login");
              }}
            >
              {intl.formatMessage({ id: "magicLink.toLoginBtn" })}
            </button>
          </div>
        </>
      </UserLayout>
    </>
  );
};

export default Login;
