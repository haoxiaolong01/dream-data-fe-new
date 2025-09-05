import { IntlShape } from "react-intl";
import zhCN from "../locales/zh-CN";
import enUS from "../locales/en-US";

// 消息资源
const messages = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

// 默认语言
const DEFAULT_LOCALE = "en-US";

// 创建一个简单的Intl实例，用于在非React组件环境中获取国际化消息
class IntlProvider {
  private locale: string;
  private intl: IntlShape | null = null;

  constructor() {
    // 从localStorage获取保存的语言，或者使用默认语言
    this.locale = localStorage.getItem("locale") || DEFAULT_LOCALE;
  }

  // 设置语言
  setLocale(locale: string) {
    this.locale = locale;
    localStorage.setItem("locale", locale);
  }

  // 获取当前语言
  getLocale() {
    return this.locale;
  }

  // 格式化消息
  formatMessage(id: string, values?: Record<string, any>) {
    const currentMessages =
      messages[this.locale as keyof typeof messages] ||
      messages[DEFAULT_LOCALE];

    // 尝试获取消息
    // 使用类型断言来解决索引类型问题
    let message = (currentMessages as Record<string, string>)[id];
    console.log("currentMessages", message, values);

    // 如果找不到消息，返回id作为默认值
    if (!message) {
      return id;
    }

    // 如果有值需要替换，进行替换
    if (values) {
      Object.keys(values).forEach((key) => {
        const regex = new RegExp(`\\{${key}\\}`, "g");
        message = message.replace(regex, values[key]);
      });
    }

    return message;
  }
}

// 创建单例实例
const intlProvider = new IntlProvider();

// 定义getIntl返回的接口
export interface IntlHelper {
  formatMessage: (id: string, values?: Record<string, any>) => string;
}

// 导出方法
export const getIntl = (): IntlHelper => {
  return {
    formatMessage: (id: string, values?: Record<string, any>) => {
      return intlProvider.formatMessage(id, values);
    },
  };
};

export const setLocale = (locale: string) => {
  intlProvider.setLocale(locale);
};

export const getLocale = () => {
  return intlProvider.getLocale();
};
