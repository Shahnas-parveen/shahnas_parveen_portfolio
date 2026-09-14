import { ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-ink-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Certifications" />

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex items-start justify-between gap-4 border border-ink-line p-5"
            >
              <div>
                <h3 className="text-bone text-[15px] leading-snug">{c.name}</h3>
                <p className="mt-1.5 text-xs text-bone-dim">
                  {c.org}, {c.duration}
                </p>
                <p className="mt-0.5 text-xs text-bone-dim">{c.date}</p>
              </div>
              <a
                href={c.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs text-brass hover:text-bone transition-colors whitespace-nowrap mt-0.5"
              >
                View Certificate
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
