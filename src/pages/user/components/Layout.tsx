import React from "react";
import logo from "@/assets/images/desktop-white.png";
import { useIntl } from "react-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const UserLayout: React.FC<any> = ({ children }) => {
  const intl = useIntl();
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7b2d8e 100%)",
      }}
    >
      <div className="w-full flex flex-col items-center justify-center min-h-screen relative">
        {/* 语言切换按钮 */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        <div className="text-center mb-8">
          <img style={{ width: "160px" }} src={logo} alt="" />
        </div>

        <div
          className="w-full max-w-md bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl shadow-2xl"
          style={{ borderStyle: "solid" }}
        >
          {children}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-slate-600">
            {intl.formatMessage({ id: "app.copyright" })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
