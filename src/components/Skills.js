const skills = [
  { name: "Adobe Illustrator", category: "Design" },
  { name: "After Effects", category: "Animation" },
  { name: "Procreate", category: "Illustration" },
  { name: "HTML", category: "Development" },
  { name: "CSS", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "React", category: "Development" },
];
    
    
    
    
    
function Skills() {
    return (
        <section className="p-10" id="skills">
            <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                    key={skill.name}
                    className="bg-dark-800 text-accent-400  border border-dark-700 px-4 py-2 rounded-full text-sm font-medium">
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;