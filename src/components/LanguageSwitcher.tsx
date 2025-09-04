import React from "react";
import { useLocale } from "../contexts/LocaleContext";

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();

  const handleLanguageChange = (newLocale: "zh-CN" | "en-US") => {
    setLocale(newLocale);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => handleLanguageChange("zh-CN")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            locale === "zh-CN"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          中文
        </button>
        <button
          onClick={() => handleLanguageChange("en-US")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            locale === "en-US"
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
