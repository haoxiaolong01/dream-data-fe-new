import { Link } from 'umi';

/**
 * Tailwind CSS 样式测试页面
 * 用于验证各种 Tailwind CSS 类是否正常工作
 */
export default function TailwindTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center text-indigo-700 mb-2">Tailwind CSS 样式测试</h1>
          <p className="text-center text-gray-600">这个页面用于验证所有 Tailwind CSS 样式是否正常工作</p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* 颜色测试 */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">颜色测试</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg text-center">bg-blue-500</div>
            <div className="bg-red-500 text-white p-4 rounded-lg text-center">bg-red-500</div>
            <div className="bg-green-500 text-white p-4 rounded-lg text-center">bg-green-500</div>
            <div className="bg-purple-500 text-white p-4 rounded-lg text-center">bg-purple-500</div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">bg-yellow-500</div>
            <div className="bg-indigo-500 text-white p-4 rounded-lg text-center">bg-indigo-500</div>
            <div className="bg-pink-500 text-white p-4 rounded-lg text-center">bg-pink-500</div>
            <div className="bg-teal-500 text-white p-4 rounded-lg text-center">bg-teal-500</div>
          </div>
        </section>

        {/* 间距测试 */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">间距测试</h2>
          <div className="space-y-4">
            <div className="bg-gray-200 p-2 rounded-lg">p-2</div>
            <div className="bg-gray-200 p-4 rounded-lg">p-4</div>
            <div className="bg-gray-200 p-6 rounded-lg">p-6</div>
            <div className="bg-gray-200 p-8 rounded-lg">p-8</div>
            <div className="flex space-x-4">
              <div className="bg-blue-200 p-4 rounded-lg flex-1">flex-1</div>
              <div className="bg-red-200 p-4 rounded-lg flex-1">flex-1</div>
            </div>
          </div>
        </section>

        {/* 排版测试 */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">排版测试</h2>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-800">text-5xl font-bold</h1>
            <h2 className="text-4xl font-bold text-gray-800">text-4xl font-bold</h2>
            <h3 className="text-3xl font-semibold text-gray-800">text-3xl font-semibold</h3>
            <h4 className="text-2xl font-semibold text-gray-800">text-2xl font-semibold</h4>
            <p className="text-lg text-gray-600">text-lg text-gray-600</p>
            <p className="text-sm text-gray-500">text-sm text-gray-500</p>
            <p className="font-mono text-gray-700">font-mono</p>
            <p className="italic text-gray-700">italic</p>
            <p className="font-bold text-gray-700">font-bold</p>
            <p className="text-center text-gray-700">text-center</p>
            <p className="text-right text-gray-700">text-right</p>
          </div>
        </section>

        {/* 边框和阴影测试 */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">边框和阴影测试</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-4 rounded-lg">border border-gray-300</div>
            <div className="border-2 border-blue-500 p-4 rounded-lg">border-2 border-blue-500</div>
            <div className="border-t-4 border-red-500 p-4">border-t-4 border-red-500</div>
            <div className="border-r-4 border-green-500 p-4">border-r-4 border-green-500</div>
            <div className="rounded-full bg-gray-200 h-24 w-24 flex items-center justify-center">rounded-full</div>
            <div className="rounded-xl border-2 border-purple-500 p-4">rounded-xl border-2</div>
            <div className="shadow-sm bg-white p-4">shadow-sm</div>
            <div className="shadow-md bg-white p-4">shadow-md</div>
            <div className="shadow-lg bg-white p-4">shadow-lg</div>
            <div className="shadow-xl bg-white p-4">shadow-xl</div>
          </div>
        </section>

        {/* 布局测试 */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">布局测试</h2>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <div className="bg-blue-100 p-2 rounded">flex item 1</div>
              <div className="bg-blue-100 p-2 rounded">flex item 2</div>
              <div className="bg-blue-100 p-2 rounded">flex item 3</div>
              <div className="bg-blue-100 p-2 rounded">flex item 4</div>
              <div className="bg-blue-100 p-2 rounded">flex item 5</div>
            </div>
            
            <div className="flex justify-between">
              <div className="bg-gray-100 p-2 rounded">justify-between start</div>
              <div className="bg-gray-100 p-2 rounded">justify-between end</div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gray-100 p-2 rounded">justify-center</div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-100 p-2 rounded text-center">col 1</div>
              <div className="bg-green-100 p-2 rounded text-center">col 2</div>
              <div className="bg-green-100 p-2 rounded text-center">col 3</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-purple-100 p-2 rounded text-center">响应式列 1</div>
              <div className="bg-purple-100 p-2 rounded text-center">响应式列 2</div>
            </div>
          </div>
        </section>

        {/* 交互测试 */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">交互测试</h2>
          <div className="space-y-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
              hover:bg-blue-600
            </button>
            <button className="bg-green-500 active:bg-green-700 text-white px-4 py-2 rounded transition-colors">
              active:bg-green-700
            </button>
            <div className="bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors">
              hover:bg-gray-300 (div)
            </div>
            <div className="opacity-50 hover:opacity-100 transition-opacity bg-purple-500 text-white p-4 rounded-lg">
              hover:opacity-100
            </div>
          </div>
        </section>

        {/* daisyUI 组件测试 */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">daisyUI 组件测试</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">daisyUI 按钮</h3>
              <div className="flex flex-wrap gap-2">
                <button className="btn btn-primary">btn-primary</button>
                <button className="btn btn-secondary">btn-secondary</button>
                <button className="btn btn-success">btn-success</button>
                <button className="btn btn-danger">btn-danger</button>
                <button className="btn btn-warning">btn-warning</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">daisyUI 输入框</h3>
              <input 
                type="text" 
                placeholder="daisyUI 输入框" 
                className="input input-primary w-full mb-2"
              />
              <input 
                type="text" 
                placeholder="禁用的输入框" 
                className="input input-disabled w-full"
                disabled
              />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">daisyUI 卡片</h3>
              <div className="card w-full bg-base-100 shadow-lg">
                <div className="card-body">
                  <h4 className="card-title">daisyUI 卡片</h4>
                  <p>这是一个使用 daisyUI 的卡片组件</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">确认</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-600">
          <p className="mb-4">测试完成后，返回 <Link to="/" className="text-blue-500 hover:underline">首页</Link></p>
          <p>© 2023 Tailwind CSS 样式测试</p>
        </footer>
      </div>
    </div>
  );
}