import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase } from "lucide-react";
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="min-h-screen w-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center">
      <div className="w-full px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sky-400 text-lg mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
            Mushtaq Ahmad <br /> Osmani
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
            Software Developer | Web & Mobile Engineer
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-8 max-w-xl">
            Passionate Software Engineer with around 2 years of hands-on experience
            in building scalable web and mobile applications using modern technologies
            like Java Spring Boot, React JS, Flutter and RESTful APIs.
          </p>

       
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl">
            <Briefcase className="mb-4 text-sky-400" size={35} />
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-slate-400 mt-2">Years Experience</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl">
            <FaGithub className="mb-4 text-sky-400" size={35} />
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-slate-400 mt-2">Projects Completed</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl col-span-2">
            <h3 className="text-2xl font-semibold mb-3 text-sky-400">
              Currently Worked At
            </h3>
            <p className="text-xl">Alhawa Groups of Companies</p>
            <p className="text-slate-400 mt-2">Kabul, Afghanistan</p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);}