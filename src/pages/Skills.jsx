import { motion } from "framer-motion";

export default function Skills() {
  const backend = ["Java", "Spring Boot", "REST API", "MySQL"];
  const frontend = ["HTML", "CSS", "JavaScript", "React JS"];
  const mobile = ["Flutter", "Dart", "Supabase"];
  const soft = ["Problem Solving", "Teamwork", "Quick Learning", "Communication"];

  return (
    <section className="min-h-screen bg-slate-900 text-white px-10 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-14 text-sky-400">Technical Skills</h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT BIG GRID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-sky-400">Backend</h2>
              {backend.map((skill, index) => (
                <p key={index} className="mb-3 text-lg">{skill}</p>
              ))}
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-sky-400">Frontend</h2>
              {frontend.map((skill, index) => (
                <p key={index} className="mb-3 text-lg">{skill}</p>
              ))}
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-sky-400">Mobile</h2>
              {mobile.map((skill, index) => (
                <p key={index} className="mb-3 text-lg">{skill}</p>
              ))}
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-sky-400">Soft Skills</h2>
              {soft.map((skill, index) => (
                <p key={index} className="mb-3 text-lg">{skill}</p>
              ))}
            </div>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="bg-slate-800 p-10 rounded-3xl shadow-2xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-sky-400 mb-6">Professional Stack</h2>
            <p className="text-lg text-slate-300 leading-9">
              My technical stack covers complete full-stack software development
              including backend architecture, frontend UI engineering, database
              management, mobile app development, and API integration.
            </p>

            <p className="text-lg text-slate-300 leading-9 mt-6">
              I focus on building scalable, clean, and maintainable applications
              with strong attention to performance and user experience.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}