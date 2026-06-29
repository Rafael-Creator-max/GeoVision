import { goals } from '../constants/incubatorGoals';

export default function IncubatorGoals() {
  return (
    <section id="validation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Are Validating
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            During the incubator phase, GeoVision aims to validate whether energy teams need a lightweight forecasting and decision-support product before expanding into a broader operational software platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="p-6 bg-white rounded-lg border border-gray-200"
            >
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-600">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
