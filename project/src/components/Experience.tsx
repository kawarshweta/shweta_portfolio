import { useState } from "react";

const experienceData = [
  {
    id: 1,
    role: "Frontend Engineer",
    company: "TechupLabs",
    period: "Aug 2023 - Present",
    location: "Remote",
    companyUrl: "https://www.techuplabs.com/",
    companyDescription:
      "TechupLabs is a company focusing on innovative web applications.",
    summary:
      "Led frontend development for the Feedspace app and contributed to projects like Feedapce, Flocksy, Kalaa, and LD Expert, focusing on responsive, mobile-first UI/UX with HTML, CSS, JavaScript, React, and TypeScript. Enhanced user engagement through A/B testing and optimized performance by improving LCP and SEO. Delivered intuitive features for user simplicity and ensured seamless cross-device functionality.",
    keyWork: [
      "Developed responsive web pages from Figma designs using HTML, CSS, JavaScript, React, and TypeScript.",
      "Contributed to Feedspace’s website web application development, ensuring cross-device compatibility, performance optimization, and SEO best practices.",
      "Created custom UI components for various products.",
      "Collaborated on technical initiatives for optimization, A/B testing, and UI/UX enhancements.",
      "Integrated APIs to dynamically fetch and display data, improving user experience and functionality.",
    ],
    skills: [
      "HTML",
      "JavaScript",
      "React",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "SSR",
      "SCSS",
      "Gulp",
      "Microfrontends",
    ],
    lessonsLearned:
      "Gained expertise in translating Figma designs to pixel-perfect UIs, optimizing web performance, and integrating APIs for dynamic content delivery.",
    logo: "techuplabs_logo.jpg", 
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "The Parentinc (theAsianparent)",
    period: "Jan 2022 - Jul 2023",
    location: "On-site",
    companyUrl: "theasianparent.com",
    companyDescription:
      "The Parentinc is a digital platform dedicated to parenting and family resources",
    summary:
      "Contributed to Southeast Asia’s largest parenting platform (TheAsianParent, Mama’s Choice), used by over 50M monthly users. Architected user-centric features using React.js, JavaScript, SCSS, and Razzle (SSR). Improved scalability by migrating to microfrontends and enhanced UI/UX with mobile-first, responsive design. Boosted traffic by 55% and improved conversion rates by 12% through A/B testing and performance optimization.",
    keyWork: [
      "Architected user-centric features using React.js, JavaScript, and SCSS, with Razzle for server-side rendering.",
      "Contributed to the frontend development of TheAsianParent, Mama's Choice, and other web projects.",
      "Enhanced UI/UX with HTML, SCSS, and responsive design techniques like mobile-first, flexible layouts, and media queries.",
      "Migrated monolithic architecture to microfrontends for improved scalability and flexibility.",
      "Collaborated in agile teams using Bitbucket, Jira, and Confluence, actively participating in sprint planning and reviews."
    ],
    skills: ["HTML", "React", "TypeScript", "CSS", "Tailwind CSS", "Wordpress", "SCSS", "JavaScript", "php", "Razzle", "Microfrontends", "Redux"],
    lessonsLearned:
      "Learned advanced state management and performance optimization techniques for scalable React applications.",
    logo: "theasianparnet.png",
  },
];

// Define the type for experience data
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  companyUrl: string;
  companyDescription: string;
  summary: string;
  keyWork: string[];
  skills: string[];
  lessonsLearned: string;
  logo: string;
}

const Modal = ({
  isOpen,
  onClose,
  experience,
}: {
  isOpen: boolean;
  onClose: () => void;
  experience: ExperienceItem;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-black border border-white/15 rounded-xl p-4 sm:p-6 max-w-full sm:max-w-4xl w-[90%] sm:w-full mx-2 sm:mx-4 max-h-[80vh] overflow-y-auto scrollbar-hide animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white break-words">
            {experience.role} at {experience.company}
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-blue-400 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-sm sm:text-sm text-gray-300 mb-4 break-words">
          {experience.companyDescription}
        </p>
        {experience.companyUrl && (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-blue-400 hover:text-blue-600 transition-all duration-300 mb-4 block"
          >
            Visit {experience.company} Website
          </a>
        )}
        <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Key Work</h4>
        <ul className="space-y-2 text-gray-300 text-xs sm:text-sm mb-4">
          {experience.keyWork.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">✔️</span>
              <span className="break-words">{point}</span>
            </li>
          ))}
        </ul>
        <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Skills Used</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white/10 border border-white/15 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceItem;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-start gap-4 bg-white/5 border border-white/15 hover:border-indigo-500/50 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 backdrop-blur-sm animate-fade-in">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-br text-white rounded-full flex items-center justify-center shadow-md">
          <img
            src={`/images/${experience.logo}`}
            alt={`${experience.company} Logo`}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
            <h3 className="text-base sm:text-lg font-semibold text-white break-words">
              {experience.role}
            </h3>
            <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap mt-1 sm:mt-0">
              {experience.period}
            </span>
          </div>
          <p className="text-sm sm:text-sm text-gray-300 mb-2 break-words">
            {experience.company} • {experience.location}
          </p>
          <p
            className="text-sm sm:text-sm text-gray-300 mb-4 break-words"
            dangerouslySetInnerHTML={{ __html: experience.summary }}
          ></p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-white/30 text-white px-3 sm:px-4 py-1 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 font-semibold text-xs sm:text-sm"
          >
            Explore My Work
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={experience}
      />
    </>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center animate-slide-up">
          My <span className="text-indigo-400">Experience</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} experience={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;