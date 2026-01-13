"use client";

import { FormEvent, useMemo, useState } from "react";

type Channel = "voice" | "chat" | "automations";

type AgentConfig = {
  name: string;
  industry: string;
  personality: string;
  temperature: number;
  voiceProfile: string;
  primaryLanguage: string;
  fallbackChannel: Channel;
  welcomeMessage: string;
};

const voiceProfiles = [
  { id: "stella", label: "Stella • Warm & Vertrauenswürdig" },
  { id: "neon", label: "Neon • Futuristisch & Klar" },
  { id: "milo", label: "Milo • Freundlich & Dynamisch" },
  { id: "yara", label: "Yara • Professionell & Beruhigend" },
];

const industries = [
  "Finanzdienstleistungen",
  "E-Commerce",
  "Gesundheit",
  "Reisen & Hospitality",
  "IT & SaaS",
  "Bildung",
];

const languages = ["Deutsch", "Englisch", "Französisch", "Spanisch", "Italienisch"];

const features = [
  {
    title: "Voice Studio",
    description:
      "Erstelle Stimmen mit Emotionskontrolle, Pitch und Geschwindigkeit. Feinabstimmung live hörbar im Audio-Preview.",
    highlight: "Echtzeit-Vorschau",
  },
  {
    title: "Dialogue Canvas",
    description:
      "Multi-Channel Konversationen modellieren, Übergänge definieren und komplexe Automationen visualisieren.",
    highlight: "No-Code Flow Builder",
  },
  {
    title: "Knowledge Sync",
    description:
      "Dokumente, CMS und Datenbanken synchronisieren. Automatisches RAG mit quellgenauen Antworten.",
    highlight: "RAG Out-of-the-box",
  },
];

const integrations = [
  "HubSpot",
  "Salesforce",
  "Zendesk",
  "Slack",
  "Aircall",
  "Dynamics 365",
  "Twilio",
];

export default function Home() {
  const [channel, setChannel] = useState<Channel>("voice");
  const [config, setConfig] = useState<AgentConfig>({
    name: "Aurora Concierge",
    industry: "Reisen & Hospitality",
    personality: "Empathisch, lösungsorientiert und immer einen Schritt voraus.",
    temperature: 0.35,
    voiceProfile: "stella",
    primaryLanguage: "Deutsch",
    fallbackChannel: "chat",
    welcomeMessage:
      "Willkommen bei Aurora! Ich unterstütze dich sofort bei deiner Reiseplanung – sag mir einfach, was du brauchst.",
  });

  const voicePreviewText = useMemo(() => {
    if (channel !== "voice") {
      return "Aktiviere Voice, um ein Audio-Preview zu generieren.";
    }

    return `${config.name} begrüßt deine Kund:innen mit ${config.welcomeMessage}`;
  }, [channel, config.name, config.welcomeMessage]);

  const handleConfigChange = <K extends keyof AgentConfig>(
    key: K,
    value: AgentConfig[K],
  ) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const summary = [
      `Agent: ${config.name}`,
      `Branche: ${config.industry}`,
      `Kanal: ${channel === "voice" ? "Voice + Chat" : "Pure Chat"}`,
      `Sprache: ${config.primaryLanguage}`,
    ].join(" • ");

    alert(`Agent Blueprint gespeichert!\n${summary}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#38bdf833,_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <header className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-col gap-4 max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm font-medium text-sky-200">
                  Agent Control Center
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300" />
                </span>
                <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Erstelle KI-Agenten für Voice und Non-Voice in einem einzigen Studio.
                </h1>
                <p className="text-pretty text-lg text-slate-300 sm:text-xl">
                  Konfiguriere Persona, Stimme, Skills und Kanäle. Teste Dialoge live, bevor du sie per Klick in
                  Telefonie, Chat oder Automationen ausrollst.
                </p>
              </div>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3 text-sky-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold">
                    24/7
                  </div>
                  <span>Production Ready</span>
                </div>
                <dl className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <dt>Voice Hand-off</dt>
                    <dd className="font-semibold text-white">unter 1 Sek.</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>Conversation Score</dt>
                    <dd className="font-semibold text-white">92/100</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>Kanäle aktiv</dt>
                    <dd className="font-semibold text-white">Telefon · Chat · Slack</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur lg:grid-cols-[1.25fr_1fr]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-white">Blueprint-Konfigurator</h2>
                  <div className="rounded-full border border-white/10 bg-white/10 text-xs text-slate-200">
                    <nav className="flex overflow-hidden rounded-full">
                      {[
                        { id: "voice", label: "Voice + Chat" },
                        { id: "chat", label: "Nur Chat" },
                        { id: "automations", label: "Automationen" },
                      ].map(({ id, label }) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setChannel(id as Channel)}
                          className={`px-4 py-2 transition ${
                            channel === id
                              ? "bg-sky-400 text-slate-950"
                              : "text-slate-100/70 hover:text-white"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
                <form className="grid gap-6 text-sm" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-200">Agentenname</span>
                      <input
                        value={config.name}
                        onChange={(event) => handleConfigChange("name", event.target.value)}
                        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none ring-2 ring-transparent transition focus:border-sky-400/70 focus:ring-sky-500/30"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-200">Branche</span>
                      <select
                        value={config.industry}
                        onChange={(event) => handleConfigChange("industry", event.target.value)}
                        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none ring-2 ring-transparent transition focus:border-sky-400/70 focus:ring-sky-500/30"
                      >
                        {industries.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-slate-200">Persona & Tonalität</span>
                    <textarea
                      value={config.personality}
                      onChange={(event) => handleConfigChange("personality", event.target.value)}
                      rows={3}
                      className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none ring-2 ring-transparent transition focus:border-sky-400/70 focus:ring-sky-500/30"
                    />
                  </label>

                  {channel === "voice" && (
                    <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                      <label className="flex flex-col gap-2">
                        <span className="text-slate-200">Voice-Profil</span>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {voiceProfiles.map((profile) => (
                            <label
                              key={profile.id}
                              className={`flex cursor-pointer flex-col gap-1 rounded-xl border p-4 transition ${
                                config.voiceProfile === profile.id
                                  ? "border-sky-400 bg-sky-400/10"
                                  : "border-white/10 bg-slate-900/60 hover:border-slate-300/40"
                              }`}
                            >
                              <input
                                type="radio"
                                name="voiceProfile"
                                value={profile.id}
                                checked={config.voiceProfile === profile.id}
                                onChange={(event) =>
                                  handleConfigChange("voiceProfile", event.target.value)
                                }
                                className="hidden"
                              />
                              <span className="text-sm text-slate-200">{profile.label}</span>
                              <span className="text-xs text-slate-400">Studio Qualité</span>
                            </label>
                          ))}
                        </div>
                      </label>

                      <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-900/60 p-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-300">Kreativität</span>
                          <span className="font-semibold text-sky-200">
                            {Math.round(config.temperature * 100)}%
                          </span>
                        </div>
                        <input
                          type="range"
                          value={config.temperature}
                          min={0}
                          max={1}
                          step={0.05}
                          onChange={(event) =>
                            handleConfigChange("temperature", Number(event.target.value))
                          }
                          className="accent-sky-400"
                        />
                        <p className="text-xs text-slate-400">
                          Balance zwischen präzisen Antworten und kreativer Freiheit.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-200">Primäre Sprache</span>
                      <select
                        value={config.primaryLanguage}
                        onChange={(event) => handleConfigChange("primaryLanguage", event.target.value)}
                        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none ring-2 ring-transparent transition focus:border-sky-400/70 focus:ring-sky-500/30"
                      >
                        {languages.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-200">Fallback-Kanal</span>
                      <select
                        value={config.fallbackChannel}
                        onChange={(event) =>
                          handleConfigChange("fallbackChannel", event.target.value as Channel)
                        }
                        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none ring-2 ring-transparent transition focus:border-sky-400/70 focus:ring-sky-500/30"
                      >
                        <option value="chat">Live Chat</option>
                        <option value="voice">Voice Call</option>
                        <option value="automations">Workflow</option>
                      </select>
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-slate-200">Welcome Message</span>
                    <textarea
                      value={config.welcomeMessage}
                      onChange={(event) => handleConfigChange("welcomeMessage", event.target.value)}
                      rows={3}
                      className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none ring-2 ring-transparent transition focus:border-sky-400/70 focus:ring-sky-500/30"
                    />
                  </label>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4 text-sky-200"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.625 4.5v15m6.75-15v15M3.75 9.75h16.5m-16.5 6.75h16.5"
                        />
                      </svg>
                      Live Sandbox wird automatisch nach Änderungen aktualisiert
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300"
                    >
                      Agent Blueprint speichern
                    </button>
                  </div>
                </form>
              </div>

              <aside className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-inner">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">Live Preview</h3>
                  <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs text-sky-200">
                    {channel === "voice" ? "Spatial Voice" : channel === "chat" ? "Rich Chat" : "Automation"}
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">Agent</p>
                      <p className="text-lg font-semibold text-white">{config.name}</p>
                    </div>
                    <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">
                      {config.industry}
                    </div>
                  </div>
                  <p className="mt-4 text-pretty text-slate-300">{config.personality}</p>
                  <dl className="mt-6 space-y-2 text-xs text-slate-400">
                    <div className="flex items-center justify-between">
                      <dt>Primäre Sprache</dt>
                      <dd className="text-slate-100">{config.primaryLanguage}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt>Fallback</dt>
                      <dd className="text-slate-100">
                        {config.fallbackChannel === "chat"
                          ? "Live Chat"
                          : config.fallbackChannel === "voice"
                          ? "Voice Call"
                          : "Workflow Automation"}
                      </dd>
                    </div>
                    {channel === "voice" && (
                      <>
                        <div className="flex items-center justify-between">
                          <dt>Voice-Profil</dt>
                          <dd className="text-slate-100 uppercase">{config.voiceProfile}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt>Temperatur</dt>
                          <dd className="text-slate-100">{config.temperature.toFixed(2)}</dd>
                        </div>
                      </>
                    )}
                  </dl>
                </div>

                <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-4 text-xs text-sky-100">
                  <p className="font-semibold text-sky-200">Sandbox Output</p>
                  <p className="mt-2 text-pretty">{voicePreviewText}</p>
                </div>

                <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-semibold text-white">Automatische Quality Checks</p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                        ✓
                      </span>
                      DSGVO Check bestanden
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                        ✓
                      </span>
                      Tone of Voice konsistent
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-amber-200">
                        •
                      </span>
                      Hand-off Workflow empfohlen
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:border-sky-400/60 hover:bg-sky-400/10"
              >
                <div className="flex items-center gap-3 text-sky-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-400/20 text-lg font-semibold">
                    ✦
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-sky-100/70">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur lg:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-white">
                Kanäle verbinden und Dialoge sofort live schalten
              </h2>
              <p className="text-sm text-slate-300">
                Nutze unsere vorgebauten Integrationen oder aktiviere Webhooks und GraphQL um deine eigenen Systeme
                anzubinden. Jeder Agent bringt Monitoring, Observability und A/B Tests out-of-the-box mit.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {integrations.map((integration) => (
                  <div
                    key={integration}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white"
                  >
                    {integration}
                    <span className="text-xs text-slate-400">verbunden</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6">
              <h3 className="text-lg font-semibold text-white">Go-Live Checkliste</h3>
              <ol className="space-y-3 text-sm text-slate-100">
                <li>1. Voice / Chat Persona testen</li>
                <li>2. Knowledge Sources synchronisieren</li>
                <li>3. Übergabe an Human Agent definieren</li>
                <li>4. Monitoring Alerts konfigurieren</li>
                <li>5. Deployment auf gewünschtem Kanal ausrollen</li>
              </ol>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                Jetzt ausrollen
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </section>

          <footer className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-white">Bereit für deinen ersten Agenten?</p>
              <p>Starte kostenlos, lade dein Team ein und skaliere, wenn du live gehst.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white">
                ISO 27001
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white">
                DSGVO-konform
              </span>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950 shadow-lg transition hover:bg-sky-300"
              >
                Kostenlos testen
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
