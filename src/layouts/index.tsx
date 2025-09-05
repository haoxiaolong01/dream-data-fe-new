import { Link, Outlet } from "umi";
import { useIntl } from "react-intl";
import styles from "./index.less";
import "../global.css";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Layout() {
  const intl = useIntl();

  return (
    <div className={styles.navs}>
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              {intl.formatMessage({ id: "nav.home" })}
            </Link>
          </li>
          <li>
            <Link to="/docs" className="hover:text-blue-600 transition-colors">
              {intl.formatMessage({ id: "nav.docs" })}
            </Link>
          </li>
          <li>
            <Link
              to="/daisyui"
              className="hover:text-blue-600 transition-colors"
            >
              {intl.formatMessage({ id: "nav.daisyui" })}
            </Link>
          </li>
          <li>
            <Link
              to="/tailwindcss"
              className="hover:text-blue-600 transition-colors"
            >
              {intl.formatMessage({ id: "nav.tailwindcss" })}
            </Link>
          </li>
          <li>
            <Link
              to="/test-i18n"
              className="hover:text-blue-600 transition-colors"
            >
              国际化测试
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="hover:text-blue-600 transition-colors"
            >
              {intl.formatMessage({ id: "nav.events" })}
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/umijs/umi"
              className="hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {intl.formatMessage({ id: "nav.github" })}
            </a>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
