import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="min-h-screen bg-slate-900 text-white px-10 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-14 text-sky-400">Achievements</h1>

        <div className="bg-slate-800 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-4">🏆 Student of the Year 2024</h2>
          <p className="text-xl text-sky-400 mb-4">Kateb University</p>
          <p className="text-slate-300 leading-8 text-lg">
            Recognized as Student of the Year 2024 for academic excellence,
            leadership, outstanding performance in software development projects,
            and continuous contribution to practical technical innovation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}