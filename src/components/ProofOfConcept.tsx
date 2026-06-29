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

        <div className="bg-white rounded-lg p-5 sm:p-8 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-8 text-center">
            Processing Pipeline
          </h4>
          
          <div className="hidden lg:flex items-center justify-between gap-3">
            {pipelineSteps.map((step, index) => (
              <div key={step} className="flex items-center flex-1 min-w-0">
                <div className="flex-1 text-center">
                  <div className="flex min-h-14 items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg font-medium text-sm xl:text-base leading-snug">
                    {step}
                  </div>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <ArrowRight className="flex-shrink-0 text-gray-400 mx-1" size={22} />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:hidden">
            {pipelineSteps.map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className="flex w-full min-h-12 items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-medium leading-snug text-white sm:text-base">
                  {step}
                </div>
                {index < pipelineSteps.length - 1 && (
                  <ArrowRight className="text-gray-400 rotate-90" size={22} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
