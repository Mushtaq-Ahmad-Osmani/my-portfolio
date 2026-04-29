import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-slate-900 text-white px-10 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-10 text-sky-400">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 leading-9">
              I am Mushtaq Ahmad Osmani, a passionate Software Developer with around
              2 years of practical experience in both web and mobile application
              development. I specialize in creating scalable, user-friendly, and
              modern software solutions using strong backend and frontend technologies.
            </p>

            <p className="text-lg text-slate-300 leading-9 mt-6">
              My expertise includes Java Spring Boot for backend systems, React JS
              for modern web interfaces, and Flutter for cross-platform mobile apps.
              I enjoy building complete systems from database architecture to final UI.
            </p>

            <p className="text-lg text-slate-300 leading-9 mt-6">
              I have strong knowledge in RESTful API development, responsive design,
              application optimization, teamwork, and practical problem solving.
            </p>
          </div>

          <div className="bg-slate-800 p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-sky-400">Quick Info</h3>
            <p className="mb-4">📍 Kabul, Afghanistan</p>
            <p className="mb-4">🎓 Bachelor of Computer Science</p>
            <p className="mb-4">💼 Software Developer</p>
            <p className="mb-4">⚡ Web & Mobile Applications</p>
            <p className="mb-4">🌐 REST API Specialist</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}