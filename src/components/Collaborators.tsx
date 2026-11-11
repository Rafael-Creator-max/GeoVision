import { ArrowUpRight, Users } from 'lucide-react';
import { collaborators } from '../constants/collaborators';

export default function Collaborators() {
  return (
    <section
      id="collaborators"
      aria-labelledby="collaborators-heading"
      className="scroll-mt-20 bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="collaborators-heading" className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Project Collaborators
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            The people and organizations contributing their knowledge, feedback and expertise to GeoVision.
          </p>
        </div>

        {collaborators.length > 0 ? (
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {collaborators.map((collaborator) => (
              <li key={collaborator.name} className="rounded-lg border border-gray-200 bg-white p-6">
                {collaborator.logoUrl && (
                  <div className="mb-6 flex h-28 items-center justify-center">
                    <img
                      src={collaborator.logoUrl}
                      alt={`${collaborator.name} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{collaborator.name}</h3>
                <p className="mb-4 text-sm font-medium text-gray-700">{collaborator.role}</p>
                <p className="leading-relaxed text-gray-600">{collaborator.description}</p>
                {collaborator.website && (
                  <a
                    href={collaborator.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${collaborator.name}'s website (opens in a new tab)`}
                    className="mt-6 inline-flex items-center gap-2 font-medium text-gray-900 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    Visit website <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 text-center sm:p-10">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
              <Users size={24} aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Collaborators to be announced</h3>
            <p className="mx-auto max-w-xl leading-relaxed text-gray-600">
              Collaborator profiles will be shared here as the project develops.
              Interested in contributing to GeoVision?
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
            >
              Become a collaborator <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
