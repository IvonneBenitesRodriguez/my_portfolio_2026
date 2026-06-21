import { useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "hands-on", label: "Hands-on" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact Me" },
];

const LANGUAGES = [
  { lang: "Spanish", level: "Native" },
  { lang: "Italian", level: "C1" },
  { lang: "French", level: "C1" },
  { lang: "English", level: "C1" },
  { lang: "German", level: "B2" },
  { lang: "Japanese", level: "JLPT N4" },
];

const PROJECTS = [
  {
    name: "Happy Apple Online Store",
    description:
      "Rails 8.1 e-commerce app, full TDD with RSpec, BCrypt auth, IDOR protection. Complete STRIDE threat model in OWASP Threat Dragon (11 mitigated / 7 open threats). Deployed on Railway.",
    github: "https://github.com/IvonneBenitesRodriguez/happy-apple-online-store",
    live: "https://happy-apple-online-store-production.up.railway.app/session/new",
  },
  {
    name: "Web Application Security Project",
    description:
      "Rails 8.1 API + PostgreSQL backend, HTML/CSS/JS frontend. BCrypt, Rack::Attack rate limiting, XSS sanitization, tested with RSpec.",
    github: "https://github.com/IvonneBenitesRodriguez/web-application-security-project",
    live: "https://ivonnebenitesrodriguez.github.io/web-application-security-project/",
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern — TREAGE",
    context: "Healthcare Tech Startup, Berlin (Hybrid) · Sep – Nov 2024",
    description:
      "Delivered a cybersecurity presentation to the startup team using the PASTA threat modeling methodology, providing actionable security recommendations for their application architecture. Built the company's first landing page using HTML5, CSS3, and JavaScript, and developed React.js/MUI components with secure REST API integrations in a regulated healthcare environment.",
  },
];

const TECH_STACK = [
  "Ruby on Rails",
  "PostgreSQL",
  "TDD Methodology",
  "JEST",
  "RSpec",
  "JavaScript",
  "Burp Suite",
  "OWASP Threat Dragon",
  "Compliance",
  "Brakeman",
  "Railway",
  "Authentication: BCrypt",
  "Rack::Attack",
  "Rack::Cors",
  "Dotenv",
  "Github Pages",
];

const BADGES = [
  { img: "badge-webbed.png", title: "Webbed", desc: "Understands how the world wide web works" },
  { img: "badge-burped.png", title: "Burp'ed", desc: "Completing the Burp Suite module" },
  { img: "badge-intro-web-hacking.png", title: "Intro to Web Hacking", desc: "Completing the 'Introduction to Web Hacking' module" },
  { img: "badge-owasp-top10.png", title: "OWASP Top 10", desc: "Understanding every OWASP vulnerability" },
  { img: "badge-governance-regulation.png", title: "Governance & Regulation", desc: "TryHackMe room" },
  { img: "badge-missing-person.png", title: "Missing Person", desc: "TryHackMe room" },
  { img: "badge-iaaa-failures.png", title: "OWASP TOP 10 - IAAA Failures", desc: "TryHackMe room" },
  { img: "badge-application-flaws.png", title: "OWASP TOP 10 - Application Flaws", desc: "TryHackMe room" },
];

const EDUCATION = [
  {
    title: "MSc in Cybersecurity",
    org: "Arden University, Berlin",
    detail: "Merit · Thesis: Distinction",
  },
  {
    title: "Jr. Penetration Tester",
    org: "TryHackMe",
    detail: "Certificate ID: THM-FZWGXDOGFJ",
  },
  {
    title: "Full-Stack Web Development",
    org: "Microverse",
    detail: "1,300+ hours of remote pair-programming training",
  },
  {
    title: "BSc in Marketing",
    org: "Universidad Peruana de Ciencias Aplicadas",
    detail: "Bachelor's Degree",
  },
  {
    title: "Professional in Tourism and Hotel Management",
    org: "Cenfotur",
    detail: "Technical/Professional Diploma",
  },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; }

  .ibr-root {
    --ink: #140f18;
    --surface: #1f1822;
    --surface-2: #2a212d;
    --line: rgba(255,255,255,0.08);
    --accent: #8b0057;
    --accent-bright: #c2185b;
    --accent-soft: #fce4ec;
    --text: #f4edf0;
    --text-muted: #ac98a3;
    --mono-pink: #ff9fc4;
    font-family: 'Inter', sans-serif;
    width: 100%;
    min-height: 600px;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }

  /* ---------- WELCOME PAGE ---------- */
  .welcome {
    background: linear-gradient(180deg, #bfe6f5 0%, #d9f1fa 55%, #eef9fc 100%);
    min-height: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-align: center;
    padding: 40px 20px;
  }

  .sun-glow {
    position: absolute;
    top: -80px;
    right: -60px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,247,224,0.9) 0%, rgba(255,247,224,0) 70%);
  }

  .cloud-wrap {
    position: absolute;
    top: 16%;
    left: -360px;
    width: 320px;
    animation: drift 14s linear infinite;
  }

  @keyframes drift {
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(100vw + 360px)); }
  }

  @media (prefers-reduced-motion: reduce) {
    .cloud-wrap { animation: none; left: 30%; }
  }

  .cloud-wrap { height: 260px; }
  .rainbow-svg { position: absolute; top: 110px; left: 6px; width: 300px; opacity: 0.85; }
  .cloud-svg { position: absolute; top: 0; left: 36px; width: 200px; filter: drop-shadow(0 10px 14px rgba(40,70,90,0.18)); z-index: 2; }

  .greeting { margin-top: 120px; z-index: 3; }
  .greeting p {
    font-family: 'Fraunces', serif;
    font-weight: 600;
    font-size: clamp(28px, 5vw, 44px);
    color: #1d4e63;
    margin: 8px 0;
    line-height: 1.3;
    opacity: 0;
    transform: translateY(14px);
    animation: riseIn 0.7s ease forwards;
  }
  .greeting p:nth-child(1) { animation-delay: 0.1s; }
  .greeting p:nth-child(2) { animation-delay: 0.4s; color: #2c6378; }
  .greeting p:nth-child(3) { animation-delay: 0.7s; color: #3a7689; }

  @keyframes riseIn {
    to { opacity: 1; transform: translateY(0); }
  }

  .enter-btn {
    margin-top: 36px;
    z-index: 3;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    padding: 14px 34px;
    border-radius: 999px;
    border: none;
    background: #ffffff;
    color: #1d4e63;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(29,78,99,0.18);
    border-bottom: 4px solid;
    border-image: linear-gradient(90deg,#ff6b6b,#ffa94d,#ffd43b,#69db7c,#4dabf7,#9775fa) 1;
    opacity: 0;
    animation: riseIn 0.7s ease forwards;
    animation-delay: 1.05s;
    transition: transform 0.2s ease;
  }
  .enter-btn:hover { transform: translateY(-2px); }
  .enter-btn:focus-visible { outline: 3px solid #1d4e63; outline-offset: 3px; }

  /* ---------- MAIN SITE ---------- */
  .site {
    background: var(--ink);
    color: var(--text);
    min-height: 600px;
    display: flex;
    flex-direction: column;
  }

  .site nav {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 18px 28px;
    border-bottom: 1px solid var(--line);
    background: var(--surface);
  }

  .nav-brand {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--mono-pink);
    margin-right: auto;
    align-self: center;
    letter-spacing: 0.04em;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-btn {
    position: relative;
    background: none;
    border: none;
    color: var(--text-muted);
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 14px;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  .nav-btn::after {
    content: "";
    position: absolute;
    left: 14px; right: 14px; bottom: 2px;
    height: 2px;
    background: var(--accent-bright);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  .nav-btn:hover { color: var(--text); }
  .nav-btn:hover::after { transform: scaleX(1); }
  .nav-btn.active { color: var(--text); }
  .nav-btn.active::after { transform: scaleX(1); }

  main.content {
    flex: 1;
    padding: 40px 32px 56px;
    max-width: 760px;
    margin: 0 auto;
    width: 100%;
  }

  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: clamp(13px, 4vw, 25px);
    color: var(--mono-pink);
    margin-top: 28px;
    margin-bottom: 4px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2.section-title {
    font-family: 'Fraunces', serif;
    font-weight: 600;
    font-size: clamp(22px, 6vw, 30px);
    margin: 0 0 18px;
    color: var(--text);
    text-align: center;
  }

  p.body-text {
    font-size: 15px;
    line-height: 1.7;
    color: var(--text-muted);
    margin: 0 0 16px;
  }

  .pill {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    padding: 5px 11px;
    border-radius: 999px;
    border: 1px solid var(--line);
    color: var(--text);
    background: var(--surface-2);
    margin: 0 8px 8px 0;
  }

  .link-inline {
    color: var(--mono-pink);
    text-decoration: none;
    border-bottom: 1px dashed var(--mono-pink);
  }
  .link-inline:hover { color: var(--accent-soft); }

  .lang-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
    margin: 18px 0 24px;
  }
  .lang-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 12px 14px;
  }
  .lang-card .lang-name { font-size: 14px; font-weight: 500; }
  .lang-card .lang-level {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: var(--accent-bright);
    background: var(--accent-soft);
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    margin-top: 6px;
  }

  .collab-note {
    margin-top: 28px;
    margin-bottom: 32px;
    padding: 16px 18px;
    border-left: 3px solid var(--accent-bright);
    background: var(--surface);
    border-radius: 0 10px 10px 0;
    font-size: 14px;
    color: var(--accent-bright);
    font-weight: 500;
  }

  .tabs { display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap; }
  .tab-btn {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 13px;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--text-muted);
    cursor: pointer;
  }
  .tab-btn.active {
    color: var(--text);
    border-color: var(--accent-bright);
    background: var(--surface-2);
  }

  .project-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
  }
  .project-card h3 {
    font-family: 'Fraunces', serif;
    font-size: 19px;
    margin: 0 0 8px;
    color: var(--text);
  }
  .project-links { display: flex; gap: 14px; margin-top: 12px; }
  .project-links a {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12.5px;
    color: var(--mono-pink);
    text-decoration: none;
  }
  .project-links a:hover { color: var(--accent-soft); }

  .edu-card {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 0;
    text-align: left;
    border-bottom: 1px solid var(--line);
  }
  .edu-card:last-child { border-bottom: none; }
  .edu-mark {
    font-family: 'JetBrains Mono', monospace;
    color: var(--accent-bright);
    font-size: 13px;
    padding-top: 3px;
    width: 20px;
    flex-shrink: 0;
    text-align: center;
  }
  .edu-card h3 { font-family: 'Fraunces', serif; font-size: 17px; margin: 0 0 2px; }
  .edu-card .org { font-size: 13px; color: var(--text-muted); margin-bottom: 4px; }
  .edu-card .detail { font-size: 13px; color: var(--accent-soft); }

  .badge-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 14px;
  }
  .badge-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
  }
  .badge-card img {
    width: 100%;
    height: 90px;
    object-fit: cover;
    display: block;
  }
  .badge-card .badge-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    margin: 8px 6px 2px;
  }
  .badge-card .badge-desc {
    font-size: 11px;
    color: var(--text-muted);
    margin: 0 6px 10px;
    line-height: 1.4;
  }

  .resume-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
    padding: 13px 26px;
    border-radius: 8px;
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }
  .resume-btn:hover { background: var(--accent-bright); }

  .contact-list { margin-top: 8px; }
  .contact-list a {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    color: var(--text);
    text-decoration: none;
    padding: 10px 0;
    border-bottom: 1px solid var(--line);
  }
  .contact-list a:hover { color: var(--mono-pink); }

  .placeholder-note {
    font-size: 12px;
    color: var(--text-muted);
    font-style: italic;
    margin-top: 4px;
  }
`;

function RainbowCloud() {
  return (
    <div className="cloud-wrap">
      <svg className="rainbow-svg" viewBox="0 0 300 150">
        <path d="M20 140 A130 130 0 0 1 280 140" stroke="#ff6b6b" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M35 140 A115 115 0 0 1 265 140" stroke="#ffa94d" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M50 140 A100 100 0 0 1 250 140" stroke="#ffd43b" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M65 140 A85 85 0 0 1 235 140" stroke="#69db7c" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M80 140 A70 70 0 0 1 220 140" stroke="#4dabf7" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M95 140 A55 55 0 0 1 205 140" stroke="#9775fa" strokeWidth="9" fill="none" strokeLinecap="round" />
      </svg>
      <svg className="cloud-svg" viewBox="0 0 200 100">
        <ellipse cx="60" cy="62" rx="45" ry="30" fill="#fff" />
        <ellipse cx="102" cy="46" rx="56" ry="38" fill="#fff" />
        <ellipse cx="146" cy="62" rx="40" ry="28" fill="#fff" />
        <ellipse cx="102" cy="72" rx="72" ry="25" fill="#fff" />
        {/* carita */}
        <ellipse cx="80" cy="56" rx="9" ry="5" fill="#ffc9dd" opacity="0.7" />
        <ellipse cx="124" cy="56" rx="9" ry="5" fill="#ffc9dd" opacity="0.7" />
        <circle cx="84" cy="46" r="4.2" fill="#2c3e50" />
        <circle cx="120" cy="46" r="4.2" fill="#2c3e50" />
        <circle cx="85.3" cy="44.6" r="1.1" fill="#fff" />
        <circle cx="121.3" cy="44.6" r="1.1" fill="#fff" />
        <path d="M86 56 Q102 67 118 56" stroke="#2c3e50" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function WelcomePage({ onEnter }) {
  return (
    <div className="welcome">
      <div className="sun-glow" />
      <RainbowCloud />
      <div className="greeting">
        <p>¡Welcome!</p>
        <p>to</p>
        <p> my</p>
        <p>Portfolio</p>
      </div>
      <button className="enter-btn" onClick={onEnter}>
        Visit it →
      </button>
    </div>
  );
}

export default function Portfolio() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState("about");
  const [handsTab, setHandsTab] = useState("projects");
  const [emailRevealed, setEmailRevealed] = useState(false);

  const EMAIL_USER = "REPLACE_ME";
  const EMAIL_DOMAIN = "example.com";
  const fullEmail = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

  return (
    <div className="ibr-root">
      <style>{CSS}</style>

      {!entered && <WelcomePage onEnter={() => setEntered(true)} />}

      {entered && (
        <div className="site">
          <nav>
            <button className="nav-brand" onClick={() => setEntered(false)}>Home</button>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`nav-btn ${active === item.id ? "active" : ""}`}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <main className="content">
            {active === "about" && (
              <section>
                <div className="eyebrow"></div>
                <h2 className="section-title">About Me</h2>
                <p className="body-text">
                 I'm Ivonne Benites Rodriguez. My background blends penetration testing,
                secure software development, and threat modeling — with an MSc in
                Cybersecurity (Merit, Thesis: Distinction) from Arden University Berlin.
                I'm eager to learn and deeply committed to growing in Application
                Security and GRC, with hands-on practice through the TryHackMe Junior
                Penetration Tester Path, the Governance &amp; Regulation room, and
               volunteering at OWASP Global AppSec Conference Vienna 2026.
                </p>  
                  <p className="body-text">
                  I'm also the founder of{" "}
                  <a className="link-inline" href="https://casayllika.com" target="_blank" rel="noreferrer">
                    Casa Yllika
                  </a>
                  , a student residence in Lima, Peru, which I've run since 2009, bringing a business
                  and operations mindset alongside my technical background. 
                </p>

                <div className="eyebrow">Research</div>
                  <p className="body-text">
                     Co-author, "Penetration Testing: A Comprehensive Guide for Cybersecurity
                     Practitioners" — under review, Journal of Computer Virology and Hacking
                    Techniques (Springer Nature), submitted October 2025.
                  </p>

                  <div className="collab-note">
                    Actively looking for entry-level opportunities as a Cybersecurity Analyst,
                    AppSec, or GRC professional. Also open to collaborating on AppSec tooling,
                    threat modeling workshops, digital security education projects, and OWASP
                    community initiatives — reach out via the Contact page.
                  </div>


                <div className="eyebrow">Languages</div>
                <div className="lang-grid">
                  {LANGUAGES.map((l) => (
                    <div className="lang-card" key={l.lang}>
                      <div className="lang-name">{l.lang}</div>
                      <div className="lang-level">{l.level}</div>
                    </div>
                  ))}
                </div>

                
              </section>
            )}

            {active === "hands-on" && (
              <section>
                <div className="eyebrow">Web Application Security Projects</div>
                <h2 className="section-title">Hands-on</h2>
                <div className="tabs">
                  <button
                    className={`tab-btn ${handsTab === "projects" ? "active" : ""}`}
                    onClick={() => setHandsTab("projects")}
                  >
                    Full-Stack Projects
                  </button>
                  <button
                    className={`tab-btn ${handsTab === "stack" ? "active" : ""}`}
                    onClick={() => setHandsTab("stack")}
                  >
                    Tech Stack Used
                  </button>

                  <button
                    className={`tab-btn ${handsTab === "internships" ? "active" : ""}`}
                    onClick={() => setHandsTab("internships")}
                  >
                    Internships
                  </button>

                  <button
                    className={`tab-btn ${handsTab === "badges" ? "active" : ""}`}
                    onClick={() => setHandsTab("badges")}
                  >
                    Badges
                  </button>
                </div>

                {handsTab === "projects" &&
                  PROJECTS.map((p) => (
                    <div className="project-card" key={p.name}>
                      <h3>{p.name}</h3>
                      <p className="body-text" style={{ marginBottom: 0 }}>
                        {p.description}
                      </p>
                      <div className="project-links">
                        <a href={p.github} target="_blank" rel="noreferrer">
                          ↳ GitHub repo
                        </a>
                        <a href={p.live} target="_blank" rel="noreferrer">
                          ↳ Live project
                        </a>
                      </div>
                    </div>
                  ))}

                {handsTab === "stack" && (
                  <div>
                    {TECH_STACK.map((t) => (
                      <span className="pill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {handsTab === "internships" &&
                  EXPERIENCE.map((e) => (
                    <div className="project-card" key={e.role}>
                      <h3>{e.role}</h3>
                      <p className="body-text" style={{ marginBottom: 0, fontStyle: "italic", fontSize: "13px" }}>
                        {e.context}
                      </p>
                      <p className="body-text" style={{ marginTop: 8 }}>
                        {e.description}
                      </p>
                    </div>
                  ))}

                  {handsTab === "badges" && (
                  <div className="badge-grid">
                    {BADGES.map((b) => (
                    <div className="badge-card" key={b.title}>
                      <img src={`${import.meta.env.BASE_URL}badges/${b.img}`} alt={b.title} />
                    <div className="badge-title">{b.title}</div>
                    <div className="badge-desc">{b.desc}</div>
                    </div>
                  ))}
                </div>
                  )}
              </section>
            )}

            {active === "education" && (
              <section>
                <div className="eyebrow">credentials</div>
                <h2 className="section-title">Education</h2>
                {EDUCATION.map((e) => (
                  <div className="edu-card" key={e.title}>
                    <div className="edu-mark">▣</div>
                    <div>
                      <h3>{e.title}</h3>
                      <div className="org">{e.org}</div>
                      <div className="detail">{e.detail}</div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {active === "resume" && (
              <section>
                <div className="eyebrow">document</div>
                <h2 className="section-title">Resume</h2>
                <p className="body-text">Download my current CV as a PDF.</p>
                <a className="resume-btn" href="public/resume.pdf" download="resume.pdf">
                  ⭳ Download Resume
                </a>
                <p className="placeholder-note">
                  Thanks for visiting this site.
                </p>
              </section>
            )}

            {active === "contact" && (
              <section>
                <div className="eyebrow">reach out</div>
                <h2 className="section-title">Contact Me</h2>
                <p className="body-text">
                  Interested in connecting or OWASP community work?
                  Send a message.
                </p>
                <div className="contact-list">
                
                  <a href="https://www.linkedin.com/in/ivonnebenites/" target="_blank" rel="noreferrer">
                    https://www.linkedin.com/in/ivonnebenites/ 
                  </a>
                  <a href="https://github.com/ivonnebenitesrodriguez" target="_blank" rel="noreferrer">
                   https://github.com/IvonneBenitesRodriguez
                  </a>
                </div>
                <p className="placeholder-note">
                
                </p>
              </section>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
