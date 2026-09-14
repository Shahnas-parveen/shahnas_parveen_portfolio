import { experience } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-ink-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Experience" />

        <ol className="relative max-w-3xl">
          {experience.map((exp) => (
            <li
              key={exp.org}
              className="relative pl-8 pb-12 last:pb-0 border-l border-ink-line last:border-transparent"
            >
              <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-brass" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <h3 className="font-display text-xl text-bone">{exp.org}</h3>
                {exp.duration && (
                  <span className="text-xs font-mono text-bone-dim shrink-0">
                    {exp.duration}
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-brass">{exp.role}</p>

              <p className="mt-3 text-sm text-bone-dim leading-relaxed max-w-xl">
                {exp.description}
              </p>

              {exp.project && (
                <p className="mt-3 text-xs text-bone-dim">
                  Project: <span className="text-bone">{exp.project}</span>
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
