import React, { useState, useEffect } from "react";
import "./index.css"; // Assuming you've set up Tailwind CSS in your project
import SkillCard from "./components/SkillCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];

      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Skills data
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Redux", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React Native", level: 75 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "Supabase", level: 70 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 65 },
        { name: "Shadcn UI", level: 80 },
      ],
    },
  ];

  // Project data
  const projects = [
    {
      id: 2,
      title: "Resturaunt Management ",
      description:
        "A resturant management tool with Website, Dashboard and a Pos system for both online and offline food ordering.",
      technologies: [
        "Next.js",
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Node Js",
        "Express",
      ],
      image: "/images/laptop.png",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Social Media App",
      description:
        "A mobile application for social networking with features like user profiles, posting, commenting, and direct messaging.",
      technologies: ["React Native", "Supabase", "PostgreSQL"],
      image: "/images/laptop.png",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "PopIt teams",
      description:
        "An Enterprise Level admin panel to manage mobile application and UI. Dashboard has feature like Lead Management , Card Management , Email Signature , .",
      technologies: ["React", "Supabase", "Tailwind CSS", "PostgreSQL"],
      image: "/images/laptop.png",
      placeholder: "/images/data/home.png",
      link: "#",
      github: "#",
    },
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce application with product management, cart functionality, user authentication, and payment processing.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe API",
        "Redux",
      ],
      image: "/images/laptop.png",
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Logs Dashboard",
      description:
        "A full-featured e-commerce application with product management, cart functionality, user authentication, and payment processing.",
      technologies: ["React", "Tailwind Css"],
      image: "/images/laptop.png",
      placeholder: "/images/data2/home.png",
      link: "#",
      github: "#",
    },
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "Dassoft",
      duration: "Aug 2024 - Present",
      description:
        "Developer of web applications using React/Next JS, Node/Express js, and SQL/NoSql databases.",
      achievements: [
        "Built 10+ web projects using React.js, Next.js, Firebase, Node.js, Express.js, Tailwind CSS, and GSAP.",
        "Worked in a team to develop interactive dashboards using React.js and integrated Redux to manage mobile application data.",
        "Contributed to the development and optimization of web applications using HTML, CSS, JavaScript, and React.",
        "Assisted in front-end UI/UX enhancements to improve user experience and responsiveness across different devices.",
        "Collaborated with developers to integrate RESTful APIs, debug issues, and optimize code for performance.",
        "Gained hands-on experience with version control using Git for collaborative development of web applications.",
        " Developed Websites and WebApps  using Node.js, Express.js, and MongoDB. Designed RESTful APIs and MongoDB queries",
        "Created dynamic and user-friendly interfaces with React.js, Next.js, TypeScript, and Tailwind CSS. ",
        "Implemented secure and scalable application architecture by incorporating Redux Toolkit for state management and JWT authentication.",
      ],
    },
  ];

  // Education data
  const education = [
    {
      id: 1,
      degree: "Bachelor of Software Engineering",
      institution: "PMAS-ARID",
      duration: "Oct 2022 - present",
      description: "Focused on programming fundamentals and system design.",
      courses: [
        "Data Structures and Algorithms",
        "Web Development",
        "Mobile Development",
        "Software Design Patterns",
        "Software Testing Methodologies",
        "Artificial Intelligence",
        "Machine Learning",
        "Object-Oriented Programming",
        "Web Development",
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <nav className="fixed md:h-16  top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 flex items-center">
        <div className="container max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a
                href="#home"
                className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
              >
                Muhammad Tayyab
              </a>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400
                    ${
                      activeSection === item.id
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center md:hidden ">
              {/* <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button> */}

              <button
                onClick={toggleMenu}
                className="ml-4 md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-2 transition-all duration-300">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800
                    ${
                      activeSection === item.id
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-10 dark:bg-gray-900 ">
        <div>
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-white to-indigo-200 dark:from-blue-950 dark:to-gray-950"
          >
            <div className="container mx-auto px-4 max-w-6xl  py-16 md:py-32">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                    Hi, I'm{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      Muhammad Tayyab
                    </span>
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                    Full Stack Developer
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                    I specialize in building modern, responsive web applications
                    with React, Next.js, Node.js, and various database
                    solutions. Let's bring your ideas to life!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Contact Me
                    </button>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-800 transition-colors rounded-lg"
                    >
                      View Projects
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3 max-md:hidden">
                  <img
                    src="/images/profile-pic.png"
                    alt="Profile"
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4 max-w-6xl ">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                  <img
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    I am a{" "}
                    <strong className="text-gray-200">
                      Full Stack Developer
                    </strong>{" "}
                    with
                    <strong className="text-gray-200">
                      {" "}
                      1 years of experience{" "}
                    </strong>
                    in building scalable and efficient web applications. My
                    expertise lies in{" "}
                    <strong className="text-gray-200">
                      JavaScript frameworks like React/Next Js - Node/Express Js
                      and Supabase/Firebase also databases like Sql , MySql ,
                      PostGre and MongoDb
                    </strong>
                    , and I have a strong foundation in
                    <strong className="text-gray-200">
                      {" "}
                      database management.
                    </strong>
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    In my free time I build side projects and engage with the
                    developers community where I contribute by teaching and
                    helping junior with their queries.
                  </p>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="py-16 bg-gradient-to-br from-white to-indigo-200 dark:from-blue-950 dark:to-gray-950"
          >
            <div className="container mx-auto px-4 max-w-6xl ">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <SkillCard>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {skill.category}
                    </h3>
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {item.name} - {item.level}%
                        </li>
                      ))}
                    </ul>
                  </SkillCard>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-6xl ">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="
                    hover:border-white border-transparent border
                    
                    bg-white dark:bg-gray-900 p-6 flex gap-5 rounded-lg shadow-xl"
                  >
                    <div className="w-1/2 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className=""
                      />
                      <img
                        src={project.placeholder}
                        alt=""
                        className="absolute w-[72%] top-2 right-8 h-[60%] object-cover "
                      />
                    </div>
                    <div className="w-1/2">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      {/* <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p> */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="py-16 space-y-20 bg-gradient-to-br from-white to-indigo-200 dark:from-blue-950 dark:to-gray-950"
          >
            <div className="container mx-auto px-4 max-w-6xl ">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((experience) => (
                  <div
                    key={experience.id}
                    className="bg-white dark:bg-gray-950/25  p-6 rounded-lg shadow-2xl"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {experience.company} - {experience.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {experience.description}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="container mx-auto px-4 max-w-6xl ">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-white dark:bg-gray-950/25 p-6 rounded-lg shadow-2xl"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {edu.institution} - {edu.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {edu.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-16 bg-indigo-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 max-w-6xl ">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Contact Me
              </h2>
              <form className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-gray-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4 max-w-6xl  text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2023 Muhammad Tayyab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
