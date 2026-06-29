import energyOperations from '../assets/energy.jpg';

export default function Solution() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              First Product: Energy Operations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Energy Operations is the first GeoVision module: a software product that combines consumption data, weather signals and operational context to produce demand forecasts, alerts, dashboards and scenario planning. The long-term vision is a modular decision intelligence platform for operational systems, but the first market is deliberately focused on energy.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <img
              src={energyOperations}
              alt="Renewable energy infrastructure with power lines and data signals"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
