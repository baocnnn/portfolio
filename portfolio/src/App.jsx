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
    description: "App to track tasks",
    stack: ["HTML", "CSS", "Javascript"],
    demo: "#",
    code: "#",
  },
  {
    title: "Blood Bowl League Website",
    description: "Standings, matches, rosters and general information stored in a user friendly layout",
    stack: ["HTML", "CSS", "AWS S3"],
    demo: "#",
    code: "#",
  },
  {
    title: "Pomodoro App",
    description: "App created based off of the Pomodoro method, timer for spaced out activity",
    stack: ["HTML", "CSS", "Javascript"],
    demo: "#",
    code: "#",
  },
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt vero, error laboriosam cupiditate quisquam similique numquam. Ducimus quod doloremque error, ea, quibusdam assumenda similique atque cum iure, praesentium tenetur.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas voluptatem optio sed nostrum dolorem vitae ipsam quia ratione. Adipisci id nulla eius quo repellendus dolore ipsa nostrum, facilis corporis!
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
  
