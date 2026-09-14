import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { contact } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-bone max-w-2xl">
          Let's build something useful.
        </h2>
        <p className="mt-5 max-w-md text-bone-dim text-[15px] leading-relaxed">
          Open to opportunities in data, AI, software development, and
          technology-focused roles.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-8">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2.5 text-bone hover:text-brass transition-colors"
          >
            <Mail size={18} />
            <span className="text-[15px]">{contact.email}</span>
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2.5 text-bone hover:text-brass transition-colors"
          >
            <Phone size={18} />
            <span className="text-[15px]">{contact.phone}</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-bone hover:text-brass transition-colors"
          >
            <LinkedinIcon size={18} />
            <span className="text-[15px]">LinkedIn</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-bone hover:text-brass transition-colors"
          >
            <GithubIcon size={18} />
            <span className="text-[15px]">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
