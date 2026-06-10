import { useState } from "react";
import { Eyebrow } from "../primitives.jsx";
import { Icon } from "../Icon.jsx";
import { PROFILE, CONTACT_LINKS } from "../../data/content.js";

const FIELD =
  "w-full bg-transparent border-0 border-b border-ink/20 dark:border-chalk/20 py-3 px-0 text-[15px] text-ink dark:text-chalk placeholder:text-ink-mute dark:placeholder:text-chalk-mute focus:outline-none focus:border-accent transition-colors";
const LABEL =
  "font-mono text-[10.5px] uppercase tracking-wider text-ink-mute dark:text-chalk-mute mb-1.5 flex justify-between items-center";

function emptyForm() {
  return {
    name: "",
    email: "",
    message: "",
  };
}

function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Name, email and a short message are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("That doesn't look like a valid email.");
      return;
    }
    setError("");
    // TODO: Integrate backend to manage email flow.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-ink/15 dark:border-chalk/15 rounded-lg p-8 bg-paper-soft dark:bg-night-soft">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-8 w-8 grid place-items-center rounded-full bg-accent text-white">
            <Icon.Check className="h-4 w-4" />
          </span>
          <span className="font-mono text-caps uppercase text-ink-mute dark:text-chalk-mute">
            Sent
          </span>
        </div>
        <h3 className="font-display text-[24px] -tracking-[0.015em] mb-2">
          Thanks, {form.name.split(" ")[0]} — message received.
        </h3>
        <p className="text-[15px] text-ink-soft dark:text-chalk-soft max-w-[44ch]">
          I usually reply within 48 hours from{" "}
          <span className="text-ink dark:text-chalk">{form.email}</span>. In the
          meantime, feel free to peek at the work above.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm(emptyForm());
          }}
          className="mt-6 font-mono text-[12px] uppercase tracking-wider text-accent hover:underline"
        >
          ← Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid gap-7 border border-ink/15 dark:border-chalk/15 rounded-lg p-7 md:p-8 bg-paper-soft/40 dark:bg-night-soft/40"
    >
      <div className="grid md:grid-cols-2 gap-7">
        <label className="block">
          <div className={LABEL}>
            <span>Name</span>
            <span>01</span>
          </div>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={FIELD}
          />
        </label>
        <label className="block">
          <div className={LABEL}>
            <span>Email</span>
            <span>02</span>
          </div>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@somewhere.com"
            className={FIELD}
          />
        </label>
      </div>

      <label className="block">
        <div className={LABEL}>
          <span>Message</span>
          <span>03</span>
        </div>
        <textarea
          rows="4"
          value={form.message}
          onChange={set("message")}
          placeholder="A line or two about the project, timeline, what you're hoping for…"
          className={`${FIELD} resize-none`}
        />
      </label>

      {error && (
        <div className="font-mono text-[12px] text-accent border border-accent/30 bg-accent/5 rounded px-3 py-2">
          {error}
        </div>
      )}

      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 pt-2">
        <span className="font-mono text-[11px] text-ink-mute dark:text-chalk-mute">
          Or email directly · {PROFILE.email}
        </span>
        <button
          type="submit"
          className="cta-btn inline-flex items-center justify-center gap-3 py-3.5 px-5 rounded-full bg-ink text-paper dark:bg-chalk dark:text-night font-display font-medium text-[14.5px] cursor-pointer"
        >
          Send message
          <Icon.Arrow className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 pb-28 border-t border-ink/10 dark:border-chalk/10"
    >
      <Eyebrow>06 / Contact</Eyebrow>
      <h2 className="font-display font-medium text-[clamp(40px,5.6vw,72px)] -tracking-[0.03em] leading-[1.02] mt-5 mb-6 text-balance">
        Got something{" "}
        <em className="accent-italic font-serif italic font-normal text-accent">
          worth building?
        </em>
        <br /> Let's talk.
      </h2>
      <p className="text-[17px] text-ink-soft dark:text-chalk-soft max-w-[50ch] mb-10">
        Open to ideas, collaborations, and interesting things on the web—say
        hello.
      </p>

      <ContactForm />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-14 bg-ink/15 dark:bg-chalk/15 border border-ink/15 dark:border-chalk/15">
        {CONTACT_LINKS.map(([k, v, href]) => (
          <a
            key={k}
            target="_blank"
            href={href}
            className="bg-paper dark:bg-night p-5 flex flex-col gap-1.5 hover:bg-paper-soft dark:hover:bg-night-soft hover:text-accent transition-colors"
          >
            <span className="font-mono text-micro uppercase text-ink-mute dark:text-chalk-mute">
              {k}
            </span>
            <span className="font-display text-[15px]">{v}</span>
          </a>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-ink/10 dark:border-chalk/10 flex justify-between items-center font-mono text-[11.5px] text-ink-mute dark:text-chalk-mute tracking-wide">
        <span>
          Built on AI-assisted foundations, refined and expanded through custom
          development. · 2026
        </span>
        <span className="hidden sm:inline">Last updated · June 2026</span>
      </div>
    </section>
  );
}
