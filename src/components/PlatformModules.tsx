import { modules } from '../constants/platform';

export default function PlatformModules() {
  return (
    <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Energy Operations Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These proposed capabilities guide our early development. We are validating which data solutions can provide practical value for energy teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <module.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-600">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
