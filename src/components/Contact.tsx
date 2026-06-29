import { Briefcase, ExternalLink, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Build With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            GeoVision is looking for mentors, pilot partners and early conversations with people working in energy planning, forecasting, data and operations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center">
          <a
            href="mailto:rafael.pereztarira@student.vives.be"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <Mail className="text-gray-700" size={24} />
            <span className="text-gray-900 font-medium break-all">rafael.pereztarira@student.vives.be</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/stalin-perez-tarira-9b821a222"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <Briefcase className="text-gray-700" size={24} />
            <span className="text-gray-900 font-medium">Founder LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/Rafael-Creator-max"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <ExternalLink className="text-gray-700" size={24} />
            <span className="text-gray-900 font-medium">GitHub Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
