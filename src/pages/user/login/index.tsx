import { Icon } from "@iconify/react";
import { useEffect } from "react";
import "./index.css";
import LoginView from "./login";
import { useNavigate } from "umi";
import logo from "@/assets/images/desktop-white.png";

const LoginForLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("dream-token")) {
      navigate("/events");
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-y-auto gradient-bg">
      <div className="floating-elements"></div>

      <div className="container mx-auto px-4 py-8 h-screen flex">
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
                Your global hub for <br />
                <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                  IP collaboration
                </span>
                <br />
                and events
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Connect with IP creators worldwide and discover unlimited
                collaboration opportunities. Join our platform to explore the
                latest IP trends.
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
                    Global Collaboration
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                  Connect with IP creators worldwide to build amazing content
                  together
                </p>
              </div>

              <div className="feature-card bg-white bg-opacity-5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    icon="mdi:calendar"
                    className="text-purple-400 text-lg"
                  />
                  <h3 className="text-white font-semibold text-[18px]">
                    Exclusive Events
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                  Join members-only events and get the latest industry insights
                </p>
              </div>

              <div className="feature-card bg-white bg-opacity-5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    icon="mdi:chart-line"
                    className="text-blue-400 text-lg"
                  />
                  <h3 className="text-white font-semibold text-[18px]">
                    IP Rankings
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                  Track IP popularity trends in real-time and stay ahead of the
                  market
                </p>
              </div>

              <div className="feature-card bg-white bg-opacity-5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    icon="mdi:handshake"
                    className="text-green-400 text-lg"
                  />
                  <h3 className="text-white font-semibold text-[18px]">
                    Partner Network
                  </h3>
                </div>
                <p className="text-gray-300 text-xs">
                  Build strategic partnerships with leading brands and platforms
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
