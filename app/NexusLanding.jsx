"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * NEXUS Early Access Landing Page
 * A Kureshi Industries Company
 *
 * Single-file React component. Drop into any Next.js / React project.
 *  - Default export, no required props.
 *  - Self-contained styles (injected <style>) works without Tailwind.
 *  - Light + dark theme with a toggle in the top corner (starts light).
 *  - Sections: Hero + waitlist, Why Nexus, How It Works, Nexus Verified, FAQ, Footer.
 *  - Waitlist form saves signups to a Supabase table ("waitlist").
 *
 * TO CUSTOMISE:
 *  - CONTACT_EMAIL below.
 *  - To persist signups, POST the entry inside handleSubmit to your backend.
 */

const CONTACT_EMAIL = "aayankureshi@nexuspk.net";

// --- Supabase (waitlist storage) ---
// Public/publishable values (safe to include in frontend code).
const SUPABASE_URL = "https://vztzskrveadfvsdlrgws.supabase.co";
const SUPABASE_KEY = "sb_publishable_WAbrHvVftHon2NVzvcXuAA_opI9fAJg";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
const FEATURES = [
  { t: "Verified talent, not noise", d: "Every Nexus Verified professional clears identity, skills, portfolio, and reference checks. You hire signal, not guesswork." },
  { t: "Escrow on every contract", d: "Funds are held securely and released only on approval. No more chasing payments or abandoned projects." },
  { t: "Built for Pakistan", d: "JazzCash, Easypaisa, and local bank transfers, priced in PKR with no foreign-currency friction." },
  { t: "Honest ratings", d: "Two-way reviews across quality, communication, and timeliness. Reputation you can actually trust." },
  { t: "On-platform messaging", d: "Briefs, files, and decisions stay in one thread, fully documented if a dispute ever arises." },
  { t: "Fair, transparent fees", d: "Clear tiered pricing that drops as contracts grow. No hidden cuts, no surprises at payout." },
];

const STEPS = [
  { k: "01", t: "Search or post", d: "Browse verified professionals by category, or post your project and let the right people come to you." },
  { k: "02", t: "Agree and fund escrow", d: "Settle the terms in one place. Fund escrow up front, so your money is secured before any work begins." },
  { k: "03", t: "Build together", d: "Message, share files, and track milestones on-platform. Everything stays documented and accountable." },
  { k: "04", t: "Approve and pay", d: "Approve the delivered work, escrow releases to the freelancer, and you both leave an honest review." },
];

const VERIFY_STAGES = [
  { t: "Identity", d: "CNIC verification and a live selfie match confirm every professional is real." },
  { t: "Profile", d: "Portfolio, credentials, and professional history reviewed by the Nexus team." },
  { t: "Skills", d: "A category skills assessment with a minimum score required to pass." },
  { t: "References", d: "Direct interviews with past clients or employers to confirm track record." },
  { t: "Approval", d: "Final review, then the Verified badge, renewed annually to stay current." },
];

const FAQS = [
  { q: "What is Nexus?", a: "Nexus is a premium contract marketplace that connects Pakistani businesses, startups, and individuals with verified freelancers and professional service providers, built around trust, verification, and quality work." },
  { q: "How is Nexus different from global platforms?", a: "Nexus is built specifically for Pakistan. That means local payment methods, pricing in PKR, a rigorous verification programme, and a community that understands the local professional context. Global platforms offer none of this well." },
  { q: "What does Nexus Verified mean?", a: "It's our trust badge. A Verified professional has cleared a multi-stage screening process covering identity, skills, portfolio, and professional references. It tells clients this person has been independently checked." },
  { q: "How do payments work?", a: "Every contract is backed by escrow. The client funds the project up front, the money is held securely by Nexus, and it's released to the freelancer only once the work is approved." },
  { q: "How much does it cost?", a: "Joining the waitlist is free. On the platform, Nexus charges a transparent, tiered service fee per contract that decreases as contract value grows. Verification has a separate one-time fee." },
  { q: "When does Nexus launch?", a: "We're onboarding our first professionals and clients now. Join the waitlist and you'll be among the first invited at launch, with early-adopter benefits." },
];

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
function Icon({ name, size = 20, stroke = "currentColor" }) {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "check": return (<svg {...c} strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>);
    case "sun": return (<svg {...c}><circle cx="12" cy="12" r="4.2" /><line x1="12" y1="2" x2="12" y2="4.5" /><line x1="12" y1="19.5" x2="12" y2="22" /><line x1="2" y1="12" x2="4.5" y2="12" /><line x1="19.5" y1="12" x2="22" y2="12" /><line x1="4.8" y1="4.8" x2="6.5" y2="6.5" /><line x1="17.5" y1="17.5" x2="19.2" y2="19.2" /><line x1="4.8" y1="19.2" x2="6.5" y2="17.5" /><line x1="17.5" y1="6.5" x2="19.2" y2="4.8" /></svg>);
    case "moon": return (<svg {...c}><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" /></svg>);
    default: return null;
  }
}

// Hexagon logo + NEXUS wordmark
function LogoMark({ size = 34 }) {
  return (
    <span className="nx-logo" style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="92,50 71,86.6 29,86.6 8,50 29,13.4 71,13.4" fill="#2E1065" />
        <polygon points="84,50 65,82.9 35,82.9 16,50 35,17.1 65,17.1" fill="none" stroke="#7C3AED" strokeWidth="1.6" opacity="0.65" />
      </svg>
      <span className="nx-logo-word">NEXUS</span>
    </span>
  );
}

function VerifiedBadge() {
  return (
    <span className="nx-vbadge">
      <span className="nx-vbadge-ico"><Icon name="check" size={11} stroke="#fff" /></span>
      Nexus Verified
    </span>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const dark = theme === "dark";
  return (
    <button className="nx-theme-toggle" onClick={onToggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Light mode" : "Dark mode"}>
      <span className="nx-toggle-track">
        <span className="nx-toggle-thumb" style={{ transform: dark ? "translateX(22px)" : "translateX(0)" }}>
          <Icon name={dark ? "moon" : "sun"} size={13} stroke={dark ? "#9F60FF" : "#7C3AED"} />
        </span>
      </span>
    </button>
  );
}

// Reveal-on-scroll
function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (<Tag ref={ref} className={`nx-reveal ${shown ? "nx-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
export default function NexusEarlyAccess() {
  const [theme, setTheme] = useState("dark"); // starts dark, toggle to light
  const [form, setForm] = useState({ name: "", email: "", role: "" });
<<<<<<< HEAD
  const [signups, setSignups] = useState([]);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
=======
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
>>>>>>> cf4c955 (Optimize fonts: use next/font for Sora and Inter)
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

<<<<<<< HEAD
  function handleSubmit(e) {
=======
  async function handleSubmit(e) {
>>>>>>> cf4c955 (Optimize fonts: use next/font for Sora and Inter)
    e.preventDefault();
    setError("");
    if (!form.name.trim()) return setError("Please enter your name.");
    if (!validEmail(form.email)) return setError("Please enter a valid email address.");
    if (!form.role) return setError("Please tell us whether you're a freelancer or a client.");
<<<<<<< HEAD
    const entry = { ...form, at: new Date().toISOString() };
    console.log("[Nexus waitlist signup]", entry);
    setSignups((s) => [entry, ...s]);
    setDone(true);
    setForm({ name: "", email: "", role: "" });
=======

    const entry = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role,
    };

    setSubmitting(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(entry),
      });

      if (!res.ok) {
        const text = await res.text();
        // Friendly message for duplicate email (if a unique constraint is added later)
        if (res.status === 409 || text.includes("duplicate")) {
          setError("This email is already on the waitlist. You're all set!");
        } else {
          setError("Something went wrong. Please try again in a moment.");
        }
        console.error("[Nexus waitlist] Supabase error:", res.status, text);
        return;
      }

      setDone(true);
      setForm({ name: "", email: "", role: "" });
    } catch (err) {
      console.error("[Nexus waitlist] Network error:", err);
      setError("Could not connect. Please check your internet and try again.");
    } finally {
      setSubmitting(false);
    }
>>>>>>> cf4c955 (Optimize fonts: use next/font for Sora and Inter)
  }

  const nav = [
    ["Why Nexus", "#why"],
    ["How it works", "#how"],
    ["Verified", "#verified"],
    ["FAQ", "#faq"],
  ];

  return (
    <div className={`nx-root nx-${theme}`}>
      <style>{CSS}</style>

      {/* ambient background accents */}
      <div className="nx-bg" aria-hidden="true">
        <div className="nx-glow nx-glow-a" />
        <div className="nx-glow nx-glow-b" />
      </div>

      {/* ---------------- Nav ---------------- */}
      <header className="nx-nav">
        <a href="#top" className="nx-nav-logo" aria-label="Nexus home"><LogoMark /></a>
        <nav className="nx-nav-links" aria-label="Primary">
          {nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </nav>
        <div className="nx-nav-right">
          <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === "light" ? "dark" : "light"))} />
          <a href="#waitlist" className="nx-btn nx-btn-sm">Get early access</a>
        </div>
        <div className="nx-nav-mobile">
          <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === "light" ? "dark" : "light"))} />
          <button className="nx-burger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((m) => !m)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="nx-mobile-menu">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setMenuOpen(false)}>{l}</a>)}
          <a href="#waitlist" className="nx-btn nx-btn-sm" onClick={() => setMenuOpen(false)}>Get early access</a>
        </div>
      )}

      {/* ---------------- Hero + waitlist ---------------- */}
      <section className="nx-hero" id="top">
        <div className="nx-hero-grid">
          <div className="nx-hero-left">
            <div className="nx-eyebrow"><span className="nx-dot" /> Early access now open</div>
            <h1 className="nx-h1">
              Pakistan&apos;s marketplace
              <br />built on <span className="nx-grad">trust</span>.
            </h1>
            <p className="nx-lede">
              Nexus connects businesses and individuals with verified freelancers and professional
              service providers, escrow-backed and quality-screened. Join the waitlist and be first
              in line when we launch.
            </p>
            <div className="nx-hero-tag">Connect. Build. Deliver.</div>
            <div className="nx-hero-points">
              <span><Icon name="check" size={15} stroke="#7C3AED" /> Verified professionals</span>
              <span><Icon name="check" size={15} stroke="#7C3AED" /> Escrow on every contract</span>
              <span><Icon name="check" size={15} stroke="#7C3AED" /> Local PKR payments</span>
            </div>
          </div>

          {/* waitlist card */}
          <div className="nx-hero-right" id="waitlist">
            <div className="nx-wl-card">
              {done ? (
                <div className="nx-success" role="status">
                  <div className="nx-success-mark"><Icon name="check" size={26} stroke="#fff" /></div>
                  <h3>You&apos;re on the list.</h3>
                  <p>Thanks for joining. We&apos;ll be in touch at launch. Want to add another person?</p>
                  <button className="nx-btn nx-btn-ghost" onClick={() => setDone(false)}>Add another</button>
                </div>
              ) : (
                <>
                  <div className="nx-wl-head">
                    <span className="nx-kicker">Get early access</span>
                    <h2 className="nx-wl-title">Join the waitlist</h2>
                    <p className="nx-wl-sub">Be among the first invited at launch, with early-adopter benefits for freelancers and clients.</p>
                  </div>
                  <form className="nx-form" onSubmit={handleSubmit} noValidate>
                    <div className="nx-field">
                      <label htmlFor="nx-name">Name</label>
                      <input id="nx-name" type="text" value={form.name} placeholder="Your full name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="nx-field">
                      <label htmlFor="nx-email">Email</label>
                      <input id="nx-email" type="email" value={form.email} placeholder="you@example.com" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="nx-field">
                      <label>I am a…</label>
                      <div className="nx-role">
                        {["Freelancer", "Client"].map((r) => (
                          <button type="button" key={r} className={`nx-role-opt ${form.role === r ? "nx-role-on" : ""}`} onClick={() => setForm({ ...form, role: r })} aria-pressed={form.role === r}>{r}</button>
                        ))}
                      </div>
                    </div>
                    {error && <div className="nx-error">{error}</div>}
<<<<<<< HEAD
                    <button type="submit" className="nx-btn nx-btn-full">Join the waitlist</button>
=======
                    <button type="submit" className="nx-btn nx-btn-full" disabled={submitting}>
                      {submitting ? "Joining…" : "Join the waitlist"}
                    </button>
>>>>>>> cf4c955 (Optimize fonts: use next/font for Sora and Inter)
                    <p className="nx-form-note">No spam. We&apos;ll only email you about your early access.</p>
                  </form>
                </>
              )}
            </div>

<<<<<<< HEAD
            {signups.length > 0 && (
              <div className="nx-signups">
                <div className="nx-signups-head">Demo signups this session ({signups.length})</div>
                <ul>
                  {signups.map((s, i) => (
                    <li key={i}><span className="nx-su-name">{s.name}</span><span className="nx-su-email">{s.email}</span><span className="nx-su-role">{s.role}</span></li>
                  ))}
                </ul>
                <p className="nx-signups-note">Demo only. Stored in the browser and logged to the console. Connect a backend to save them for real.</p>
              </div>
            )}
=======
>>>>>>> cf4c955 (Optimize fonts: use next/font for Sora and Inter)
          </div>
        </div>
      </section>

      {/* ---------------- Why Nexus ---------------- */}
      <section className="nx-section" id="why">
        <div className="nx-section-head">
          <span className="nx-kicker">Why Nexus</span>
          <h2 className="nx-h2">Trust isn&apos;t a feature. It&apos;s the product.</h2>
          <p className="nx-sub">Everything on Nexus is designed to make professional work predictable, protected, and worth your time.</p>
        </div>
        <div className="nx-feat-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 70} className="nx-feat">
              <div className="nx-feat-mark"><Icon name="check" size={18} stroke="#7C3AED" /></div>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="nx-section nx-band" id="how">
        <div className="nx-section-head">
          <span className="nx-kicker">How it works</span>
          <h2 className="nx-h2">From search to delivery, simply</h2>
          <p className="nx-sub">One accountable flow, so both sides always know where things stand.</p>
        </div>
        <div className="nx-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.k} delay={i * 80} className="nx-step">
              <div className="nx-step-k">{s.k}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Nexus Verified ---------------- */}
      <section className="nx-section" id="verified">
        <div className="nx-verified-wrap">
          <Reveal className="nx-verified-left">
            <span className="nx-kicker">Nexus Verified</span>
            <h2 className="nx-h2">The badge that means business.</h2>
            <p className="nx-sub">Anyone can claim to be good. Verified professionals have proven it. Our five-stage process is the strongest trust signal in Pakistani professional services, so clients hire with confidence and great freelancers stand out.</p>
            <div className="nx-badge-demo"><VerifiedBadge /></div>
          </Reveal>
          <div className="nx-stages">
            {VERIFY_STAGES.map((s, i) => (
              <Reveal key={s.t} delay={i * 70} className="nx-stage">
                <div className="nx-stage-line">
                  <span className="nx-stage-num">{i + 1}</span>
                  {i < VERIFY_STAGES.length - 1 && <span className="nx-stage-rail" />}
                </div>
                <div className="nx-stage-body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="nx-section" id="faq">
        <div className="nx-section-head"><span className="nx-kicker">FAQ</span><h2 className="nx-h2">Questions, answered</h2></div>
        <div className="nx-faq">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className={`nx-faq-item ${open ? "nx-faq-open" : ""}`}>
                <button className="nx-faq-q" onClick={() => setOpenFaq(open ? -1 : i)} aria-expanded={open}>
                  <span>{f.q}</span>
                  <span className="nx-faq-ico">{open ? "\u2212" : "+"}</span>
                </button>
                <div className="nx-faq-a" style={{ maxHeight: open ? 260 : 0 }}><p>{f.a}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="nx-section nx-cta-section">
        <div className="nx-cta-card">
          <h2 className="nx-cta-title">Ready to be first on Nexus?</h2>
          <p className="nx-cta-sub">Join the waitlist today and get early-adopter benefits at launch.</p>
          <a href="#waitlist" className="nx-btn nx-cta-btn">Get early access</a>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="nx-footer" id="contact">
        <div className="nx-footer-top">
          <div className="nx-footer-brand">
            <LogoMark />
            <p className="nx-footer-tag">Connect. Build. Deliver.</p>
            <p className="nx-footer-sm">A Kureshi Industries Company</p>
          </div>
          <div className="nx-footer-contact">
            <span className="nx-foot-h">Get in touch</span>
            <a className="nx-footer-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <p className="nx-footer-sm">Lahore, Pakistan</p>
          </div>
          <nav className="nx-footer-nav" aria-label="Footer">
            <span className="nx-foot-h">Explore</span>
            {nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
            <a href="#waitlist">Get early access</a>
          </nav>
        </div>
        <div className="nx-footer-bottom">
          <span>© {new Date().getFullYear()} Nexus, Kureshi Industries. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Styles: light + dark via .nx-light / .nx-dark on root
// ---------------------------------------------------------------------------
const CSS = `
<<<<<<< HEAD
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
=======
>>>>>>> cf4c955 (Optimize fonts: use next/font for Sora and Inter)

/* ===== shared brand ===== */
.nx-root{
  --purple:#2E1065;
  --violet:#7C3AED;
  --violet-d:#6D28D9;
  --violet-2:#9F60FF;
  --amber:#F59E0B;
  position:relative;font-family:'Inter',system-ui,sans-serif;
  -webkit-font-smoothing:antialiased;overflow-x:hidden;line-height:1.6;
  transition:background .3s ease,color .3s ease;
}
.nx-root *{box-sizing:border-box;}
.nx-root a{color:inherit;text-decoration:none;}

/* ===== LIGHT theme tokens ===== */
.nx-light{
  --bg:#FFFFFF;--bg-soft:#F7F6FB;--bg-tint:#F3F0FF;
  --ink:#15131F;--body:#4B4860;--muted:#8A869B;
  --line:#E9E6F0;--line-2:#EFEDF5;--card:#FFFFFF;
  --nav-bg:rgba(255,255,255,0.88);
  background:var(--bg);color:var(--ink);
}
/* ===== DARK theme tokens ===== */
.nx-dark{
  --bg:#0A0A0A;--bg-soft:#121018;--bg-tint:rgba(124,58,237,0.12);
  --ink:#F4F1FB;--body:#B7B2C8;--muted:#8F8AA3;
  --line:rgba(255,255,255,0.10);--line-2:rgba(255,255,255,0.07);--card:#15121E;
  --nav-bg:rgba(10,10,10,0.8);
  background:var(--bg);color:var(--ink);
}

/* ===== ambient glows ===== */
.nx-bg{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.7;}
.nx-glow{position:absolute;border-radius:50%;filter:blur(120px);}
.nx-light .nx-glow-a{width:520px;height:520px;background:#EDE4FF;top:-180px;left:-120px;opacity:.7;}
.nx-light .nx-glow-b{width:480px;height:480px;background:#F3ECFF;top:120px;right:-160px;opacity:.6;}
.nx-dark .nx-glow-a{width:520px;height:520px;background:#2E1065;top:-180px;left:-120px;opacity:.5;}
.nx-dark .nx-glow-b{width:480px;height:480px;background:rgba(124,58,237,0.3);top:120px;right:-160px;opacity:.4;}
.nx-root > *:not(.nx-bg){position:relative;z-index:1;}

/* ===== buttons ===== */
.nx-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--violet);color:#fff;
  font-family:'Sora',sans-serif;font-weight:600;font-size:15px;padding:12px 24px;border-radius:11px;border:1px solid transparent;
  cursor:pointer;transition:transform .16s ease,box-shadow .16s ease,background .16s ease;}
.nx-btn:hover{background:var(--violet-d);transform:translateY(-1px);box-shadow:0 10px 24px rgba(124,58,237,0.28);}
.nx-btn-sm{padding:9px 18px;font-size:14px;border-radius:9px;}
.nx-btn-full{width:100%;padding:14px;font-size:16px;}
.nx-btn-ghost{background:transparent;border-color:var(--line);color:var(--ink);}
.nx-btn-ghost:hover{background:var(--bg-tint);border-color:var(--violet);box-shadow:none;}
.nx-btn-light{background:#fff;color:var(--purple);}
.nx-btn-light:hover{background:#F3F0FF;box-shadow:0 10px 24px rgba(0,0,0,0.2);}

/* ===== nav ===== */
.nx-nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:22px;padding:14px clamp(18px,5vw,56px);
  background:var(--nav-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--line);}
.nx-logo-word{font-family:'Sora',sans-serif;font-weight:800;letter-spacing:2px;font-size:20px;color:var(--ink);}
.nx-nav-links{display:flex;gap:24px;margin-left:14px;}
.nx-nav-links a{font-size:14.5px;color:var(--body);font-weight:500;transition:color .15s ease;}
.nx-nav-links a:hover{color:var(--violet);}
.nx-nav-right{margin-left:auto;display:flex;align-items:center;gap:14px;}
.nx-nav-mobile{margin-left:auto;display:none;align-items:center;gap:12px;}

/* theme toggle */
.nx-theme-toggle{background:none;border:0;cursor:pointer;padding:0;display:inline-flex;align-items:center;}
.nx-toggle-track{width:46px;height:26px;border-radius:999px;background:var(--bg-tint);border:1px solid var(--line);
  display:flex;align-items:center;padding:2px;position:relative;transition:background .2s ease;}
.nx-toggle-thumb{width:20px;height:20px;border-radius:50%;background:var(--card);display:flex;align-items:center;justify-content:center;
  box-shadow:0 1px 4px rgba(0,0,0,0.2);transition:transform .22s cubic-bezier(.4,0,.2,1);}

.nx-burger{background:none;border:0;cursor:pointer;flex-direction:column;gap:5px;padding:6px;display:flex;}
.nx-burger span{display:block;width:24px;height:2px;background:var(--ink);border-radius:2px;}
.nx-mobile-menu{position:sticky;top:61px;z-index:49;display:flex;flex-direction:column;gap:6px;padding:14px clamp(18px,5vw,56px) 20px;
  background:var(--bg);border-bottom:1px solid var(--line);}
.nx-mobile-menu a{color:var(--ink);padding:8px 0;font-weight:500;}

/* ===== hero ===== */
.nx-hero{padding:clamp(40px,7vw,84px) clamp(18px,5vw,56px) clamp(40px,6vw,72px);}
.nx-hero-grid{max-width:1140px;margin:0 auto;display:grid;grid-template-columns:1.05fr 0.95fr;gap:clamp(32px,5vw,64px);align-items:center;}
.nx-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;letter-spacing:.4px;color:var(--violet-d);font-weight:600;
  border:1px solid var(--line);border-radius:999px;padding:6px 15px;margin-bottom:24px;background:var(--card);}
.nx-dark .nx-eyebrow{color:var(--violet-2);}
.nx-dot{width:7px;height:7px;border-radius:50%;background:var(--violet);box-shadow:0 0 10px var(--violet);animation:nx-pulse 2.4s infinite;}
@keyframes nx-pulse{0%,100%{opacity:1;}50%{opacity:.4;}}
.nx-h1{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(34px,5.4vw,60px);line-height:1.06;letter-spacing:-1.4px;color:var(--ink);margin:0 0 20px;}
.nx-grad{background:linear-gradient(100deg,#7C3AED,#9F60FF);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.nx-lede{font-size:clamp(15px,1.8vw,18px);color:var(--body);max-width:540px;margin:0 0 22px;}
.nx-hero-tag{font-family:'Sora',sans-serif;font-weight:700;letter-spacing:3px;font-size:13px;color:var(--violet-d);text-transform:uppercase;margin-bottom:26px;}
.nx-dark .nx-hero-tag{color:var(--violet-2);}
.nx-hero-points{display:flex;flex-direction:column;gap:11px;}
.nx-hero-points span{display:inline-flex;align-items:center;gap:9px;font-size:15px;color:var(--ink);font-weight:500;}

/* waitlist card */
.nx-wl-card{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:clamp(26px,3.5vw,38px);
  box-shadow:0 24px 60px rgba(46,16,101,0.12);}
.nx-dark .nx-wl-card{box-shadow:0 24px 60px rgba(0,0,0,0.5);}
.nx-wl-head{margin-bottom:22px;}
.nx-wl-title{font-family:'Sora',sans-serif;font-weight:700;font-size:26px;color:var(--ink);margin:8px 0 8px;letter-spacing:-.5px;}
.nx-wl-sub{font-size:14.5px;color:var(--body);margin:0;}
.nx-form{display:flex;flex-direction:column;gap:15px;}
.nx-field{display:flex;flex-direction:column;gap:7px;}
.nx-field label{font-size:13px;font-weight:600;color:var(--ink);}
.nx-field input{background:var(--bg-soft);border:1px solid var(--line);border-radius:11px;padding:13px 15px;font-size:15px;color:var(--ink);
  font-family:'Inter',sans-serif;transition:border-color .15s ease,box-shadow .15s ease;}
.nx-field input::placeholder{color:var(--muted);}
.nx-field input:focus{outline:none;border-color:var(--violet);box-shadow:0 0 0 3px rgba(124,58,237,0.16);}
.nx-role{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.nx-role-opt{padding:13px;border-radius:11px;border:1px solid var(--line);background:var(--bg-soft);color:var(--body);font-size:15px;font-weight:600;
  font-family:'Sora',sans-serif;cursor:pointer;transition:all .15s ease;}
.nx-role-opt:hover{border-color:var(--violet);color:var(--violet);}
.nx-role-on{background:var(--bg-tint);border-color:var(--violet);color:var(--violet);}
.nx-dark .nx-role-on{color:#fff;}
.nx-error{background:rgba(255,90,90,0.1);border:1px solid rgba(255,120,120,0.4);color:#E0484D;font-size:14px;padding:11px 14px;border-radius:10px;}
.nx-dark .nx-error{color:#FFB4B4;}
.nx-form-note{font-size:12.5px;color:var(--muted);text-align:center;margin:2px 0 0;}
.nx-success{text-align:center;padding:18px 0;}
.nx-success-mark{width:58px;height:58px;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;background:var(--violet);border-radius:50%;}
.nx-success h3{font-family:'Sora',sans-serif;font-size:24px;color:var(--ink);margin:0 0 10px;}
.nx-success p{color:var(--body);font-size:15px;max-width:380px;margin:0 auto 22px;}

.nx-signups{margin-top:18px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:20px 22px;}
.nx-signups-head{font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;color:var(--violet-d);letter-spacing:1px;text-transform:uppercase;margin-bottom:13px;}
.nx-dark .nx-signups-head{color:var(--violet-2);}
.nx-signups ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;}
.nx-signups li{display:flex;gap:12px;align-items:center;flex-wrap:wrap;background:var(--bg-soft);border:1px solid var(--line);border-radius:10px;padding:10px 14px;font-size:13.5px;}
.nx-su-name{font-weight:600;color:var(--ink);}
.nx-su-email{color:var(--body);}
.nx-su-role{margin-left:auto;font-family:'Sora',sans-serif;font-size:12px;font-weight:600;color:var(--violet-d);border:1px solid var(--line);border-radius:999px;padding:3px 11px;}
.nx-dark .nx-su-role{color:var(--violet-2);}
.nx-signups-note{font-size:12px;color:var(--muted);margin:13px 0 0;}

/* ===== sections ===== */
.nx-section{max-width:1140px;margin:0 auto;padding:clamp(48px,8vw,92px) clamp(18px,5vw,40px);}
.nx-section-head{text-align:center;max-width:660px;margin:0 auto clamp(36px,5vw,56px);}
.nx-kicker{display:inline-block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:1.6px;text-transform:uppercase;color:var(--violet-d);margin-bottom:12px;}
.nx-dark .nx-kicker{color:var(--violet-2);}
.nx-h2{font-family:'Sora',sans-serif;font-weight:700;font-size:clamp(26px,4vw,40px);line-height:1.12;letter-spacing:-0.8px;color:var(--ink);margin:0 0 14px;}
.nx-sub{font-size:clamp(15px,1.7vw,17px);color:var(--body);margin:0;}

/* band */
.nx-band{max-width:none;background:var(--bg-soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
.nx-band > *{max-width:1140px;margin-left:auto;margin-right:auto;}

/* features */
.nx-feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.nx-feat{border:1px solid var(--line);border-radius:16px;padding:26px;background:var(--card);transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease;}
.nx-feat:hover{transform:translateY(-4px);border-color:var(--violet);box-shadow:0 14px 30px rgba(46,16,101,0.08);}
.nx-feat-mark{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:var(--bg-tint);margin-bottom:16px;}
.nx-feat h3{font-family:'Sora',sans-serif;font-size:17px;color:var(--ink);margin:0 0 9px;font-weight:600;}
.nx-feat p{font-size:14.5px;color:var(--body);margin:0;}

/* steps */
.nx-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.nx-step{border:1px solid var(--line);border-radius:16px;padding:26px 22px;background:var(--card);transition:transform .22s ease,border-color .22s ease;}
.nx-step:hover{transform:translateY(-4px);border-color:var(--violet);}
.nx-step-k{font-family:'Sora',sans-serif;font-weight:700;font-size:14px;color:var(--violet);width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:11px;background:var(--bg-tint);margin-bottom:16px;}
.nx-dark .nx-step-k{color:var(--violet-2);}
.nx-step h3{font-family:'Sora',sans-serif;font-size:17px;color:var(--ink);margin:0 0 8px;font-weight:600;}
.nx-step p{font-size:14px;color:var(--body);margin:0;}

/* verified */
.nx-verified-wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,64px);align-items:start;border:1px solid var(--line);border-radius:24px;padding:clamp(30px,5vw,52px);background:var(--card);}
.nx-light .nx-verified-wrap{background:linear-gradient(155deg,#F7F4FF,#FFFFFF);}
.nx-verified-left .nx-h2,.nx-verified-left .nx-sub{text-align:left;}
.nx-verified-left .nx-sub{margin-bottom:24px;}
.nx-stages{display:flex;flex-direction:column;}
.nx-stage{display:flex;gap:16px;}
.nx-stage-line{display:flex;flex-direction:column;align-items:center;}
.nx-stage-num{flex:none;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif;font-weight:700;font-size:13px;color:#fff;background:var(--violet);}
.nx-stage-rail{width:2px;flex:1;background:var(--line);margin:6px 0;min-height:24px;}
.nx-stage-body{padding-bottom:24px;}
.nx-stage-body h3{font-family:'Sora',sans-serif;font-size:16px;color:var(--ink);margin:4px 0 5px;font-weight:600;}
.nx-stage-body p{font-size:14px;color:var(--body);margin:0;}

/* verified badge */
.nx-vbadge{display:inline-flex;align-items:center;gap:6px;font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;color:#fff;background:var(--violet);border-radius:999px;padding:7px 15px;}
.nx-vbadge-ico{display:flex;align-items:center;justify-content:center;width:16px;height:16px;background:rgba(255,255,255,0.25);border-radius:50%;}

/* faq */
.nx-faq{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:12px;}
.nx-faq-item{border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden;transition:border-color .2s ease,box-shadow .2s ease;}
.nx-faq-open{border-color:var(--violet);box-shadow:0 10px 26px rgba(46,16,101,0.06);}
.nx-faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;background:none;border:0;cursor:pointer;text-align:left;padding:19px 22px;color:var(--ink);font-family:'Sora',sans-serif;font-size:16px;font-weight:600;}
.nx-faq-ico{font-size:22px;color:var(--violet);flex:none;line-height:1;width:22px;text-align:center;}
.nx-dark .nx-faq-ico{color:var(--violet-2);}
.nx-faq-a{overflow:hidden;transition:max-height .3s ease;}
.nx-faq-a p{padding:0 22px 19px;margin:0;color:var(--body);font-size:15px;}

/* final cta */
.nx-cta-section{padding-top:0;}
.nx-cta-card{border-radius:26px;padding:clamp(40px,6vw,64px) clamp(24px,4vw,48px);text-align:center;background:linear-gradient(150deg,#2E1065,#160733);box-shadow:0 30px 70px rgba(46,16,101,0.3);}
.nx-cta-title{font-family:'Sora',sans-serif;font-weight:700;font-size:clamp(24px,3.4vw,36px);color:#fff;margin:0 0 12px;letter-spacing:-.6px;}
.nx-cta-sub{font-size:16px;color:#C9BEEC;margin:0 0 26px;}
.nx-cta-btn{background:#fff;color:#2E1065;}
.nx-cta-btn:hover{background:#fff;color:#2E1065;transform:translateY(-1px);box-shadow:0 12px 28px rgba(0,0,0,0.28);}

/* footer */
.nx-footer{background:#0A0A0A;color:#C9BEEC;padding:clamp(40px,6vw,64px) clamp(18px,5vw,56px) 26px;position:relative;z-index:1;}
.nx-footer-top{max-width:1140px;margin:0 auto;display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:40px;padding-bottom:38px;border-bottom:1px solid rgba(255,255,255,0.1);}
.nx-footer .nx-logo-word{color:#fff;}
.nx-footer-tag{font-family:'Sora',sans-serif;font-size:12px;letter-spacing:2px;color:var(--violet-2);text-transform:uppercase;margin:15px 0 8px;}
.nx-footer-sm{font-size:13px;color:#8E85A8;margin:4px 0 0;}
.nx-foot-h{display:block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;margin-bottom:14px;}
.nx-footer-contact{display:flex;flex-direction:column;}
.nx-footer-email{font-family:'Sora',sans-serif;font-size:18px;color:#fff;font-weight:600;transition:color .15s ease;}
.nx-footer-email:hover{color:var(--violet-2);}
.nx-footer-nav{display:flex;flex-direction:column;gap:11px;}
.nx-footer-nav a{font-size:14.5px;color:#C9BEEC;transition:color .15s ease;}
.nx-footer-nav a:hover{color:#fff;}
.nx-footer-bottom{max-width:1140px;margin:0 auto;padding-top:22px;display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:13px;color:#8E85A8;}
.nx-footer-bottom a:hover{color:#fff;}

/* reveal */
.nx-reveal{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease;}
.nx-reveal.nx-in{opacity:1;transform:none;}

/* responsive */
@media (max-width:980px){
  .nx-hero-grid{grid-template-columns:1fr;gap:36px;}
  .nx-feat-grid{grid-template-columns:repeat(2,1fr);}
  .nx-steps{grid-template-columns:repeat(2,1fr);}
  .nx-verified-wrap{grid-template-columns:1fr;}
  .nx-footer-top{grid-template-columns:1fr 1fr;}
}
@media (max-width:640px){
  .nx-nav-links,.nx-nav-right{display:none;}
  .nx-nav-mobile{display:flex;}
  .nx-feat-grid,.nx-steps{grid-template-columns:1fr;}
  .nx-footer-top{grid-template-columns:1fr;gap:28px;}
}
`;