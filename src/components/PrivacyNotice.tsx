import { useRef } from 'react';
import { X } from 'lucide-react';
import { members } from '../constants/members';

export default function PrivacyNotice() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contact = members[0];

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="privacy-cookies"
        onClick={() => dialogRef.current?.showModal()}
        className="mt-3 text-sm text-gray-400 underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Privacy &amp; Cookies
      </button>

      <dialog
        ref={dialogRef}
        id="privacy-cookies"
        aria-labelledby="privacy-cookies-heading"
        className="m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 text-left text-gray-900 shadow-xl backdrop:bg-gray-950/60 sm:p-8"
      >
        <form method="dialog" className="mb-6 flex items-center justify-between gap-4">
          <h2 id="privacy-cookies-heading" className="text-2xl font-bold">
            Privacy &amp; Cookies
          </h2>
          <button
            type="submit"
            autoFocus
            aria-label="Close privacy and cookies notice"
            className="shrink-0 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </form>

        <div className="space-y-6 text-sm leading-relaxed text-gray-600">
          <p>Last updated: <time dateTime="2026-11-11">11 November 2026</time></p>

          <section aria-labelledby="privacy-contact-heading">
            <h3 id="privacy-contact-heading" className="mb-2 text-base font-semibold text-gray-900">
              About this website
            </h3>
            <p>
              GeoVision is an early-stage data and analytics venture. For questions about this website
              or your personal information, contact {contact.name} at{' '}
              <a className="break-all underline underline-offset-4" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>.
            </p>
          </section>

          <section aria-labelledby="privacy-cookies-use-heading">
            <h3 id="privacy-cookies-use-heading" className="mb-2 text-base font-semibold text-gray-900">
              Cookies and tracking
            </h3>
            <p>
              This website's application does not set cookies, use local or session storage, or include
              analytics, advertising trackers or embedded social media. Opening or closing this notice
              does not save anything on your device. We will update this notice and request consent
              where required before introducing nonessential cookies or tracking.
            </p>
          </section>

          <section aria-labelledby="privacy-messages-heading">
            <h3 id="privacy-messages-heading" className="mb-2 text-base font-semibold text-gray-900">
              When you contact us
            </h3>
            <p>
              Email links open your email application. If you send a message, we receive your email
              address and the information you choose to share. We use it to respond to your enquiry
              and discuss potential collaboration, based on our legitimate interest in handling business
              enquiries. We keep correspondence only as long as needed for that purpose or applicable
              legal obligations.
            </p>
          </section>

          <section aria-labelledby="privacy-services-heading">
            <h3 id="privacy-services-heading" className="mb-2 text-base font-semibold text-gray-900">
              Hosting and external services
            </h3>
            <p>
              Hosting and email providers may process connection information, such as IP addresses and
              request logs, or correspondence to deliver and secure their services. Contact us for
              details about these providers, retention and any transfers outside the European Economic
              Area. Links to LinkedIn, GitHub and programme websites take you to external services
              governed by their own privacy and cookie policies.
            </p>
          </section>

          <section aria-labelledby="privacy-rights-heading">
            <h3 id="privacy-rights-heading" className="mb-2 text-base font-semibold text-gray-900">
              Your rights
            </h3>
            <p>
              Where applicable, you can request access, correction, deletion, restriction or portability
              of your personal data, and object to processing based on legitimate interests. Contact us
              using the email above to exercise your rights. You can also lodge a complaint with the{' '}
              <a
                href="https://www.dataprotectionauthority.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Belgian Data Protection Authority (opens in a new tab)
              </a>{' '}
              or your local supervisory authority.
            </p>
          </section>
        </div>
      </dialog>
    </>
  );
}
