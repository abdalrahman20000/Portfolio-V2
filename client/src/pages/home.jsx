import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Code,
  Star,
  Briefcase,
  Award,
  BookOpen,
  GraduationCap,
  Mail,
  ArrowUp,
  Github,
  Linkedin,
  ExternalLink,
  FileText,
  Heart,
  Eye,
  EyeOff,
  Globe,
} from "lucide-react";
//:)

const heroBackgroundImage = "/heroimage.png";

// data/developerData.js
export const developer = {
  name: "Abd-alrahman Mansour Ata",
  title: "Developer",
  location: "Zarqa, Jordan",
  phone: "+962 782717165",
  email: "abd.m.ata.2000@gmail.com",
  description:
    "Computer Information Systems graduate from Tafila Technical University, with Full-Stack Web Development training from Coding Academy by Orange. Skilled in JavaScript and modern web technologies, with strong communication skills. Currently based at Orange Headquarters, where I am gaining practical experience in Oracle SQL, Oracle Forms, PL/SQL, and MSSQL. Seeking an entry-level position to apply my technical knowledge, training, and real-world experience.",
  funFacts: [
    "Solved over 200 coding challenges on CodeWars",
    "Built my first website at age 15",
    "Passionate about 3D modeling and animation",
    "Love experimenting with new tech frameworks",
    "Enjoy hiking in Jordan's beautiful landscapes",
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Good" },
  ],
  skills: {
    frameworks: ["React.js", "Next.js", "Node.js", "Express.js"],
    programmingLanguages: ["JavaScript", "HTML/CSS", "C++", "C#"],
    database: ["OracleSQL", "Oracle-Forms", "MSSQL", "PostgreSQL", "MongoDB"],
    developmentTools: ["GitHub", "Trello", "Figma"],
    other: [
      "Responsive Web Design",
      "Version Control",
      "Blender 3D",
      "Unity 3D",
    ],
  },
  softSkills: [
    "Adaptability",
    "Self-Learning",
    "Attention to Detail",
    "Communication",
    "Team Collaboration",
    "Active Listening",
    "Time Management",
  ],
  projects: [
    {
      title: "Product Shop System (PSS)",
      role: "Developer",
      description:
        "Developed an inventory and sales management system with role-based access, user and supplier management, order processing, and sales tracking.",
      tech: [
        "Oracle Forms 12c",
        "PL/SQL",
        "Oracle Database",
        "WebLogic Server",
      ],
      image: "/psm.png",
      github: "",
      liveUrl: "",
      videoUrl: "",
      linkedin: "",
      pdf: "https://drive.google.com/file/d/1Phq85gg5cR7Uch76MXS67s2c8wu0nis8/view?usp=sharing",
    },
    {
      title: "ACafe",
      role: "Frontend Developer",
      description:
        "Built an interactive café website with a dynamic menu, shopping cart, and admin dashboard using React and Local Storage to simulate backend features.",
      tech: ["React", "Tailwind CSS", "Swiper.js", "Local Storage"],
      image: "/acafe.png",
      github: "",
      liveUrl: "https://abdalrahman20000.github.io/ACafe/",
      videoUrl: "",
      linkedin:
        "https://www.linkedin.com/posts/abd-alrahman-mansour-ata_webdevelopment-reactjs-tailwindcss-activity-7261090976289472512-lqcY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe98CUBRQP2xpnKSeIsefk6X11M6ZysNII",
    },
    {
      title: "TTU Campus Guide",
      role: "3D Developer",
      description:
        "Created a 3D virtual tour for TTU using Blender and Unity, allowing students to explore the campus interactively with realistic PBR materials and character navigation.",
      tech: ["Blender 3D", "Unity", "C#"],
      image: "/ttuguide.png",
      github: "",
      liveUrl: "",
      videoUrl: "",
      linkedin:
        "https://www.linkedin.com/posts/abd-alrahman-mansour-ata_im-excited-to-present-my-graduate-project-activity-7241539680351989760-o2LL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe98CUBRQP2xpnKSeIsefk6X11M6ZysNII",
      pdf: "https://drive.google.com/file/d/18II_4tNTWSIVf_skBecH9c_cLhOvYNqL/view",
    },
    {
      title: "Jordanian Elections Website",
      role: "Developer",
      description:
        "Developed a full-stack web platform for Jordanian elections using React.js, Node.js, and PostgreSQL. Implemented secure voting systems and real-time debate features.",
      tech: ["React.js", "Node.js", "PostgreSQL"],
      image: "/votely.png",
      github: "https://github.com/abdalrahman20000/ElectJo",
      liveUrl: "",
      videoUrl: "",
      linkedin:
        "https://www.linkedin.com/posts/abd-alrahman-mansour-ata_%D8%A8%D8%B3%D9%85-%D8%A7%D9%84%D9%84%D9%87-%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86-%D8%A7%D9%84%D8%B1%D8%AD%D9%8A%D9%85-%D9%88%D8%A8%D8%B9%D8%AF-%D9%85%D8%AC%D9%87%D9%88%D8%AF-%D9%83%D8%A8%D9%8A%D8%B1-%D9%85%D9%86-activity-7235351555946758144--JIL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe98CUBRQP2xpnKSeIsefk6X11M6ZysNII",
    },
    {
      title: "BraveHearts",
      role: "Developer",
      description:
        "Built a platform for cancer patient care featuring role-based access, chat, appointment booking, medical tracking, and admin management.",
      tech: [
        "React.js",
        "Node.js",
        "Redux",
        "Tailwind CSS",
        "PostgreSQL",
        "Stripe",
      ],
      image: "/braveheart.png",
      github: "https://github.com/abdalrahman20000/Carelth",
      liveUrl: "",
      videoUrl: "",
      linkedin:
        "https://www.linkedin.com/posts/abd-alrahman-mansour-ata_introducing-bravehearts-a-platform-for-activity-7248030241422467072-oHjP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe98CUBRQP2xpnKSeIsefk6X11M6ZysNII",
    },
    {
      title: "Future Energy",
      role: "Product Owner",
      description:
        "Designed a platform that gamifies sustainability with challenges, eco-actions, reports, and a marketplace to track and reward eco-friendly behavior.",
      tech: ["React.js", "Tailwind CSS", "MongoDB"],
      image: "/futureenergy.png",
      github: "https://github.com/Eco-Sustainable-System/EcoTrackerSystem",
      liveUrl: "",
      videoUrl: "",
      linkedin:
        "https://www.linkedin.com/posts/abd-alrahman-mansour-ata_excited-to-share-our-latest-project-activity-7254225573219057664-Iaz-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe98CUBRQP2xpnKSeIsefk6X11M6ZysNII",
    },
    {
      title: "ZWave - Survival Game",
      role: "Game Developer",
      description:
        "Developed a 3D survival game where a soldier and his team explore a mysterious island to investigate a strange disease outbreak. Designed immersive environments, enemy AI, and player mechanics using Unity and C#.",
      tech: ["Unity 3D", "C#"],
      image: "/zwave.png",
      github: "",
      liveUrl: "",
      videoUrl:
        "https://drive.google.com/file/d/1kLGfuS0IXV7VOmlyeq5Fw44Ye2w6_07g/view?usp=sharing",
      linkedin: "",
    },
    {
      title: "CimaKids",
      role: "Scrum Master",
      description:
        "Led the team as Scrum Master in designing a movie streaming website for children using HTML/CSS and Firebase.",
      tech: ["HTML/CSS", "Firebase"],
      image: "/cimakids.png",
      github: "https://github.com/developing-team/cima-kids",
      liveUrl: "https://developing-team.github.io/cima-kids/",
      videoUrl: "",
      linkedin:
        "https://www.linkedin.com/posts/abd-alrahman-mansour-ata_with-great-pride-im-excited-to-present-activity-7214699209428463616-hFGo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe98CUBRQP2xpnKSeIsefk6X11M6ZysNII",
    },
    {
      title: "B Baker",
      role: "Developer",
      description:
        "Developed a bakery e-commerce platform where users can explore recipes and purchase dishes, while chefs and admins manage orders, content, and user interactions.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: "/bbaker.png",
      github: "https://github.com/abdalrahman20000/B-Baker",
      liveUrl: "",
      videoUrl: "",
      linkedin:
        "https://www.linkedin.com/posts/abd-alrahman-mansour-ata_excited-to-present-our-project-b-baker-activity-7240813022036774912-YAPz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe98CUBRQP2xpnKSeIsefk6X11M6ZysNII",
    },
  ],
  experience: [
    {
      position: "Full-Stack Web Development Trainee",
      company: "Coding Academy by Orange",
      period: "May 2024 - Dec 2024",
      description:
        "Developed and deployed full-stack web applications using React.js and Node.js. Designed responsive, user-friendly front-end interfaces.",
      achievements: [
        "Completed 7 major projects with 100% on-time delivery.",
        "Passed masterpiece project with distinction as a requirement for certification.",
        "Delivered multiple presentations on various IT concepts and emerging technologies.",
      ],
    },
    {
      position: "Based at Orange Headquarters",
      company: "Orange, Jordan",
      period: "Dec 2024 - Present",
      description:
        "Gained hands-on experience in Oracle SQL, PL/SQL, Oracle Forms, and MSSQL.",
      achievements: [
        "Installed and configured Oracle SQL Server, WebLogic Server, and SQL Developer tools.",
        "Gained hands-on experience with SQL, PL/SQL, and Oracle Forms through real-world tasks.",
        "Built a Product Shop Management (PSM) project to apply practical knowledge in database and application development.",
      ],
    },
  ],
  education: [
    {
      degree: "7 Months Full-Stack Web Development Bootcamp",
      institution: "Coding Academy by Orange, Jordan",
      period: "May 2024 - Dec 2024",
      highlights: [
        "Played multiple roles including Scrum Master, QA, Product Owner, and Developer across project lifecycles.",
        "Specialized in MERN stack development.",
        "Completed 500+ hours of hands-on coding.",
      ],
    },
    {
      degree: "Bachelor's Degree in Computer Information Systems",
      institution: "Tafila Technical University, Jordan",
      period: "Sep 2019 - Sep 2023",
      highlights: [
        "Completed a graduation project: 3D Virtual Campus Tour.",
        "Gained knowledge of C++, Java, and other programming languages.",
        "Developed a Good understanding of core CIS areas including database, network and information security.",
      ],
    },
  ],
  contact: {
    email: "abd.m.ata.2000@gmail.com",
    github: "github.com/abdalrahman20000",
    linkedin: "linkedin.com/in/abd-alrahman-mansour-ata",
  },
};

const Navigation = React.memo(({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", icon: <User size={16} /> },
    { name: "Skills", icon: <Code size={16} /> },
    { name: "Projects", icon: <Star size={16} /> },
    { name: "Experience", icon: <Briefcase size={16} /> },
    { name: "Education", icon: <GraduationCap size={16} /> },
    { name: "Contact", icon: <Mail size={16} /> },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      className="sticky top-0 bg-[#03070f]/95 backdrop-blur z-50 border-b border-blue-900/30 shadow-lg shadow-blue-950/40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.h1
            className="text-lg md:text-xl font-bold text-white flex items-center group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-400 mr-1 md:mr-2 group-hover:rotate-45 transition-all duration-300">
              {"<"}
            </span>
            <span className="group-hover:text-blue-400 transition-colors duration-300 relative text-sm md:text-base">
              {"Abd-alrahman"}
              <span className="hidden sm:inline"> Mansour Ata</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="text-blue-400 mx-1 group-hover:-rotate-45 transition-all duration-300">
              {"/"}
            </span>
            <span className="text-blue-400 group-hover:translate-x-1 transition-all duration-300">
              {">"}
            </span>
          </motion.h1>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ y: -3 }}>
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center space-x-1 transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? "text-blue-400"
                      : "text-blue-100/70 hover:text-blue-400"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 space-y-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-0.5 bg-blue-200"
              animate={
                mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-blue-200"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-blue-200"
              animate={
                mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.ul
              className="md:hidden pb-4 space-y-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                      activeSection === item.name.toLowerCase()
                        ? "text-blue-400 bg-blue-900/30"
                        : "text-blue-100/70 hover:text-blue-400 hover:bg-blue-950/60"
                    }`}
                  >
                    {item.icon}
                    <span className="text-base">{item.name}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});

const BackToTopButton = React.memo(({ visible, scrollToTop }) => (
  <AnimatePresence>
    {visible && (
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white p-3 rounded-full shadow-lg shadow-blue-900/50"
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    )}
  </AnimatePresence>
));

const TypingAnimation = React.memo(({ text }) => {
  const [typingText, setTypingText] = useState("");
  const stateRef = useRef({ index: 0, isTyping: true });

  useEffect(() => {
    let timer;
    const state = stateRef.current;

    const tick = () => {
      if (state.isTyping) {
        if (state.index < text.length) {
          state.index++;
          setTypingText(text.substring(0, state.index));
          timer = setTimeout(tick, 150);
        } else {
          timer = setTimeout(() => {
            state.isTyping = false;
            tick();
          }, 3000);
        }
      } else {
        if (state.index > 0) {
          state.index--;
          setTypingText(text.substring(0, state.index));
          timer = setTimeout(tick, 75);
        } else {
          timer = setTimeout(() => {
            state.isTyping = true;
            tick();
          }, 1000);
        }
      }
    };

    timer = setTimeout(tick, 150);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className="font-mono whitespace-nowrap overflow-hidden">
      {typingText}
      <span className="animate-blink ml-1">|</span>
    </span>
  );
});

const Hero = React.memo(({ developer }) => {
  const [contentVisible, setContentVisible] = useState(true);

  const toggleVisibility = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <motion.section
      id="about"
      className="relative overflow-hidden min-h-screen md:h-[1000px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        backgroundImage: `url('${heroBackgroundImage}')`,
        backgroundBlendMode: "overlay",
        backgroundColor: contentVisible
          ? "rgba(2, 6, 18, 0.88)"
          : "rgba(2, 6, 18, 0.65)",
      }}
    >
      {/* Toggle visibility button */}
      <motion.button
        onClick={toggleVisibility}
        className="hidden md:flex absolute top-4 right-4 z-20 bg-blue-950/50 hover:bg-blue-900/70 text-white p-2 rounded-full transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={contentVisible ? "Hide content" : "Show content"}
      >
        {contentVisible ? (
          <Eye size={16} className="text-blue-100/70" />
        ) : (
          <EyeOff size={16} className="text-blue-100/70" />
        )}
      </motion.button>

      {/* Hero content — flex column full height on mobile, centered block on desktop */}
      <AnimatePresence>
        {contentVisible && (
          <motion.div
            className="container relative z-10 mx-auto px-4 flex flex-col md:block min-h-screen md:min-h-0 py-12 md:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between flex-1 md:flex-none">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 flex flex-col flex-1 md:flex-none"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="inline-block mb-4 p-2 bg-blue-950/60 rounded-lg border border-blue-500/30 self-start">
                  <p className="text-blue-300">
                    <TypingAnimation text="Hello World! I'm" />
                  </p>
                </div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {developer.name}
                </motion.h1>

                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {developer.title}
                </motion.h2>

                <motion.div
                  className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-blue-100/70 text-sm md:text-base"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span>{developer.location}</span>
                  <span className="text-blue-400">•</span>
                  <span>{developer.phone}</span>
                  <span className="text-blue-400">•</span>
                  <a
                    href={`mailto:${developer.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    {developer.email}
                  </a>
                </motion.div>

                <motion.p
                  className="text-blue-100/80 text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <span className="md:hidden">
                    Full-Stack Developer skilled in JavaScript, React, Node.js
                    and Oracle technologies. Currently at Orange HQ. Seeking an
                    entry-level position.
                  </span>
                  <span className="hidden md:inline">
                    {developer.description}
                  </span>
                </motion.p>

                {/* Spacer — mobile only, pushes buttons to bottom of screen */}
                <div className="flex-1 md:hidden" />

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-8 md:pb-0"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <motion.a
                    href="#contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 text-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)",
                    }}
                  >
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="#projects"
                    className="bg-blue-950/80 hover:bg-blue-900/80 text-white font-medium py-3 px-8 rounded-lg border border-blue-700/40 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    View My Projects
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
});

const Skills = React.memo(({ developer }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#03070f] via-[#060d1f] to-[#03070f]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        {/* Languages Cards - Added at the top of Skills section */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:gap-8 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {developer.languages.map((language, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] p-6 rounded-xl shadow-lg border border-blue-900/30 text-center"
              variants={item}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center justify-center">
                <Globe size={18} className="mr-2" />
                {language.name}
              </h3>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full text-white text-sm">
                {language.level}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Programming Languages */}
          <motion.div
            className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] p-6 rounded-xl shadow-lg border border-blue-900/30"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Code size={18} className="mr-2" />
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.programmingLanguages.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-blue-950/60 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-800/30 transition-colors duration-200 hover:bg-blue-700/60 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] p-6 rounded-xl shadow-lg border border-blue-900/30 md:col-span-2 lg:col-span-1"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Code size={18} className="mr-2" />
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.frameworks.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-blue-950/60 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-800/30 transition-colors duration-200 hover:bg-blue-700/60 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] p-6 rounded-xl shadow-lg border border-blue-900/30"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Tool size={18} className="mr-2" />
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.developmentTools.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-blue-950/60 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-800/30 transition-colors duration-200 hover:bg-blue-700/60 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Database */}
          <motion.div
            className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] p-6 rounded-xl shadow-lg border border-blue-900/30 lg:col-span-1 md:col-span-2"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Database size={18} className="mr-2" />
              Database
            </h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.database.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-blue-950/60 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-800/30 transition-colors duration-200 hover:bg-blue-700/60 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] p-6 rounded-xl shadow-lg border border-blue-900/30"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Layers size={18} className="mr-2" />
              Other Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {developer.skills.other.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-blue-950/60 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-800/30 transition-colors duration-200 hover:bg-blue-700/60 hover:text-white cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] p-6 rounded-xl shadow-lg border border-blue-900/30 md:col-span-2"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Heart size={18} className="mr-2" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {developer.softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-blue-950/60 text-blue-200 px-4 py-2 rounded-full text-sm flex items-center border border-blue-800/30 transition-colors duration-200 hover:bg-blue-700/60 hover:text-white cursor-default"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

const Projects = ({ developer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const projectsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Optimize rendering with useMemo for visible cards calculation
  const visibleCards = useMemo(() => {
    const indexes = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      // Handle wrap-around
      if (index < 0) index = developer.projects.length + index;
      if (index >= developer.projects.length)
        index = index - developer.projects.length;
      indexes.push(index);
    }
    return indexes;
  }, [currentIndex, developer.projects.length]);

  // Handle next slide with useCallback to prevent unnecessary re-renders
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === developer.projects.length - 1 ? 0 : prevIndex + 1,
    );
    setTimeout(() => setIsAnimating(false), 300); // Faster animation completion
  }, [isAnimating, developer.projects.length]);

  // Handle previous slide with useCallback
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? developer.projects.length - 1 : prevIndex - 1,
    );
    setTimeout(() => setIsAnimating(false), 300); // Faster animation completion
  }, [isAnimating, developer.projects.length]);

  // Go to specific slide with useCallback
  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentIndex) return;
      setIsAnimating(true);
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300); // Faster animation completion
    },
    [isAnimating, currentIndex],
  );

  // Setup IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Add a small delay before starting animations
          setTimeout(() => {
            setIsLoaded(true);
          }, 300);
        }
      },
      { threshold: 0.25 }, // Trigger when 25% of element is visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  // Get the position class based on distance from current index
  const getPositionClass = useCallback(
    (index) => {
      const position = visibleCards.indexOf(index);
      switch (position) {
        case 0:
          return "card-far-left";
        case 1:
          return "card-left";
        case 2:
          return "card-center";
        case 3:
          return "card-right";
        case 4:
          return "card-far-right";
        default:
          return "card-hidden";
      }
    },
    [visibleCards],
  );

  // Animation variants with optimized performance
  const cardVariants = {
    "card-center": {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 5,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 450, // Increased stiffness for faster animation
        damping: 22, // Adjusted damping for snappier movement
        duration: 0.25, // Faster animation
      },
    },
    "card-left": {
      x: -280,
      y: 30,
      scale: 0.85,
      opacity: 0.8,
      zIndex: 4,
      rotateY: 10,
      transition: {
        type: "spring",
        stiffness: 450,
        damping: 22,
        duration: 0.25,
      },
    },
    "card-right": {
      x: 280,
      y: 30,
      scale: 0.85,
      opacity: 0.8,
      zIndex: 4,
      rotateY: -10,
      transition: {
        type: "spring",
        stiffness: 450,
        damping: 22,
        duration: 0.25,
      },
    },
    "card-far-left": {
      x: -520,
      y: 60,
      scale: 0.7,
      opacity: 0.6,
      zIndex: 3,
      rotateY: 20,
      transition: {
        type: "spring",
        stiffness: 450,
        damping: 22,
        duration: 0.25,
      },
    },
    "card-far-right": {
      x: 520,
      y: 60,
      scale: 0.7,
      opacity: 0.6,
      zIndex: 3,
      rotateY: -20,
      transition: {
        type: "spring",
        stiffness: 450,
        damping: 22,
        duration: 0.3, // Slightly slower to avoid the "slow appear" effect
      },
    },
    "card-hidden": {
      x: 0,
      y: 100,
      scale: 0,
      opacity: 0,
      zIndex: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 500, // Even faster reveal of new cards
        damping: 20,
        duration: 0.2, // Quicker animation for hidden -> visible
      },
    },
  };

  // Custom Video icon component (memoized)
  const Video = useCallback(
    (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    [],
  );

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#03070f] to-[#060d1f]"
      ref={projectsRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto px-4">
        {/* Section Header */}
        <motion.h2
          className="text-3xl font-bold text-white mb-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Projects
          </motion.span>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
        </motion.h2>

        {/* Loading Animation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 1 }}
          animate={isLoaded ? { opacity: 0, display: "none" } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isInView && !isLoaded && (
            <div className="flex space-x-2">
              <motion.div
                className="w-4 h-4 bg-blue-500 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-4 h-4 bg-blue-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
              />
              <motion.div
                className="w-4 h-4 bg-blue-300 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
              />
            </div>
          )}
        </motion.div>

        <motion.div
          className="relative pb-10 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* ── MOBILE: single card, swipe with prev/next buttons ── */}
          <div className="md:hidden">
            {/* Fixed-height container — card is absolutely positioned inside so
                AnimatePresence enter/exit never affects document flow or page height */}
            <div
              className="relative mx-auto max-w-sm overflow-hidden"
              style={{ height: 480 }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {isLoaded && (
                  <motion.div
                    key={currentIndex}
                    initial={{
                      opacity: 0,
                      x: direction === "right" ? 80 : -80,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction === "right" ? -80 : 80 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    {(() => {
                      const project = developer.projects[currentIndex];
                      return (
                        <div className="bg-gradient-to-b from-[#060d1f] to-[#0a1628] rounded-xl overflow-hidden shadow-xl flex flex-col h-full border border-blue-900/30">
                          <div className="h-48 shrink-0 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-5 flex flex-col flex-grow overflow-hidden">
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <h3 className="text-lg font-semibold text-white leading-tight line-clamp-2">
                                {project.title}
                              </h3>
                              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-xs text-white px-2 py-1 rounded-full shrink-0">
                                {project.role}
                              </span>
                            </div>
                            <p className="text-blue-100/70 text-sm mb-4 line-clamp-3">
                              {project.description}
                            </p>
                            <div
                              className="flex flex-wrap gap-2 mb-4 overflow-hidden"
                              style={{ maxHeight: 64 }}
                            >
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded text-xs shrink-0 border border-blue-700/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-blue-900/40">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 text-sm flex items-center gap-1"
                                >
                                  <Github size={13} />
                                  <span>GitHub</span>
                                </a>
                              )}
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 text-sm flex items-center gap-1"
                                >
                                  <ExternalLink size={13} />
                                  <span>Live Demo</span>
                                </a>
                              )}
                              {project.videoUrl && (
                                <a
                                  href={project.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 text-sm flex items-center gap-1"
                                >
                                  <Video size={13} />
                                  <span>Video</span>
                                </a>
                              )}
                              {project.linkedin && (
                                <a
                                  href={project.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 text-sm flex items-center gap-1"
                                >
                                  <Linkedin size={13} />
                                  <span>LinkedIn</span>
                                </a>
                              )}
                              {project.pdf && (
                                <a
                                  href={project.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 text-sm flex items-center gap-1"
                                >
                                  <FileText size={13} />
                                  <span>PDF</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile nav buttons: always below at fixed position, never shifts */}
            {isLoaded && (
              <div className="flex items-center justify-between mt-4 px-2">
                <button
                  onClick={prevSlide}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  aria-label="Previous"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                {/* Pagination dots — fixed width so dots expanding never shift buttons */}
                <div className="flex items-center gap-1.5">
                  {developer.projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 w-6" : "bg-blue-900 w-2"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  aria-label="Next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* ── DESKTOP: original 3D carousel (unchanged) ── */}
          <div className="hidden md:block">
            <div className="relative mx-auto overflow-hidden px-4">
              <div className="flex justify-center items-center relative h-[600px] perspective-1500">
                <AnimatePresence mode="wait">
                  {isLoaded &&
                    developer.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="project-card absolute transition-all transform-gpu"
                        custom={index}
                        variants={cardVariants}
                        initial="card-hidden"
                        animate={getPositionClass(index)}
                        whileHover={
                          getPositionClass(index) === "card-center"
                            ? {
                                scale: 1.03,
                                boxShadow:
                                  "0 20px 30px -10px rgba(37, 99, 235, 0.25)",
                                transition: { duration: 0.2 },
                              }
                            : {}
                        }
                        style={{
                          width: 400,
                          height: 520,
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                          willChange: "transform, opacity",
                        }}
                      >
                        <div className="bg-gradient-to-b from-[#060d1f] to-[#0a1628] rounded-xl overflow-hidden shadow-xl flex flex-col h-full border border-blue-900/30">
                          <motion.div
                            className="bg-blue-950 h-56 shrink-0 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-center"
                              loading="lazy"
                            />
                          </motion.div>
                          <div className="p-6 flex flex-col flex-grow overflow-hidden">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex flex-wrap items-center justify-between w-full">
                                <h3 className="text-xl font-semibold text-white mr-2 line-clamp-1">
                                  {project.title}
                                </h3>
                                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-xs text-white px-2 py-1 rounded-full mt-1 md:mt-0 shrink-0">
                                  {project.role}
                                </span>
                              </div>
                            </div>
                            <p className="text-blue-100/70 text-base mb-5 line-clamp-3">
                              {project.description}
                            </p>
                            <div
                              className="flex flex-wrap gap-2 mb-5 overflow-hidden"
                              style={{ maxHeight: 72 }}
                            >
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded text-sm hover:bg-blue-700/60 transition-colors shrink-0 border border-blue-700/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex-grow"></div>
                            <div className="flex flex-wrap justify-between items-center mt-auto gap-2">
                              {project.github && (
                                <motion.a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span>GitHub</span>
                                  <Github size={14} />
                                </motion.a>
                              )}
                              {project.liveUrl && (
                                <motion.a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span>Live Demo</span>
                                  <ExternalLink size={14} />
                                </motion.a>
                              )}
                              {project.videoUrl && (
                                <motion.a
                                  href={project.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span>Video</span>
                                  <Video size={14} />
                                </motion.a>
                              )}
                              {project.linkedin && (
                                <motion.a
                                  href={project.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span>LinkedIn</span>
                                  <Linkedin size={14} />
                                </motion.a>
                              )}
                              {project.pdf && (
                                <motion.a
                                  href={project.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <span>PDF</span>
                                  <FileText size={14} />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>

              {/* Desktop navigation buttons */}
              {isLoaded && (
                <>
                  <motion.button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-900/50"
                    aria-label="Previous"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-900/50"
                    aria-label="Next"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </motion.button>
                </>
              )}

              {/* Desktop pagination */}
              {isLoaded && (
                <motion.div
                  className="flex justify-center mt-8 space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {developer.projects.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 w-10" : "bg-blue-900/60 w-3"}`}
                      aria-label={`Go to slide ${index + 1}`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Subtle animation layer */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-800/5 to-indigo-900/10 rounded-3xl"></div>
          </motion.div>

          <style>{`
            .perspective-1500 { perspective: 1500px; }
            .project-card { will-change: transform, opacity; }
            @media (prefers-reduced-motion: no-preference) {
              .project-card { transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
            }
          `}</style>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Experience = React.memo(({ developer }) => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-[#060d1f] to-[#03070f]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {developer.experience.map((job, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-blue-600/60 pl-6 py-2 relative group hover:pl-8 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-6"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
              <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                {job.position}
              </h3>
              <p className="text-blue-400 mb-2">
                {job.company} | {job.period}
              </p>
              <p className="text-blue-100/70 mb-4">{job.description}</p>

              <h4 className="text-sm font-medium text-blue-400 mb-2">
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {job.achievements.map((achievement, achieveIndex) => (
                  <motion.li
                    key={achieveIndex}
                    className="text-blue-100/70 text-sm flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + achieveIndex * 0.1,
                    }}
                  >
                    <Award
                      size={14}
                      className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

const Education = React.memo(({ developer }) => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-[#03070f] to-[#060d1f]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {developer.education.map((edu, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-blue-600/60 pl-6 py-2 relative group hover:pl-8 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-6"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
              <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-blue-400 mb-3">
                {edu.institution} | {edu.period}
              </p>

              <ul className="space-y-1">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <motion.li
                    key={highlightIndex}
                    className="text-blue-100/70 text-sm flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + highlightIndex * 0.1,
                    }}
                  >
                    <BookOpen
                      size={14}
                      className="text-blue-400 mr-2 mt-1 flex-shrink-0"
                    />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

const Contact = React.memo(({ developer }) => {
  const contactVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-b from-[#060d1f] via-[#03070f] to-[#03070f]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-br from-[#060d1f] to-[#0a1628] backdrop-blur p-6 md:p-10 rounded-2xl shadow-xl border border-blue-900/40"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-blue-100/70 mb-6 md:mb-10 text-center leading-relaxed text-sm md:text-base">
            I'm currently seeking an entry-level Developer position to apply my
            technical knowledge, training, and real-world experience. If you
            have an opportunity that matches my skills and experience, feel free
            to reach out!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8">
            <motion.a
              href={`mailto:${developer.contact.email}`}
              className="flex items-center justify-center gap-3 text-blue-200 hover:text-blue-400 transition-colors bg-blue-950/60 hover:bg-blue-900/60 p-4 rounded-xl w-full md:w-auto border border-blue-800/40"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="text-blue-400" />
              <span>Email</span>
            </motion.a>

            <motion.a
              href={`https://${developer.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-blue-200 hover:text-blue-400 transition-colors bg-blue-950/60 hover:bg-blue-900/60 p-4 rounded-xl w-full md:w-auto border border-blue-800/40"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="text-blue-400" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={`https://${developer.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-blue-200 hover:text-blue-400 transition-colors bg-blue-950/60 hover:bg-blue-900/60 p-4 rounded-xl w-full md:w-auto border border-blue-800/40"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} className="text-blue-400" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

const Footer = React.memo(({ developer }) => {
  return (
    <footer className="bg-[#03070f] py-8 border-t border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-300/50">
              © {new Date().getFullYear()} {developer.name}. All rights
              reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href={`mailto:${developer.contact.email}`}
              className="text-blue-400/50 hover:text-blue-300 transition-colors"
              aria-label="Email"
              whileHover={{ y: -5, color: "#60a5fa" }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href={`https://${developer.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/50 hover:text-blue-300 transition-colors"
              aria-label="GitHub"
              whileHover={{ y: -5, color: "#60a5fa" }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={`https://${developer.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/50 hover:text-blue-300 transition-colors"
              aria-label="LinkedIn"
              whileHover={{ y: -5, color: "#60a5fa" }}
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
});

// Import statements for Lucide icons
const Database = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const Tool = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const Layers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

// Languages Component
const Languages = ({ developer }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const Globe = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  return (
    <section
      id="languages"
      className="py-20 bg-gradient-to-b from-[#060d1f] to-[#03070f]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Languages
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto flex justify-center gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {developer.languages.map((language, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#060d1f] to-[#0a1628] px-8 py-6 rounded-xl shadow-lg border border-blue-900/30 text-center"
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)",
              }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {language.name}
              </h3>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1 rounded-full text-white text-sm">
                {language.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Add this useEffect hook for smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  // Control back-to-top button visibility and determine active section
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const y = window.pageYOffset;
        setVisible(y > 300);

        const sections = document.querySelectorAll("section");
        const scrollPosition = y + 100;
        sections.forEach((section) => {
          const top = section.offsetTop;
          if (
            scrollPosition >= top &&
            scrollPosition < top + section.offsetHeight
          ) {
            setActiveSection(section.id);
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#03070f] text-white min-h-screen">
      <Navigation activeSection={activeSection} />

      <Hero developer={developer} />

      <Skills developer={developer} />

      <Projects developer={developer} />

      <Experience developer={developer} />

      <Education developer={developer} />

      <Contact developer={developer} />

      <Footer developer={developer} />

      <BackToTopButton visible={visible} scrollToTop={scrollToTop} />

      {/* Global CSS Keyframes for animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes typing { from { width: 0; } to { width: 100%; } }
        @keyframes pop { 0% { opacity: 0; transform: scale(0.8); } 70% { transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-typing { animation: typing 3.5s steps(40, end); }
        .animate-pop { animation: pop 0.5s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-blink { animation: blink 0.75s infinite; }
        .project-card { will-change: transform, opacity; contain: layout style; }
        * { -webkit-font-smoothing: antialiased; }
        img { content-visibility: auto; }
      `}</style>
    </div>
  );
}
