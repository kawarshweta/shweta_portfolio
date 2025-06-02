import React from 'react';
import { Folder } from 'lucide-react';

// Define the interface for a skill object
interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg' },
  { name: 'Redux Toolkit', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redux/redux-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg' },
  { name: 'SCSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/sass/sass-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Jest', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/jest/jest-plain.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg' },
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/wordpress/wordpress-original.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg' },
];

// Use the Skill interface for the SkillCard props
const SkillCard: React.FC<Skill> = ({ name, logo }) => (
  <div className="flex flex-col items-center justify-center bg-white/5 border border-white/15 rounded-xl p-6 hover:border-indigo-500 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
    {logo === 'lucide-folder' ? (
      <Folder size={36} className="text-gray-300 mb-3 hover:text-blue-400 transition-all duration-300" />
    ) : (
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-9 h-9 mb-3"
      />
    )}
    <p className="text-sm font-semibold text-white text-center hover:text-blue-400 transition-all duration-300">{name}</p>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="pb-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white animate-slide-up">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;