import { Briefcase, Mail, UserRound } from 'lucide-react';
import { members } from '../constants/members';

export default function Members() {
  return (
    <section
      id="members"
      aria-labelledby="members-heading"
      className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="members-heading" className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet the Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            The people behind GeoVision, combining data engineering, AI, and business expertise to build smarter energy intelligence solutions.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-8">
          {members.map((member) => (
            <li
              key={member.id}
              className="w-full max-w-sm rounded-lg border border-gray-200 bg-gray-50 p-8 text-center"
            >
              {member.pictureUrl ? (
                <img
                  src={member.pictureUrl}
                  alt={`Portrait of ${member.name}`}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="mx-auto mb-6 h-32 w-32 rounded-full border border-gray-200 object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`Photo placeholder for ${member.name}`}
                  className="mx-auto mb-6 flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed border-gray-300 bg-white text-gray-400"
                >
                  <UserRound size={36} aria-hidden="true" />
                  <span className="text-xs text-gray-500">Photo coming soon</span>
                </div>
              )}

              <h3 className="mb-2 text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="mb-6 text-gray-600">{member.function}</p>

              <div className="space-y-3 border-t border-gray-200 pt-6 text-sm">
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 font-medium text-gray-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <Mail size={18} className="shrink-0" aria-hidden="true" />
                    <span className="break-all">{member.email}</span>
                  </a>
                ) : (
                  <p className="flex items-center justify-center gap-2 text-gray-500">
                    <Mail size={18} aria-hidden="true" /> Contact to be added
                  </p>
                )}
                {member.linkedInUrl ? (
                  <a
                    href={member.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
                    className="inline-flex items-center justify-center gap-2 font-medium text-gray-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <Briefcase size={18} aria-hidden="true" /> LinkedIn profile
                  </a>
                ) : (
                  <p className="flex items-center justify-center gap-2 text-gray-500">
                    <Briefcase size={18} aria-hidden="true" /> LinkedIn to be added
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
