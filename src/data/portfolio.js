// ---------------------------------------------------------------------------
// All portfolio content lives here, separate from the UI components.
// Values below are sourced from the verified Portfolio Master Data.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Shahnas Parveen H",
  role: "Information Science & Engineering",
  focus: "Data · AI · Software",
  location: "Puducherry, India",
  college: "Women's Engineering College, Puducherry",
  statement:
    "Building practical, data-driven software with Python, machine learning, and thoughtful user experiences.",
  about:
    "Final-year B.Tech Information Science and Engineering student with hands-on experience in Python, SQL, data analytics, machine learning, web development, and UI/UX design. Interested in building practical technology solutions with a focus on data-driven applications, intelligent systems, and user-friendly interfaces.",
  meta: [
    { label: "Degree", value: "B.Tech ISE" },
    { label: "CGPA", value: "9.18" },
    { label: "Based in", value: "Puducherry, India" },
  ],
};

export const links = {
  github: "https://github.com/Shahnas-parveen",
  linkedin: "https://www.linkedin.com/in/shahnas-parveen",
};

export const contact = {
  email: "sshhhhh556@gmail.com",
  phone: "6374497842",
  github: links.github,
  linkedin: links.linkedin,
};

export const resumeUrl =
  "https://drive.google.com/file/d/1aMo0m9cXqwBFrRe1Qaqw6Q-4uxBEp9_I/view?usp=sharing";

export const skills = [
  {
    group: "Programming",
    items: ["Python", "SQL", "C"],
  },
  {
    group: "Libraries & Frameworks",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Requests", "Streamlit", "Flask"],
  },
  {
    group: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    group: "Data & Analytics",
    items: ["Data Analytics", "Data Visualization", "Machine Learning"],
  },
  {
    group: "Tools",
    items: ["Excel", "Power BI", "Tableau", "Figma", "GitHub", "VS Code"],
  },
  {
    group: "Other",
    items: ["Git / GitHub", "UI/UX Design", "Web Development"],
  },
];

export const projects = [
  {
    id: "neovision",
    featured: true,
    name: "NeoVision",
    tagline: "Smart Neonatal Monitoring Dashboard",
    role: "Software / Dashboard Developer",
    description:
      "A browser-based software dashboard prototype demonstrating how neonatal vital information can be presented to healthcare staff. The current version uses simulated vital-sign data to demonstrate patient monitoring, status classification, alerts, trend visualization, and a dedicated nurse view.",
    tech: ["React", "Vite", "React Router", "Recharts", "Tailwind CSS", "Lucide React", "JavaScript", "Netlify"],
    github: "https://github.com/Shahnas-parveen/neovision",
    demo: "https://neovisionsih.netlify.app",
    note: "Simulated data — a dashboard prototype, not a clinical or hardware deployment.",
  },
  {
    id: "aeh-navigation",
    featured: true,
    name: "QR-Based Smart Navigation & Support",
    tagline: "Hospital navigation, built at Aravind Eye Hospital",
    role: "UI/UX Designer & Web Developer",
    description:
      "A web-based hospital navigation and patient-support application designed to improve the experience of patients and visitors through a simple and accessible digital navigation interface, developed during a one-month internship at Aravind Eye Hospital, Puducherry.",
    tech: ["HTML", "CSS", "JavaScript", "Figma", "Bolt", "Netlify"],
    github: "https://github.com/Shahnas-parveen/aeh-smart-navigation",
    demo: "https://aravind-map-raesha0506.netlify.app",
  },
  {
    id: "snippet-finder",
    featured: false,
    name: "Source Code Snippet Finder",
    tagline: "Ranked Python snippet search",
    role: "Full-Stack Developer",
    description:
      "A Flask-based web application that retrieves and ranks Python code snippets using TF-IDF and an Inverted Index.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    github: "https://github.com/Shahnas-parveen/source-code-snippet-finder",
    demo: "https://source-code-snippet-finder.onrender.com/",
  },
  {
    id: "visualroot",
    featured: false,
    name: "VisualRoot",
    tagline: "Numerical root-finding toolkit",
    role: "Python Developer",
    description:
      "An interactive web application for visualizing and comparing numerical root-finding algorithms.",
    tech: ["Python", "Streamlit", "NumPy", "SymPy", "Matplotlib"],
    github: "https://github.com/Shahnas-parveen/VisualRoot",
    demo: "https://visualroot.streamlit.app/",
  },
  {
    id: "adaptive-ridge",
    featured: false,
    name: "Adaptive Ridge Forecasting Model",
    tagline: "Behavioural-change-aware forecasting",
    role: "ML / Data Science Developer",
    description:
      "A machine learning forecasting project designed to predict changing demand patterns, detect behavioural changes, handle temporary anomalies, and adapt the model when sufficient evidence of change is observed.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    github: "https://github.com/Shahnas-parveen/Adaptive_Ridge_Forecasting_Model",
    demo: "https://xo54aiml02-nkhgvfkiif5f7vh4cqkuvm.streamlit.app/",
  },
];

export const experience = [
  {
    org: "Aravind Eye Hospital, Puducherry",
    role: "UI/UX Designer & Web Developer",
    duration: "1 Month",
    description:
      "Developed a web-based navigation and patient-support application focused on improving hospital navigation and patient experience.",
    project: "QR-Based Smart Navigation & Support",
  },
  {
    org: "Indian Institute of Science (IISc), Bangalore",
    role: "Intern — Numerical Analysis",
    duration: null,
    description:
      "Worked on numerical analysis topics and their Python implementations as part of the internship.",
    project: null,
  },
];

export const education = {
  degree: "B.Tech — Information Science and Engineering",
  college: "Women's Engineering College, Puducherry",
  duration: "2023 – 2026",
  cgpa: "9.18",
};

export const certifications = [
  {
    name: "Diploma in Python Programming",
    org: "Ocean Academy, Puducherry",
    duration: "3 months",
    date: "December 2024",
    driveUrl:
      "https://drive.google.com/file/d/1wmA4-XW8DDzH-mC_BUHUgucXCunwnU2J/view?usp=sharing",
  },
  {
    name: "Human Behavior",
    org: "NPTEL",
    duration: "8 weeks",
    date: "April 2025",
    driveUrl:
      "https://drive.google.com/file/d/1NooBvXWMTfyTxqyTBqUzmMBImv695N41/view?usp=drive_link",
  },
  {
    name: "Design, Technology and Innovation",
    org: "NPTEL",
    duration: "8 weeks",
    date: "September 2025",
    driveUrl:
      "https://drive.google.com/file/d/1jdH7vVsaHyg8d18io8srqN8EgQknlS60/view?usp=drive_link",
  },
  {
    name: "Artificial Intelligence (AI) and Machine Learning (ML) Applications in Mechanical Engineering",
    org: "Puducherry Technological University",
    duration: "1 day",
    date: "August 2025",
    driveUrl:
      "https://drive.google.com/file/d/1o3bOMasvmkvxAXhhk31drmObnmYpB429/view?usp=drive_link",
  },
];

export const achievements = [
  {
    kind: "Achievement",
    text: "Selected for Level 1 of Puduvai Hackathon with the team project \u201cNeoVision.\u201d",
  },
  {
    kind: "Leadership",
    text: "Compere and Committee Member for LUNOVA '26 Technical Symposium, contributing to hosting and coordination.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
