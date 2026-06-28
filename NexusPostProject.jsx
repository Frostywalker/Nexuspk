"use client";

import React, { useState } from "react";

/**
 * NEXUS Post a Project (design preview)
 * A Kureshi Industries Company
 *
 * The form a client fills out to describe what they need and receive
 * proposals from verified freelancers. Premium Nexus styling. This is a
 * design preview, the form does not save anywhere yet.
 *
 * Preview: make a page at app/post/page.js:
 *   import NexusPostProject from "../../NexusPostProject.jsx";
 *   export default function Page() { return <NexusPostProject />; }
 * Then visit /post
 */

const CATEGORIES = [
  "Web & App Development", "Brand & Graphic Design", "Content & Copywriting",
  "Digital Marketing & SEO", "Video & Animation", "Social Media",
  "Accounting & Finance", "Virtual Assistance", "Other",
];

const BUDGET_TYPES = ["Fixed price", "Hourly rate"];
const TIMELINES = ["Less than 1 week", "1 to 2 weeks", "2 to 4 weeks", "1 to 3 months", "More than 3 months"];

function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "chevron": return (<svg {...c}><polyline points="6 9 12 15 18 9" /></svg>);
    case "arrow": return (<svg {...c}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
    case "check": return (<svg {...c} strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>);
    case "shield": return (<svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>);
    case "users": return (<svg {...c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
    case "bolt": return (<svg {...c}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>);
    case "doc": return (<svg {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>);
    case "tag": return (<svg {...c}><path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>);
    case "clock": return (<svg {...c}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>);
    case "wallet": return (<svg {...c}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h3v-4z" /></svg>);
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
      <span className="pp-logo-word">NEXUS</span>
    </span>
  );
}

export default function NexusPostProject() {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [budgetType, setBudgetType] = useState("Fixed price");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [tlOpen, setTlOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="pp">
        <style>{CSS}</style>
        <div className="pp-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>
        <header className="pp-nav">
          <a href="#" className="pp-logo" onClick={(e) => e.preventDefault()}><LogoMark /></a>
          <nav className="pp-links">
            <a href="#">Browse</a>
            <a href="#">My Profile</a>
            <a href="#">News</a>
            <a href="#">FAQ</a>
            <a href="#">Settings</a>
          </nav>
          <div className="pp-navr">
            <a href="#" className="pp-quiet">Sign in</a>
            <a href="#" className="pp-btn sm">Get started</a>
          </div>
        </header>
        <div className="pp-success">
          <div className="pp-success-ico"><Icon name="check" size={40} stroke="#fff" /></div>
          <h1>Your project is ready to go.</h1>
          <p>This is a preview, so nothing was posted. On the live site, your project would now be visible to verified freelancers, and proposals would start arriving.</p>
          <div className="pp-success-cta">
            <button className="pp-btn" onClick={() => setSubmitted(false)}>Post another <Icon name="arrow" size={16} /></button>
            <a href="#" className="pp-btn ghost">Browse talent instead</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pp">
      <style>{CSS}</style>
      <div className="pp-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>

      {/* Nav */}
      <header className="pp-nav">
        <a href="#" className="pp-logo" onClick={(e) => e.preventDefault()}><LogoMark /></a>
        <nav className="pp-links">
          <a href="#">Browse</a>
          <a href="#">My Profile</a>
          <a href="#">News</a>
          <a href="#">FAQ</a>
          <a href="#">Settings</a>
        </nav>
        <div className="pp-navr">
          <a href="#" className="pp-quiet">Sign in</a>
          <a href="#" className="pp-btn sm">Get started</a>
        </div>
      </header>

      <div className="pp-wrap">
        {/* Header */}
        <div className="pp-head">
          <span className="pp-kicker">Post a project</span>
          <h1 className="pp-h1">Tell us what you need.</h1>
          <p className="pp-sub">Describe your project and receive proposals from verified professionals. It only takes a minute, and posting is free.</p>
        </div>

        <div className="pp-cols">
          {/* Form */}
          <form className="pp-form" onSubmit={handleSubmit}>
            {/* Title */}
            <div className="pp-field">
              <label>Project title</label>
              <span className="pp-hint">A short, clear name for your project.</span>
              <div className="pp-input">
                <Icon name="doc" size={18} stroke="#857F99" />
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Logo and brand identity for a new cafe" />
              </div>
            </div>

            {/* Category */}
            <div className="pp-field">
              <label>Category</label>
              <span className="pp-hint">Pick the area that best fits your project.</span>
              <div className="pp-dd">
                <button type="button" className={`pp-dd-btn ${cat ? "chosen" : ""}`} onClick={() => { setCatOpen(!catOpen); setTlOpen(false); }}>
                  <span className="pp-dd-left"><Icon name="tag" size={17} stroke="#857F99" /> {cat || "Select a category"}</span>
                  <Icon name="chevron" size={16} stroke="currentColor" />
                </button>
                {catOpen && (
                  <div className="pp-dd-menu">
                    {CATEGORIES.map((c) => (
                      <button type="button" key={c} className={`pp-dd-item ${cat === c ? "on" : ""}`} onClick={() => { setCat(c); setCatOpen(false); }}>{c}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="pp-field">
              <label>Description</label>
              <span className="pp-hint">Share the details: goals, style, deliverables, and anything a freelancer should know.</span>
              <textarea
                className="pp-textarea"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Describe your project, what you're looking for, the style you like, what success looks like, and any deadlines…"
                rows={6}
              />
              <span className="pp-char">{desc.length} characters</span>
            </div>

            {/* Budget */}
            <div className="pp-field">
              <label>Budget</label>
              <span className="pp-hint">Set a budget. You can always discuss details with freelancers later.</span>
              <div className="pp-budget-types">
                {BUDGET_TYPES.map((b) => (
                  <button type="button" key={b} className={`pp-seg ${budgetType === b ? "on" : ""}`} onClick={() => setBudgetType(b)}>{b}</button>
                ))}
              </div>
              <div className="pp-input">
                <Icon name="wallet" size={18} stroke="#857F99" />
                <span className="pp-currency">PKR</span>
                <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder={budgetType === "Hourly rate" ? "Amount per hour" : "Total project budget"} />
                {budgetType === "Hourly rate" && <span className="pp-perhr">/ hour</span>}
              </div>
            </div>

            {/* Timeline */}
            <div className="pp-field">
              <label>Timeline</label>
              <span className="pp-hint">Roughly how soon do you need this done?</span>
              <div className="pp-dd">
                <button type="button" className={`pp-dd-btn ${timeline ? "chosen" : ""}`} onClick={() => { setTlOpen(!tlOpen); setCatOpen(false); }}>
                  <span className="pp-dd-left"><Icon name="clock" size={17} stroke="#857F99" /> {timeline || "Select a timeline"}</span>
                  <Icon name="chevron" size={16} stroke="currentColor" />
                </button>
                {tlOpen && (
                  <div className="pp-dd-menu">
                    {TIMELINES.map((t) => (
                      <button type="button" key={t} className={`pp-dd-item ${timeline === t ? "on" : ""}`} onClick={() => { setTimeline(t); setTlOpen(false); }}>{t}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="pp-btn pp-submit">Post project <Icon name="arrow" size={17} /></button>
            <p className="pp-disclaimer">Posting is free. You only pay once you hire someone, and funds stay in escrow until you approve the work.</p>
          </form>

          {/* Side info */}
          <aside className="pp-side">
            <div className="pp-side-card">
              <h3>What happens next</h3>
              <ol className="pp-steps">
                <li><span className="pp-step-n">1</span><div><strong>Post your project</strong><p>Share what you need. It stays private until you publish.</p></div></li>
                <li><span className="pp-step-n">2</span><div><strong>Receive proposals</strong><p>Verified freelancers send offers with pricing and timelines.</p></div></li>
                <li><span className="pp-step-n">3</span><div><strong>Hire with confidence</strong><p>Pick the best fit and fund escrow to get started safely.</p></div></li>
              </ol>
            </div>

            <div className="pp-side-card pp-trust">
              <div className="pp-trust-row"><Icon name="shield" size={18} stroke="#A472FF" /><span>Escrow protection on every contract</span></div>
              <div className="pp-trust-row"><Icon name="users" size={18} stroke="#A472FF" /><span>Only verified professionals can apply</span></div>
              <div className="pp-trust-row"><Icon name="bolt" size={18} stroke="#A472FF" /><span>Most projects get proposals within a day</span></div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="pp-foot">
        <div className="pp-foot-top">
          <div className="pp-foot-brand">
            <LogoMark />
            <p className="pp-foot-tag">Connect. Build. Deliver.</p>
            <p className="pp-foot-sm">A Kureshi Industries Company</p>
          </div>
          <div className="pp-foot-col">
            <span className="pp-foot-h">Marketplace</span>
            <a href="#">Browse talent</a>
            <a href="#">Post a project</a>
            <a href="#">How it works</a>
          </div>
          <div className="pp-foot-col">
            <span className="pp-foot-h">Get in touch</span>
            <a className="pp-foot-email" href="mailto:aayankureshi@nexuspk.net">aayankureshi@nexuspk.net</a>
            <p className="pp-foot-sm">Lahore, Pakistan</p>
          </div>
        </div>
        <div className="pp-foot-bottom">
          <span>© {new Date().getFullYear()} Nexus, Kureshi Industries. All rights reserved.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
.pp{
  --bg:#080509;--ink:#F6F2FC;--body:#B4AEC6;--muted:#857F99;
  --violet:#7C3AED;--violet-2:#A472FF;--purple:#2E1065;
  --line:rgba(255,255,255,0.10);--card:#120E1A;--field:#0E0A15;
  position:relative;background:var(--bg);color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  overflow-x:hidden;line-height:1.55;min-height:100vh;
}
.pp *{box-sizing:border-box;}
.pp a{color:inherit;text-decoration:none;}
.pp button{font-family:inherit;cursor:pointer;}

.pp-bg{position:fixed;inset:0;z-index:0;pointer-events:none;}
.pp-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.pp-bg .g1{width:560px;height:560px;background:#2E1065;top:-220px;left:-140px;opacity:.5;}
.pp-bg .g2{width:480px;height:480px;background:rgba(124,58,237,0.28);top:30%;right:-180px;opacity:.34;}
.pp-bg .grain{position:absolute;inset:0;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.pp > *:not(.pp-bg){position:relative;z-index:1;}

/* buttons */
.pp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--violet);color:#fff;font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:13px 24px;border-radius:100px;border:1px solid transparent;transition:transform .18s cubic-bezier(.2,.8,.2,1),box-shadow .18s,background .18s;}
.pp-btn:hover{background:#8B49F5;transform:translateY(-2px);box-shadow:0 14px 30px rgba(124,58,237,0.38);}
.pp-btn.sm{padding:9px 18px;font-size:14px;}
.pp-btn.ghost{background:transparent;border-color:var(--line);color:var(--ink);}
.pp-btn.ghost:hover{background:rgba(255,255,255,0.04);border-color:var(--violet);box-shadow:none;}

/* nav */
.pp-nav{position:sticky;top:0;z-index:40;display:flex;align-items:center;gap:24px;padding:16px clamp(18px,5vw,56px);background:rgba(8,5,9,0.6);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line);}
.pp-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2.5px;font-size:19px;}
.pp-links{display:flex;gap:26px;margin-left:16px;}
.pp-links a{font-size:14.5px;color:var(--body);font-weight:500;transition:color .15s;}
.pp-links a:hover,.pp-links a.active{color:var(--violet-2);}
.pp-navr{margin-left:auto;display:flex;align-items:center;gap:16px;}
.pp-quiet{font-size:14.5px;color:var(--body);font-weight:600;}
.pp-quiet:hover{color:var(--violet-2);}

/* wrap + head */
.pp-wrap{max-width:1080px;margin:0 auto;padding:clamp(36px,6vw,64px) clamp(18px,5vw,40px) 80px;}
.pp-head{text-align:center;margin-bottom:clamp(32px,4vw,46px);}
.pp-kicker{display:inline-block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--violet-2);margin-bottom:16px;}
.pp-h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(32px,5.5vw,54px);line-height:1.03;letter-spacing:-1.8px;margin:0 0 16px;}
.pp-sub{font-size:clamp(15px,1.8vw,17px);color:var(--body);max-width:520px;margin:0 auto;}

/* layout */
.pp-cols{display:grid;grid-template-columns:1fr 320px;gap:24px;align-items:start;}

/* form */
.pp-form{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:clamp(24px,4vw,38px);display:flex;flex-direction:column;gap:26px;}
.pp-field{display:flex;flex-direction:column;}
.pp-field label{font-family:'Sora',sans-serif;font-weight:600;font-size:15px;color:var(--ink);}
.pp-hint{font-size:13px;color:var(--muted);margin:5px 0 12px;}
.pp-input{display:flex;align-items:center;gap:11px;background:var(--field);border:1px solid var(--line);border-radius:13px;padding:0 16px;transition:border-color .15s,box-shadow .15s;}
.pp-input:focus-within{border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,58,237,0.18);}
.pp-input input{flex:1;background:transparent;border:0;outline:none;color:var(--ink);font-family:'Inter',sans-serif;font-size:15px;padding:14px 0;}
.pp-input input::placeholder{color:var(--muted);}
.pp-input input::-webkit-outer-spin-button,.pp-input input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
.pp-currency{font-family:'Sora',sans-serif;font-weight:600;font-size:14px;color:var(--violet-2);}
.pp-perhr{font-size:14px;color:var(--muted);}

/* textarea */
.pp-textarea{background:var(--field);border:1px solid var(--line);border-radius:13px;padding:14px 16px;color:var(--ink);font-family:'Inter',sans-serif;font-size:15px;resize:vertical;outline:none;transition:border-color .15s,box-shadow .15s;line-height:1.6;min-height:130px;}
.pp-textarea:focus{border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,58,237,0.18);}
.pp-textarea::placeholder{color:var(--muted);}
.pp-char{font-size:12px;color:var(--muted);margin-top:8px;align-self:flex-end;}

/* dropdown */
.pp-dd{position:relative;}
.pp-dd-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--field);border:1px solid var(--line);color:var(--muted);font-family:'Inter',sans-serif;font-size:15px;padding:14px 16px;border-radius:13px;transition:border-color .15s;}
.pp-dd-btn:hover{border-color:var(--violet);}
.pp-dd-btn.chosen{color:var(--ink);}
.pp-dd-left{display:inline-flex;align-items:center;gap:11px;}
.pp-dd-menu{position:absolute;top:calc(100% + 8px);left:0;right:0;z-index:20;background:#15111F;border:1px solid var(--line);border-radius:14px;padding:7px;box-shadow:0 20px 50px rgba(0,0,0,0.55);max-height:300px;overflow-y:auto;}
.pp-dd-item{display:block;width:100%;text-align:left;background:none;border:0;color:var(--body);font-size:14.5px;padding:11px 13px;border-radius:9px;transition:all .12s;}
.pp-dd-item:hover{background:rgba(255,255,255,0.05);color:var(--ink);}
.pp-dd-item.on{background:rgba(124,58,237,0.15);color:#fff;}

/* segmented (budget type) */
.pp-budget-types{display:flex;gap:8px;margin-bottom:12px;}
.pp-seg{flex:1;background:var(--field);border:1px solid var(--line);color:var(--body);font-family:'Sora',sans-serif;font-weight:500;font-size:14px;padding:11px;border-radius:11px;transition:all .15s;}
.pp-seg.on{background:var(--violet);border-color:var(--violet);color:#fff;}

.pp-submit{margin-top:6px;width:100%;padding:16px;font-size:16px;}
.pp-disclaimer{font-size:12.5px;color:var(--muted);text-align:center;margin:0;line-height:1.5;}

/* side */
.pp-side{display:flex;flex-direction:column;gap:16px;position:sticky;top:90px;}
.pp-side-card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:26px;}
.pp-side-card h3{font-family:'Sora',sans-serif;font-weight:700;font-size:16px;margin:0 0 20px;}
.pp-steps{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:20px;}
.pp-steps li{display:flex;gap:14px;}
.pp-step-n{flex:none;width:30px;height:30px;border-radius:50%;background:rgba(124,58,237,0.15);color:var(--violet-2);font-family:'Sora',sans-serif;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;}
.pp-steps strong{display:block;font-family:'Sora',sans-serif;font-weight:600;font-size:14.5px;margin-bottom:3px;}
.pp-steps p{font-size:13px;color:var(--body);margin:0;line-height:1.5;}
.pp-trust{display:flex;flex-direction:column;gap:16px;}
.pp-trust-row{display:flex;align-items:center;gap:12px;font-size:13.5px;color:var(--body);}
.pp-trust-row svg{flex:none;}

/* success state */
.pp-success{max-width:560px;margin:0 auto;padding:clamp(60px,12vw,120px) clamp(18px,5vw,40px);text-align:center;display:flex;flex-direction:column;align-items:center;}
.pp-success-ico{width:84px;height:84px;border-radius:50%;background:linear-gradient(150deg,#7C3AED,#2E1065);display:flex;align-items:center;justify-content:center;margin-bottom:28px;box-shadow:0 16px 40px rgba(124,58,237,0.4);}
.pp-success h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(28px,4.5vw,40px);letter-spacing:-1px;margin:0 0 14px;}
.pp-success p{font-size:16px;color:var(--body);max-width:440px;margin:0 0 32px;}
.pp-success-cta{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;}

/* footer */
.pp-foot{background:#050308;border-top:1px solid var(--line);padding:clamp(40px,6vw,60px) clamp(18px,5vw,56px) 26px;}
.pp-foot-top{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:40px;padding-bottom:36px;border-bottom:1px solid var(--line);}
.pp-foot-tag{font-family:'Sora',sans-serif;font-size:12px;letter-spacing:2px;color:var(--violet-2);text-transform:uppercase;margin:15px 0 8px;}
.pp-foot-sm{font-size:13px;color:var(--muted);margin:4px 0 0;}
.pp-foot-h{display:block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;margin-bottom:14px;}
.pp-foot-col{display:flex;flex-direction:column;gap:11px;align-items:flex-start;}
.pp-foot-col a{font-size:14.5px;color:var(--body);}
.pp-foot-col a:hover{color:#fff;}
.pp-foot-email{font-family:'Sora',sans-serif;font-size:16px;color:#fff !important;font-weight:600;}
.pp-foot-email:hover{color:var(--violet-2) !important;}
.pp-foot-bottom{max-width:1080px;margin:0 auto;padding-top:22px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:13px;color:var(--muted);}
.pp-foot-bottom a:hover{color:#fff;}

/* responsive */
@media (max-width:880px){
  .pp-cols{grid-template-columns:1fr;}
  .pp-side{position:static;}
  .pp-foot-top{grid-template-columns:1fr;gap:28px;}
}
@media (max-width:620px){
  .pp-links,.pp-navr{display:none;}
}
`;
