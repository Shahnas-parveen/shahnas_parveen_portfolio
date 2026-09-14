import { achievements } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-ink-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="Achievements & Leadership" />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {achievements.map((a) => (
            <div key={a.text} className="border-l-2 border-brass pl-5">
              <p className="text-xs font-mono text-bone-dim mb-2">{a.kind}</p>
              <p className="text-sm text-bone leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
