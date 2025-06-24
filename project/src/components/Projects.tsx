// Define the Project interface for TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  number: string;
  category: "Personal" | "Professional";
  links?: { live?: string; github?: string; caseStudy?: string };
  skills?: string[];
  website?: string;
  layout: "original" | "card";
}

// Define the projectsData array with the Project type
const projectsData: Project[] = [
  {
    id: 1,
    title: "Swiggy Clone",
    description:
      "A Swiggy clone built for smooth food delivery, featuring real-time updates via live Swiggy APIs. It offers a responsive UI, dynamic restaurant listings, item filtering, cart management, and real-time data sync — delivering a seamless user experience.",
    image: "/images/swiggy_thumbnail.png",
    number: "01",
    category: "Professional",
    skills: [
      "React",
      "Redux",
      "Parcel",
      "Tailwind CSS",
      "Shadcn/UI",
      "Zustand",
    ],
    website: "https://swiggy-clone-nu-nine.vercel.app/",
    layout: "card",
  },
  {
    id: 2,
    title: "Notes Management Application",
    description:
      "A TypeScript-based notes app with CRUD functionality and local storage support for offline use. Features a responsive UI with custom CSS and an intuitive search function to improve usability and accessibility.",
    image: "/images/Notes_app.png", // update this path to your actual image
    number: "02",
    category: "Professional",
    skills: [
      "TypeScript",
      "React.js",
      "Local Storage",
      "Custom CSS",
      "CRUD",
    ],
    website:
      "https://notes-taking-web-nv6eceq95-shweta-kawars-projects.vercel.app/",
    layout: "card",
  },
];

const Projects = () => {
  // Filter professional projects
  const professionalProjects = projectsData.filter(
    (project) => project.category === "Professional"
  );

  // Reusable component to render a project list
  const renderProjects = (
    projects: Project[],
    sectionTitle: string,
    gradientClass: string
  ) => (
    <div className="mb-20">
      <h3
        className={`text-3xl md:text-4xl font-bold text-center mb-12 ${gradientClass}`}
        aria-label={sectionTitle}
      >
        {/* {sectionTitle} */}
      </h3>
      <div className="max-w-5xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-lg overflow-hidden animate-fade-in`}
            style={{ animationDelay: `${0.2 * (index + 1)}s` }}
          >
            {/* Left: Image */}
            <div className="flex items-center justify-center max-md:rounded-t-xl md:w-1/2 lg:p-10 md:rounded-l-xl">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 min-h-full object-cover color-transparent"
                loading="lazy"
              />
            </div>
            {/* Right: Project Details */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills?.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 font-medium relative pb-1 inline-block group transition-colors duration-300"
                  aria-label={`Visit ${project.title} website`}
                >
                  Visit Website
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-600 transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="py-10 bg-black text-white relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white animate-slide-up"
        >
          My <span className="text-indigo-400">Projects</span>
        </h2>

        {/* Professional Projects Section */}
        {professionalProjects.length > 0 &&
          renderProjects(
            professionalProjects,
            "Professional Projects",
            "bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600"
          )}
      </div>
      <style>{`
        .animate-text-glow {
          animation: text-glow 1.5s ease-in-out infinite alternate;
        }
        @keyframes text-glow {
          from { text-shadow: 0 0 10px rgba(99, 102, 241, 0.5); }
          to { text-shadow: 0 0 20px rgba(99, 102, 241, 0.9); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-text-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
