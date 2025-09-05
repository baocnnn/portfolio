import "./App.css";

function Navbar() {
  return (
    <header className="nav">
      <a className="logo-mark" href="/">CP</a>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
        <a href="#contact" className="btn">Contact</a>
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <header className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </header>
  );
}

function ProjectCard({ title, description, stack, demo, code }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      <div className="chips">
        {stack.map( (s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
      <div className="links">
          {demo && <a href={demo} target="_blank">Live</a>}
          {code && <a href={code} target="_blank">Code</a>}
      </div>
    </article>
  );
}

const projects = [
  {
    title: "To-do App",
    description: "App to track tasks with the ability to hide tasks set to complete.",
    stack: ["HTML", "CSS", "Javascript"],
    demo: "#",
    code: "#",
  },
  {
    title: "Blood Bowl League Website",
    description: "Collaborated with a friend to build a webpage containing standings, matches, rosters and general information stored in a user friendly layout",
    stack: ["HTML", "CSS", "AWS S3"],
    demo: "https://baconbloodbowlleague.com/",
    code: "https://github.com/baocnnn/bacon-blood-bowl",
  },
  {
    title: "Pomodoro App",
    description: "App created based off of the Pomodoro method, timer for spaced out activity",
    stack: ["HTML", "CSS", "Javascript"],
    demo: "#",
    code: "https://github.com/baocnnn/pomodoro-app",
  },
 /*{
    title: "Discord Bot",
    description: "Discord bot that responds to user queries with programmed responses",
    stack: ["HTML", "CSS", "Javascript"],
    demo: "#",
    code: "#",
  },*/

];

export default function App() {
  return (
    <>
    <navBar />
    
    <main className="container">
        {/* Hero */}
        <section className="hero" id="home">
          <p className="eyebrow">Portfolio</p>
          <h1 className="title">Chris Pascarella</h1>
          <p className="lead muted">
            Junior Full-stack developer 
          </p>
          <div className="cta">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn outline" href="#contact">Contact</a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <SectionTitle eyebrow="Work" title="Projects" />
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about">
          <SectionTitle eyebrow="Who I Am" title="About" />
          <p className="muted">
          I’m a junior full-stack developer who turns messy ideas into clean, fast web apps. I’m currently working with HTML/CSS/JS, React + Vite, Node, Git/GitHub, with exposure to AWS, MongoDB, Firebase, and SQL. Recent projects include a league site (deployed on AWS) and a React portfolio (Firebase Hosting). I iterate quickly, communicate clearly, and keep performance and readability front and center.
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <SectionTitle eyebrow="Get In Touch" title="Contact" />
          <p className="muted">Email me at <a href="mailto:chris.pascarella@hotmail.com">chris.pascarella@hotmail.com</a>.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Chris Pascarella</p>
      </footer>
    </>
  );
}
  
