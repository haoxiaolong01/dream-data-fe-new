import { useIntl } from "react-intl";

export default function TestI18nPage() {
  const intl = useIntl();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              国际化功能测试页面
            </h1>
            <p className="text-gray-600">
              当前语言: {intl.locale === "zh-CN" ? "中文" : "English"}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 导航测试 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                导航菜单测试
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>首页:</span>
                  <span className="font-medium">
                    {intl.formatMessage({ id: "nav.home" })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>文档:</span>
                  <span className="font-medium">
                    {intl.formatMessage({ id: "nav.docs" })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>DaisyUI:</span>
                  <span className="font-medium">
                    {intl.formatMessage({ id: "nav.daisyui" })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>TailwindCSS:</span>
                  <span className="font-medium">
                    {intl.formatMessage({ id: "nav.tailwindcss" })}
                  </span>
                </div>
              </div>
            </div>

            {/* 首页内容测试 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                首页内容测试
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>标题:</span>
                  <span className="font-medium">
                    {intl.formatMessage({ id: "home.title" })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>副标题:</span>
                  <span className="font-medium">
                    {intl.formatMessage({ id: "home.subtitle" })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>卡片1标题:</span>
                  <span className="font-medium">
                    {intl.formatMessage({ id: "home.card1.title" })}
                  </span>
                </div>
              </div>
            </div>

            {/* 按钮组件测试 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                按钮组件测试
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>主要按钮:</span>
                  <button className="btn btn-primary btn-sm">
                    {intl.formatMessage({ id: "home.daisyui.button.primary" })}
                  </button>
                </div>
                <div className="flex justify-between">
                  <span>成功按钮:</span>
                  <button className="btn btn-success btn-sm">
                    {intl.formatMessage({ id: "home.daisyui.button.success" })}
                  </button>
                </div>
                <div className="flex justify-between">
                  <span>危险按钮:</span>
                  <button className="btn btn-danger btn-sm">
                    {intl.formatMessage({ id: "home.daisyui.button.danger" })}
                  </button>
                </div>
              </div>
            </div>

            {/* 输入框组件测试 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                输入框组件测试
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {intl.formatMessage({ id: "home.daisyui.input.username" })}
                  </label>
                  <input
                    type="text"
                    placeholder={intl.formatMessage({
                      id: "home.daisyui.input.username.placeholder",
                    })}
                    className="input input-primary w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {intl.formatMessage({ id: "home.daisyui.input.password" })}
                  </label>
                  <input
                    type="password"
                    placeholder={intl.formatMessage({
                      id: "home.daisyui.input.password.placeholder",
                    })}
                    className="input input-secondary w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              切换页面右上角的语言切换器来测试不同语言的效果
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
