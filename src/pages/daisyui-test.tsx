import { Link } from 'umi';

/**
 * daisyUI 组件测试页面
 * 简化版，只包含最基本的daisyUI组件
 */
export default function DaisyUITestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">daisyUI 组件测试</h1>
          <p className="text-gray-600">这个页面用于验证 daisyUI 组件是否正常工作</p>
        </header>

        {/* 按钮测试 - 最基本的daisyUI组件 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">daisyUI 按钮测试</h2>
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-primary">btn-primary</button>
            <button className="btn btn-secondary">btn-secondary</button>
            <button className="btn btn-success">btn-success</button>
            <button className="btn btn-danger">btn-danger</button>
            <button className="btn btn-warning">btn-warning</button>
            <button className="btn btn-info">btn-info</button>
          </div>
        </section>

        {/* 输入框测试 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">daisyUI 输入框测试</h2>
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="daisyUI 输入框" 
              className="input input-primary w-full"
            />
            <input 
              type="text" 
              placeholder="禁用的输入框" 
              className="input input-disabled w-full"
              disabled
            />
          </div>
        </section>

        {/* 卡片测试 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">daisyUI 卡片测试</h2>
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">daisyUI 卡片</h3>
              <p>这是一个使用 daisyUI 的卡片组件</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">确认</button>
              </div>
            </div>
          </div>
        </section>

        {/* 基本样式对比 */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">基本样式对比</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-1">Tailwind 原生按钮：</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Tailwind 原生按钮
              </button>
            </div>
            <div>
              <p className="font-medium mb-1">daisyUI 按钮：</p>
              <button className="btn btn-primary">daisyUI 按钮</button>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-600">
          <p className="mb-4">
            测试完成后，返回 <Link to="/" className="text-blue-500 hover:underline">首页</Link> 或
            <Link to="/test-tailwind" className="text-blue-500 hover:underline ml-1">Tailwind 完整测试</Link>
          </p>
          <p>© 2023 daisyUI 组件测试</p>
        </footer>
      </div>
    </div>
  );
}