import { useIntl } from 'react-intl';

export default function HomePage() {
  const intl = useIntl();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            {intl.formatMessage({ id: 'home.title' })}
          </h1>
          <p className="text-gray-600">
            {intl.formatMessage({ id: 'home.subtitle' })}
          </p>
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold mb-2">
              {intl.formatMessage({ id: 'home.card1.title' })}
            </h2>
            <p className="text-gray-600">
              {intl.formatMessage({ id: 'home.card1.description' })}
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
              {intl.formatMessage({ id: 'home.card1.button' })}
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h2 className="text-xl font-semibold mb-2">
              {intl.formatMessage({ id: 'home.card2.title' })}
            </h2>
            <p className="text-gray-600">
              {intl.formatMessage({ id: 'home.card2.description' })}
            </p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
              {intl.formatMessage({ id: 'home.card2.button' })}
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <h2 className="text-xl font-semibold mb-2">
              {intl.formatMessage({ id: 'home.card3.title' })}
            </h2>
            <p className="text-gray-600">
              {intl.formatMessage({ id: 'home.card3.description' })}
            </p>
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors">
              {intl.formatMessage({ id: 'home.card3.button' })}
            </button>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {intl.formatMessage({ id: 'home.daisyui.title' })}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                {intl.formatMessage({ id: 'home.daisyui.button.title' })}
              </h3>
              <div className="flex flex-wrap gap-2">
                <button className="btn btn-primary">
                  {intl.formatMessage({ id: 'home.daisyui.button.primary' })}
                </button>
                <button className="btn btn-secondary">
                  {intl.formatMessage({ id: 'home.daisyui.button.secondary' })}
                </button>
                <button className="btn btn-success">
                  {intl.formatMessage({ id: 'home.daisyui.button.success' })}
                </button>
                <button className="btn btn-danger">
                  {intl.formatMessage({ id: 'home.daisyui.button.danger' })}
                </button>
                <button className="btn btn-warning">
                  {intl.formatMessage({ id: 'home.daisyui.button.warning' })}
                </button>
                <button className="btn btn-info">
                  {intl.formatMessage({ id: 'home.daisyui.button.info' })}
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                {intl.formatMessage({ id: 'home.daisyui.input.title' })}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {intl.formatMessage({ id: 'home.daisyui.input.username' })}
                  </label>
                  <input 
                    type="text" 
                    placeholder={intl.formatMessage({ id: 'home.daisyui.input.username.placeholder' })}
                    className="input input-primary w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {intl.formatMessage({ id: 'home.daisyui.input.password' })}
                  </label>
                  <input 
                    type="password" 
                    placeholder={intl.formatMessage({ id: 'home.daisyui.input.password.placeholder' })}
                    className="input input-secondary w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="text-center text-gray-600">
          <p>{intl.formatMessage({ id: 'home.footer' })}</p>
        </footer>
      </div>
    </div>
  );
}
