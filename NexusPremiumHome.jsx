"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * NEXUS Premium Homepage (design exploration)
 * A Kureshi Industries Company
 *
 * Bold, editorial, motion-forward homepage in the brand's dark + purple world.
 * Giant display typography, an orchestrated load sequence, scroll reveals,
 * and disciplined hover micro-interactions. Sample data only, no backend.
 *
 * Drop into Next.js as a page/component. Self-contained styles.
 */

const CATEGORIES = [
  "Web & App Development", "Brand & Graphic Design", "Content & Copywriting",
  "Digital Marketing & SEO", "Video & Animation", "Social Media",
  "Accounting & Finance", "Virtual Assistance",
];

// words that cycle in the hero
const ROTATING = ["developers", "designers", "marketers", "writers", "editors", "creators"];

function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow": return (<svg {...c}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
    case "star": return (<svg width={size} height={size} viewBox="0 0 24 24" fill={stroke} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>);
    case "check": return (<svg {...c} strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>);
    case "pin": return (<svg {...c}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>);
    default: return null;
  }
}

function LogoMark({ size = 32 }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="92,50 71,86.6 29,86.6 8,50 29,13.4 71,13.4" fill="#2E1065" />
        <polygon points="84,50 65,82.9 35,82.9 16,50 35,17.1 65,17.1" fill="none" stroke="#7C3AED" strokeWidth="1.6" opacity="0.65" />
      </svg>
      <span className="nx-logo-word">NEXUS</span>
    </span>
  );
}

function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(true); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.unobserve(e.target); } }), { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`nx-rev ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}

export default function NexusPremiumHome() {
  const [loaded, setLoaded] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setWordIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="nx">
      <style>{CSS}</style>
      <div className="nx-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>

      {/* NAV */}
      <header className={`nx-nav ${loaded ? "show" : ""}`}>
        <a href="#top" className="nx-logo" aria-label="Nexus"><LogoMark /></a>
        <nav className="nx-links">
          <a href="#browse">Browse</a>
          <a href="#profile">My Profile</a>
          <a href="#news">News</a>
          <a href="#faq">FAQ</a>
          <a href="#settings">Settings</a>
        </nav>
        <div className="nx-navr">
          <a href="#signin" className="nx-quiet">Sign in</a>
          <a href="#start" className="nx-btn sm">Get started</a>
        </div>
        <button className="nx-burger" onClick={() => setMenuOpen(m => !m)} aria-label="Menu"><span/><span/><span/></button>
      </header>
      {menuOpen && (
        <div className="nx-mobile">
          <a href="#browse" onClick={() => setMenuOpen(false)}>Browse</a>
          <a href="#profile" onClick={() => setMenuOpen(false)}>My Profile</a>
          <a href="#news" onClick={() => setMenuOpen(false)}>News</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#settings" onClick={() => setMenuOpen(false)}>Settings</a>
          <a href="#start" className="nx-btn sm" onClick={() => setMenuOpen(false)}>Get started</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero" id="top">
        <div className={`hero-eyebrow ${loaded ? "up" : ""}`}>
          <span className="dot" /> Pakistan&apos;s verified talent marketplace
        </div>

        <h1 className="hero-title">
          <span className={`line ${loaded ? "up" : ""}`} style={{ transitionDelay: "120ms" }}>Hire the</span>
          <span className={`line rotate-line ${loaded ? "up" : ""}`} style={{ transitionDelay: "220ms" }}>
            <span className="rotate-wrap">
              <span className="rotate-word" key={wordIdx}>{ROTATING[wordIdx]}</span>
            </span>
          </span>
          <span className={`line ${loaded ? "up" : ""}`} style={{ transitionDelay: "320ms" }}>
            who <em>deliver</em>.
          </span>
        </h1>

        <p className={`hero-sub ${loaded ? "up" : ""}`} style={{ transitionDelay: "440ms" }}>
          Verified professionals. Escrow on every contract. Built for Pakistan.
        </p>

        <div className={`hero-cta ${loaded ? "up" : ""}`} style={{ transitionDelay: "540ms" }}>
          <a href="#browse" className="nx-btn lg">Find talent <Icon name="arrow" size={18} /></a>
          <a href="#start" className="nx-btn lg ghost">Post a project</a>
        </div>

        <div className={`hero-strip ${loaded ? "up" : ""}`} style={{ transitionDelay: "640ms" }}>
          <span><b>500+</b> verified pros</span>
          <span className="sep" />
          <span><b>4.9</b> average rating</span>
          <span className="sep" />
          <span><b>PKR</b> local payments</span>
        </div>

        <div className="hero-scroll" aria-hidden="true"><span /></div>
      </section>

      {/* MARQUEE of categories */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...CATEGORIES, ...CATEGORIES].map((c, i) => (
            <span key={i} className="marquee-item">{c}<span className="m-dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* FEATURED TALENT */}
      <section className="sec" id="browse">
        <Reveal className="sec-head">
          <span className="kicker">Featured talent</span>
          <h2 className="h2">Talent worth hiring.</h2>
          <p className="sub">Verified professionals will be featured here as Nexus launches.</p>
        </Reveal>

        <Reveal className="talent-empty">
          <div className="te-ico" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3.2" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
              <line x1="18" y1="7" x2="18" y2="13" /><line x1="15" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <h3 className="te-h">Our first professionals are joining now.</h3>
          <p className="te-p">Verified talent will appear here as they come onboard. Be one of the first, claim your spot before launch.</p>
          <div className="te-cta">
            <a href="#start" className="nx-btn">Join as a freelancer <Icon name="arrow" size={16} /></a>
            <a href="#start" className="nx-btn ghost">Hire talent</a>
          </div>
        </Reveal>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" id="how">
        <Reveal className="sec-head sec-head-center">
          <span className="kicker">How it works</span>
          <h2 className="h2">Two ways in.</h2>
          <p className="sub">Whether you have work to give or skills to offer, Nexus is built for both sides.</p>
        </Reveal>
        <div className="paths">
          <Reveal className="path-card">
            <span className="path-tag">For clients</span>
            <h3 className="path-h">Need work done?</h3>
            <p className="path-p">Sign up as a client, post your project, and receive proposals from verified professionals. Hire with escrow protection and total confidence.</p>
            <ul className="path-list">
              <li>Post a project for free</li>
              <li>Compare verified talent and proposals</li>
              <li>Pay safely through escrow</li>
            </ul>
            <a href="#start" className="nx-btn">Hire talent <Icon name="arrow" size={16} /></a>
          </Reveal>
          <Reveal delay={120} className="path-card">
            <span className="path-tag">For freelancers</span>
            <h3 className="path-h">Looking for work?</h3>
            <p className="path-p">Sign up as a freelancer, build your profile, and get matched with serious clients. Get paid on time, every time, through escrow.</p>
            <ul className="path-list">
              <li>Create a professional profile</li>
              <li>Find projects that fit your skills</li>
              <li>Earn a Nexus Verified badge</li>
            </ul>
            <a href="#start" className="nx-btn">Find work <Icon name="arrow" size={16} /></a>
          </Reveal>
        </div>
      </section>

      {/* VERIFIED BANNER */}
      <section className="verified" id="verified">
        <Reveal className="verified-inner">
          <span className="kicker light">Nexus Verified</span>
          <h2 className="verified-h">The badge that means business.</h2>
          <p className="verified-p">A five-stage screening of identity, skills, portfolio, and references, so the people you hire are exactly who they say they are.</p>
          <a href="#verified-more" className="nx-btn light">Learn about verification <Icon name="arrow" size={16} /></a>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="closer" id="start">
        <Reveal className="closer-cta">
          <a href="#browse" className="nx-btn lg">Get started <Icon name="arrow" size={18} /></a>
        </Reveal>
        <Reveal className="closer-tag" delay={120}><span>Connect. Build. Deliver.</span></Reveal>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-top">
          <div className="foot-brand">
            <LogoMark />
            <p className="foot-tag">Connect. Build. Deliver.</p>
            <p className="foot-sm">A Kureshi Industries Company</p>
          </div>
          <div className="foot-col">
            <span className="foot-h">Marketplace</span>
            <a href="#browse">Browse talent</a>
            <a href="#start">Post a project</a>
            <a href="#verified">Verified</a>
          </div>
          <div className="foot-col">
            <span className="foot-h">Get in touch</span>
            <a className="foot-email" href="mailto:aayankureshi@nexuspk.net">aayankureshi@nexuspk.net</a>
            <p className="foot-sm">Lahore, Pakistan</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Nexus, Kureshi Industries. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
.nx{
  --bg:#080509;--ink:#F6F2FC;--body:#B4AEC6;--muted:#857F99;
  --violet:#7C3AED;--violet-2:#A472FF;--purple:#2E1065;
  --line:rgba(255,255,255,0.09);--card:#120E1A;
  position:relative;background:var(--bg);color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  overflow-x:hidden;line-height:1.55;
}
.nx *{box-sizing:border-box;}
.nx a{color:inherit;text-decoration:none;}

/* ambient bg */
.nx-bg{position:fixed;inset:0;z-index:0;pointer-events:none;}
.nx-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.nx-bg .g1{width:620px;height:620px;background:#2E1065;top:-220px;left:-140px;opacity:.55;}
.nx-bg .g2{width:560px;height:560px;background:rgba(124,58,237,0.32);top:30%;right:-200px;opacity:.4;}
.nx-bg .grain{position:absolute;inset:0;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.nx > *:not(.nx-bg){position:relative;z-index:1;}

/* buttons */
.nx-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--violet);color:#fff;
  font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:13px 24px;border-radius:100px;border:1px solid transparent;
  cursor:pointer;transition:transform .2s cubic-bezier(.2,.8,.2,1),box-shadow .2s,background .2s;will-change:transform;}
.nx-btn:hover{background:#8B49F5;transform:translateY(-2px);box-shadow:0 14px 34px rgba(124,58,237,0.4);}
.nx-btn:active{transform:translateY(0);}
.nx-btn.sm{padding:9px 18px;font-size:14px;}
.nx-btn.lg{padding:16px 30px;font-size:16px;}
.nx-btn.ghost{background:transparent;border-color:var(--line);color:var(--ink);}
.nx-btn.ghost:hover{background:rgba(255,255,255,0.04);border-color:var(--violet);box-shadow:none;}
.nx-btn.light{background:#fff;color:var(--purple);}
.nx-btn.light:hover{background:#EFE9FF;box-shadow:0 14px 34px rgba(0,0,0,0.4);}

/* nav */
.nx-nav{position:sticky;top:0;z-index:60;display:flex;align-items:center;gap:24px;padding:18px clamp(18px,5vw,60px);
  background:rgba(8,5,9,0.6);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid transparent;
  opacity:0;transform:translateY(-12px);transition:opacity .7s ease,transform .7s ease,border-color .3s,background .3s;}
.nx-nav.show{opacity:1;transform:none;border-bottom-color:var(--line);}
.nx-logo{background:none;border:0;padding:0;}
.nx-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2.5px;font-size:20px;}
.nx-links{display:flex;gap:28px;margin-left:18px;}
.nx-links a{font-size:14.5px;color:var(--body);font-weight:500;transition:color .15s;}
.nx-links a:hover{color:var(--ink);}
.nx-navr{margin-left:auto;display:flex;align-items:center;gap:18px;}
.nx-quiet{font-size:14.5px;color:var(--body);font-weight:600;}
.nx-quiet:hover{color:var(--violet-2);}
.nx-burger{display:none;background:none;border:0;flex-direction:column;gap:5px;padding:6px;margin-left:auto;cursor:pointer;}
.nx-burger span{display:block;width:24px;height:2px;background:var(--ink);border-radius:2px;}
.nx-mobile{position:sticky;top:69px;z-index:59;display:flex;flex-direction:column;gap:8px;padding:16px clamp(18px,5vw,60px) 22px;background:var(--bg);border-bottom:1px solid var(--line);}
.nx-mobile a{color:var(--ink);padding:8px 0;font-weight:500;}
.nx-mobile .nx-btn{text-align:center;}

/* hero */
.hero{max-width:1200px;margin:0 auto;padding:clamp(60px,11vw,150px) clamp(18px,5vw,60px) clamp(50px,8vw,110px);text-align:center;position:relative;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:13px;color:var(--violet-2);font-weight:600;
  border:1px solid var(--line);border-radius:100px;padding:8px 18px;margin-bottom:38px;background:rgba(255,255,255,0.02);
  opacity:0;transform:translateY(14px);transition:opacity .7s ease,transform .7s ease;}
.hero-eyebrow.up{opacity:1;transform:none;}
.dot{width:7px;height:7px;border-radius:50%;background:var(--violet);box-shadow:0 0 12px var(--violet);animation:pulse 2.4s infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.35;}}

.hero-title{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:-2.5px;line-height:0.98;margin:0;
  font-size:clamp(46px,10.5vw,124px);}
.hero-title .line{display:block;opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .8s cubic-bezier(.2,.8,.2,1);}
.hero-title .line.up{opacity:1;transform:none;}
.hero-title em{font-style:italic;font-weight:800;background:linear-gradient(100deg,#A472FF,#7C3AED);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.rotate-line{height:1.02em;}
.rotate-wrap{display:inline-block;overflow:hidden;vertical-align:top;}
.rotate-word{display:inline-block;background:linear-gradient(100deg,#A472FF,#7C3AED 60%,#C9A6FF);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wordin .5s cubic-bezier(.2,.8,.2,1);}
@keyframes wordin{from{opacity:0;transform:translateY(0.5em) rotateX(-40deg);}to{opacity:1;transform:none;}}

.hero-sub{font-size:clamp(16px,2vw,20px);color:var(--body);max-width:560px;margin:30px auto 0;font-weight:500;
  opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease;}
.hero-sub.up{opacity:1;transform:none;}
.hero-cta{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:40px;
  opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease;}
.hero-cta.up{opacity:1;transform:none;}
.hero-strip{display:inline-flex;align-items:center;gap:22px;margin-top:48px;font-size:14px;color:var(--muted);flex-wrap:wrap;justify-content:center;
  opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease;}
.hero-strip.up{opacity:1;transform:none;}
.hero-strip b{font-family:'Sora',sans-serif;color:var(--ink);font-weight:700;}
.hero-strip .sep{width:1px;height:20px;background:var(--line);}
.hero-scroll{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);width:24px;height:38px;border:1.5px solid var(--line);border-radius:14px;display:flex;justify-content:center;padding-top:7px;}
.hero-scroll span{width:3px;height:7px;border-radius:2px;background:var(--violet-2);animation:scroll 1.8s infinite;}
@keyframes scroll{0%{opacity:0;transform:translateY(-3px);}40%{opacity:1;}80%{opacity:0;transform:translateY(9px);}100%{opacity:0;}}

/* marquee */
.marquee{overflow:hidden;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:22px 0;background:rgba(255,255,255,0.015);}
.marquee-track{display:flex;gap:0;white-space:nowrap;width:max-content;animation:marq 32s linear infinite;}
.marquee-item{display:inline-flex;align-items:center;font-family:'Sora',sans-serif;font-weight:700;font-size:clamp(18px,2.6vw,30px);color:var(--ink);letter-spacing:-0.5px;padding:0 6px;}
.m-dot{color:var(--violet);margin:0 28px;font-size:0.6em;}
@keyframes marq{from{transform:translateX(0);}to{transform:translateX(-50%);}}

/* sections */
.sec{max-width:1200px;margin:0 auto;padding:clamp(64px,9vw,120px) clamp(18px,5vw,60px);}
.sec-head{margin-bottom:clamp(40px,5vw,60px);}
.kicker{display:inline-block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--violet-2);margin-bottom:18px;}
.kicker.light{color:var(--violet-2);}
.h2{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(30px,5vw,58px);line-height:1.04;letter-spacing:-1.5px;margin:0;}
.sub{font-size:clamp(15px,1.8vw,18px);color:var(--body);margin:18px 0 0;max-width:520px;}

/* featured talent: pre-launch empty state */
.talent-empty{border:1px dashed var(--line);border-radius:24px;background:rgba(255,255,255,0.015);padding:clamp(44px,7vw,80px) clamp(24px,5vw,48px);text-align:center;display:flex;flex-direction:column;align-items:center;}
.te-ico{width:72px;height:72px;border-radius:20px;background:rgba(124,58,237,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;}
.te-h{font-family:'Sora',sans-serif;font-weight:700;font-size:clamp(20px,3vw,28px);letter-spacing:-0.5px;margin:0 0 12px;}
.te-p{font-size:clamp(14.5px,1.7vw,16.5px);color:var(--body);margin:0 0 28px;max-width:460px;}
.te-cta{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;}

/* how it works: two paths */
.sec-head-center{text-align:center;}
.sec-head-center .sub{margin-left:auto;margin-right:auto;}
.paths{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch;}
.path-card{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:22px;background:var(--card);padding:clamp(28px,4vw,44px);transition:border-color .3s,transform .3s cubic-bezier(.2,.8,.2,1);}
.path-card:hover{border-color:rgba(124,58,237,0.5);transform:translateY(-6px);}
.path-card .nx-btn{align-self:flex-start;margin-top:auto;}
.path-tag{display:inline-block;align-self:flex-start;font-family:'Sora',sans-serif;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--violet-2);background:rgba(124,58,237,0.12);border-radius:100px;padding:6px 14px;margin-bottom:22px;}
.path-h{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(24px,3.4vw,34px);letter-spacing:-1px;margin:0 0 14px;}
.path-p{font-size:15.5px;color:var(--body);margin:0 0 22px;}
.path-list{list-style:none;padding:0;margin:0 0 30px;display:flex;flex-direction:column;gap:12px;}
.path-list li{position:relative;padding-left:28px;font-size:15px;color:var(--ink);}
.path-list li::before{content:"";position:absolute;left:0;top:7px;width:13px;height:13px;background:var(--violet);clip-path:polygon(50% 0,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%);}

/* verified banner */
.verified{padding:clamp(20px,4vw,40px) clamp(18px,5vw,60px);max-width:1260px;margin:0 auto;}
.verified-inner{border-radius:28px;padding:clamp(40px,7vw,84px);text-align:center;
  background:linear-gradient(150deg,#2E1065,#13072b 70%);border:1px solid rgba(124,58,237,0.3);position:relative;overflow:hidden;}
.verified-inner::before{content:"";position:absolute;width:400px;height:400px;background:radial-gradient(circle,rgba(124,58,237,0.4),transparent 70%);top:-150px;right:-100px;}
.verified-h{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(28px,4.5vw,52px);line-height:1.05;letter-spacing:-1.5px;margin:0;position:relative;}
.verified-p{font-size:clamp(15px,1.8vw,18px);color:#C9BEEC;max-width:540px;margin:20px auto 32px;position:relative;}

/* closer */
.closer{max-width:1100px;margin:0 auto;padding:clamp(70px,10vw,150px) clamp(18px,5vw,60px);text-align:center;}
.closer-h{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(34px,7vw,88px);line-height:1;letter-spacing:-2px;margin:0 0 36px;}
.closer-tag{margin-top:30px;}
.closer-tag span{font-family:'Sora',sans-serif;font-weight:700;letter-spacing:4px;font-size:13px;color:var(--violet-2);text-transform:uppercase;}

/* footer */
.foot{background:#050308;border-top:1px solid var(--line);padding:clamp(44px,6vw,68px) clamp(18px,5vw,60px) 28px;}
.foot-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:40px;padding-bottom:40px;border-bottom:1px solid var(--line);}
.foot-tag{font-family:'Sora',sans-serif;font-size:12px;letter-spacing:2px;color:var(--violet-2);text-transform:uppercase;margin:16px 0 8px;}
.foot-sm{font-size:13px;color:var(--muted);margin:4px 0 0;}
.foot-h{display:block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;margin-bottom:14px;}
.foot-col{display:flex;flex-direction:column;gap:11px;}
.foot-col a{font-size:14.5px;color:var(--body);}
.foot-col a:hover{color:#fff;}
.foot-email{font-family:'Sora',sans-serif;font-size:17px;color:#fff !important;font-weight:600;}
.foot-email:hover{color:var(--violet-2) !important;}
.foot-bottom{max-width:1200px;margin:0 auto;padding-top:22px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:13px;color:var(--muted);}
.foot-bottom a:hover{color:#fff;}

/* reveal */
.nx-rev{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.8,.2,1),transform .7s cubic-bezier(.2,.8,.2,1);}
.nx-rev.in{opacity:1;transform:none;}

/* responsive */
@media (max-width:980px){
  .steps{grid-template-columns:repeat(2,1fr);}
  .foot-top{grid-template-columns:1fr 1fr;}
}
@media (max-width:640px){
  .nx-links,.nx-navr{display:none;}
  .nx-burger{display:flex;}
  .paths{grid-template-columns:1fr;}
  .foot-top{grid-template-columns:1fr;gap:28px;}
  .hero-strip{gap:14px;}
}

@media (prefers-reduced-motion: reduce){
  .marquee-track{animation:none;}
  .hero-scroll span{animation:none;}
  .dot{animation:none;}
  .rotate-word{animation:none;}
}
`;
