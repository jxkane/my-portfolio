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
        <section className="p-10 mb-80" id="skills">
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                    key={skill.name}
                    className="bg-gray-50 text-accent-400  border border-gray-200 px-4 py-1 rounded-full text-sm font-medium">
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;