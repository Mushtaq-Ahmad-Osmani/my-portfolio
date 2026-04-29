import { motion } from "framer-motion";
import { Mail, Phone,  MapPin } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
export default function Contact() {
  return (
    <section className="h-screen w-screen bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-full flex items-center justify-center px-10"
      >
        <div className="w-full max-w-4xl bg-slate-900 rounded-3xl p-12 shadow-2xl">
          <h1 className="text-5xl font-bold mb-14 text-sky-400 text-center">Contact Me</h1>

          <div className="grid md:grid-cols-2 gap-10 place-items-center">

            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl space-y-8">
              <div className="flex items-center gap-4">
                <Phone className="text-sky-400" />
                <span className="text-lg">+93 782673189</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-sky-400" />
                <span className="text-lg">mushtaqahmadosmani8@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-sky-400" />
                <span className="text-lg">github.com/Mushtaq-Ahmad-Osmani</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-sky-400" />
                <span className="text-lg">Kabul, Afghanistan</span>
              </div>
            </div>

          

          </div>
        </div>
      </motion.div>
    </section>
  );
}