"use client";

import React, { useState } from "react";

/**
 * NEXUS Authentication PREVIEW (no backend)
 * A Kureshi Industries Company
 *
 * This is a LOOK-AND-FEEL preview only. It does NOT connect to Supabase and
 * saves nothing. Signing up / logging in just simulates success so you can
 * click through every screen (login, freelancer signup, client signup, and
 * the dashboard). Use this to check the design. When ready for real accounts,
 * switch to NexusAuth.jsx (which uses Supabase).
 *
 * Usage in Next.js, make a page at app/auth-preview/page.js:
 *   import NexusAuthPreview from "../../NexusAuthPreview.jsx";
 *   export default function Page() { return <NexusAuthPreview />; }
 * Then visit /auth-preview
 */

function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow": return (<svg {...c}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
    case "check": return (<svg {...c} strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>);
    case "mail": return (<svg {...c}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>);
    case "lock": return (<svg {...c}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);
    case "user": return (<svg {...c}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>);
    case "logout": return (<svg {...c}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>);
    case "briefcase": return (<svg {...c}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
    case "spark": return (<svg {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></svg>);
    case "home": return (<svg {...c}><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>);
    case "search": return (<svg {...c}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>);
    case "msg": return (<svg {...c}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>);
    case "settings": return (<svg {...c}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>);
    case "eye": return (<svg {...c}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>);
    case "trend": return (<svg {...c}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>);
    case "wallet": return (<svg {...c}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h3v-4z" /></svg>);
    case "star": return (<svg width={size} height={size} viewBox="0 0 24 24" fill={stroke} stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>);
    case "bell": return (<svg {...c}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>);
    case "file": return (<svg {...c}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>);
    case "plus": return (<svg {...c}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>);
    case "clock": return (<svg {...c}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>);
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
      <span className="ax-logo-word">NEXUS</span>
    </span>
  );
}

function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export default function NexusAuthPreview({ initialView = "login" }) {
  const [view, setView] = useState(initialView);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [fakeUser, setFakeUser] = useState(null);
  const [loading, setLoading] = useState(false);     // sign-in loading overlay
  const [welcome, setWelcome] = useState(false);      // first-time welcome animation
  const [welcomeName, setWelcomeName] = useState(""); // name shown in welcome

  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  // Shows the loading overlay, then either an exclusive welcome (new accounts)
  // or goes straight to the dashboard (returning sign-ins).
  function enter(user, isNew) {
    setLoading(true);
    setTimeout(() => {
      setFakeUser(user);
      setLoading(false);
      if (isNew) {
        setWelcomeName(user.full_name);
        setWelcome(true);
        setView("dashboard");
        // hold the welcome overlay, then fade it away
        setTimeout(() => setWelcome(false), 4200);
      } else {
        setView("dashboard");
      }
    }, 1400);
  }

  function fakeSignup(role) {
    setError("");
    if (!name.trim()) return setError("Please enter your name.");
    if (!validEmail(email)) return setError("Please enter a valid email address.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    // Signing up = a brand-new account = exclusive welcome
    enter({ full_name: name.trim(), email: email.trim().toLowerCase(), role }, true);
  }

  function fakeLogin(e) {
    e.preventDefault();
    setError("");
    if (!validEmail(email)) return setError("Please enter a valid email address.");
    if (!password) return setError("Please enter your password.");
    // Logging in = returning user = no welcome, just the loading transition
    enter({ full_name: email.split("@")[0], email: email.trim().toLowerCase(), role: "member" }, false);
  }

  function fakeGoogle(googleRole) {
    // From a signup screen we know the intended role (freelancer/client),
    // so Google creates that type of account. From the login screen a
    // returning user signs in (role would already exist on their account).
    if (googleRole) {
      enter({ full_name: "Preview User", email: "preview@nexuspk.net", role: googleRole }, true);
    } else {
      enter({ full_name: "Preview User", email: "preview@nexuspk.net", role: "member" }, false);
    }
  }

  function logout() {
    setFakeUser(null); setEmail(""); setPassword(""); setName(""); setError("");
    setLoading(false); setWelcome(false); setView("login");
  }
  function switchView(v) { setError(""); setEmail(""); setPassword(""); setName(""); setView(v); }

  // ---- Dashboard ----
  if (view === "dashboard" && fakeUser) {
    const role = fakeUser.role;
    const firstName = (fakeUser.full_name || "there").split(" ")[0];
    const isClient = role === "client";
    const isFreelancer = role === "freelancer";

    const navItems = isClient
      ? [["home", "Overview", true], ["search", "Browse talent", false], ["briefcase", "My projects", false], ["msg", "Messages", false], ["settings", "Settings", false]]
      : [["home", "Overview", true], ["search", "Find work", false], ["file", "Proposals", false], ["msg", "Messages", false], ["settings", "Settings", false]];

    const stats = isClient
      ? [
          { i: "briefcase", label: "Active projects", val: "0", note: "none yet" },
          { i: "file", label: "Proposals received", val: "0", note: "post to start" },
          { i: "wallet", label: "In escrow", val: "PKR 0", note: "secured funds" },
          { i: "check", label: "Completed", val: "0", note: "all time" },
        ]
      : [
          { i: "eye", label: "Profile views", val: "0", note: "this week" },
          { i: "file", label: "Active proposals", val: "0", note: "awaiting reply" },
          { i: "wallet", label: "Earnings", val: "PKR 0", note: "all time" },
          { i: "star", label: "Rating", val: "–", note: "no reviews yet" },
        ];

    const actions = isClient
      ? [
          { i: "plus", h: "Post a project", p: "Describe what you need and get proposals." },
          { i: "search", h: "Browse talent", p: "Find verified professionals by skill." },
          { i: "msg", h: "Messages", p: "Talk to freelancers you're working with." },
        ]
      : [
          { i: "user", h: "Complete your profile", p: "Add skills, portfolio, and your rate." },
          { i: "search", h: "Find work", p: "Browse projects that match your skills." },
          { i: "spark", h: "Get verified", p: "Earn your Nexus Verified badge." },
        ];

    const completion = isFreelancer ? 35 : 50;

    return (
      <div className="ax">
        <style>{CSS}</style>
        <div className="ax-preview-flag">Preview mode · nothing is saved</div>
        {welcome && (
          <div className="ax-welcome" aria-hidden="true">
            <div className="ax-welcome-inner">
              <div className="ax-welcome-mark">
                <svg width="64" height="64" viewBox="0 0 100 100"><polygon points="92,50 71,86.6 29,86.6 8,50 29,13.4 71,13.4" fill="#2E1065" /><polygon points="84,50 65,82.9 35,82.9 16,50 35,17.1 65,17.1" fill="none" stroke="#7C3AED" strokeWidth="2" opacity="0.8" /></svg>
              </div>
              <div className="ax-welcome-eyebrow">Welcome to Nexus</div>
              <div className="ax-welcome-name">{welcomeName}</div>
              <div className="ax-welcome-tag">Connect. Build. Deliver.</div>
            </div>
          </div>
        )}

        <div className="db">
          {/* Sidebar */}
          <aside className="db-side">
            <div className="db-side-logo"><LogoMark size={30} /></div>
            <nav className="db-nav">
              {navItems.map(([ic, label, active]) => (
                <button key={label} className={`db-nav-item ${active ? "on" : ""}`}>
                  <Icon name={ic} size={19} stroke="currentColor" /> <span>{label}</span>
                </button>
              ))}
            </nav>
            <div className="db-side-foot">
              <div className="db-side-user">
                <span className="db-side-avatar">{firstName[0]}</span>
                <div className="db-side-uinfo">
                  <strong>{fakeUser.full_name}</strong>
                  <span>{isClient ? "Client" : isFreelancer ? "Freelancer" : "Member"}</span>
                </div>
              </div>
              <button className="db-side-logout" onClick={logout}><Icon name="logout" size={17} /> Sign out</button>
            </div>
          </aside>

          {/* Main */}
          <main className="db-main">
            <div className="db-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>

            <header className="db-top">
              <div>
                <span className="db-role-pill">{isClient ? "Client account" : isFreelancer ? "Freelancer account" : "Member"}</span>
                <h1 className="db-hello">Welcome back, {firstName}.</h1>
                <p className="db-subtitle">Here&apos;s what&apos;s happening with your Nexus account.</p>
              </div>
              <button className="db-bell" aria-label="Notifications"><Icon name="bell" size={20} stroke="currentColor" /><span className="db-bell-dot" /></button>
            </header>

            {/* Stats */}
            <div className="db-stats">
              {stats.map((s) => (
                <div key={s.label} className="db-stat">
                  <span className="db-stat-ico"><Icon name={s.i} size={18} stroke="#A472FF" /></span>
                  <div className="db-stat-val">{s.val}</div>
                  <div className="db-stat-label">{s.label}</div>
                  <div className="db-stat-note">{s.note}</div>
                </div>
              ))}
            </div>

            {/* Two-column: actions + side */}
            <div className="db-cols">
              <section className="db-panel">
                <div className="db-panel-head"><h2>Quick actions</h2></div>
                <div className="db-actions">
                  {actions.map((a) => (
                    <button key={a.h} className="db-action">
                      <span className="db-action-ico"><Icon name={a.i} size={20} stroke="#A472FF" /></span>
                      <span className="db-action-text">
                        <strong>{a.h}</strong>
                        <span>{a.p}</span>
                      </span>
                      <span className="db-action-arrow"><Icon name="arrow" size={17} stroke="currentColor" /></span>
                    </button>
                  ))}
                </div>

                <div className="db-panel-head" style={{ marginTop: 30 }}><h2>Recent activity</h2></div>
                <div className="db-empty-activity">
                  <span className="db-empty-ico"><Icon name="clock" size={22} stroke="#857F99" /></span>
                  <p>No activity yet. Once you {isClient ? "post a project" : "start applying"}, your updates will show up here.</p>
                </div>
              </section>

              <aside className="db-rail">
                {/* Profile completion */}
                <div className="db-rail-card">
                  <h3>{isClient ? "Account setup" : "Profile strength"}</h3>
                  <div className="db-progress-num">{completion}<span>%</span></div>
                  <div className="db-progress-bar"><div className="db-progress-fill" style={{ width: `${completion}%` }} /></div>
                  <ul className="db-checklist">
                    <li className="done"><Icon name="check" size={13} stroke="#fff" /> Account created</li>
                    <li className="done"><Icon name="check" size={13} stroke="#fff" /> Email added</li>
                    <li><span className="db-check-empty" /> {isClient ? "Post your first project" : "Add your skills & portfolio"}</li>
                    <li><span className="db-check-empty" /> {isClient ? "Add a payment method" : "Get verified"}</li>
                  </ul>
                </div>

                {/* Verified promo */}
                <div className="db-rail-card db-promo">
                  <span className="db-promo-ico"><Icon name="spark" size={20} stroke="#fff" /></span>
                  <h3>{isClient ? "Hire with confidence" : "Stand out with Verified"}</h3>
                  <p>{isClient ? "Every Nexus professional is screened, and escrow protects every contract." : "Verified freelancers get more views and win more work."}</p>
                  <button className="db-promo-btn">{isClient ? "How it works" : "Get verified"}</button>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const isSignup = view === "signup-freelancer" || view === "signup-client";
  const role = view === "signup-freelancer" ? "freelancer" : "client";

  return (
    <div className="ax">
      <style>{CSS}</style>
      <div className="ax-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>
      <div className="ax-preview-flag">Preview mode · nothing is saved</div>

      {loading && (
        <div className="ax-loading-overlay" aria-hidden="true">
          <div className="ax-spinner" />
          <p>Signing you in…</p>
        </div>
      )}

      <div className="ax-shell">
        <a href="#" className="ax-logo-top" onClick={(e) => e.preventDefault()}><LogoMark /></a>

        <div className="ax-card">
          {isSignup ? (
            <>
              <div className="ax-head">
                <span className="ax-tag">{role === "freelancer" ? "For freelancers" : "For clients"}</span>
                <h1 className="ax-h1">{role === "freelancer" ? "Find work on Nexus" : "Hire talent on Nexus"}</h1>
                <p className="ax-sub">Create your {role} account to get started.</p>
              </div>

              <button className="ax-google" onClick={() => fakeGoogle(role)}>
                <GoogleIcon /> Sign up with Google
              </button>
              <div className="ax-or"><span>or</span></div>

              <div className="ax-form">
                <div className="ax-field">
                  <label>Full name</label>
                  <div className="ax-input"><Icon name="user" size={17} stroke="#857F99" /><input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} /></div>
                </div>
                <div className="ax-field">
                  <label>Email</label>
                  <div className="ax-input"><Icon name="mail" size={17} stroke="#857F99" /><input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                </div>
                <div className="ax-field">
                  <label>Password</label>
                  <div className="ax-input"><Icon name="lock" size={17} stroke="#857F99" /><input type="password" placeholder="At least 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                </div>
                {error && <div className="ax-error">{error}</div>}
                <button className="ax-btn" onClick={() => fakeSignup(role)} disabled={loading}>
                  {loading ? "Creating account…" : "Create account"} {!loading && <Icon name="arrow" size={17} />}
                </button>
              </div>

              <div className="ax-switch">
                <span>Already have an account? <button onClick={() => switchView("login")}>Sign in</button></span>
                <button className="ax-other-role" onClick={() => switchView(role === "freelancer" ? "signup-client" : "signup-freelancer")}>
                  {role === "freelancer" ? "Sign up as a client instead" : "Sign up as a freelancer instead"}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="ax-head">
                <span className="ax-tag">Welcome back</span>
                <h1 className="ax-h1">Sign in to Nexus</h1>
                <p className="ax-sub">Pick up where you left off.</p>
              </div>

              <button className="ax-google" onClick={fakeGoogle}>
                <GoogleIcon /> Continue with Google
              </button>
              <div className="ax-or"><span>or</span></div>

              <form className="ax-form" onSubmit={fakeLogin}>
                <div className="ax-field">
                  <label>Email</label>
                  <div className="ax-input"><Icon name="mail" size={17} stroke="#857F99" /><input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                </div>
                <div className="ax-field">
                  <label>Password</label>
                  <div className="ax-input"><Icon name="lock" size={17} stroke="#857F99" /><input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                </div>
                {error && <div className="ax-error">{error}</div>}
                <button type="submit" className="ax-btn" disabled={loading}>
                  {loading ? "Signing in…" : "Sign in"} {!loading && <Icon name="arrow" size={17} />}
                </button>
              </form>

              <div className="ax-switch">
                <span>New to Nexus?</span>
                <div className="ax-signup-choice">
                  <button onClick={() => switchView("signup-client")}><Icon name="briefcase" size={15} stroke="currentColor" /> Sign up to hire</button>
                  <button onClick={() => switchView("signup-freelancer")}><Icon name="user" size={15} stroke="currentColor" /> Sign up to work</button>
                </div>
              </div>
            </>
          )}
        </div>

        <p className="ax-foot">A Kureshi Industries Company  ·  Connect. Build. Deliver.</p>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

.ax{
  --bg:#080509;--ink:#F6F2FC;--body:#B4AEC6;--muted:#857F99;
  --violet:#7C3AED;--violet-2:#A472FF;--purple:#2E1065;
  --line:rgba(255,255,255,0.10);--card:#120E1A;--field:#0E0A15;
  position:relative;min-height:100vh;background:var(--bg);color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  display:flex;align-items:center;justify-content:center;overflow-x:hidden;line-height:1.55;
}
.ax *{box-sizing:border-box;}
.ax a{color:inherit;text-decoration:none;}
.ax button{font-family:inherit;cursor:pointer;}

.ax-bg{position:fixed;inset:0;z-index:0;pointer-events:none;}
.ax-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.ax-bg .g1{width:620px;height:620px;background:#2E1065;top:-220px;left:-140px;opacity:.55;animation:axdrift1 18s ease-in-out infinite;}
.ax-bg .g2{width:560px;height:560px;background:rgba(124,58,237,0.32);bottom:-200px;right:-180px;opacity:.4;animation:axdrift2 22s ease-in-out infinite;}
.ax-bg .grain{position:absolute;inset:0;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
@keyframes axdrift1{0%,100%{transform:translate(0,0);}50%{transform:translate(40px,30px);}}
@keyframes axdrift2{0%,100%{transform:translate(0,0);}50%{transform:translate(-50px,-30px);}}
.ax > *{position:relative;z-index:1;}

.ax-preview-flag{position:fixed;top:0;left:50%;transform:translateX(-50%);z-index:30;font-family:'Sora',sans-serif;font-size:12px;font-weight:600;letter-spacing:.5px;color:#D9C9FF;background:rgba(124,58,237,0.2);border:1px solid rgba(124,58,237,0.4);border-top:0;border-radius:0 0 12px 12px;padding:6px 16px;}

/* shell */
.ax-shell{width:100%;max-width:440px;padding:60px 20px 40px;display:flex;flex-direction:column;align-items:center;}
.ax-logo-top{margin-bottom:28px;opacity:0;animation:axrise .7s cubic-bezier(.2,.8,.2,1) .05s forwards;}
.ax-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2.5px;font-size:20px;}

/* card */
.ax-card{width:100%;background:var(--card);border:1px solid var(--line);border-radius:24px;padding:clamp(28px,5vw,40px);box-shadow:0 30px 70px rgba(0,0,0,0.5);opacity:0;animation:axrise .8s cubic-bezier(.2,.8,.2,1) .16s forwards;}
@keyframes axrise{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:none;}}
@keyframes axfade{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:none;}}
.ax-card .ax-head{opacity:0;animation:axfade .6s ease .3s forwards;}
.ax-card .ax-google{opacity:0;animation:axfade .6s ease .4s forwards;}
.ax-card .ax-or{opacity:0;animation:axfade .6s ease .47s forwards;}
.ax-card .ax-form,.ax-card .ax-switch{opacity:0;animation:axfade .6s ease .54s forwards;}
.ax-head{text-align:center;margin-bottom:26px;}
.ax-tag{display:inline-block;font-family:'Sora',sans-serif;font-size:11.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--violet-2);background:rgba(124,58,237,0.12);border-radius:100px;padding:5px 13px;margin-bottom:16px;}
.ax-h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(24px,4vw,30px);letter-spacing:-1px;margin:0 0 8px;}
.ax-sub{font-size:14.5px;color:var(--body);margin:0;}

/* google btn */
.ax-google{width:100%;display:flex;align-items:center;justify-content:center;gap:11px;background:#fff;color:#1a1a1a;
  font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:13px;border-radius:12px;border:0;transition:transform .16s,box-shadow .16s;}
.ax-google:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(0,0,0,0.3);}

.ax-or{display:flex;align-items:center;gap:14px;margin:20px 0;color:var(--muted);font-size:13px;}
.ax-or::before,.ax-or::after{content:"";flex:1;height:1px;background:var(--line);}

/* form */
.ax-form{display:flex;flex-direction:column;gap:16px;}
.ax-field{display:flex;flex-direction:column;gap:7px;}
.ax-field label{font-size:13px;font-weight:600;color:var(--ink);}
.ax-input{display:flex;align-items:center;gap:10px;background:var(--field);border:1px solid var(--line);border-radius:12px;padding:0 14px;transition:border-color .15s,box-shadow .15s;}
.ax-input:focus-within{border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,58,237,0.18);}
.ax-input input{flex:1;background:transparent;border:0;outline:none;color:var(--ink);font-family:'Inter',sans-serif;font-size:15px;padding:13px 0;}
.ax-input input::placeholder{color:var(--muted);}

.ax-btn{width:100%;display:flex;align-items:center;justify-content:center;gap:9px;background:var(--violet);color:#fff;
  font-family:'Sora',sans-serif;font-weight:600;font-size:15.5px;padding:14px;border-radius:12px;border:0;margin-top:2px;
  transition:transform .16s,box-shadow .16s,background .16s;}
.ax-btn:hover{background:#8B49F5;transform:translateY(-1px);box-shadow:0 12px 28px rgba(124,58,237,0.4);}

.ax-error{background:rgba(255,90,90,0.1);border:1px solid rgba(255,120,120,0.4);color:#FFB4B4;font-size:13.5px;padding:11px 14px;border-radius:10px;}

/* switch */
.ax-switch{margin-top:24px;padding-top:22px;border-top:1px solid var(--line);text-align:center;font-size:14px;color:var(--body);display:flex;flex-direction:column;gap:14px;}
.ax-switch button{background:none;border:0;color:var(--violet-2);font-weight:600;font-size:14px;}
.ax-switch button:hover{color:#fff;}
.ax-other-role{color:var(--muted) !important;font-weight:500 !important;font-size:13.5px !important;}
.ax-other-role:hover{color:var(--violet-2) !important;}
.ax-signup-choice{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
.ax-signup-choice button{display:inline-flex;align-items:center;gap:7px;background:var(--field);border:1px solid var(--line) !important;border-radius:10px;padding:10px 16px;color:var(--ink) !important;font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;transition:all .15s;}
.ax-signup-choice button:hover{border-color:var(--violet) !important;color:#fff !important;background:rgba(124,58,237,0.1);}

.ax-foot{margin-top:26px;font-size:12.5px;color:var(--muted);text-align:center;opacity:0;animation:axfade .6s ease .64s forwards;}

/* ===== DASHBOARD (sidebar layout) ===== */
.db{display:flex;min-height:100vh;width:100%;}

/* sidebar */
.db-side{width:248px;flex:none;background:#0C0814;border-right:1px solid var(--line);display:flex;flex-direction:column;padding:24px 16px;position:sticky;top:0;height:100vh;}
.db-side-logo{padding:6px 10px 28px;}
.db-nav{display:flex;flex-direction:column;gap:4px;flex:1;}
.db-nav-item{display:flex;align-items:center;gap:13px;background:none;border:0;color:var(--body);font-family:'Sora',sans-serif;font-weight:500;font-size:14.5px;padding:11px 14px;border-radius:11px;text-align:left;cursor:pointer;transition:all .15s;}
.db-nav-item:hover{background:rgba(255,255,255,0.04);color:var(--ink);}
.db-nav-item.on{background:rgba(124,58,237,0.15);color:#fff;}
.db-nav-item.on svg{stroke:var(--violet-2);}
.db-side-foot{border-top:1px solid var(--line);padding-top:16px;margin-top:16px;}
.db-side-user{display:flex;align-items:center;gap:11px;padding:8px 10px 14px;}
.db-side-avatar{width:38px;height:38px;border-radius:50%;background:linear-gradient(150deg,#7C3AED,#2E1065);display:flex;align-items:center;justify-content:center;color:#fff;font-family:'Sora',sans-serif;font-weight:700;font-size:15px;flex:none;}
.db-side-uinfo{display:flex;flex-direction:column;min-width:0;}
.db-side-uinfo strong{font-family:'Sora',sans-serif;font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.db-side-uinfo span{font-size:12px;color:var(--muted);}
.db-side-logout{width:100%;display:flex;align-items:center;gap:9px;background:none;border:1px solid var(--line);color:var(--body);font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;padding:10px 14px;border-radius:10px;cursor:pointer;transition:all .15s;}
.db-side-logout:hover{border-color:var(--violet);color:#fff;background:rgba(124,58,237,0.1);}

/* main */
.db-main{flex:1;position:relative;padding:36px clamp(20px,3.5vw,44px) 60px;min-width:0;overflow:hidden;}
.db-bg{position:absolute;inset:0;z-index:0;pointer-events:none;}
.db-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.db-bg .g1{width:480px;height:480px;background:#2E1065;top:-220px;right:-100px;opacity:.4;}
.db-bg .g2{width:380px;height:380px;background:rgba(124,58,237,0.25);bottom:-160px;left:-120px;opacity:.3;}
.db-bg .grain{position:absolute;inset:0;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.db-main > *:not(.db-bg){position:relative;z-index:1;}

.db-top{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:32px;opacity:0;animation:axrise .6s cubic-bezier(.2,.8,.2,1) .05s forwards;}
.db-role-pill{display:inline-block;font-family:'Sora',sans-serif;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--violet-2);background:rgba(124,58,237,0.12);border-radius:100px;padding:5px 13px;margin-bottom:14px;}
.db-hello{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(26px,4vw,40px);letter-spacing:-1.5px;margin:0 0 8px;}
.db-subtitle{font-size:15px;color:var(--body);margin:0;}
.db-bell{position:relative;flex:none;width:44px;height:44px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--body);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;}
.db-bell:hover{border-color:var(--violet);color:#fff;}
.db-bell-dot{position:absolute;top:11px;right:12px;width:7px;height:7px;border-radius:50%;background:var(--violet-2);border:2px solid var(--card);}

/* stats */
.db-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:28px;opacity:0;animation:axrise .6s cubic-bezier(.2,.8,.2,1) .15s forwards;}
.db-stat{border:1px solid var(--line);border-radius:16px;background:var(--card);padding:20px;transition:border-color .25s,transform .25s;}
.db-stat:hover{border-color:rgba(124,58,237,0.4);transform:translateY(-3px);}
.db-stat-ico{width:38px;height:38px;border-radius:10px;background:rgba(124,58,237,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.db-stat-val{font-family:'Sora',sans-serif;font-weight:800;font-size:26px;letter-spacing:-0.5px;line-height:1;}
.db-stat-label{font-size:13.5px;color:var(--ink);margin-top:7px;font-weight:500;}
.db-stat-note{font-size:12px;color:var(--muted);margin-top:3px;}

/* two-column */
.db-cols{display:grid;grid-template-columns:1fr 320px;gap:20px;align-items:start;opacity:0;animation:axrise .6s cubic-bezier(.2,.8,.2,1) .25s forwards;}
.db-panel{min-width:0;}
.db-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
.db-panel-head h2{font-family:'Sora',sans-serif;font-weight:700;font-size:18px;letter-spacing:-0.3px;margin:0;}

/* quick actions */
.db-actions{display:flex;flex-direction:column;gap:10px;}
.db-action{display:flex;align-items:center;gap:15px;width:100%;text-align:left;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:17px 18px;cursor:pointer;transition:border-color .2s,transform .2s,background .2s;}
.db-action:hover{border-color:rgba(124,58,237,0.5);transform:translateX(4px);background:#160f22;}
.db-action-ico{flex:none;width:42px;height:42px;border-radius:11px;background:rgba(124,58,237,0.12);display:flex;align-items:center;justify-content:center;}
.db-action-text{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0;}
.db-action-text strong{font-family:'Sora',sans-serif;font-weight:600;font-size:15px;}
.db-action-text span{font-size:13px;color:var(--body);}
.db-action-arrow{flex:none;color:var(--muted);transition:color .2s,transform .2s;}
.db-action:hover .db-action-arrow{color:var(--violet-2);transform:translateX(3px);}

/* recent activity empty */
.db-empty-activity{display:flex;align-items:center;gap:15px;border:1px dashed var(--line);border-radius:14px;padding:22px;background:rgba(255,255,255,0.012);}
.db-empty-ico{flex:none;width:44px;height:44px;border-radius:11px;background:rgba(255,255,255,0.04);display:flex;align-items:center;justify-content:center;}
.db-empty-activity p{font-size:14px;color:var(--body);margin:0;}

/* right rail */
.db-rail{display:flex;flex-direction:column;gap:16px;}
.db-rail-card{border:1px solid var(--line);border-radius:18px;background:var(--card);padding:24px;}
.db-rail-card h3{font-family:'Sora',sans-serif;font-weight:700;font-size:16px;margin:0 0 14px;}
.db-progress-num{font-family:'Sora',sans-serif;font-weight:800;font-size:38px;letter-spacing:-1px;line-height:1;}
.db-progress-num span{font-size:20px;color:var(--muted);}
.db-progress-bar{height:8px;border-radius:100px;background:rgba(255,255,255,0.07);margin:14px 0 18px;overflow:hidden;}
.db-progress-fill{height:100%;border-radius:100px;background:linear-gradient(90deg,#7C3AED,#A472FF);transition:width .8s cubic-bezier(.2,.8,.2,1);}
.db-checklist{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:11px;}
.db-checklist li{display:flex;align-items:center;gap:10px;font-size:13.5px;color:var(--body);}
.db-checklist li.done{color:var(--ink);}
.db-checklist li.done svg{flex:none;}
.db-checklist .db-check-empty{flex:none;width:16px;height:16px;border-radius:50%;border:1.5px solid var(--line);}
.db-checklist li.done > svg{width:16px;height:16px;border-radius:50%;background:var(--violet);padding:2px;}

/* promo card */
.db-promo{background:linear-gradient(155deg,#2E1065,#160733);border-color:rgba(124,58,237,0.4);position:relative;overflow:hidden;}
.db-promo::before{content:"";position:absolute;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(124,58,237,0.4),transparent 70%);top:-80px;right:-60px;}
.db-promo-ico{position:relative;width:42px;height:42px;border-radius:11px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.db-promo h3{position:relative;}
.db-promo p{position:relative;font-size:13.5px;color:#C9BEEC;margin:0 0 18px;}
.db-promo-btn{position:relative;background:#fff;color:var(--purple);border:0;font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;padding:10px 18px;border-radius:10px;cursor:pointer;transition:transform .15s;}
.db-promo-btn:hover{transform:translateY(-2px);}

@media (max-width:1080px){
  .db-cols{grid-template-columns:1fr;}
  .db-stats{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:760px){
  .db-side{display:none;}
  .db-stats{grid-template-columns:repeat(2,1fr);}
  .db-main{padding:24px 18px 50px;}
}

/* loading overlay (sign-in transition) */
.ax-loading-overlay{position:fixed;inset:0;z-index:40;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;background:rgba(8,5,9,0.82);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:axfade .3s ease;}
.ax-loading-overlay p{font-family:'Sora',sans-serif;font-weight:600;font-size:15px;color:var(--body);letter-spacing:.3px;}
.ax-spinner{width:52px;height:52px;border-radius:50%;border:3px solid rgba(124,58,237,0.25);border-top-color:var(--violet-2);animation:axspin .8s linear infinite;}
@keyframes axspin{to{transform:rotate(360deg);}}

/* exclusive welcome animation (first-time accounts) */
.ax-welcome{position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(150deg,#2E1065 0%,#160733 40%,#0A0510 100%);animation:axWelcomeIn .5s ease,axWelcomeOut .6s ease 3.6s forwards;}
.ax-welcome::before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.05;}
.ax-welcome::after{content:"";position:absolute;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(124,58,237,0.5),transparent 60%);top:50%;left:50%;transform:translate(-50%,-58%);animation:axGlowPulse 4s ease-in-out infinite;}
@keyframes axGlowPulse{0%,100%{opacity:.6;}50%{opacity:.9;}}
.ax-welcome-inner{position:relative;z-index:2;text-align:center;animation:axWelcomeRise .9s cubic-bezier(.2,.8,.2,1);}
.ax-welcome-mark{display:inline-flex;animation:axWelcomeMark 1s cubic-bezier(.2,.8,.2,1);filter:drop-shadow(0 0 24px rgba(124,58,237,0.6));}
.ax-welcome-eyebrow{font-family:'Sora',sans-serif;font-weight:600;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--violet-2);margin-top:24px;opacity:0;animation:axfade .6s ease .35s forwards;}
.ax-welcome-name{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(36px,7vw,64px);letter-spacing:-1.5px;color:#fff;margin-top:8px;opacity:0;animation:axWelcomeName .8s cubic-bezier(.2,.8,.2,1) .5s forwards;}
.ax-welcome-tag{font-family:'Sora',sans-serif;font-weight:700;font-size:13px;letter-spacing:4px;text-transform:uppercase;color:var(--violet-2);margin-top:18px;opacity:0;animation:axfade .7s ease .9s forwards;}
@keyframes axWelcomeIn{from{opacity:0;}to{opacity:1;}}
@keyframes axWelcomeOut{to{opacity:0;visibility:hidden;}}
@keyframes axWelcomeRise{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:none;}}
@keyframes axWelcomeMark{0%{opacity:0;transform:scale(0.5) rotate(-30deg);}60%{transform:scale(1.1) rotate(5deg);}100%{opacity:1;transform:scale(1) rotate(0);}}
@keyframes axWelcomeName{from{opacity:0;transform:translateY(20px) scale(0.96);}to{opacity:1;transform:none;}}

@media (prefers-reduced-motion: reduce){
  .ax-bg .g1,.ax-bg .g2{animation:none;}
  .ax-logo-top,.ax-card,.ax-card .ax-head,.ax-card .ax-google,.ax-card .ax-or,.ax-card .ax-form,.ax-card .ax-switch,.ax-foot,.db-top,.db-stats,.db-cols{animation:none;opacity:1;transform:none;}
  .ax-spinner{animation:axspin 1.5s linear infinite;}
  .ax-welcome-inner,.ax-welcome-mark,.ax-welcome-eyebrow,.ax-welcome-name,.ax-welcome-tag{animation:none;opacity:1;transform:none;}
  .ax-welcome::before,.ax-welcome::after{animation:none;}
}
`;
