import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center gap-10 py-6 bg-slate-900 shadow-lg sticky top-0 z-50">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}