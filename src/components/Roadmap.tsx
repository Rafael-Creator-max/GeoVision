import { phases } from '../constants/roadmap';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Product Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            GeoVision starts narrow with Energy Operations, then grows into a modular platform for operational decision software.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {phases.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-500 mb-1">
                  {item.phase}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
