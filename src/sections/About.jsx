import { profile } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-ink-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="About" />

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-10 md:gap-16">
          <p className="text-lg md:text-xl leading-relaxed text-bone max-w-2xl">
            {profile.about}
          </p>

          <dl className="border-t border-ink-line md:border-t-0 md:border-l md:pl-10 pt-6 md:pt-0 grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 h-fit">
            {profile.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-xs text-bone-dim font-mono mb-1">{m.label}</dt>
                <dd className="font-display text-xl text-bone">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
