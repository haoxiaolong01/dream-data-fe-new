import { Icon } from "@iconify/react";
import { useEffect } from "react";
import "./index.css";
import LoginView from "./login";
import { useNavigate } from "umi";
import logo from "@/assets/images/desktop-white.png";
import { useIntl } from 'react-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const LoginForLanding = () => {
  const navigate = useNavigate();
  const intl = useIntl();

  useEffect(() => {
    if (localStorage.getItem("dream-token")) {
      navigate("/events");
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-y-auto gradient-bg">
      <div className="floating-elements"></div>

      <div className="container mx-auto px-4 py-8 h-screen flex">
        {/* 语言切换按钮 */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
          {/* 左侧内容 */}
          <div className="flex flex-col justify-center space-y-6 lg:pr-12">
            {/* Logo */}
            <div className="mb-4">
              <img style={{ width: "160px" }} src={logo} alt="" />
            </div>

            {/* 主标题 */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight text-glow">
                {intl.formatMessage({ id: 'login.hero.title1' })}<br />
                <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                  {intl.formatMessage({ id: 'login.hero.title2' })}
                </span>
                <br />
                {intl.formatMessage({ id: 'login.hero.title3' })}
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                {intl.formatMessage({ id: 'login.hero.subtitle' })}
              </p>
            </div>

            {/* 特性卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="feature-card bg-white bg-opacity-5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    icon="mdi:account-group"
                    className="text-orange-400 text-lg"
                  />
                  <h3 className="text-white font-semibold text-[18px]">
                    {intl.formatMessage({ id: 'login.feature.collaboration.title' })}
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                    {intl.formatMessage({ id: 'login.feature.collaboration.desc' })}
                  </p>
              </div>

              <div className="feature-card bg-white bg-opacity-5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    icon="mdi:calendar"
                    className="text-purple-400 text-lg"
                  />
                  <h3 className="text-white font-semibold text-[18px]">
                    {intl.formatMessage({ id: 'login.feature.events.title' })}
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                    {intl.formatMessage({ id: 'login.feature.events.desc' })}
                  </p>
              </div>

              <div className="feature-card bg-white bg-opacity-5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    icon="mdi:chart-line"
                    className="text-blue-400 text-lg"
                  />
                  <h3 className="text-white font-semibold text-[18px]">
                    {intl.formatMessage({ id: 'login.feature.rankings.title' })}
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                    {intl.formatMessage({ id: 'login.feature.rankings.desc' })}
                  </p>
              </div>

              <div className="feature-card bg-white bg-opacity-5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    icon="mdi:handshake"
                    className="text-green-400 text-lg"
                  />
                  <h3 className="text-white font-semibold text-[18px]">
                    {intl.formatMessage({ id: 'login.feature.partner.title' })}
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                    {intl.formatMessage({ id: 'login.feature.partner.desc' })}
                  </p>
              </div>
            </div>
          </div>

          {/* 右侧登录表单 */}
          <div className="flex flex-col justify-center">
            {/* 统一登录卡片 */}
            <div className="login-card card-glow rounded-2xl p-8 lg:p-10 max-w-md mx-auto w-full">
              <LoginView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForLanding;
