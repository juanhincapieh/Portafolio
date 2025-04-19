import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent text-center">{" "} 
                Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Minas Contigo</h3>
                        <p className="text-gray-400 mb-4">
                            Plataform for inscription, attendance, students
                            management and grading system.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Svelte", "Node.js", "Firebase", "Apps Script"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://minascontigo.vercel.app" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-purple-500 hover:text-purple-300 transition-colors mt-4 px-4 py-2 border border-purple-500 rounded-md hover:bg-purple-500 hover:text-white"                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>

        </section>
    );
}