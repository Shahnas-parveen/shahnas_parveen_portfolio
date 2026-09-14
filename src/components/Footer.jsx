import { contact } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line py-10">
      <div className="container-page flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-display text-bone">Shahnas Parveen H</p>
          <p className="text-xs text-bone-dim mt-1">
            Information Science &amp; Engineering
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-bone-dim">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-bone transition-colors"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-bone transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="link-underline hover:text-bone transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
