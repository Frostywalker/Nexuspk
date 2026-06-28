"use client";

import React from "react";

/**
 * NEXUS Freelancer Profile (design preview)
 * A Kureshi Industries Company
 *
 * A full sample profile so the complete design can be seen. The freelancer
 * shown ("Ayesha Khan") is a placeholder example for layout purposes, not a
 * real person. Real profiles will populate this same template later.
 *
 * Preview: make a page at app/profile/page.js:
 *   import NexusProfile from "../../NexusProfile.jsx";
 *   export default function Page() { return <NexusProfile />; }
 * Then visit /profile
 */

// ---- Sample data (placeholder example, not a real person) ----
const PRO = {
  name: "Ayesha Khan",
  title: "Brand & Logo Designer",
  city: "Lahore, Pakistan",
  verified: true,
  rating: 4.9,
  reviews: 86,
  jobs: 112,
  rate: 4500,
  responseTime: "within 2 hours",
  memberSince: "2025",
  initials: "AK",
  bio: "I help brands look the part. Over the last six years I've designed identities for startups, cafes, and tech companies across Pakistan, focusing on clean, memorable marks that work everywhere from a signboard to an app icon. I care about the details, communicate clearly, and deliver on time, every time.",
  skills: ["Logo Design", "Brand Identity", "Figma", "Illustrator", "Packaging", "Style Guides", "Typography", "Social Media Kits"],
  languages: ["English", "Urdu", "Punjabi"],
  portfolio: [
    { t: "Cafe Aroma - Identity", c: "#7C3AED" },
    { t: "Nimbus Tech - Logo", c: "#2E1065" },
    { t: "Saffron - Packaging", c: "#5B21B6" },
    { t: "Pulse App - Icon Set", c: "#6D28D9" },
    { t: "Meridian - Rebrand", c: "#4C1D95" },
    { t: "Orchard - Style Guide", c: "#7E22CE" },
  ],
  reviewList: [
    { n: "Bilal A.", r: 5, d: "2 weeks ago", t: "Ayesha understood our vision instantly and delivered a logo that everyone on the team loved. Fast, professional, and genuinely talented." },
    { n: "Sara I.", r: 5, d: "1 month ago", t: "Exceptional work. The brand guide she made is something we use every single day. Worth every rupee." },
    { n: "Hamza K.", r: 4, d: "2 months ago", t: "Great designer, very responsive. A couple of revisions needed but she handled them quickly and professionally." },
  ],
};

function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "star": return (<svg width={size} height={size} viewBox="0 0 24 24" fill={stroke} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>);
    case "starline": return (<svg {...c}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>);
    case "pin": return (<svg {...c}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>);
    case "check": return (<svg {...c} strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>);
    case "arrow": return (<svg {...c}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
    case "back": return (<svg {...c}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>);
    case "msg": return (<svg {...c}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>);
    case "clock": return (<svg {...c}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>);
    case "briefcase": return (<svg {...c}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
    case "shield": return (<svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>);
    case "heart": return (<svg {...c}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></svg>);
    case "globe": return (<svg {...c}><circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" /></svg>);
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
      <span className="pf-logo-word">NEXUS</span>
    </span>
  );
}

function Stars({ rating, size = 14 }) {
  return (
    <span className="pf-stars" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon key={n} name={n <= Math.round(rating) ? "star" : "starline"} size={size} stroke={n <= Math.round(rating) ? "#F59E0B" : "#4A4458"} />
      ))}
    </span>
  );
}

export default function NexusProfile() {
  return (
    <div className="pf">
      <style>{CSS}</style>
      <div className="pf-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>

      {/* Nav */}
      <header className="pf-nav">
        <a href="#" className="pf-logo" onClick={(e) => e.preventDefault()}><LogoMark /></a>
        <nav className="pf-links">
          <a href="#">Browse</a>
          <a href="#" className="active">My Profile</a>
          <a href="#">News</a>
          <a href="#">FAQ</a>
          <a href="#">Settings</a>
        </nav>
        <div className="pf-navr">
          <a href="#" className="pf-quiet">Sign in</a>
          <a href="#" className="pf-btn sm">Get started</a>
        </div>
      </header>

      <div className="pf-wrap">
        <a href="#" className="pf-back" onClick={(e) => e.preventDefault()}><Icon name="back" size={16} /> Back to browse</a>

        {/* Profile header card */}
        <section className="pf-hero">
          <div className="pf-hero-main">
            <div className="pf-avatar">
              {PRO.initials}
              {PRO.verified && <span className="pf-vbadge" title="Nexus Verified"><Icon name="check" size={13} stroke="#fff" /></span>}
            </div>
            <div className="pf-hero-info">
              <div className="pf-name-row">
                <h1>{PRO.name}</h1>
                {PRO.verified && <span className="pf-verified-pill"><Icon name="shield" size={13} stroke="#A472FF" /> Nexus Verified</span>}
              </div>
              <p className="pf-title">{PRO.title}</p>
              <div className="pf-meta">
                <span><Icon name="pin" size={14} stroke="#857F99" /> {PRO.city}</span>
                <span className="pf-meta-sep" />
                <span className="pf-rating"><Icon name="star" size={14} stroke="#F59E0B" /> <b>{PRO.rating}</b> ({PRO.reviews} reviews)</span>
                <span className="pf-meta-sep" />
                <span><Icon name="briefcase" size={14} stroke="#857F99" /> {PRO.jobs} jobs done</span>
              </div>
            </div>
          </div>
        </section>

        {/* Two-column body */}
        <div className="pf-cols">
          {/* Left: main content */}
          <main className="pf-content">
            <section className="pf-block">
              <h2>About</h2>
              <p className="pf-bio">{PRO.bio}</p>
            </section>

            <section className="pf-block">
              <h2>Skills</h2>
              <div className="pf-skills">
                {PRO.skills.map((s) => <span key={s} className="pf-skill">{s}</span>)}
              </div>
            </section>

            <section className="pf-block">
              <div className="pf-block-head">
                <h2>Portfolio</h2>
                <span className="pf-count">{PRO.portfolio.length} projects</span>
              </div>
              <div className="pf-portfolio">
                {PRO.portfolio.map((p, i) => (
                  <div key={i} className="pf-work">
                    <div className="pf-work-thumb" style={{ background: `linear-gradient(150deg, ${p.c}, #0A0510)` }}>
                      <span className="pf-work-mark">
                        <svg width="34" height="34" viewBox="0 0 100 100" opacity="0.5"><polygon points="92,50 71,86.6 29,86.6 8,50 29,13.4 71,13.4" fill="none" stroke="#fff" strokeWidth="3" /></svg>
                      </span>
                    </div>
                    <p className="pf-work-title">{p.t}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="pf-block">
              <div className="pf-block-head">
                <h2>Reviews</h2>
                <span className="pf-review-summary"><Icon name="star" size={15} stroke="#F59E0B" /> <b>{PRO.rating}</b> · {PRO.reviews} reviews</span>
              </div>
              <div className="pf-reviews">
                {PRO.reviewList.map((rv, i) => (
                  <div key={i} className="pf-review">
                    <div className="pf-review-top">
                      <span className="pf-review-avatar">{rv.n[0]}</span>
                      <div className="pf-review-who">
                        <strong>{rv.n}</strong>
                        <Stars rating={rv.r} size={12} />
                      </div>
                      <span className="pf-review-date">{rv.d}</span>
                    </div>
                    <p className="pf-review-text">{rv.t}</p>
                  </div>
                ))}
              </div>
              <button className="pf-btn ghost pf-allrev">See all {PRO.reviews} reviews</button>
            </section>
          </main>

          {/* Right: hire sidebar */}
          <aside className="pf-side">
            <div className="pf-hire-card">
              <div className="pf-rate">
                <span className="pf-rate-from">Starting at</span>
                <span className="pf-rate-val">PKR {PRO.rate.toLocaleString()}</span>
                <span className="pf-rate-unit">per project</span>
              </div>
              <button className="pf-btn pf-hire">Hire {PRO.name.split(" ")[0]} <Icon name="arrow" size={17} /></button>
              <button className="pf-btn ghost pf-contact"><Icon name="msg" size={16} /> Message</button>

              <div className="pf-hire-meta">
                <div className="pf-hm-row"><span><Icon name="clock" size={15} stroke="#857F99" /> Response time</span><b>{PRO.responseTime}</b></div>
                <div className="pf-hm-row"><span><Icon name="briefcase" size={15} stroke="#857F99" /> Jobs completed</span><b>{PRO.jobs}</b></div>
                <div className="pf-hm-row"><span><Icon name="globe" size={15} stroke="#857F99" /> Languages</span><b>{PRO.languages.join(", ")}</b></div>
                <div className="pf-hm-row"><span><Icon name="star" size={15} stroke="#857F99" /> Member since</span><b>{PRO.memberSince}</b></div>
              </div>

              <div className="pf-escrow-note">
                <Icon name="shield" size={16} stroke="#A472FF" />
                <span>Payments are held safely in escrow until you approve the work.</span>
              </div>
            </div>
            <button className="pf-save"><Icon name="heart" size={15} /> Save to favourites</button>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="pf-foot">
        <div className="pf-foot-top">
          <div className="pf-foot-brand">
            <LogoMark />
            <p className="pf-foot-tag">Connect. Build. Deliver.</p>
            <p className="pf-foot-sm">A Kureshi Industries Company</p>
          </div>
          <div className="pf-foot-col">
            <span className="pf-foot-h">Marketplace</span>
            <a href="#">Browse talent</a>
            <a href="#">Post a project</a>
            <a href="#">How it works</a>
          </div>
          <div className="pf-foot-col">
            <span className="pf-foot-h">Get in touch</span>
            <a className="pf-foot-email" href="mailto:aayankureshi@nexuspk.net">aayankureshi@nexuspk.net</a>
            <p className="pf-foot-sm">Lahore, Pakistan</p>
          </div>
        </div>
        <div className="pf-foot-bottom">
          <span>© {new Date().getFullYear()} Nexus, Kureshi Industries. All rights reserved.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

.pf{
  --bg:#080509;--ink:#F6F2FC;--body:#B4AEC6;--muted:#857F99;
  --violet:#7C3AED;--violet-2:#A472FF;--purple:#2E1065;
  --line:rgba(255,255,255,0.10);--card:#120E1A;--field:#0E0A15;
  position:relative;background:var(--bg);color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  overflow-x:hidden;line-height:1.55;min-height:100vh;
}
.pf *{box-sizing:border-box;}
.pf a{color:inherit;text-decoration:none;}
.pf button{font-family:inherit;cursor:pointer;}

.pf-bg{position:fixed;inset:0;z-index:0;pointer-events:none;}
.pf-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.pf-bg .g1{width:560px;height:560px;background:#2E1065;top:-220px;left:-140px;opacity:.5;}
.pf-bg .g2{width:480px;height:480px;background:rgba(124,58,237,0.28);top:30%;right:-180px;opacity:.34;}
.pf-bg .grain{position:absolute;inset:0;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.pf > *:not(.pf-bg){position:relative;z-index:1;}

/* buttons */
.pf-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--violet);color:#fff;font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:13px 24px;border-radius:100px;border:1px solid transparent;transition:transform .18s cubic-bezier(.2,.8,.2,1),box-shadow .18s,background .18s;}
.pf-btn:hover{background:#8B49F5;transform:translateY(-2px);box-shadow:0 14px 30px rgba(124,58,237,0.38);}
.pf-btn.sm{padding:9px 18px;font-size:14px;}
.pf-btn.ghost{background:transparent;border-color:var(--line);color:var(--ink);}
.pf-btn.ghost:hover{background:rgba(255,255,255,0.04);border-color:var(--violet);box-shadow:none;}

/* nav */
.pf-nav{position:sticky;top:0;z-index:40;display:flex;align-items:center;gap:24px;padding:16px clamp(18px,5vw,56px);background:rgba(8,5,9,0.6);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line);}
.pf-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2.5px;font-size:19px;}
.pf-links{display:flex;gap:26px;margin-left:16px;}
.pf-links a{font-size:14.5px;color:var(--body);font-weight:500;transition:color .15s;}
.pf-links a:hover,.pf-links a.active{color:var(--violet-2);}
.pf-navr{margin-left:auto;display:flex;align-items:center;gap:16px;}
.pf-quiet{font-size:14.5px;color:var(--body);font-weight:600;}
.pf-quiet:hover{color:var(--violet-2);}

/* wrap */
.pf-wrap{max-width:1140px;margin:0 auto;padding:28px clamp(18px,5vw,40px) 80px;}
.pf-back{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:var(--body);font-weight:500;margin-bottom:24px;transition:color .15s;}
.pf-back:hover{color:var(--violet-2);}

/* hero card */
.pf-hero{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:clamp(24px,4vw,38px);margin-bottom:20px;}
.pf-hero-main{display:flex;gap:26px;align-items:center;}
.pf-avatar{position:relative;flex:none;width:104px;height:104px;border-radius:50%;background:linear-gradient(150deg,#7C3AED,#2E1065);display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif;font-weight:800;font-size:38px;color:#fff;letter-spacing:1px;}
.pf-vbadge{position:absolute;bottom:4px;right:4px;width:30px;height:30px;border-radius:50%;background:var(--violet);display:flex;align-items:center;justify-content:center;border:3px solid var(--card);}
.pf-hero-info{flex:1;min-width:0;}
.pf-name-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.pf-name-row h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(26px,4vw,38px);letter-spacing:-1px;margin:0;}
.pf-verified-pill{display:inline-flex;align-items:center;gap:6px;font-family:'Sora',sans-serif;font-size:12px;font-weight:600;color:var(--violet-2);background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.3);border-radius:100px;padding:5px 13px;}
.pf-title{font-size:17px;color:var(--body);margin:8px 0 0;font-weight:500;}
.pf-meta{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:16px;font-size:14px;color:var(--muted);}
.pf-meta span{display:inline-flex;align-items:center;gap:6px;}
.pf-meta .pf-meta-sep{width:1px;height:16px;background:var(--line);padding:0;}
.pf-rating b{color:var(--ink);font-family:'Sora',sans-serif;}

/* two-col */
.pf-cols{display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start;}
.pf-content{min-width:0;display:flex;flex-direction:column;gap:20px;}
.pf-block{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:clamp(22px,3vw,30px);}
.pf-block h2{font-family:'Sora',sans-serif;font-weight:700;font-size:20px;letter-spacing:-0.3px;margin:0 0 16px;}
.pf-block-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
.pf-block-head h2{margin:0;}
.pf-count,.pf-review-summary{font-size:13.5px;color:var(--muted);}
.pf-review-summary b{color:var(--ink);}
.pf-bio{font-size:15.5px;color:var(--body);margin:0;line-height:1.7;}

/* skills */
.pf-skills{display:flex;flex-wrap:wrap;gap:9px;}
.pf-skill{font-size:13.5px;font-weight:500;color:var(--violet-2);background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.2);border-radius:9px;padding:7px 14px;}

/* portfolio */
.pf-portfolio{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.pf-work{cursor:pointer;}
.pf-work-thumb{aspect-ratio:4/3;border-radius:14px;display:flex;align-items:center;justify-content:center;border:1px solid var(--line);transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s;}
.pf-work:hover .pf-work-thumb{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,0,0,0.5);}
.pf-work-title{font-size:13.5px;color:var(--body);margin:11px 0 0;font-weight:500;}

/* reviews */
.pf-reviews{display:flex;flex-direction:column;gap:18px;}
.pf-review{border-bottom:1px solid var(--line);padding-bottom:18px;}
.pf-review:last-child{border-bottom:0;padding-bottom:0;}
.pf-review-top{display:flex;align-items:center;gap:12px;margin-bottom:10px;}
.pf-review-avatar{flex:none;width:38px;height:38px;border-radius:50%;background:linear-gradient(150deg,#5B21B6,#2E1065);display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif;font-weight:700;font-size:15px;color:#fff;}
.pf-review-who{flex:1;display:flex;flex-direction:column;gap:3px;}
.pf-review-who strong{font-family:'Sora',sans-serif;font-size:14.5px;font-weight:600;}
.pf-stars{display:inline-flex;gap:2px;}
.pf-review-date{font-size:12.5px;color:var(--muted);}
.pf-review-text{font-size:14.5px;color:var(--body);margin:0;line-height:1.65;}
.pf-allrev{margin-top:22px;width:100%;}

/* hire sidebar */
.pf-side{position:sticky;top:90px;display:flex;flex-direction:column;gap:14px;}
.pf-hire-card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:26px;}
.pf-rate{text-align:center;padding-bottom:22px;margin-bottom:22px;border-bottom:1px solid var(--line);}
.pf-rate-from{display:block;font-size:13px;color:var(--muted);}
.pf-rate-val{display:block;font-family:'Sora',sans-serif;font-weight:800;font-size:34px;letter-spacing:-1px;margin:4px 0;}
.pf-rate-unit{display:block;font-size:13px;color:var(--muted);}
.pf-hire{width:100%;margin-bottom:10px;}
.pf-contact{width:100%;}
.pf-hire-meta{margin:24px 0;display:flex;flex-direction:column;gap:14px;}
.pf-hm-row{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13.5px;}
.pf-hm-row span{display:inline-flex;align-items:center;gap:8px;color:var(--muted);}
.pf-hm-row b{font-weight:600;text-align:right;}
.pf-escrow-note{display:flex;gap:11px;background:rgba(124,58,237,0.08);border:1px solid rgba(124,58,237,0.2);border-radius:13px;padding:14px;font-size:13px;color:var(--body);line-height:1.5;}
.pf-escrow-note svg{flex:none;margin-top:1px;}
.pf-save{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;background:transparent;border:1px solid var(--line);color:var(--body);font-family:'Sora',sans-serif;font-weight:600;font-size:14px;padding:12px;border-radius:12px;transition:all .15s;}
.pf-save:hover{border-color:var(--violet);color:#fff;background:rgba(124,58,237,0.08);}

/* footer */
.pf-foot{background:#050308;border-top:1px solid var(--line);padding:clamp(40px,6vw,60px) clamp(18px,5vw,56px) 26px;}
.pf-foot-top{max-width:1140px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:40px;padding-bottom:36px;border-bottom:1px solid var(--line);}
.pf-foot-tag{font-family:'Sora',sans-serif;font-size:12px;letter-spacing:2px;color:var(--violet-2);text-transform:uppercase;margin:15px 0 8px;}
.pf-foot-sm{font-size:13px;color:var(--muted);margin:4px 0 0;}
.pf-foot-h{display:block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;margin-bottom:14px;}
.pf-foot-col{display:flex;flex-direction:column;gap:11px;align-items:flex-start;}
.pf-foot-col a{font-size:14.5px;color:var(--body);}
.pf-foot-col a:hover{color:#fff;}
.pf-foot-email{font-family:'Sora',sans-serif;font-size:16px;color:#fff !important;font-weight:600;}
.pf-foot-email:hover{color:var(--violet-2) !important;}
.pf-foot-bottom{max-width:1140px;margin:0 auto;padding-top:22px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:13px;color:var(--muted);}
.pf-foot-bottom a:hover{color:#fff;}

/* responsive */
@media (max-width:900px){
  .pf-cols{grid-template-columns:1fr;}
  .pf-side{position:static;}
  .pf-foot-top{grid-template-columns:1fr;gap:28px;}
}
@media (max-width:620px){
  .pf-links,.pf-navr{display:none;}
  .pf-hero-main{flex-direction:column;text-align:center;}
  .pf-meta{justify-content:center;}
  .pf-portfolio{grid-template-columns:repeat(2,1fr);}
}
`;
