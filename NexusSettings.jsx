"use client";

import React, { useState } from "react";

/**
 * NEXUS Settings (design preview)
 * A Kureshi Industries Company
 *
 * Full settings experience with a left sidebar of sections and content on the
 * right. Sections: Account, Profile, Notifications, Payments, Privacy &
 * Security, and a Danger zone. Premium Nexus styling. This is a design
 * preview, nothing saves yet.
 *
 * Preview: make a page at app/settings/page.js:
 *   import NexusSettings from "../../NexusSettings.jsx";
 *   export default function Page() { return <NexusSettings />; }
 * Then visit /settings
 */

const SECTIONS = [
  { id: "account", label: "Account", icon: "user" },
  { id: "profile", label: "Profile", icon: "id" },
  { id: "notifications", label: "Notifications", icon: "bell" },
  { id: "payments", label: "Payments", icon: "wallet" },
  { id: "privacy", label: "Privacy & Security", icon: "shield" },
  { id: "danger", label: "Danger zone", icon: "alert" },
];

function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "user": return (<svg {...c}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>);
    case "id": return (<svg {...c}><rect x="2" y="4" width="20" height="16" rx="2" /><circle cx="8.5" cy="11" r="2.2" /><path d="M5 17a3.5 3.5 0 0 1 7 0" /><line x1="15" y1="9" x2="19" y2="9" /><line x1="15" y1="13" x2="19" y2="13" /></svg>);
    case "bell": return (<svg {...c}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>);
    case "wallet": return (<svg {...c}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h3v-4z" /></svg>);
    case "shield": return (<svg {...c}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
    case "alert": return (<svg {...c}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>);
    case "logout": return (<svg {...c}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>);
    case "mail": return (<svg {...c}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>);
    case "lock": return (<svg {...c}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>);
    case "check": return (<svg {...c} strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>);
    case "card": return (<svg {...c}><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>);
    case "phone": return (<svg {...c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
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
      <span className="st-logo-word">NEXUS</span>
    </span>
  );
}

// A reusable toggle switch
function Toggle({ on, onClick }) {
  return (
    <button type="button" className={`st-switch ${on ? "on" : ""}`} onClick={onClick} aria-pressed={on}>
      <span className="st-switch-knob" />
    </button>
  );
}

export default function NexusSettings() {
  const [active, setActive] = useState("account");

  // toggle states (preview only)
  const [notif, setNotif] = useState({
    proposals: true, messages: true, marketing: false, weekly: true, security: true,
  });
  const [twoFactor, setTwoFactor] = useState(false);
  const [profilePublic, setProfilePublic] = useState(true);
  const [showEarnings, setShowEarnings] = useState(false);

  function toggleNotif(key) { setNotif((n) => ({ ...n, [key]: !n[key] })); }

  return (
    <div className="st">
      <style>{CSS}</style>

      <div className="st-shell">
        {/* App sidebar (dashboard nav) */}
        <aside className="st-appside">
          <div className="st-appside-logo"><LogoMark size={30} /></div>
          <nav className="st-appnav">
            <a href="#" className="st-appnav-item"><Icon name="user" size={19} stroke="currentColor" /> <span>Overview</span></a>
            <a href="#" className="st-appnav-item"><Icon name="id" size={19} stroke="currentColor" /> <span>My Profile</span></a>
            <a href="#" className="st-appnav-item"><Icon name="bell" size={19} stroke="currentColor" /> <span>News</span></a>
            <a href="#" className="st-appnav-item"><Icon name="mail" size={19} stroke="currentColor" /> <span>Messages</span></a>
            <a href="#" className="st-appnav-item on"><Icon name="shield" size={19} stroke="currentColor" /> <span>Settings</span></a>
          </nav>
          <div className="st-appside-foot">
            <div className="st-appside-user">
              <span className="st-appside-avatar">A</span>
              <div className="st-appside-uinfo"><strong>Aayan Kureshi</strong><span>Client</span></div>
            </div>
            <button className="st-appside-logout"><Icon name="logout" size={17} /> Sign out</button>
          </div>
        </aside>

        {/* Settings area */}
        <main className="st-main">
          <div className="st-bg" aria-hidden="true"><div className="g g1" /><div className="g g2" /><div className="grain" /></div>

          <div className="st-main-inner">
            <header className="st-header">
              <h1>Settings</h1>
              <p>Manage your account, preferences, and security.</p>
            </header>

            <div className="st-layout">
              {/* Section nav */}
              <nav className="st-secnav">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    className={`st-secnav-item ${active === s.id ? "on" : ""} ${s.id === "danger" ? "danger" : ""}`}
                    onClick={() => setActive(s.id)}
                  >
                    <Icon name={s.icon} size={18} stroke="currentColor" /> {s.label}
                  </button>
                ))}
              </nav>

              {/* Section content */}
              <section className="st-content">
                {active === "account" && (
                  <div className="st-panel">
                    <div className="st-panel-head"><h2>Account</h2><p>Your basic account information.</p></div>

                    <div className="st-avatar-row">
                      <span className="st-big-avatar">A</span>
                      <div>
                        <button className="st-btn ghost sm">Change photo</button>
                        <p className="st-help">JPG or PNG, up to 5MB.</p>
                      </div>
                    </div>

                    <div className="st-grid2">
                      <div className="st-field"><label>Full name</label><div className="st-input"><Icon name="user" size={16} stroke="#857F99" /><input defaultValue="Aayan Kureshi" /></div></div>
                      <div className="st-field"><label>Display name</label><div className="st-input"><input defaultValue="Aayan" /></div></div>
                    </div>
                    <div className="st-field"><label>Email address</label><div className="st-input"><Icon name="mail" size={16} stroke="#857F99" /><input defaultValue="aayan@nexuspk.net" /></div></div>
                    <div className="st-field"><label>Phone number</label><div className="st-input"><Icon name="phone" size={16} stroke="#857F99" /><input defaultValue="+92 300 0000000" /></div></div>
                    <div className="st-field"><label>Account type</label><div className="st-input readonly"><span>Client</span></div><p className="st-help">Contact support to change your account type.</p></div>

                    <div className="st-divider" />
                    <div className="st-panel-head sub"><h3>Change password</h3></div>
                    <div className="st-field"><label>Current password</label><div className="st-input"><Icon name="lock" size={16} stroke="#857F99" /><input type="password" placeholder="••••••••" /></div></div>
                    <div className="st-grid2">
                      <div className="st-field"><label>New password</label><div className="st-input"><Icon name="lock" size={16} stroke="#857F99" /><input type="password" placeholder="At least 6 characters" /></div></div>
                      <div className="st-field"><label>Confirm new password</label><div className="st-input"><Icon name="lock" size={16} stroke="#857F99" /><input type="password" placeholder="Re-enter password" /></div></div>
                    </div>

                    <div className="st-actions"><button className="st-btn">Save changes</button></div>
                  </div>
                )}

                {active === "profile" && (
                  <div className="st-panel">
                    <div className="st-panel-head"><h2>Profile</h2><p>How you appear to others on Nexus.</p></div>
                    <div className="st-field"><label>Professional title</label><div className="st-input"><input placeholder="e.g. Brand & Logo Designer" /></div></div>
                    <div className="st-field"><label>Location</label><div className="st-input"><input defaultValue="Lahore, Pakistan" /></div></div>
                    <div className="st-field"><label>Bio</label><textarea className="st-textarea" rows={5} placeholder="Tell clients about yourself, your experience, and what you do best…" /></div>
                    <div className="st-field"><label>Skills</label><div className="st-input"><input placeholder="Add a skill and press enter" /></div><p className="st-help">Skills help clients find you in search.</p></div>
                    <div className="st-field"><label>Hourly / starting rate (PKR)</label><div className="st-input"><span className="st-cur">PKR</span><input type="number" placeholder="0" /></div></div>

                    <div className="st-toggle-row">
                      <div><strong>Public profile</strong><p>Allow your profile to appear in Browse and search results.</p></div>
                      <Toggle on={profilePublic} onClick={() => setProfilePublic(!profilePublic)} />
                    </div>

                    <div className="st-actions"><button className="st-btn">Save profile</button></div>
                  </div>
                )}

                {active === "notifications" && (
                  <div className="st-panel">
                    <div className="st-panel-head"><h2>Notifications</h2><p>Choose what you want to hear about.</p></div>
                    <div className="st-toggle-list">
                      <div className="st-toggle-row"><div><strong>New proposals</strong><p>When a freelancer sends a proposal on your project.</p></div><Toggle on={notif.proposals} onClick={() => toggleNotif("proposals")} /></div>
                      <div className="st-toggle-row"><div><strong>Messages</strong><p>When you receive a new message.</p></div><Toggle on={notif.messages} onClick={() => toggleNotif("messages")} /></div>
                      <div className="st-toggle-row"><div><strong>Security alerts</strong><p>Important alerts about your account security.</p></div><Toggle on={notif.security} onClick={() => toggleNotif("security")} /></div>
                      <div className="st-toggle-row"><div><strong>Weekly summary</strong><p>A weekly digest of your activity on Nexus.</p></div><Toggle on={notif.weekly} onClick={() => toggleNotif("weekly")} /></div>
                      <div className="st-toggle-row"><div><strong>Product updates & offers</strong><p>News, tips, and occasional promotions.</p></div><Toggle on={notif.marketing} onClick={() => toggleNotif("marketing")} /></div>
                    </div>
                    <div className="st-actions"><button className="st-btn">Save preferences</button></div>
                  </div>
                )}

                {active === "payments" && (
                  <div className="st-panel">
                    <div className="st-panel-head"><h2>Payments</h2><p>Manage how you pay and get paid.</p></div>

                    <div className="st-panel-head sub"><h3>Payment methods</h3></div>
                    <div className="st-empty-box">
                      <Icon name="card" size={26} stroke="#857F99" />
                      <p>No payment method added yet.</p>
                      <button className="st-btn ghost sm">Add a card</button>
                    </div>

                    <div className="st-divider" />
                    <div className="st-panel-head sub"><h3>Payout method</h3><p>Where your earnings are sent (for freelancers).</p></div>
                    <div className="st-empty-box">
                      <Icon name="wallet" size={26} stroke="#857F99" />
                      <p>No payout method set up.</p>
                      <button className="st-btn ghost sm">Add bank account</button>
                    </div>

                    <div className="st-escrow-note">
                      <Icon name="shield" size={18} stroke="#A472FF" />
                      <span>All payments on Nexus are held securely in escrow and only released when work is approved.</span>
                    </div>
                  </div>
                )}

                {active === "privacy" && (
                  <div className="st-panel">
                    <div className="st-panel-head"><h2>Privacy &amp; Security</h2><p>Control your data and protect your account.</p></div>

                    <div className="st-toggle-row"><div><strong>Two-factor authentication</strong><p>Add an extra layer of security when signing in.</p></div><Toggle on={twoFactor} onClick={() => setTwoFactor(!twoFactor)} /></div>
                    <div className="st-toggle-row"><div><strong>Show earnings on profile</strong><p>Display total earnings publicly on your profile.</p></div><Toggle on={showEarnings} onClick={() => setShowEarnings(!showEarnings)} /></div>

                    <div className="st-divider" />
                    <div className="st-panel-head sub"><h3>Active sessions</h3></div>
                    <div className="st-session">
                      <div><strong>This device</strong><p>Lahore, Pakistan · Chrome · Active now</p></div>
                      <span className="st-session-current">Current</span>
                    </div>
                    <button className="st-btn ghost sm" style={{ marginTop: 16 }}>Sign out of all other devices</button>

                    <div className="st-divider" />
                    <div className="st-panel-head sub"><h3>Your data</h3></div>
                    <button className="st-btn ghost sm">Download my data</button>
                  </div>
                )}

                {active === "danger" && (
                  <div className="st-panel">
                    <div className="st-panel-head"><h2 className="st-danger-h">Danger zone</h2><p>Irreversible actions. Please be careful.</p></div>

                    <div className="st-danger-card">
                      <div>
                        <strong>Deactivate account</strong>
                        <p>Temporarily hide your account and profile. You can reactivate anytime by signing back in.</p>
                      </div>
                      <button className="st-btn danger-ghost">Deactivate</button>
                    </div>

                    <div className="st-danger-card">
                      <div>
                        <strong>Delete account</strong>
                        <p>Permanently delete your account, profile, and all data. This cannot be undone.</p>
                      </div>
                      <button className="st-btn danger">Delete account</button>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const CSS = `
.st{
  --bg:#080509;--ink:#F6F2FC;--body:#B4AEC6;--muted:#857F99;
  --violet:#7C3AED;--violet-2:#A472FF;--purple:#2E1065;
  --line:rgba(255,255,255,0.10);--card:#120E1A;--field:#0E0A15;
  --danger:#E5484D;--danger-2:#FF6166;
  position:relative;background:var(--bg);color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.55;min-height:100vh;
}
.st *{box-sizing:border-box;}
.st a{color:inherit;text-decoration:none;}
.st button{font-family:inherit;cursor:pointer;}

/* buttons */
.st-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--violet);color:#fff;font-family:'Sora',sans-serif;font-weight:600;font-size:14.5px;padding:12px 22px;border-radius:11px;border:1px solid transparent;transition:transform .16s,box-shadow .16s,background .16s;}
.st-btn:hover{background:#8B49F5;transform:translateY(-1px);box-shadow:0 12px 28px rgba(124,58,237,0.35);}
.st-btn.sm{padding:9px 16px;font-size:13.5px;}
.st-btn.ghost{background:transparent;border-color:var(--line);color:var(--ink);}
.st-btn.ghost:hover{background:rgba(255,255,255,0.04);border-color:var(--violet);box-shadow:none;}
.st-btn.danger{background:var(--danger);}
.st-btn.danger:hover{background:var(--danger-2);box-shadow:0 12px 28px rgba(229,72,77,0.35);}
.st-btn.danger-ghost{background:transparent;border-color:rgba(229,72,77,0.5);color:var(--danger-2);}
.st-btn.danger-ghost:hover{background:rgba(229,72,77,0.1);box-shadow:none;}

/* shell */
.st-shell{display:flex;min-height:100vh;}

/* app sidebar */
.st-appside{width:248px;flex:none;background:#0C0814;border-right:1px solid var(--line);display:flex;flex-direction:column;padding:24px 16px;position:sticky;top:0;height:100vh;}
.st-appside-logo{padding:6px 10px 28px;}
.st-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2.5px;font-size:19px;}
.st-appnav{display:flex;flex-direction:column;gap:4px;flex:1;}
.st-appnav-item{display:flex;align-items:center;gap:13px;background:none;border:0;color:var(--body);font-family:'Sora',sans-serif;font-weight:500;font-size:14.5px;padding:11px 14px;border-radius:11px;transition:all .15s;}
.st-appnav-item:hover{background:rgba(255,255,255,0.04);color:var(--ink);}
.st-appnav-item.on{background:rgba(124,58,237,0.15);color:#fff;}
.st-appnav-item.on svg{stroke:var(--violet-2);}
.st-appside-foot{border-top:1px solid var(--line);padding-top:16px;margin-top:16px;}
.st-appside-user{display:flex;align-items:center;gap:11px;padding:8px 10px 14px;}
.st-appside-avatar{width:38px;height:38px;border-radius:50%;background:linear-gradient(150deg,#7C3AED,#2E1065);display:flex;align-items:center;justify-content:center;color:#fff;font-family:'Sora',sans-serif;font-weight:700;font-size:15px;flex:none;}
.st-appside-uinfo{display:flex;flex-direction:column;min-width:0;}
.st-appside-uinfo strong{font-family:'Sora',sans-serif;font-size:14px;font-weight:600;}
.st-appside-uinfo span{font-size:12px;color:var(--muted);}
.st-appside-logout{width:100%;display:flex;align-items:center;gap:9px;background:none;border:1px solid var(--line);color:var(--body);font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;padding:10px 14px;border-radius:10px;transition:all .15s;}
.st-appside-logout:hover{border-color:var(--violet);color:#fff;background:rgba(124,58,237,0.1);}

/* main */
.st-main{flex:1;position:relative;overflow:hidden;min-width:0;}
.st-bg{position:absolute;inset:0;z-index:0;pointer-events:none;}
.st-bg .g{position:absolute;border-radius:50%;filter:blur(130px);}
.st-bg .g1{width:480px;height:480px;background:#2E1065;top:-220px;right:-100px;opacity:.35;}
.st-bg .g2{width:380px;height:380px;background:rgba(124,58,237,0.22);bottom:-160px;left:-120px;opacity:.28;}
.st-bg .grain{position:absolute;inset:0;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
.st-main-inner{position:relative;z-index:1;padding:40px clamp(20px,4vw,52px) 70px;max-width:1000px;}

.st-header{margin-bottom:32px;}
.st-header h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(28px,4vw,38px);letter-spacing:-1.2px;margin:0 0 8px;}
.st-header p{font-size:15px;color:var(--body);margin:0;}

/* layout: section nav + content */
.st-layout{display:grid;grid-template-columns:230px 1fr;gap:28px;align-items:start;}
.st-secnav{display:flex;flex-direction:column;gap:4px;position:sticky;top:24px;}
.st-secnav-item{display:flex;align-items:center;gap:12px;background:none;border:0;color:var(--body);font-family:'Sora',sans-serif;font-weight:500;font-size:14.5px;padding:12px 14px;border-radius:11px;text-align:left;transition:all .15s;}
.st-secnav-item:hover{background:rgba(255,255,255,0.04);color:var(--ink);}
.st-secnav-item.on{background:rgba(124,58,237,0.15);color:#fff;}
.st-secnav-item.on svg{stroke:var(--violet-2);}
.st-secnav-item.danger{color:var(--danger-2);}
.st-secnav-item.danger:hover{background:rgba(229,72,77,0.1);}
.st-secnav-item.danger.on{background:rgba(229,72,77,0.15);color:var(--danger-2);}
.st-secnav-item.danger.on svg{stroke:var(--danger-2);}

/* panel */
.st-content{min-width:0;}
.st-panel{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:clamp(24px,3.5vw,36px);}
.st-panel-head{margin-bottom:24px;}
.st-panel-head.sub{margin-bottom:18px;}
.st-panel-head h2{font-family:'Sora',sans-serif;font-weight:700;font-size:22px;letter-spacing:-0.4px;margin:0 0 6px;}
.st-panel-head h3{font-family:'Sora',sans-serif;font-weight:700;font-size:16px;margin:0 0 6px;}
.st-panel-head p{font-size:14px;color:var(--body);margin:0;}
.st-danger-h{color:var(--danger-2) !important;}

/* fields */
.st-field{display:flex;flex-direction:column;gap:8px;margin-bottom:18px;}
.st-field label{font-size:13.5px;font-weight:600;color:var(--ink);}
.st-input{display:flex;align-items:center;gap:10px;background:var(--field);border:1px solid var(--line);border-radius:11px;padding:0 14px;transition:border-color .15s,box-shadow .15s;}
.st-input:focus-within{border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,58,237,0.18);}
.st-input input{flex:1;background:transparent;border:0;outline:none;color:var(--ink);font-family:'Inter',sans-serif;font-size:14.5px;padding:12px 0;}
.st-input input::placeholder{color:var(--muted);}
.st-input input::-webkit-outer-spin-button,.st-input input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
.st-input.readonly{padding:12px 14px;color:var(--body);}
.st-cur{font-family:'Sora',sans-serif;font-weight:600;font-size:13px;color:var(--violet-2);}
.st-textarea{background:var(--field);border:1px solid var(--line);border-radius:11px;padding:12px 14px;color:var(--ink);font-family:'Inter',sans-serif;font-size:14.5px;resize:vertical;outline:none;line-height:1.6;transition:border-color .15s,box-shadow .15s;}
.st-textarea:focus{border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,58,237,0.18);}
.st-textarea::placeholder{color:var(--muted);}
.st-help{font-size:12.5px;color:var(--muted);margin:0;}
.st-grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.st-divider{height:1px;background:var(--line);margin:28px 0;}
.st-actions{margin-top:26px;display:flex;justify-content:flex-end;}

/* avatar row */
.st-avatar-row{display:flex;align-items:center;gap:20px;margin-bottom:26px;}
.st-big-avatar{width:72px;height:72px;border-radius:50%;background:linear-gradient(150deg,#7C3AED,#2E1065);display:flex;align-items:center;justify-content:center;color:#fff;font-family:'Sora',sans-serif;font-weight:800;font-size:28px;flex:none;}
.st-avatar-row .st-help{margin-top:8px;}

/* toggle */
.st-switch{flex:none;width:46px;height:26px;border-radius:100px;background:rgba(255,255,255,0.12);border:0;position:relative;transition:background .2s;}
.st-switch.on{background:var(--violet);}
.st-switch-knob{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .2s;}
.st-switch.on .st-switch-knob{transform:translateX(20px);}
.st-toggle-list{display:flex;flex-direction:column;}
.st-toggle-row{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--line);}
.st-toggle-row:last-child{border-bottom:0;}
.st-toggle-row strong{display:block;font-family:'Sora',sans-serif;font-weight:600;font-size:14.5px;margin-bottom:3px;}
.st-toggle-row p{font-size:13px;color:var(--body);margin:0;max-width:440px;}

/* empty box (payments) */
.st-empty-box{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;border:1px dashed var(--line);border-radius:14px;padding:32px;}
.st-empty-box p{font-size:14px;color:var(--body);margin:0;}
.st-escrow-note{display:flex;gap:11px;background:rgba(124,58,237,0.08);border:1px solid rgba(124,58,237,0.2);border-radius:13px;padding:14px;font-size:13px;color:var(--body);line-height:1.5;margin-top:24px;}
.st-escrow-note svg{flex:none;margin-top:1px;}

/* sessions */
.st-session{display:flex;align-items:center;justify-content:space-between;gap:16px;background:var(--field);border:1px solid var(--line);border-radius:13px;padding:16px 18px;}
.st-session strong{display:block;font-family:'Sora',sans-serif;font-weight:600;font-size:14px;margin-bottom:3px;}
.st-session p{font-size:12.5px;color:var(--muted);margin:0;}
.st-session-current{font-family:'Sora',sans-serif;font-size:11.5px;font-weight:600;color:var(--violet-2);background:rgba(124,58,237,0.12);border-radius:100px;padding:4px 12px;}

/* danger */
.st-danger-card{display:flex;align-items:center;justify-content:space-between;gap:20px;border:1px solid rgba(229,72,77,0.25);border-radius:14px;padding:20px 22px;margin-bottom:14px;}
.st-danger-card strong{display:block;font-family:'Sora',sans-serif;font-weight:600;font-size:15px;margin-bottom:5px;}
.st-danger-card p{font-size:13px;color:var(--body);margin:0;max-width:420px;line-height:1.5;}

/* responsive */
@media (max-width:860px){
  .st-appside{display:none;}
  .st-layout{grid-template-columns:1fr;}
  .st-secnav{position:static;flex-direction:row;flex-wrap:wrap;gap:8px;margin-bottom:8px;}
  .st-secnav-item{border:1px solid var(--line);}
}
@media (max-width:560px){
  .st-grid2{grid-template-columns:1fr;}
  .st-toggle-row,.st-danger-card,.st-session{flex-direction:column;align-items:flex-start;}
}
`;
