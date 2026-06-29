import { ArrowRight } from 'lucide-react';
import europeNight from '../assets/europe-night.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[620px] px-4 sm:min-h-[680px] sm:px-6 lg:px-8 text-white overflow-hidden">
      <img
        src={europeNight}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-950/70" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-[620px] sm:min-h-[680px] flex flex-col justify-center text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gray-300 mb-5">
          GeoVision
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Operational decision software for energy teams
        </h1>
        
        <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          GeoVision builds software that turns operational, weather and business data into forecasts, alerts, dashboards and planning decisions. Our first product is Energy Operations, focused on energy demand forecasting.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#platform"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Energy Operations
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-white/50 hover:bg-white/10 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
