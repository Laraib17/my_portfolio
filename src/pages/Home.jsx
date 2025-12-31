import React, { useState, useEffect } from "react";
import {
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [text] = useTypewriter({
    words: [
      "Full-Stack Developer",
      "Machine Learning Enthusiast",
      "Open Source Contributor",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experience = [
    {
      role: "Full Stack Web Developer Intern",
      company: "Skill Chase Edu.Tech",
      period: "Aug. 2024 – Nov. 2024",
      location: "New Delhi, India (Remote)",
      achievements: [
        "Developed full-stack web application using React.js, Node.js, and Docker",
        "Created data visualization dashboard reducing manual analysis time by 60%",
        "Collaborated with cross-functional team using Agile methodology",
      ],
    },
    {
      role: "Flutter Development Tutor",
      company: "Hunar Academy",
      period: "Aug. 2023 – Dec. 2023",
      location: "New Delhi, India",
      achievements: [
        "Instructed 25+ students in OOP principles and Flutter development",
        "Designed comprehensive curriculum covering Dart and mobile architecture",
        "Achieved 90% course completion rate through hands-on mentoring",
      ],
    },
  ];

  const skills = {
    Languages: [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "SQL",
      "Dart",
      "Kotlin",
    ],
    Frontend: ["React.js", "Flutter", "Bootstrap", "HTML/CSS", "AJAX", "JSP"],
    Backend: ["Node.js", "Express.js", "RESTful APIs", "MySQL", "Firebase"],
    Tools: ["Git", "Docker", "VS Code", "Android Studio", "GCP"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm border border-purple-500/30">
              {text}
              <Cursor cursorColor="#d946ef" />
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Laraib Ahmad
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full-Stack Developer & Machine Learning Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            CSE Student at Galgotias University | Building innovative web &
            mobile applications | Open source contributor with passion for clean
            code and impactful solutions.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/laraib17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-all hover:scale-110 border border-purple-500/30"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/laraib-ahmad-b96214251/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-all hover:scale-110 border border-purple-500/30"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:labbuxt@gmail.com"
              className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-all hover:scale-110 border border-purple-500/30"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <NavLink
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              View My Work
            </NavLink>
            <NavLink
              to="/contact"
              className="px-8 py-3 bg-slate-800 rounded-lg font-semibold border border-purple-500/30 hover:bg-slate-700 transition-all"
            >
              Contact Me
            </NavLink>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 hover:gap-3 transition-all">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className=" text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-purple-300 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.highlight && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                      {project.highlight}
                    </span>
                  )}
                  {project.status && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 mb-4 inline-block flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" /> View Project
                  </a>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-purple-400 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">8.0 CGPA</h3>
              <p className="text-gray-400">Dean's List Recognition </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25+ Repositories</h3>
              <p className="text-gray-400">Active Open Source Contributor</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Published Research</h3>
              <p className="text-gray-400">AI in Medical Diagnosis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build it Together
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            I'm currently seeking SDE Intern opportunities and open to
            collaborating on exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:labbuxt@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/laraib"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold border border-purple-500/30 hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Laraib Ahmad. Built with React & Tailwind CSS</p>
          <p className="text-sm mt-2">+91 9717547140 | New Delhi, India</p>
        </div>
      </footer>
    </div>
  );
}
