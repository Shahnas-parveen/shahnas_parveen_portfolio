import { education } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-b border-ink-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Education" />

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 max-w-3xl border-t border-ink-line pt-6">
          <div>
            <h3 className="font-display text-xl md:text-2xl text-bone">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-bone-dim">{education.college}</p>
          </div>
          <div className="flex items-baseline gap-6 shrink-0">
            <span className="text-xs font-mono text-bone-dim">{education.duration}</span>
            <span className="font-display text-lg text-brass">
              CGPA {education.cgpa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
