"use client";

import React from "react";

/**
 * NEXUS Verified (design preview)
 * A Kureshi Industries Company
 *
 * Explains what Nexus Verified means, the screening steps a freelancer goes
 * through, and the benefits of being verified. Premium Nexus styling.
 *
 * Preview: make a page at app/verified/page.js:
 *   import NexusVerified from "../../NexusVerified.jsx";
 *   export default function Page() { return <NexusVerified />; }
 * Then visit /verified
 */

const STEPS = [
  { n: "01", title: "Identity check", desc: "We confirm every freelancer is a real person using government ID, so clients always know who they're hiring." },
  { n: "02", title: "Skills assessment", desc: "Freelancers prove their expertise through tests or a review of real work in their field, no empty claims." },
  { n: "03", title: "Portfolio review", desc: "Our team reviews past work for quality and authenticity, making sure the portfolio is genuinely theirs." },
  { n: "04", title: "Reference checks", desc: "Where relevant, we verify past clients and experience to confirm a track record of delivering." },
  { n: "05", title: "Verified badge", desc: "Once cleared, freelancers earn the Nexus Verified badge, shown across their profile and search results." },
];

const BENEFITS = [
  { icon: "eye", title: "More visibility", desc: "Verified freelancers rank higher in search and stand out with the badge, so clients find them first." },
  { icon: "trophy", title: "Win more work", desc: "Clients are far more likely to hire someone they can trust. The badge turns profile views into real jobs." },
  { icon: "shield", title: "Built-in trust", desc: "The badge does the convincing for you. No need to prove you're legitimate on every single project." },
  { icon: "spark", title: "Premium standing", desc: "Verification signals you're a serious professional, and helps justify premium rates for your work." },
];

function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow": return (<svg {...c}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
    case "check": return (<svg {...c} strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>);
    case "shield": return (<svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>);
    case "eye": return (<svg {...c}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>);
    case "trophy": return (<svg {...c}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" /></svg>);
    case "spark": return (<svg {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></svg>);
    default: return null;
  }
}

function LogoMark({ size = 30 }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="92,50 71,86.6 29,86.6 8,50 29,13.4 71,13.4" fill="#2E1065" />
        <polygon points="84,50 65,82.9 35,82.9 16,50 35,17.1 65,17.1" fill="none" stroke="#7C3AED" strokeWidth="1.6" opacity="0.65" />
      </svg>
      <span className="vf-logo-word">NEXUS</span>
    </span>
  );
}

export default function NexusVerified() {
  return (
    <div className="vf">
      <style>{CSS}</style>
      <div className="vf-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>

      {/* Nav */}
      <header className="vf-nav">
        <a href="#" className="vf-logo" onClick={(e) => e.preventDefault()}><LogoMark /></a>
        <nav className="vf-links">
          <a href="#">Browse</a>
          <a href="#">My Profile</a>
          <a href="#">News</a>
          <a href="#">FAQ</a>
          <a href="#">Settings</a>
        </nav>
        <div className="vf-navr">
          <a href="#" className="vf-quiet">Sign in</a>
          <a href="#" className="vf-btn sm">Get started</a>
        </div>
      </header>

      {/* Hero */}
      <section className="vf-hero">
        <div className="vf-hero-badge">
          <span className="vf-badge-ring">
            <Icon name="shield" size={38} stroke="#fff" />
          </span>
        </div>
        <span className="vf-kicker">Nexus Verified</span>
        <h1 className="vf-h1">The badge that means business.</h1>
        <p className="vf-sub">
          Every Verified freelancer has passed a five-stage screening of their identity, skills, and work.
          When you see the badge, you know exactly who you&apos;re hiring.
        </p>
        <div className="vf-hero-cta">
          <a href="#" className="vf-btn lg">Get verified <Icon name="arrow" size={17} /></a>
          <a href="#how" className="vf-btn lg ghost">See how it works</a>
        </div>
      </section>

      {/* What it means */}
      <section className="vf-means">
        <div className="vf-means-card">
          <div className="vf-means-text">
            <span className="vf-eyebrow">What it means</span>
            <h2 className="vf-h2">Trust, earned not claimed.</h2>
            <p>
              Anyone can say they&apos;re good at what they do. Nexus Verified is proof. It&apos;s a thorough,
              human-reviewed screening that confirms a freelancer is real, skilled, and has genuinely done
              the work they show. For clients, it removes the guesswork. For freelancers, it&apos;s a mark of
              credibility that sets them apart.
            </p>
            <div className="vf-means-points">
              <span><Icon name="check" size={15} stroke="#A472FF" /> Real, ID-confirmed people</span>
              <span><Icon name="check" size={15} stroke="#A472FF" /> Proven, assessed skills</span>
              <span><Icon name="check" size={15} stroke="#A472FF" /> Authentic, reviewed portfolios</span>
            </div>
          </div>
          <div className="vf-means-visual" aria-hidden="true">
            <div className="vf-profile-chip">
              <div className="vf-chip-avatar">AK</div>
              <div className="vf-chip-info">
                <div className="vf-chip-name">Ayesha Khan <span className="vf-chip-badge"><Icon name="check" size={9} stroke="#fff" /></span></div>
                <div className="vf-chip-title">Brand &amp; Logo Designer</div>
              </div>
            </div>
            <div className="vf-chip-verified-pill"><Icon name="shield" size={13} stroke="#A472FF" /> Nexus Verified</div>
          </div>
        </div>
      </section>

      {/* How it works - steps */}
      <section className="vf-steps" id="how">
        <div className="vf-section-head">
          <span className="vf-eyebrow center">How freelancers get verified</span>
          <h2 className="vf-h2 center">Five steps to the badge.</h2>
          <p className="vf-section-sub">A rigorous process, designed to protect the quality of everyone on Nexus.</p>
        </div>
        <div className="vf-steps-list">
          {STEPS.map((s, i) => (
            <div key={s.n} className="vf-step">
              <div className="vf-step-left">
                <span className="vf-step-n">{s.n}</span>
                {i < STEPS.length - 1 && <span className="vf-step-line" />}
              </div>
              <div className="vf-step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="vf-benefits">
        <div className="vf-section-head">
          <span className="vf-eyebrow center">Why it&apos;s worth it</span>
          <h2 className="vf-h2 center">The benefits of being Verified.</h2>
        </div>
        <div className="vf-benefits-grid">
          {BENEFITS.map((b) => (
            <div key={b.title} className="vf-benefit">
              <span className="vf-benefit-ico"><Icon name={b.icon} size={22} stroke="#A472FF" /></span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="vf-cta">
        <div className="vf-cta-inner">
          <h2 className="vf-cta-h">Ready to stand out?</h2>
          <p className="vf-cta-p">Join Nexus as a freelancer and start your verification today. It&apos;s free, and it changes how clients see you.</p>
          <a href="#" className="vf-btn lg light">Get verified <Icon name="arrow" size={17} /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="vf-foot">
        <div className="vf-foot-top">
          <div className="vf-foot-brand">
            <LogoMark />
            <p className="vf-foot-tag">Connect. Build. Deliver.</p>
            <p className="vf-foot-sm">A Kureshi Industries Company</p>
          </div>
          <div className="vf-foot-col">
            <span className="vf-foot-h">Marketplace</span>
            <a href="#">Browse talent</a>
            <a href="#">Post a project</a>
            <a href="#">Verified</a>
          </div>
          <div className="vf-foot-col">
            <span className="vf-foot-h">Get in touch</span>
            <a className="vf-foot-email" href="mailto:aayankureshi@nexuspk.net">aayankureshi@nexuspk.net</a>
            <p className="vf-foot-sm">Lahore, Pakistan</p>
          </div>
        </div>
        <div className="vf-foot-bottom">
          <span>© {new Date().getFullYear()} Nexus, Kureshi Industries. All rights reserved.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
.vf{
  --bg:#080509;--ink:#F6F2FC;--body:#B4AEC6;--muted:#857F99;
  --violet:#7C3AED;--violet-2:#A472FF;--purple:#2E1065;
  --line:rgba(255,255,255,0.10);--card:#120E1A;--field:#0E0A15;
  position:relative;background:var(--bg);color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  overflow-x:hidden;line-height:1.55;min-height:100vh;
}
.vf *{box-sizing:border-box;}
.vf a{color:inherit;text-decoration:none;}
.vf button{font-family:inherit;cursor:pointer;}

.vf-bg{position:fixed;inset:0;z-index:0;pointer-events:none;}
.vf-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.vf-bg .g1{width:600px;height:600px;background:#2E1065;top:-240px;left:-120px;opacity:.5;}
.vf-bg .g2{width:500px;height:500px;background:rgba(124,58,237,0.28);top:40%;right:-180px;opacity:.32;}
.vf-bg .grain{position:absolute;inset:0;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.vf > *:not(.vf-bg){position:relative;z-index:1;}

/* buttons */
.vf-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--violet);color:#fff;font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:13px 24px;border-radius:100px;border:1px solid transparent;transition:transform .18s cubic-bezier(.2,.8,.2,1),box-shadow .18s,background .18s;}
.vf-btn:hover{background:#8B49F5;transform:translateY(-2px);box-shadow:0 14px 30px rgba(124,58,237,0.38);}
.vf-btn.sm{padding:9px 18px;font-size:14px;}
.vf-btn.lg{padding:15px 30px;font-size:16px;}
.vf-btn.ghost{background:transparent;border-color:var(--line);color:var(--ink);}
.vf-btn.ghost:hover{background:rgba(255,255,255,0.04);border-color:var(--violet);box-shadow:none;}
.vf-btn.light{background:#fff;color:var(--purple);}
.vf-btn.light:hover{background:#EFE9FF;box-shadow:0 14px 34px rgba(0,0,0,0.4);}

/* nav */
.vf-nav{position:sticky;top:0;z-index:40;display:flex;align-items:center;gap:24px;padding:16px clamp(18px,5vw,56px);background:rgba(8,5,9,0.6);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line);}
.vf-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2.5px;font-size:19px;}
.vf-links{display:flex;gap:26px;margin-left:16px;}
.vf-links a{font-size:14.5px;color:var(--body);font-weight:500;transition:color .15s;}
.vf-links a:hover,.vf-links a.active{color:var(--violet-2);}
.vf-navr{margin-left:auto;display:flex;align-items:center;gap:16px;}
.vf-quiet{font-size:14.5px;color:var(--body);font-weight:600;}
.vf-quiet:hover{color:var(--violet-2);}

/* hero */
.vf-hero{max-width:760px;margin:0 auto;padding:clamp(48px,8vw,90px) clamp(18px,5vw,40px) clamp(40px,6vw,70px);text-align:center;}
.vf-hero-badge{display:flex;justify-content:center;margin-bottom:30px;}
.vf-badge-ring{width:88px;height:88px;border-radius:26px;background:linear-gradient(150deg,#7C3AED,#2E1065);display:flex;align-items:center;justify-content:center;box-shadow:0 16px 44px rgba(124,58,237,0.5);position:relative;}
.vf-badge-ring::after{content:"";position:absolute;inset:-6px;border-radius:30px;border:1px solid rgba(124,58,237,0.4);}
.vf-kicker{display:inline-block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--violet-2);margin-bottom:16px;}
.vf-h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(34px,6vw,60px);line-height:1.02;letter-spacing:-1.8px;margin:0 0 20px;}
.vf-sub{font-size:clamp(15px,1.9vw,18px);color:var(--body);max-width:580px;margin:0 auto 34px;line-height:1.65;}
.vf-hero-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap;}

/* what it means */
.vf-means{max-width:1100px;margin:0 auto;padding:clamp(30px,5vw,50px) clamp(18px,5vw,40px);}
.vf-means-card{background:var(--card);border:1px solid var(--line);border-radius:26px;padding:clamp(28px,5vw,56px);display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:center;}
.vf-eyebrow{display:inline-block;font-family:'Sora',sans-serif;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--violet-2);margin-bottom:14px;}
.vf-eyebrow.center{display:block;text-align:center;}
.vf-h2{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(26px,4vw,42px);line-height:1.05;letter-spacing:-1.2px;margin:0 0 18px;}
.vf-h2.center{text-align:center;}
.vf-means-text p{font-size:15.5px;color:var(--body);margin:0 0 22px;line-height:1.7;}
.vf-means-points{display:flex;flex-direction:column;gap:12px;}
.vf-means-points span{display:inline-flex;align-items:center;gap:10px;font-size:14.5px;color:var(--ink);font-weight:500;}

/* visual chip */
.vf-means-visual{display:flex;flex-direction:column;align-items:center;gap:16px;}
.vf-profile-chip{display:flex;align-items:center;gap:14px;background:#16111F;border:1px solid var(--line);border-radius:18px;padding:18px 22px;width:100%;max-width:280px;box-shadow:0 20px 50px rgba(0,0,0,0.5);}
.vf-chip-avatar{flex:none;width:54px;height:54px;border-radius:50%;background:linear-gradient(150deg,#7C3AED,#2E1065);display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif;font-weight:700;font-size:19px;color:#fff;}
.vf-chip-name{display:flex;align-items:center;gap:8px;font-family:'Sora',sans-serif;font-weight:700;font-size:16px;}
.vf-chip-badge{flex:none;width:18px;height:18px;border-radius:50%;background:var(--violet);display:inline-flex;align-items:center;justify-content:center;}
.vf-chip-title{font-size:13px;color:var(--body);margin-top:3px;}
.vf-chip-verified-pill{display:inline-flex;align-items:center;gap:7px;font-family:'Sora',sans-serif;font-size:13px;font-weight:600;color:var(--violet-2);background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.3);border-radius:100px;padding:8px 16px;}

/* steps */
.vf-steps{max-width:780px;margin:0 auto;padding:clamp(50px,8vw,90px) clamp(18px,5vw,40px) clamp(30px,5vw,50px);}
.vf-section-head{margin-bottom:clamp(36px,5vw,52px);}
.vf-section-sub{text-align:center;font-size:clamp(15px,1.8vw,17px);color:var(--body);max-width:480px;margin:14px auto 0;}
.vf-steps-list{display:flex;flex-direction:column;}
.vf-step{display:flex;gap:22px;}
.vf-step-left{display:flex;flex-direction:column;align-items:center;flex:none;}
.vf-step-n{width:50px;height:50px;border-radius:15px;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.3);color:var(--violet-2);font-family:'Sora',sans-serif;font-weight:800;font-size:16px;display:flex;align-items:center;justify-content:center;flex:none;}
.vf-step-line{width:2px;flex:1;background:linear-gradient(180deg,rgba(124,58,237,0.4),rgba(124,58,237,0.05));margin:8px 0;min-height:30px;}
.vf-step-body{padding-bottom:34px;padding-top:8px;}
.vf-step-body h3{font-family:'Sora',sans-serif;font-weight:700;font-size:19px;margin:0 0 8px;}
.vf-step-body p{font-size:14.5px;color:var(--body);margin:0;line-height:1.65;}

/* benefits */
.vf-benefits{max-width:1100px;margin:0 auto;padding:clamp(40px,6vw,70px) clamp(18px,5vw,40px);}
.vf-benefits-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;}
.vf-benefit{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:30px;transition:border-color .25s,transform .25s;}
.vf-benefit:hover{border-color:rgba(124,58,237,0.4);transform:translateY(-4px);}
.vf-benefit-ico{display:inline-flex;width:48px;height:48px;border-radius:13px;background:rgba(124,58,237,0.12);align-items:center;justify-content:center;margin-bottom:18px;}
.vf-benefit h3{font-family:'Sora',sans-serif;font-weight:700;font-size:19px;margin:0 0 10px;}
.vf-benefit p{font-size:14.5px;color:var(--body);margin:0;line-height:1.65;}

/* cta */
.vf-cta{max-width:1100px;margin:0 auto;padding:clamp(30px,5vw,50px) clamp(18px,5vw,40px) clamp(60px,8vw,100px);}
.vf-cta-inner{border-radius:28px;padding:clamp(44px,7vw,84px);text-align:center;background:linear-gradient(150deg,#2E1065,#13072b 70%);border:1px solid rgba(124,58,237,0.3);position:relative;overflow:hidden;}
.vf-cta-inner::before{content:"";position:absolute;width:400px;height:400px;background:radial-gradient(circle,rgba(124,58,237,0.4),transparent 70%);top:-150px;right:-100px;}
.vf-cta-h{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(28px,4.5vw,48px);line-height:1.05;letter-spacing:-1.2px;margin:0 0 16px;position:relative;}
.vf-cta-p{font-size:clamp(15px,1.8vw,18px);color:#C9BEEC;max-width:480px;margin:0 auto 30px;position:relative;}

/* footer */
.vf-foot{background:#050308;border-top:1px solid var(--line);padding:clamp(40px,6vw,60px) clamp(18px,5vw,56px) 26px;}
.vf-foot-top{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:40px;padding-bottom:36px;border-bottom:1px solid var(--line);}
.vf-foot-tag{font-family:'Sora',sans-serif;font-size:12px;letter-spacing:2px;color:var(--violet-2);text-transform:uppercase;margin:15px 0 8px;}
.vf-foot-sm{font-size:13px;color:var(--muted);margin:4px 0 0;}
.vf-foot-h{display:block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;margin-bottom:14px;}
.vf-foot-col{display:flex;flex-direction:column;gap:11px;align-items:flex-start;}
.vf-foot-col a{font-size:14.5px;color:var(--body);}
.vf-foot-col a:hover{color:#fff;}
.vf-foot-email{font-family:'Sora',sans-serif;font-size:16px;color:#fff !important;font-weight:600;}
.vf-foot-email:hover{color:var(--violet-2) !important;}
.vf-foot-bottom{max-width:1100px;margin:0 auto;padding-top:22px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:13px;color:var(--muted);}
.vf-foot-bottom a:hover{color:#fff;}

/* responsive */
@media (max-width:860px){
  .vf-means-card{grid-template-columns:1fr;gap:34px;}
  .vf-benefits-grid{grid-template-columns:1fr;}
  .vf-foot-top{grid-template-columns:1fr;gap:28px;}
}
@media (max-width:620px){
  .vf-links,.vf-navr{display:none;}
}
`;
