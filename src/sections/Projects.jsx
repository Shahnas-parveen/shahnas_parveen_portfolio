import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-ink-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="Projects"
          intro="A short list of things I've built end to end, from dashboards to machine learning models."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
