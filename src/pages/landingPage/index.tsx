import React from "react";
import { useNavigate } from "umi";
import { Icon } from "@iconify/react";
import { useLocale } from "@/contexts/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
// 临时定义缺失的类型
interface EventItem {
  cover?: string;
  ui_tags?: Array<{ value: string; description: string }>;
  event_type: string;
  event_region?: string;
  event_name: string;
  event_name_zh?: string;
  event_summary?: string;
  event_start_date?: string;
  event_end_date?: string;
  confidence_reasoning?: string;
  confidence_score?: number;
  animationDelay?: string;
}

import logo from "@/assets/images/desktop-dark.svg";
import logoWhite from "@/assets/images/desktop-white.png";
import get1 from "@/assets/images/get1.jpg";
import get2 from "@/assets/images/get2.jpg";
import get3 from "@/assets/images/get3.jpg";
import get4 from "@/assets/images/get4.jpg";
import bg1 from "@/assets/images/bg1.jpg";
import bg2 from "@/assets/images/bg2.jpg";
import bg3 from "@/assets/images/bg3.jpg";
import card from "@/assets/images/card.png";

import EventCard from "./components/EventCard";
import FeatureCard from "./components/FeatureCard";
import "./index.css";
import { useRequest } from "ahooks";
import { getLandingPageEventsApi } from "@/services/api/api";
import classNames from "classnames";
import LinkTemplate from "@/components/LinkTemplate";

const tabList = [
  {
    key: "recent",
    tabKey: "landingPage.tab.recent",
  },
  {
    key: "ip",
    tabKey: "landingPage.tab.ip",
  },
  {
    key: "upcoming",
    tabKey: "landingPage.tab.upcoming",
  },
];

// 功能卡片数据
const featuresData = [
  {
    titleKey: "landingPage.feature.ipMatching.title",
    descriptionKey: "landingPage.feature.ipMatching.desc",
    imageSrc: get1,
    imageAlt: "IP Matching",
    animationDelay: undefined,
  },
  {
    titleKey: "landingPage.feature.eventDiscovery.title",
    descriptionKey: "landingPage.feature.eventDiscovery.desc",
    imageSrc: get2,
    imageAlt: "Event Discovery",
    animationDelay: "0.1s",
  },
  {
    titleKey: "landingPage.feature.ipRankings.title",
    descriptionKey: "landingPage.feature.ipRankings.desc",
    imageSrc: get3,
    imageAlt: "IP Rankings",
    animationDelay: "0.2s",
  },
  {
    titleKey: "landingPage.feature.partnerInsights.title",
    descriptionKey: "landingPage.feature.partnerInsights.desc",
    imageSrc: get4,
    imageAlt: "Partner Insights",
    animationDelay: "0.3s",
  },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { messages } = useLocale();

  // 模拟 events 数据

  // 获取events列表
  const { data: eventsData } = useRequest(
    async () => {
      const response = await getLandingPageEventsApi();
      return (
        response?.data?.slice(0, 6).map((item: any, index: number) => ({
          ...item,
          animationDelay: 0.1 * index + "s",
        })) || []
      );
    },
    {
      // manual: true,
    }
  );

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <div className="landing-page-container">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <img src={logo} alt="logo" className="w-24" />
              <div className="flex space-x-8">
                <div
                  className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                  onClick={toLogin}
                >
                  {messages["landingPage.header.events"]}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                className="font-medium h-[36px] bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-md transition-colors"
                onClick={toLogin}
              >
                {messages["landingPage.header.login"]}
                <Icon
                  icon="lucide:arrow-right-to-bracket"
                  className="inline-block ml-2 w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section
        className="text-white py-20"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "left bottom",
          backgroundSize: "cover",
        }}
      >
        <div
          className="max-w-4xl mx-auto px-4 text-center"
          style={{ transform: "translateY(50px)" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            {messages["landingPage.hero.title"]}
          </h1>

          <div className="mt-12 animate-fadeInUp animate-float flex justify-center">
            <div
              className="h-[60px] bg-white rounded-lg shadow-lg p-4 pl-8 search-input !w-[650px] flex items-center cursor-pointer"
              style={{ transform: "translateY(60px)", maxWidth: "90vw" }}
              onClick={toLogin}
            >
              <Icon
                icon="lucide:search"
                className="text-[26px] cursor-pointer mr-2"
                style={{
                  color: "rgba(71, 85, 105, 0.8)",
                  transform: "translateX(-10px)",
                }}
              />
              <span className="text-gray-400">
                {messages["landingPage.hero.searchPlaceholder"]}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="flex justify-center space-x-4 pt-12">
          {tabList.map((item) => (
            <div
              key={item.key}
              className={classNames(
                "px-6 py-3 bg-white text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors rounded-lg cursor-pointer",
                {
                  "!bg-gray-800 !text-white": "recent" === item.key,
                }
              )}
              onClick={() => {
                toLogin();
              }}
            >
              {messages[item.tabKey]}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData?.map((event: EventItem, index: number) => (
              <LinkTemplate key={index} link="/login">
                <EventCard item={event} animationDelay={event.animationDelay} />
              </LinkTemplate>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="font-medium h-[46px] bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-md transition-colors"
              onClick={toLogin}
            >
              {messages["landingPage.viewAllEvents"]}
              <Icon
                icon="lucide:arrow-right"
                className="inline-block ml-2 w-4 h-4"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            {messages["landingPage.whatYouGet"]}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                title={messages[feature.titleKey]}
                description={messages[feature.descriptionKey]}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                animationDelay={feature.animationDelay}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="text-white py-20"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "left bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {messages["landingPage.cta.title"]}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {messages["landingPage.cta.subtitle"]}
              </p>
              <button
                className="font-medium h-[64px] bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-md transition-colors"
                onClick={toLogin}
              >
                {messages["landingPage.cta.getStarted"]}
                <Icon
                  icon="lucide:arrow-right"
                  className="inline-block ml-2 w-4 h-4"
                />
              </button>
            </div>
            <div
              className="animate-fadeInUp animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={card}
                alt="Platform Preview"
                className="h-[400px] rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-white py-16"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundPosition: "left bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src={logoWhite} alt="logo" className="w-24" />
            </div>
            <p className="text-white font-medium mb-8">
              {messages["landingPage.footer.tagline"]}
            </p>

            <div className="flex justify-center space-x-4 mb-8">
              <button
                className="font-medium h-[36px] bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-md transition-colors"
                onClick={toLogin}
              >
                {messages["landingPage.header.login"]}
                <Icon
                  icon="lucide:arrow-right-to-bracket"
                  className="inline-block ml-2 w-4 h-4"
                />
              </button>
            </div>
          </div>

          <div className="pt-8">
            <div className="text-center text-gray-500">
              <p>{messages["landingPage.footer.copyright"]}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
