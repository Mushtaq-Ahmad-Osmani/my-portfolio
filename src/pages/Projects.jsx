import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Electronic Attendance & Payroll System",
      tech: "Java, Spring Boot, React JS, MySQL, QR Code",
      desc: "Designed and developed a complete attendance and payroll management system for university teachers with QR code scanning, salary calculations, REST APIs, and admin dashboard."
    },
    {
      title: "Company Internal Web Solutions",
      tech: "React JS, JavaScript, API Integration",
      desc: "Contributed to internal company dashboards and management tools focused on responsive UI, performance optimization, and scalable frontend solutions."
    },
    {
      title: "Cross Platform Mobile Applications",
      tech: "Flutter, Dart, Supabase",
      desc: "Participated in building modern mobile applications with clean UI, backend connectivity, and cloud database integration."
    }
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white px-10 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-14 text-sky-400">My Projects</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 duration-300">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-sky-400 mb-4">{project.tech}</p>
              <p className="text-slate-300 leading-8">{project.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}