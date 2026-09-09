import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  const skills = [
    {
      name: "HTML5",
      icon: "bi bi-filetype-html",
      percentage: 100,
    },
    {
      name: "CSS3",
      icon: "bi bi-filetype-css",
      percentage: 100,
    },
    {
      name: "JavaScript",
      icon: "bi bi-filetype-js",
      percentage: 80,
    },
    {
      name: "Bootstrap",
      icon: "bi bi-bootstrap",
      percentage: 100,
    },
    {
      name: "React.js",
      icon: "bi bi-code-slash",
      percentage: 70,
    },
    {
      name: "Git & GitHub",
      icon: "bi bi-github",
      percentage: 90,
    },
  ];

  const projects = [
    {
      title: "BikeWorld",
      description:
        "A modern bike website created using React.js and Bootstrap with responsive design.",
      technologies: "React.js • Bootstrap",
      icon: "bi bi-bicycle",
    },
    {
      title: "Weather App",
      description:
        "Weather information application using JavaScript and weather API.",
      technologies: "JavaScript • API • CSS",
      icon: "bi bi-cloud-sun",
    },
    {
      title: "Quiz App",
      description:
        "Interactive quiz application with timer, questions and result section.",
      technologies: "HTML • CSS • JavaScript",
      icon: "bi bi-question-circle",
    },
    {
      title: "Image Slider",
      description:
        "Responsive image slider project with smooth navigation and modern UI.",
      technologies: "HTML • CSS • JavaScript",
      icon: "bi bi-images",
    },
  ];

  return (
    <>
     
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-name">
            <i className="bi bi-code-slash"></i>
            Srushti | Web Developer
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/pambharshrushti-maker"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

     
      <nav className="navbar navbar-expand-lg navbar-dark main-navbar sticky-top">
        <div className="container">
          <a className="navbar-brand logo" href="#home">
            Srushti Pambhar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link contact-nav" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
      <section id="home" className="hero-section">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
            ></button>

            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
            ></button>

            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-content">
                <div className="hero-text">
                  <p className="small-title">WELCOME TO MY PORTFOLIO</p>

                  <h1>
                    Hi, I'm <span>Srushti</span>
                  </h1>

                  <h2>A Passionate Web Developer</h2>

                  <p>
                    I create modern, responsive and user-friendly websites
                    using latest web technologies.
                  </p>

                  <a href="#projects" className="btn main-btn">
                    Explore My Work
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>

                <div className="hero-icon">
                  <i className="bi bi-laptop"></i>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="hero-content">
                <div className="hero-text">
                  <p className="small-title">CREATIVE DEVELOPER</p>

                  <h1>
                    Turning <span>Ideas</span>
                  </h1>

                  <h2>Into Digital Experiences</h2>

                  <p>
                    I love designing beautiful interfaces and converting
                    creative ideas into functional websites.
                  </p>

                  <a href="#about" className="btn main-btn">
                    Know More
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>

                <div className="hero-icon">
                  <i className="bi bi-palette"></i>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="hero-content">
                <div className="hero-text">
                  <p className="small-title">LET'S BUILD TOGETHER</p>

                  <h1>
                    Let's Build <span>Something</span>
                  </h1>

                  <h2>Great Together</h2>

                  <p>
                    Have an idea? Let's turn it into a beautiful and
                    professional web experience.
                  </p>

                  <a href="#contact" className="btn main-btn">
                    Contact Me
                    <i className="bi bi-envelope ms-2"></i>
                  </a>
                </div>

                <div className="hero-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Who I Am</h2>
            <span></span>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about-image">
                <div className="developer-icon">
                  <i className="bi bi-person-workspace"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-content">
                <h3>
                  I'm a <span>Web Developer</span>
                </h3>

                <p>
                  Hello! I'm Srushti, a passionate web developer who enjoys
                  creating modern and responsive websites.
                </p>

                <p>
                  I have experience working with HTML, CSS, JavaScript,
                  Bootstrap and React.js. I enjoy learning new technologies
                  and building creative projects.
                </p>

                <div className="about-info">
                  <div>
                    <strong>Name:</strong>
                    <span>Srushti</span>
                  </div>

                  <div>
                    <strong>Role:</strong>
                    <span>Web Developer</span>
                  </div>

                  <div>
                    <strong>Location:</strong>
                    <span>Gujarat, India</span>
                  </div>

                  <div>
                    <strong>Email:</strong>
                    <span>yourmail@example.com</span>
                  </div>
                </div>

                <a href="#" className="btn outline-btn">
                  <i className="bi bi-download me-2"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-heading">
            <p>MY SKILLS</p>
            <h2>Technical Skills</h2>
            <span></span>
          </div>

          <div className="row g-4">
            {skills.map((skill, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="skill-card">
                  <div className="skill-top">
                    <div className="skill-name">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </div>

                    <strong>{skill.percentage}%</strong>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-heading">
            <p>MY WORK</p>
            <h2>Recent Projects</h2>
            <span></span>
          </div>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="project-card">
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies}
                  </div>

                  <a href="#" className="project-link">
                    View Project
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>Contact Me</h2>
            <span></span>
          </div>

          <div className="row g-5">
            <div className="col-lg-5">
              <div className="contact-info">
                <h3>Let's Talk</h3>

                <p>
                  If you have a project idea or want to discuss web
                  development, feel free to contact me.
                </p>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <small>Email</small>
                    <p>yourmail@example.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <small>Location</small>
                    <p>Gujarat, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>

                  <div>
                    <small>Profession</small>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn main-btn">
                      Send Message
                      <i className="bi bi-send ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <div className="container text-center">
          <div className="footer-logo">
            Srushti Pambhar
          </div>

          <p>
            Building modern and creative digital experiences with passion.
          </p>

          <div className="footer-social">
            <a
              href="https://github.com/pambharshrushti-maker"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          <hr />

          <p className="copyright">
            © 2026 Srushti. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;