"use client";

import React, { useState } from "react";

/**
 * NEXUS Browse Talent (design preview)
 * A Kureshi Industries Company
 *
 * Search + filter bar across the top, freelancer grid below.
 * Since there are no real freelancers yet, the page shows a premium
 * "coming soon" empty state (no fake people), matching the homepage.
 * The freelancer card style is defined and ready to switch on later.
 *
 * Preview: make a page at app/browse/page.js:
 *   import NexusBrowse from "../../NexusBrowse.jsx";
 *   export default function Page() { return <NexusBrowse />; }
 * Then visit /browse
 */

const CATEGORIES = [
  "All categories", "Web & App Development", "Brand & Graphic Design",
  "Content & Copywriting", "Digital Marketing & SEO", "Video & Animation",
  "Social Media", "Accounting & Finance", "Virtual Assistance",
];

function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search": return (<svg {...c}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>);
    case "shield": return (<svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>);
    case "chevron": return (<svg {...c}><polyline points="6 9 12 15 18 9" /></svg>);
    case "arrow": return (<svg {...c}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
    case "users": return (<svg {...c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
    case "bell": return (<svg {...c}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>);
    case "sliders": return (<svg {...c}><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>);
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
      <span className="bz-logo-word">NEXUS</span>
    </span>
  );
}

export default function NexusBrowse() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All categories");
  const [sort, setSort] = useState("Recommended");
  const [verified, setVerified] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const SORTS = ["Recommended", "Top rated", "Most reviews", "Lowest price", "Highest price"];

  return (
    <div className="bz">
      <style>{CSS}</style>
      <div className="bz-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>

      {/* Nav */}
      <header className="bz-nav">
        <a href="#" className="bz-logo" onClick={(e) => e.preventDefault()}><LogoMark /></a>
        <nav className="bz-links">
          <a href="#" className="active">Browse</a>
          <a href="#">My Profile</a>
          <a href="#">News</a>
          <a href="#">FAQ</a>
          <a href="#">Settings</a>
        </nav>
        <div className="bz-navr">
          <a href="#" className="bz-quiet">Sign in</a>
          <a href="#" className="bz-btn sm">Get started</a>
        </div>
      </header>

      {/* Header + search */}
      <section className="bz-head">
        <span className="bz-kicker">Browse talent</span>
        <h1 className="bz-h1">Find your professional.</h1>
        <p className="bz-sub">Search verified freelancers by skill, role, or name. Every professional on Nexus is screened and escrow-protected.</p>

        <div className="bz-searchbar">
          <span className="bz-search-ico"><Icon name="search" size={20} stroke="#857F99" /></span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “logo designer”, “React developer”, “SEO expert”…"
            aria-label="Search talent"
          />
          <button className="bz-btn bz-search-btn">Search</button>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bz-filterbar">
        <div className="bz-filters-left">
          {/* Category dropdown */}
          <div className="bz-dd">
            <button className="bz-dd-btn" onClick={() => { setCatOpen(!catOpen); setSortOpen(false); }}>
              {cat} <Icon name="chevron" size={16} stroke="currentColor" />
            </button>
            {catOpen && (
              <div className="bz-dd-menu">
                {CATEGORIES.map((c) => (
                  <button key={c} className={`bz-dd-item ${cat === c ? "on" : ""}`} onClick={() => { setCat(c); setCatOpen(false); }}>{c}</button>
                ))}
              </div>
            )}
          </div>

          {/* Verified toggle */}
          <button className={`bz-toggle ${verified ? "on" : ""}`} onClick={() => setVerified(!verified)}>
            <Icon name="shield" size={15} stroke={verified ? "#fff" : "#857F99"} /> Verified only
          </button>
        </div>

        <div className="bz-filters-right">
          <span className="bz-sort-label">Sort by</span>
          <div className="bz-dd">
            <button className="bz-dd-btn" onClick={() => { setSortOpen(!sortOpen); setCatOpen(false); }}>
              {sort} <Icon name="chevron" size={16} stroke="currentColor" />
            </button>
            {sortOpen && (
              <div className="bz-dd-menu right">
                {SORTS.map((s) => (
                  <button key={s} className={`bz-dd-item ${sort === s ? "on" : ""}`} onClick={() => { setSort(s); setSortOpen(false); }}>{s}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Empty state (no real freelancers yet) */}
      <section className="bz-results">
        <div className="bz-empty">
          <div className="bz-empty-ico" aria-hidden="true">
            <Icon name="users" size={38} stroke="#7C3AED" />
          </div>
          <h2 className="bz-empty-h">Our first professionals are on the way.</h2>
          <p className="bz-empty-p">
            Nexus is just getting started. Verified freelancers will appear here as they join, ready to be hired with escrow protection on every contract.
          </p>
          <div className="bz-empty-cta">
            <a href="#" className="bz-btn">Join as a freelancer <Icon name="arrow" size={16} /></a>
            <a href="#" className="bz-btn ghost">Notify me at launch <Icon name="bell" size={15} /></a>
          </div>

          {/* subtle skeleton preview of what cards will look like */}
          <div className="bz-skeleton-grid" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bz-skel-card">
                <div className="bz-skel-top">
                  <div className="bz-skel-avatar" />
                  <div className="bz-skel-lines">
                    <div className="bz-skel-line w70" />
                    <div className="bz-skel-line w45" />
                  </div>
                </div>
                <div className="bz-skel-tags">
                  <div className="bz-skel-tag" /><div className="bz-skel-tag" /><div className="bz-skel-tag" />
                </div>
                <div className="bz-skel-foot">
                  <div className="bz-skel-line w30" />
                  <div className="bz-skel-line w25" />
                </div>
              </div>
            ))}
          </div>
          <p className="bz-skel-note">A preview of how talent will appear once professionals join.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bz-foot">
        <div className="bz-foot-top">
          <div className="bz-foot-brand">
            <LogoMark />
            <p className="bz-foot-tag">Connect. Build. Deliver.</p>
            <p className="bz-foot-sm">A Kureshi Industries Company</p>
          </div>
          <div className="bz-foot-col">
            <span className="bz-foot-h">Marketplace</span>
            <a href="#">Browse talent</a>
            <a href="#">Post a project</a>
            <a href="#">How it works</a>
          </div>
          <div className="bz-foot-col">
            <span className="bz-foot-h">Get in touch</span>
            <a className="bz-foot-email" href="mailto:aayankureshi@nexuspk.net">aayankureshi@nexuspk.net</a>
            <p className="bz-foot-sm">Lahore, Pakistan</p>
          </div>
        </div>
        <div className="bz-foot-bottom">
          <span>© {new Date().getFullYear()} Nexus, Kureshi Industries. All rights reserved.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

.bz{
  --bg:#080509;--ink:#F6F2FC;--body:#B4AEC6;--muted:#857F99;
  --violet:#7C3AED;--violet-2:#A472FF;--purple:#2E1065;
  --line:rgba(255,255,255,0.10);--card:#120E1A;--field:#0E0A15;
  position:relative;background:var(--bg);color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  overflow-x:hidden;line-height:1.55;min-height:100vh;
}
.bz *{box-sizing:border-box;}
.bz a{color:inherit;text-decoration:none;}
.bz button{font-family:inherit;cursor:pointer;}

.bz-bg{position:fixed;inset:0;z-index:0;pointer-events:none;}
.bz-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.bz-bg .g1{width:560px;height:560px;background:#2E1065;top:-220px;left:-140px;opacity:.5;}
.bz-bg .g2{width:480px;height:480px;background:rgba(124,58,237,0.28);top:20%;right:-180px;opacity:.36;}
.bz-bg .grain{position:absolute;inset:0;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.bz > *:not(.bz-bg){position:relative;z-index:1;}

/* buttons */
.bz-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--violet);color:#fff;font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:13px 24px;border-radius:100px;border:1px solid transparent;transition:transform .18s cubic-bezier(.2,.8,.2,1),box-shadow .18s,background .18s;}
.bz-btn:hover{background:#8B49F5;transform:translateY(-2px);box-shadow:0 14px 30px rgba(124,58,237,0.38);}
.bz-btn.sm{padding:9px 18px;font-size:14px;}
.bz-btn.ghost{background:transparent;border-color:var(--line);color:var(--ink);}
.bz-btn.ghost:hover{background:rgba(255,255,255,0.04);border-color:var(--violet);box-shadow:none;}

/* nav */
.bz-nav{position:sticky;top:0;z-index:40;display:flex;align-items:center;gap:24px;padding:16px clamp(18px,5vw,56px);background:rgba(8,5,9,0.6);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line);}
.bz-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2.5px;font-size:19px;}
.bz-links{display:flex;gap:26px;margin-left:16px;}
.bz-links a{font-size:14.5px;color:var(--body);font-weight:500;transition:color .15s;}
.bz-links a:hover,.bz-links a.active{color:var(--violet-2);}
.bz-navr{margin-left:auto;display:flex;align-items:center;gap:16px;}
.bz-quiet{font-size:14.5px;color:var(--body);font-weight:600;}
.bz-quiet:hover{color:var(--violet-2);}

/* header */
.bz-head{max-width:900px;margin:0 auto;padding:clamp(44px,7vw,80px) clamp(18px,5vw,40px) clamp(24px,3vw,32px);text-align:center;}
.bz-kicker{display:inline-block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--violet-2);margin-bottom:16px;}
.bz-h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(34px,6vw,60px);line-height:1.02;letter-spacing:-1.8px;margin:0 0 18px;}
.bz-sub{font-size:clamp(15px,1.8vw,17px);color:var(--body);max-width:560px;margin:0 auto 34px;}
.bz-searchbar{display:flex;align-items:center;gap:8px;max-width:680px;margin:0 auto;background:var(--card);border:1px solid var(--line);border-radius:15px;padding:8px 8px 8px 16px;box-shadow:0 14px 40px rgba(0,0,0,0.4);}
.bz-search-ico{display:flex;flex:none;}
.bz-searchbar input{flex:1;border:0;outline:none;background:transparent;color:var(--ink);font-family:'Inter',sans-serif;font-size:16px;padding:8px 4px;}
.bz-searchbar input::placeholder{color:var(--muted);}
.bz-search-btn{flex:none;padding:12px 26px;}

/* filter bar */
.bz-filterbar{max-width:1200px;margin:0 auto;padding:8px clamp(18px,5vw,40px) 0;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}
.bz-filters-left,.bz-filters-right{display:flex;align-items:center;gap:12px;}
.bz-sort-label{font-size:13.5px;color:var(--muted);}
.bz-dd{position:relative;}
.bz-dd-btn{display:inline-flex;align-items:center;gap:9px;background:var(--card);border:1px solid var(--line);color:var(--ink);font-family:'Sora',sans-serif;font-weight:500;font-size:14px;padding:10px 16px;border-radius:11px;transition:border-color .15s;}
.bz-dd-btn:hover{border-color:var(--violet);}
.bz-dd-menu{position:absolute;top:calc(100% + 8px);left:0;z-index:20;min-width:240px;background:#15111F;border:1px solid var(--line);border-radius:14px;padding:7px;box-shadow:0 20px 50px rgba(0,0,0,0.55);max-height:340px;overflow-y:auto;}
.bz-dd-menu.right{left:auto;right:0;min-width:200px;}
.bz-dd-item{display:block;width:100%;text-align:left;background:none;border:0;color:var(--body);font-size:14px;padding:10px 13px;border-radius:9px;transition:all .12s;}
.bz-dd-item:hover{background:rgba(255,255,255,0.05);color:var(--ink);}
.bz-dd-item.on{background:rgba(124,58,237,0.15);color:#fff;}
.bz-toggle{display:inline-flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);color:var(--body);font-family:'Sora',sans-serif;font-weight:500;font-size:14px;padding:10px 16px;border-radius:11px;transition:all .15s;}
.bz-toggle.on{background:var(--violet);border-color:var(--violet);color:#fff;}

/* results / empty */
.bz-results{max-width:1200px;margin:0 auto;padding:clamp(28px,4vw,40px) clamp(18px,5vw,40px) clamp(60px,8vw,100px);}
.bz-empty{border:1px dashed var(--line);border-radius:24px;background:rgba(255,255,255,0.012);padding:clamp(40px,6vw,68px) clamp(24px,5vw,48px);text-align:center;display:flex;flex-direction:column;align-items:center;}
.bz-empty-ico{width:78px;height:78px;border-radius:22px;background:rgba(124,58,237,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;}
.bz-empty-h{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(22px,3.2vw,32px);letter-spacing:-0.8px;margin:0 0 14px;}
.bz-empty-p{font-size:clamp(14.5px,1.7vw,16.5px);color:var(--body);max-width:500px;margin:0 0 30px;}
.bz-empty-cta{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:8px;}

/* skeleton preview */
.bz-skeleton-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;width:100%;margin-top:48px;opacity:.5;}
.bz-skel-card{border:1px solid var(--line);border-radius:18px;background:var(--card);padding:22px;text-align:left;}
.bz-skel-top{display:flex;gap:13px;align-items:center;margin-bottom:18px;}
.bz-skel-avatar{width:52px;height:52px;border-radius:50%;flex:none;background:linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.11),rgba(255,255,255,0.06));background-size:200% 100%;animation:bzShimmer 1.8s infinite;}
.bz-skel-lines{flex:1;display:flex;flex-direction:column;gap:8px;}
.bz-skel-line{height:10px;border-radius:6px;background:linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.11),rgba(255,255,255,0.06));background-size:200% 100%;animation:bzShimmer 1.8s infinite;}
.bz-skel-line.w70{width:70%;}.bz-skel-line.w45{width:45%;}.bz-skel-line.w30{width:30%;}.bz-skel-line.w25{width:25%;}
.bz-skel-tags{display:flex;gap:8px;margin-bottom:20px;}
.bz-skel-tag{width:60px;height:22px;border-radius:7px;background:linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.11),rgba(255,255,255,0.06));background-size:200% 100%;animation:bzShimmer 1.8s infinite;}
.bz-skel-foot{display:flex;justify-content:space-between;padding-top:16px;border-top:1px solid var(--line);}
@keyframes bzShimmer{0%{background-position:200% 0;}100%{background-position:-200% 0;}}
.bz-skel-note{font-size:12.5px;color:var(--muted);margin:20px 0 0;}

/* footer */
.bz-foot{background:#050308;border-top:1px solid var(--line);padding:clamp(40px,6vw,60px) clamp(18px,5vw,56px) 26px;}
.bz-foot-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:40px;padding-bottom:36px;border-bottom:1px solid var(--line);}
.bz-foot-tag{font-family:'Sora',sans-serif;font-size:12px;letter-spacing:2px;color:var(--violet-2);text-transform:uppercase;margin:15px 0 8px;}
.bz-foot-sm{font-size:13px;color:var(--muted);margin:4px 0 0;}
.bz-foot-h{display:block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;margin-bottom:14px;}
.bz-foot-col{display:flex;flex-direction:column;gap:11px;align-items:flex-start;}
.bz-foot-col a{font-size:14.5px;color:var(--body);}
.bz-foot-col a:hover{color:#fff;}
.bz-foot-email{font-family:'Sora',sans-serif;font-size:16px;color:#fff !important;font-weight:600;}
.bz-foot-email:hover{color:var(--violet-2) !important;}
.bz-foot-bottom{max-width:1200px;margin:0 auto;padding-top:22px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:13px;color:var(--muted);}
.bz-foot-bottom a:hover{color:#fff;}

/* responsive */
@media (max-width:880px){
  .bz-skeleton-grid{grid-template-columns:1fr;}
  .bz-foot-top{grid-template-columns:1fr;gap:28px;}
}
@media (max-width:640px){
  .bz-links,.bz-navr{display:none;}
  .bz-filterbar{flex-direction:column;align-items:stretch;}
  .bz-filters-left,.bz-filters-right{justify-content:space-between;}
  .bz-searchbar{flex-wrap:wrap;padding:10px;}
  .bz-searchbar input{width:100%;}
  .bz-search-btn{width:100%;}
}
`;
