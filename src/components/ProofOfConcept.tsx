import { ArrowRight } from 'lucide-react';
import { pipelineSteps } from '../constants/proofOfConcept';

export default function ProofOfConcept() {
  return (
    <section id="proof-of-concept" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Proof of Concept
          </h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Belgian Energy Demand Forecasting
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            The first proof of concept forecasts Belgian electricity demand using historical load data, feature engineering, machine learning models and dashboard visualisation. It is designed to validate the Energy Operations module before expanding GeoVision into a broader operational decision platform.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-8 text-center">
            Processing Pipeline
          </h4>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {pipelineSteps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex-1 text-center">
                  <div className="inline-block px-4 py-3 bg-gray-900 text-white rounded-lg font-medium">
                    {step}
                  </div>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <ArrowRight className="hidden md:block text-gray-400 mx-2" size={24} />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 mt-6 md:hidden">
            {pipelineSteps.map((step, index) => (
              <div key={index} className="flex items-center w-full">
                <div className="flex-1 text-center">
                  <div className="inline-block px-4 py-3 bg-gray-900 text-white rounded-lg font-medium">
                    {step}
                  </div>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <ArrowRight className="text-gray-400 mx-2 rotate-90" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
