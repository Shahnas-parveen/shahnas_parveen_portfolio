import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`group flex flex-col justify-between border border-ink-line p-6 md:p-8 transition-colors hover:border-brass/60 ${
        featured ? "bg-ink-raised" : ""
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-display text-bone ${
              featured ? "text-2xl md:text-[1.8rem]" : "text-xl"
            } leading-snug`}
          >
            {project.name}
          </h3>
        </div>
        <p className="mt-1 text-sm text-brass">{project.tagline}</p>

        <p className="mt-4 text-sm text-bone-dim leading-relaxed">
          {project.description}
        </p>

        {project.note && (
          <p className="mt-3 text-xs text-bone-dim/80 italic">{project.note}</p>
        )}

        <p className="mt-4 text-xs font-mono text-bone-dim">{project.role}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="text-[12px] text-bone-dim border border-ink-line px-2.5 py-1 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center gap-5 pt-5 border-t border-ink-line">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-bone hover:text-brass transition-colors"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-bone hover:text-brass transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
