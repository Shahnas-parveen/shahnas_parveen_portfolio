import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { profile, links, resumeUrl } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 border-b border-ink-line"
    >
      <div className="container-page w-full">
        <p className="font-mono text-sm text-brass mb-6">{profile.focus}</p>

        <h1 className="font-display text-[clamp(2.6rem,10vw,5.4rem)] leading-[1.02] text-bone max-w-4xl">
          {profile.name}
        </h1>

        <p className="mt-3 text-lg md:text-xl text-bone-dim">{profile.role}</p>

        <p className="mt-8 max-w-xl text-[15px] md:text-base text-bone-dim leading-relaxed">
          {profile.statement}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-brass text-ink px-6 py-3 text-sm font-medium hover:bg-bone transition-colors"
          >
            View Projects
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink-line px-6 py-3 text-sm font-medium text-bone hover:border-brass hover:text-brass transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-bone-dim hover:text-bone transition-colors"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-bone-dim hover:text-bone transition-colors"
          >
            <LinkedinIcon size={19} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-bone-dim hover:text-brass transition-colors"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
