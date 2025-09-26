import React, { useState, useEffect } from 'react';

import "./App.css";
import { projects, achievements,extraCurriculars } from "./App.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';



const images = [
  '/6.png',
  '/Tech.jpg' 
];
function HeroImg() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-img">
      <img src={images[currentIndex]} alt="Sham Bhu profile" />
    </div>
  );
}

  
function App() {
  const [tab, setTab] = useState("skills");

  const handleTab = (tabName) => setTab(tabName);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me! I will get back to you soon.");
    e.target.reset();
  };
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="watercolor-bg"></div>
      <header>
  <div className="nav-container">
    <span className="logo">Shambhu.dev</span>
    
    {/* Hamburger button */}
     <button
          className={`hamburger-btn${isMenuOpen ? " open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`bar${isMenuOpen ? " open" : ""}`}></span>
          <span className={`bar${isMenuOpen ? " open" : ""}`}></span>
          <span className={`bar${isMenuOpen ? " open" : ""}`}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links${isMenuOpen ? " active" : ""}`}>
          <a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#resume" onClick={() => setIsMenuOpen(false)}>Resume</a>
          <a href="#extra" onClick={() => setIsMenuOpen(false)}>Extra</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
  </div>
</header>

      <main>
        {/* HERO */}
        <section className="main-hero" id="hero">
          <div className="hero-text">
            <h1>
              MERN Stack<br />Web Developer <span className="wave-emoji">✌️</span>
            </h1>
            <p>
              Hi 👋, I'm <strong>Shambhu</strong>. A versatile ML Engineer with  full-stack expertise. I’m passionate about building scalable, AI-driven, and user-centric web solutions using the MERN stack.                    
                <br/>Ready to contribute impactful technology in dynamic environments!<span style={{ color: "#b30000", fontSize: "1.3em" }}>❤️</span>
            </p>
            <div className="hero-social">
              <a href="https://github.com/ransa17/" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/shambhu-kumar-284709215/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
         <div className="tech-stack">
  <span>Tech Stack|</span>
  {/* First Row */}
  <div className="tech-stack-row">
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" /></div>
  </div>
  {/* Second Row */}
  <div className="tech-stack-row">
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /></div>
   
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" /></div>
    <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" /></div>
  </div>
</div>



          </div>
          <div className="hero-img">
            <HeroImg/>
       </div>
        </section>

         {/* PROJECTS */}
        <section id="projects">
          <><div className="section-title">Projects <span role="img" aria-label="rocket">🚀</span></div><div className="projects-grid" id="projectGallery">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <img src={proj.img} alt={proj.title} />
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            ))}
          </div></>
        </section>

         {/* ACHIEVEMENTS */}
<section id="achievements">
  <div className="section-title">
    Achievements <span role="img" aria-label="trophy">🏆</span>
  </div>
  <div className="achievements-grid">
    {achievements.map((ach, idx) => (
      <div className="achievement-card" key={idx}>
        <img src={ach.img} alt={ach.title + ' Certificate'} />
        <h4>{ach.title}</h4>
        <p>{ach.desc}</p>
        <a href={ach.link} target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
    ))}
  </div>
</section>
    
        {/* ABOUT */}
        <section id="about">
          <div className="section-title">About <span role="img" aria-label="laptop">👨‍💻</span></div>
          <div className="about-container">
            <div className="about-photo">
              <img src="/3.png" alt="Sham Bhu" />
            </div>
            <div className="about-details">
              <h3>About Me 🤟</h3>
              <h2>A passionate  💡 ML Engineer &  MERN Stack Developer <span style={{ color: "#b30000" }}>❤️</span></h2>
              <p>
                As a  ML Engineer with robust frontend and full-stack expertise, I am passionate about delivering impactful, scalable, and AI-driven web solutions within dynamic tech environments.

                  My tech stack features standout skills ✨ such as HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js, Firebase, API Integration, Figma, WordPress, and more.<br /><br />
                I excel in designing and maintaining responsive, user-centric websites, leveraging my UX design abilities 🧑‍💻 to ensure seamless user experiences. My strengths include writing clean, optimized code, utilizing the latest development tools ⚙️, and applying advanced ML techniques to solve real-world problems.

                As a collaborative team player 🤝, I thrive in cross-functional teams, constantly learning and contributing to produce outstanding web applications that make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume">
          <div className="section-title">Resume <span role="img" aria-label="resume">📄</span></div>
          <div className="resume-tabs">
  <button
    className={`resume-tab${tab === "skills" ? " active" : ""}`}
    onClick={() => handleTab("skills")}
  >
    Skills
  </button>
  <button
    className={`resume-tab${tab === "education" ? " active" : ""}`}
    onClick={() => handleTab("education")}
  >
    Education
  </button>
</div>
          {tab === "skills" && (
            <div id="resume-skills" className="resume-content">
              <div className="summary">
                <h4>Summary</h4>
                <strong>Shambhu Kumar</strong>
                <p>
                  Deliver high-quality designs tailored to client specifications, ensuring every project aligns with customer objectives and business goals. My strong project management skills enable me to oversee and execute projects smoothly, from concept to deployment.

                  With a keen eye for design and a commitment to writing clean, maintainable code, I create visually appealing and functional websites. I excel at implementing engaging content that addresses user needs, resulting in intuitive and impactful digital experiences.

                  Driven by a user-centric approach and technical expertise, I am dedicated to exceeding expectations and delivering solutions that truly make a difference.
                </p>
                <ul style={{ textAlign: "left" }}>
                  <li>shambhukr62849@gmail.com</li>
                </ul>
                <a className="resume-btn" href="Shambhu_resume.pdf" download>Download Resume</a>
              </div>
              <div className="skills-list">
                <div className="skill-bar">
                  <span>React</span>
                  <div className="bar-bg"><div className="bar-fill bar-react"></div><span className="bar-label">80%</span></div>
                </div>
                <div className="skill-bar">
                  <span>Node JS</span>
                  <div className="bar-bg"><div className="bar-fill bar-node"></div><span className="bar-label">85%</span></div>
                </div>
                <div className="skill-bar">
                  <span>JavaScript</span>
                  <div className="bar-bg"><div className="bar-fill bar-js"></div><span className="bar-label">80%</span></div>
                </div>
                <div className="skill-bar">
                  <span>MongoDB</span>
                  <div className="bar-bg"><div className="bar-fill bar-mongo"></div><span className="bar-label">75%</span></div>
                </div>
                <div className="skill-bar">
                  <span>Express JS</span>
                  <div className="bar-bg"><div className="bar-fill bar-express"></div><span className="bar-label">90%</span></div>
                </div>
                <div className="skill-bar">
                  <span>Canva</span>
                  <div className="bar-bg"><div className="bar-fill bar-other"></div><span className="bar-label">100%</span></div>
                </div>
              </div>
            </div>
          )}
          {tab === "education" && (
            <div id="resume-education" className="resume-content" style={{ display: "block" }}>
              <div className="education-list">
                <div className="edu-item">
                  <div className="edu-title">B.Tech in Computer Science</div>
                  <div className="edu-institute">Katihar Engineering Collge, Katihar</div>
                  <div className="edu-duration">2022 - 2026</div>
                  <div>CGPA: 7.19</div>
                </div>
                <div className="edu-item">
                  <div className="edu-title">Higher Secondary</div>
                  <div className="edu-institute">SSD High School, Patna</div>
                  <div className="edu-duration">2019 - 2021</div>
                  <div>Percentage: 76%</div>
                </div>
              </div>
            </div>
          )}
        </section>

       

      


       {/* EXTRA CURRICULAR */}
<section id="extra">
  <div className="section-title">
    Extra Curricular Activities <span role="img" aria-label="party">🎉</span>
  </div>
  <div className="extra-grid">
    {extraCurriculars.map((extra, idx) => (
      <div className="extra-card" key={idx}>
        <img src={extra.img} alt={extra.title + ' Certificate'} />
        <h4>{extra.title}</h4>
        <p>{extra.desc}</p>
        <a href={extra.link} target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
    ))}
  </div>
</section>

        {/* CONTACT */}
       <footer className="footer" id="contact">
      <div className="footer-content">
        <div>
          <h4>Contact Me</h4>
          <p>Email: shambhukr62849@gmail.com</p>
          <p>Phone: +91 7070407423</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#extra">Extra</a></li>
          </ul>
        </div>
        
       <div>
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit" className="ripple">Subscribe</button>
          </form>
          <div className="social-icons">
            <motion.a whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }} href="https://twitter.com/" aria-label="Twitter">🐦</motion.a>
            <motion.a whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }} href="https://www.linkedin.com/in/shambhu-kumar-284709215/" aria-label="LinkedIn">🔗</motion.a>
            <motion.a whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }} href="https://github.com/ransa17/" aria-label="GitHub">🐙</motion.a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Shambhu Kumar. All rights reserved.
      </div>
    </footer>
      </main>
      {/* FontAwesome CDN */}
      <script src="https://kit.fontawesome.com/4a7b3e8d1c.js" crossOrigin="anonymous"></script>
    </div>
  );
}

export default App;
