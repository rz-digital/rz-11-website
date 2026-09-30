"use client";

import Image from "next/image";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const solutions = [
  {
    title: "IT Consultancy",
    eyebrow: "Strategy before software",
    copy: "Turn complex business requirements into a clear, resilient technology roadmap—designed around operations, risk, and measurable outcomes.",
    tags: ["Architecture", "Application audit", "Transformation"],
  },
  {
    title: "Tailor-Made Software",
    eyebrow: "Built around your operation",
    copy: "Purpose-built applications that fit the way your teams work, integrate with your environment, and scale without unnecessary complexity.",
    tags: ["Web & mobile", "Enterprise apps", "Integration"],
  },
  {
    title: "Observability Platform",
    eyebrow: "Know before it becomes critical",
    copy: "A connected view of infrastructure, applications, and services that helps teams detect issues early and act with confidence.",
    tags: ["Monitoring", "Insight", "Reliability"],
  },
  {
    title: "Smart Solutions",
    eyebrow: "Connected by design",
    copy: "Practical digital systems that bring intelligent interactions, branch experiences, and operational automation into one coherent ecosystem.",
    tags: ["Smart branch", "Automation", "Customer experience"],
  },
  {
    title: "AI & Semiconductor",
    eyebrow: "Infrastructure for what comes next",
    copy: "Focused expertise for AI-ready systems, advanced compute environments, and the semiconductor technologies that power modern intelligence.",
    tags: ["AI systems", "Compute", "Future-ready"],
  },
];

const services = [
  "Consulting & application audit",
  "Contact center implementation",
  "Infrastructure management",
  "Application development",
  "SharePoint development",
  "Mobile application development",
  "Web development",
  "BI / MIS implementation",
  "Application management",
  "Human capital management",
];

const products = [
  {
    no: "01",
    title: "Tele-Banking Solution",
    copy: "Secure, accessible banking interactions designed for always-on service delivery.",
  },
  {
    no: "02",
    title: "Smart Branch Transformation",
    copy: "Connected branch experiences that reduce friction and improve every customer touchpoint.",
  },
  {
    no: "03",
    title: "Virtual Customer Interaction Center",
    copy: "A unified digital environment for efficient, human-centered customer conversations.",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14M13 6l6 6-6 6"} />
    </svg>
  );
}

export default function Home() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const solution = solutions[activeSolution];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RZ-11 home" onClick={closeMenu}>
          <Image src={`${basePath}/rz-11-logo.png`} width={1312} height={1080} alt="RZ-11 Consultancy" priority />
        </a>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <Arrow diagonal /></a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> Digital systems. Decisive outcomes.</p>
          <h1>Built for the<br />business-critical.</h1>
          <p className="hero-intro">
            RZ-11 transforms ambitious requirements into reliable technology—combining deep industry knowledge with hands-on delivery.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#solutions">Explore our capabilities <Arrow /></a>
            <a className="text-link" href="#story">Why RZ-11 <Arrow diagonal /></a>
          </div>
        </div>

        <div className="hero-system" aria-label="RZ-11 digital systems illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-grid" />
          <div className="system-core">
            <Image src={`${basePath}/rz-11-logo.png`} width={1312} height={1080} alt="RZ-11 Consultancy" />
          </div>
          <div className="signal signal-one"><i /> Strategy</div>
          <div className="signal signal-four"><i /> Innovation</div>
          <div className="signal signal-two"><i /> Build</div>
          <div className="signal signal-three"><i /> Observe</div>
          <div className="experience-card">
            <strong>14</strong>
            <span>years of<br />industry experience</span>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true"><span /> Scroll to discover</div>
      </section>

      <section className="trust-strip" aria-label="Key customers">
        <p>Trusted in high-stakes environments</p>
        <div className="customer-names">
          <span className="customer-logo ugafco-logo">
            <Image
              src={`${basePath}/ugafco-logo.png`}
              width={1769}
              height={889}
              alt="UGAFCO"
            />
          </span>
          <i />
          <span className="customer-logo dib-logo">
            <Image
              src={`${basePath}/dubai-islamic-bank-logo.png`}
              width={1600}
              height={383}
              alt="Dubai Islamic Bank"
            />
          </span>
          <i />
          <span className="customer-logo finance-logo">
            <Image
              src={`${basePath}/department-of-finance-logo.png`}
              width={1983}
              height={793}
              alt="Department of Finance"
            />
          </span>
        </div>
      </section>

      <section className="story section" id="story">
        <div className="section-label"><span>01</span> Our story</div>
        <div className="story-heading">
          <p className="mini-kicker">Experience, applied.</p>
          <h2>Technology matters.<br /><em>Understanding</em> matters more.</h2>
        </div>
        <div className="story-body">
          <p className="lead">
            RZ-11 Consultancy is an ambitious technology partner with a strong record of successful projects across financial and non-financial industries.
          </p>
          <div className="story-columns">
            <p>From our office in the United Arab Emirates, we provide on-site and off-site support—translating business requirements into mission-critical solutions with clarity and care.</p>
            <p>Robust development processes, modern infrastructure, and dedicated teams trained around each client help us remove uncertainty and deliver with confidence.</p>
          </div>
        </div>
        <div className="blueprint" aria-hidden="true">
          <span className="blueprint-word">ASSURED</span>
          <span className="blueprint-line" />
          <span className="blueprint-caption">Process / People / Performance</span>
        </div>
      </section>

      <section className="solutions section" id="solutions">
        <div className="section-label light"><span>02</span> Products &amp; solutions</div>
        <div className="solutions-header">
          <h2>Five capabilities.<br />One accountable partner.</h2>
          <p>Choose a capability to explore how RZ-11 turns complex technology into practical business advantage.</p>
        </div>

        <div className="solution-explorer">
          <div className="solution-tabs" role="tablist" aria-label="RZ-11 solutions">
            {solutions.map((item, index) => (
              <button
                key={item.title}
                className={activeSolution === index ? "active" : ""}
                type="button"
                role="tab"
                aria-selected={activeSolution === index}
                aria-controls="solution-panel"
                onClick={() => setActiveSolution(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.title}
                <Arrow diagonal />
              </button>
            ))}
          </div>

          <article className="solution-panel" id="solution-panel" role="tabpanel">
            <div className="panel-index">{String(activeSolution + 1).padStart(2, "0")} / 05</div>
            <p className="mini-kicker">{solution.eyebrow}</p>
            <h3>{solution.title}</h3>
            <p>{solution.copy}</p>
            <ul>
              {solution.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="panel-graphic" aria-hidden="true">
              <span /><span /><span />
            </div>
          </article>
        </div>
      </section>

      <section className="products section" id="products">
        <div className="section-label"><span>03</span> Signature products</div>
        <div className="products-intro">
          <h2>Purpose-built for<br />better interactions.</h2>
          <p>Focused platforms for the moments where reliability, access, and customer experience matter most.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-top"><span>{product.no}</span><Arrow diagonal /></div>
              <h3>{product.title}</h3>
              <p>{product.copy}</p>
              <div className="card-lines" aria-hidden="true"><i /><i /><i /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-label"><span>04</span> Services</div>
        <div className="services-layout">
          <div className="services-title">
            <p className="mini-kicker">From advisory to operation</p>
            <h2>The right expertise,<br />at the right point.</h2>
            <p>Specialist support across the full technology lifecycle, built to strengthen teams and move critical work forward.</p>
          </div>
          <ol className="service-list">
            {services.map((service, index) => (
              <li key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service}</strong>
                <Arrow diagonal />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="principles">
        <p className="kicker"><span /> The RZ-11 standard</p>
        <blockquote>Understand deeply.<br />Build rigorously.<br /><em>Support continuously.</em></blockquote>
        <div className="principle-stats">
          <div><strong>UAE</strong><span>On-site &amp; off-site support</span></div>
          <div><strong>24/7</strong><span>Mission-critical mindset</span></div>
          <div><strong>01</strong><span>Accountable delivery partner</span></div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <p className="mini-kicker">Your next system starts here</p>
          <h2>Let&apos;s make the complex<br /><em>clear.</em></h2>
        </div>
        <a className="contact-button" href="mailto:support@rz-consultancy.com">
          <span>Start a conversation</span>
          <Arrow diagonal />
        </a>
      </section>

      <footer>
        <a className="footer-brand" href="#top" aria-label="Back to top">
          <Image src={`${basePath}/rz-11-logo.png`} width={1312} height={1080} alt="RZ-11 Consultancy" />
        </a>
        <p>Digital systems for financial and non-financial industries.</p>
        <nav aria-label="Footer navigation">
          <a href="#story">Story</a>
          <a href="#solutions">Solutions</a>
          <a href="#products">Products</a>
          <a href="#services">Services</a>
        </nav>
        <div className="footer-meta">
          <span>United Arab Emirates</span>
          <span>© {new Date().getFullYear()} RZ-11 Consultancy</span>
        </div>
      </footer>
    </main>
  );
}
