import Reveal from './Reveal';

const skills = [
  { name: "HTML", category: "Development" },
  { name: "CSS", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "React", category: "Development" },
  { name: "Adobe Illustrator", category: "Design" },
  { name: "After Effects", category: "Animation" },
  { name: "Procreate", category: "Illustration" },
];
    
    
    
    
    
function Skills() {
    return (
        <section className="p-10" id="skills">
            <h2 className="text-3xl font-regular mb-8 text-gray-900"><Reveal>Skills</Reveal></h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                    key={skill.name}
                    className="bg-gray-50 text-accent-400  border border-gray-200 px-4 py-2 rounded-full text-sm font-medium">
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;