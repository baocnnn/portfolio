import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Linkedin, Github, ExternalLink, Briefcase, Bot, Zap, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import './App.css';
import portfolioImage from './assets/portfolio.jpg';
import bbImage from './assets/BBBL.png'
import pomoImage from './assets/pomo.png'
import todoImage from './assets/todo.png'
import emailjs from '@emailjs/browser';
import aiTutor from './assets/aiTutor.png'
import stars from './assets/stars.png';
import twinkling from './assets/twinkling.png';
import clouds from './assets/clouds_repeat.png';
import moon from './assets/moon2.png';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    emailjs.init("PahRm_rzhwHpUtWc2");
  }, []);

  const socialLinks = {
    github: 'https://github.com/baocnnn',
    linkedin: 'https://www.linkedin.com/in/chrispascarella/',
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    window.addEventListener('scroll', handleScroll);
    Object.values(sectionRefs.current).forEach(ref => { if (ref) observer.observe(ref); });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      const btn = document.getElementById('submit-btn');
      btn.textContent = 'Sending...';
      emailjs.send('service_cp782zi', 'template_aftncqb', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Chris',
      })
        .then(() => {
          alert("Thank you for your message! I'll get back to you soon.");
          setFormData({ name: '', email: '', message: '' });
          btn.textContent = 'Send Message';
        })
        .catch((error) => {
          alert('Failed to send message. Please try again.');
          console.error('Email error:', error);
          btn.textContent = 'Send Message';
        });
    } else {
      alert('Please fill in all fields');
    }
  };

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'professional', label: 'Professional' },
    { href: 'projects', label: 'Projects' },
    { href: 'contact', label: 'Contact' }
  ];

  const professionalProjects = [
    {
      id: 'kudos',
      title: 'Kudos & Rewards App',
      subtitle: 'Full-Stack Internal Web Application',
      icon: <Zap className="w-7 h-7" />,
      summary: 'A full-stack praise and rewards platform built to boost morale and recognize great work across the team.',
      details: [
        'Built with React + JSX on the frontend for a fast, responsive experience.',
        'Backend written in Python, connected to a Railway-hosted PostgreSQL database.',
        'Points system awards both the praise giver and receiver, encouraging a culture of recognition.',
        'Points are redeemable for real rewards, giving the system a tangible incentive loop.',
      ],
      tech: ['React', 'Python', 'PostgreSQL', 'Railway'],
      status: 'Live Internally',
    },
    {
      id: 'apex-bot',
      title: 'Apex Bot',
      subtitle: 'Slack Bot + Trello Integration',
      icon: <Bot className="w-7 h-7" />,
      summary: "A Python-powered Slack bot that connects the team's communication, recognition system, and project management into one seamless workflow.",
      details: [
        'Written in Python and tied directly to the shared PostgreSQL database.',
        'Slack slash commands let staff give kudos, check point balances, and view praise history without leaving Slack.',
        'Monitors specific Slack channels for messages beginning with TTA (To Talk About) or Announcement.',
        'Automatically generates a Trello card from those messages via the Trello REST API — including the message content, a direct link to the original Slack post, and any attached images.',
      ],
      tech: ['Python', 'Slack API', 'Trello REST API', 'PostgreSQL'],
      status: 'Live Internally',
    },
    {
      id: 'startup-script',
      title: 'Startup Script',
      subtitle: 'Windows Automation Tool (.exe)',
      icon: <Terminal className="w-7 h-7" />,
      summary: 'A packaged Windows executable that automates workstation startup, handles file path validation, and self-recovers from common software failures.',
      details: [
        'Boots all required applications automatically on workstation startup.',
        'Validates correct file paths on launch to catch configuration issues before they cause problems.',
        'Monitors the intraoral camera software and automatically reboots it in the event of a glitch or crash.',
        'Packaged as a standalone .exe — no install or technical knowledge required to run.',
      ],
      tech: ['Python', 'PyInstaller', 'Windows API'],
      status: 'Deployed',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Japanese AI Tutor',
      description: 'Personal project built using React a backend Claude API prompted to teach Japanese using common scenarios.',
      tags: [],
      emoji: <img src={aiTutor} alt="Project 1" className='w-100 h-48 square object-cover' />,
      liveUrl: 'https://japanese-ai-tutor-cbp.web.app/',
      githubUrl: 'https://github.com/baocnnn/japanese-ai-tutor'
    },
    {
      id: 2,
      title: 'Blood Bowl League Website',
      description: 'Collaborated with a friend to build a webpage containing standings, matches, rosters and general information stored in a user friendly layout.',
      tags: [],
      emoji: <img src={bbImage} alt="Project 2" className='w-120 h-48 square object-cover' />,
      liveUrl: 'https://baconbloodbowlleague.com/',
      githubUrl: 'https://github.com/baocnnn/bacon-blood-bowl'
    },
    {
      id: 3,
      title: 'To-Do App',
      description: 'First project created using local storage to retain data and a filter system to sort between completed and incomplete tasks.',
      tags: [],
      emoji: <img src={todoImage} alt="Project 3" className='w-100 h-48 square object-cover' />,
      liveUrl: 'https://todoapp-cbp.web.app/',
      githubUrl: 'https://github.com/baocnnn/todoApp'
    },
    {
      id: 4,
      title: 'Pomodoro App',
      description: 'Basic App created based off of the Pomodoro method, timer for spaced out activity.',
      tags: [],
      emoji: <img src={pomoImage} alt="Project 4" className='w-100 h-48 square object-cover' />,
      liveUrl: 'https://pomodoro-app-649aa.web.app/',
      githubUrl: 'https://github.com/baocnnn/pomodoro-app'
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">

      <style>{`
        @keyframes move-background {
          from { transform: translate3d(0px, 0px, 0px); }
          to   { transform: translate3d(1000px, 0px, 0px); }
        }
        .vbp-header-menu-button__svg line {
          stroke: white;
          stroke-width: 2;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
          transform-box: fill-box;
        }
        .vbp-header-menu-button__svg line.top    { transform: translateY(-7px); }
        .vbp-header-menu-button__svg line.bottom { transform: translateY(7px); }
        .vbp-header-menu-button__svg line.top.menu-open    { transform: rotate(45deg); }
        .vbp-header-menu-button__svg line.bottom.menu-open { transform: rotate(-45deg); }
        .vbp-header-menu-button__svg line.middle.menu-open { opacity: 0; }
      `}</style>

      {/* ── FIXED stars+clouds background — sits behind everything, no moon ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, background: `black url(${stars}) repeat` }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 10000, height: '100%', background: `transparent url(${twinkling}) repeat`, backgroundSize: '1000px 1000px', animation: 'move-background 70s linear infinite' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 10000, height: '100%', background: `transparent url(${clouds}) repeat`, backgroundSize: '1000px 1000px', animation: 'move-background 150s linear infinite' }} />
      </div>

      {/* ── NAV ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 backdrop-blur-lg' : 'py-4'}`}
        style={{ backgroundColor: scrolled ? 'rgba(30,30,30,0.97)' : 'rgba(30,30,30,0.85)' }}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Chris Pascarella
          </div>
          <ul className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleMenu} className="md:hidden relative z-50" aria-label="Menu">
            <svg className="vbp-header-menu-button__svg" width="30" height="30">
              <line x1="0" y1="50%" x2="100%" y2="50%" className={`top ${menuOpen ? 'menu-open' : ''}`} shapeRendering="crispEdges" />
              <line x1="0" y1="50%" x2="100%" y2="50%" className={`middle ${menuOpen ? 'menu-open' : ''}`} shapeRendering="crispEdges" />
              <line x1="0" y1="50%" x2="100%" y2="50%" className={`bottom ${menuOpen ? 'menu-open' : ''}`} shapeRendering="crispEdges" />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden fixed inset-0 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} style={{ top: 0, zIndex: 40, backgroundColor: 'rgba(20,20,20,0.97)' }}>
          <ul className="relative flex flex-col items-center gap-6 px-6" style={{ paddingTop: '120px', zIndex: 50 }}>
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ animationDelay: `${index * 100}ms` }}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-3xl font-semibold text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── HERO — moon on top of the fixed background ── */}
      <section id="home" className="min-h-screen flex items-center justify-center relative" style={{ zIndex: 1 }}>
        {/* Moon only shows in hero */}
        <img src={moon} alt="" style={{ position: 'absolute', height: '70vh', width: '70vh', right: 20, top: 0, zIndex: 1, pointerEvents: 'none' }} />

        <div className="text-center px-6 relative" style={{ zIndex: 2 }}>
          {/* Backdrop so text is readable over the moon */}
          <div style={{
            position: 'absolute', inset: '-2rem -3rem',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 40%, transparent 75%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)' }}>
              Hi, I'm Chris
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#d0d0d0', textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
              Full-Stack Developer with a passion for automation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}
                className="px-8 py-3 rounded-full text-white font-semibold transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', border: '2px solid white', backdropFilter: 'blur(6px)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}>
                View My Work <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}
                className="px-8 py-3 rounded-full font-semibold transform hover:-translate-y-1 transition-all duration-300"
                style={{ border: '2px solid rgba(255,255,255,0.6)', color: 'white', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.65)'; e.currentTarget.style.borderColor = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}>
                Get In Touch
              </a>
            </div>
            <div className="flex justify-center gap-10 mb-4 mt-8">
              <a href={socialLinks.github} target='_blank' rel='noopener noreferrer' className="hover:-translate-y-1 transition-all duration-300" style={{ color: 'white', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.9))' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ccc'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'} aria-label="GitHub">
                <Github className='w-10 h-10' />
              </a>
              <a href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer' className="hover:-translate-y-1 transition-all duration-300" style={{ color: 'white', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.9))' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ccc'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'} aria-label="LinkedIn">
                <Linkedin className='w-10 h-10' />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        ref={el => sectionRefs.current.about = el}
        className={`py-20 px-6 relative transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ zIndex: 1, backgroundColor: '#1a1a1a' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative text-white">
            About Me
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1" style={{ background: 'linear-gradient(to right, transparent, white, transparent)' }}></span>
          </h2>
          <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-3xl flex items-center justify-center" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
                <img src={portfolioImage} alt="Chris P" className='w-64 h-64 rounded-full object-cover' />
              </div>
            </div>
            <div style={{ color: '#c0c0c0' }}>
              <p className="text-lg leading-relaxed mb-4">
                I'm a self-driven full-stack developer who learned by doing — hands-on projects, a lot of broken code, and not stopping until things work. Curiosity is what keeps me going, and every project adds something new to how I think and build.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                I used to compete in gaming, so the drive to keep improving is pretty natural for me. These days that energy goes into hiking, bouldering, volleyball, learning Japanese, finding new restaurants, and whatever book I'm in the middle of.
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'TypeScript', 'JavaScript', 'Node.js', 'React', 'Angular', 'Go',
                  'PostgreSQL', 'MongoDB', 'SQL',
                  'RESTful APIs', 'Microservices', 'API Integration', 'Webhooks',
                  'Docker', 'Railway', 'Firebase', 'AWS (EC2, S3)', 'CI/CD Pipelines',
                  'Git', 'Linux', 'Claude API', 'LLM APIs', 'Debugging', 'Production Support'
                ].map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm rounded-full"
                    style={{ color: '#c0c0c0', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL WORK ── */}
      <section
        id="professional"
        ref={el => sectionRefs.current.professional = el}
        className={`py-20 px-6 relative transition-all duration-1000 ${visibleSections.has('professional') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ zIndex: 1, backgroundColor: '#222222' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold relative text-white">
              Professional Work
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1" style={{ background: 'linear-gradient(to right, transparent, white, transparent)' }}></span>
            </h2>
          </div>
          <p className="text-center mt-6 mb-12 max-w-2xl mx-auto" style={{ color: '#a0a0a0' }}>
            Real-world tools built and deployed for an active dental practice — automating workflows, connecting systems, and improving day-to-day operations.
          </p>

          <div className="flex flex-col gap-6">
            {professionalProjects.map((project, i) => {
              const isExpanded = expandedProject === project.id;
              return (
                <div key={project.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="p-6 flex items-start gap-5 cursor-pointer group" onClick={() => setExpandedProject(isExpanded ? null : project.id)}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      {project.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-200">{project.title}</h3>
                          <p className="text-sm mt-0.5" style={{ color: '#888' }}>{project.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-medium"
                            style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.4)', color: '#4ade80' }}>
                            {project.status}
                          </span>
                          <div style={{ color: '#888' }}>
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>{project.summary}</p>
                    </div>
                  </div>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 pt-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="grid md:grid-cols-[1fr,auto] gap-6 pt-5">
                        <ul className="space-y-3">
                          {project.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#c0c0c0' }}>
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col gap-2 md:items-end">
                          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#666' }}>Tech Stack</p>
                          <div className="flex flex-wrap gap-2 md:justify-end">
                            {project.tech.map(t => (
                              <span key={t} className="px-3 py-1 rounded-full text-xs"
                                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#d0d0d0' }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PERSONAL PROJECTS ── */}
      <section
        id="projects"
        ref={el => sectionRefs.current.projects = el}
        className={`py-20 px-6 relative transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ zIndex: 1, backgroundColor: '#1a1a1a' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative text-white">
            Personal Projects
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1" style={{ background: 'linear-gradient(to right, transparent, white, transparent)' }}></span>
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={project.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.35)'}
                onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'}
              >
                <div className="h-48 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                  {project.emoji}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="mb-4" style={{ color: '#a0a0a0' }}>{project.description}</p>
                  <div className="flex-grow"></div>
                  <div className="flex gap-3 justify-center mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 text-sm text-white"
                        style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}>
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                        style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#c0c0c0', backgroundColor: 'transparent' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#c0c0c0'; }}>
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        ref={el => sectionRefs.current.contact = el}
        className={`py-20 px-6 relative transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ zIndex: 1 }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative text-white">
            Get In Touch
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1" style={{ background: 'linear-gradient(to right, transparent, white, transparent)' }}></span>
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="mb-6">
              <label className="block text-white mb-2">Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition-all duration-300"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'} />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition-all duration-300"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'} />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2">Message</label>
              <textarea rows="5" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg text-white focus:outline-none transition-all duration-300"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}></textarea>
            </div>
            <button id="submit-btn" onClick={handleFormSubmit}
              className="w-full py-3 rounded-lg text-white font-semibold transform hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}>
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 relative" style={{ zIndex: 1, backgroundColor: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-12 mb-4">
            <a href={socialLinks.github} target='_blank' rel='noopener noreferrer' className="hover:-translate-y-1 transition-all duration-300"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'} aria-label="GitHub">
              <Github className='w-6 h-6' />
            </a>
            <a href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer' className="hover:-translate-y-1 transition-all duration-300"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'} aria-label="LinkedIn">
              <Linkedin className='w-6 h-6' />
            </a>
          </div>
          <p style={{ color: '#666' }}>© {new Date().getFullYear()} Chris Pascarella. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;