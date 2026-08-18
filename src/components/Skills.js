
 const skills = [ 
    { name: "HTML" }, 
    { name: "CSS" }, 
    { name: "Tailwind" }, 
    { name: "JavaScript" }, 
    { name: "React" }, 
    { name: "Node.js" }, 
    { name: "Git" }, 
    { name: "REST APIs" }, 
    { name: "TypeScript" }, 
    { name: "Adobe Illustrator" }, 
    { name: "After Effects" }, ]; 
    
    function Skills() { 
        return (
             <section className="-mt-1 mb-80 overflow-hidden" id="skills"> 
             <div className="marquee-track"> 
                {[...skills, ...skills, ...skills].map((skill, index) => ( <span key={index} className="bg-gray-50 text-accent-400 border border-gray-200 px-4 py-1 rounded-full text-sm font-medium mx-2 whitespace-nowrap" > {skill.name} </span> ))} 
                </div> 
                </section> ); 
                
            
            } 
            
            
            
            
            export default Skills;    
    
    



