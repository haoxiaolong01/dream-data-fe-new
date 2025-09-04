import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import zhCN from '../locales/zh-CN';
import enUS from '../locales/en-US';

type Locale = 'zh-CN' | 'en-US';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Record<string, string>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en-US');

  const value: LocaleContextType = {
    locale,
    setLocale,
    messages: messages[locale],
  };

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider messages={messages[locale]} locale={locale}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
