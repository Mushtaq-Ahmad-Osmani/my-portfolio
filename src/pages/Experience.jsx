import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section className="min-h-screen w-screen bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-full px-10 pt-20"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-sky-400 text-center">
            Work Experience
          </h1>

          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 shadow-2xl border border-slate-800">
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Briefcase className="text-sky-400" />
              <h2 className="text-3xl font-semibold">Software Developer</h2>
            </div>

            <h3 className="text-2xl text-sky-400 mb-8">Alhawa Groups of Companies</h3>

            <div className="flex flex-wrap gap-8 text-slate-400 mb-10">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>Feb 2024 - Mar 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Kabul, Afghanistan</span>
              </div>
            </div>

            <div className="space-y-6 text-lg text-slate-300 leading-9">
              <p>
                • Developed scalable and responsive web applications using React JS,
                JavaScript, HTML, and CSS for modern enterprise needs.
              </p>

              <p>
                • Designed and built secure backend systems and RESTful APIs using
                Java Spring Boot architecture.
              </p>

              <p>
                • Participated in cross-platform mobile application development using Flutter and Dart.
              </p>

              <p>
                • Managed relational and cloud databases including MySQL and Supabase
                for efficient application performance.
              </p>

              <p>
                • Collaborated with development teams to deliver maintainable,
                user-friendly, and production-ready software systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-14">
              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-sky-400">2+</h4>
                <p className="mt-2 text-slate-400">Years Experience</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-sky-400">Full Stack</h4>
                <p className="mt-2 text-slate-400">Web Development</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-sky-400">Flutter</h4>
                <p className="mt-2 text-slate-400">Mobile Apps</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}