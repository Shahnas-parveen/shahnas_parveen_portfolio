import { skills } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-ink-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="Skills"
          intro="Tools and languages used across coursework, internships, and independent projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-bone font-medium text-sm mb-4 pb-3 border-b border-ink-line">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-bone-dim border border-ink-line rounded-full px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
