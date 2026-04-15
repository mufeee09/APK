import './App.css'

function App() {
  const screenshots = [
    { src: '/Image1.png', alt: 'App screenshot 1' },
    { src: '/image7.png', alt: 'App screenshot 2' },
    { src: '/Image3.png', alt: 'App screenshot 3' },
    { src: '/Image4.png', alt: 'App screenshot 4' },
    { src: '/Image5.png', alt: 'App screenshot 5' },
    { src: '/Image6.png', alt: 'App screenshot 6' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="flex flex-col gap-8 pb-10 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-start gap-5">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 shadow-[0_18px_45px_rgba(15,23,42,0.9)] sm:h-28 sm:w-28">
              <img
                src="/app_icon.png"
                alt="Sirat An-Nur app icon"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-emerald-400/30 ring-1 ring-emerald-500/15" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-200">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  New · v1.1.7 APK
                </p>
                <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                  Sirat An-Nur
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/80">
                  By
                  <span className="font-semibold text-slate-50">
                    Team
                  </span>
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Lifestyle · Spiritual Companion
                </span>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Your focused daily companion for Qur&apos;an, adhkar, duas, and
                reminders — designed to help you stay connected to your Deen
                with clarity and calm.
              </p>
            </div>
          </div>

          {/* Install card */}
          <div className="mt-4 w-full max-w-md rounded-3xl border border-slate-700/70 bg-slate-900/80 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.85)] backdrop-blur lg:mt-0">
            <div className="flex items-center justify-between gap-4 pb-3">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Android APK
                </p>
                <p className="text-sm font-medium text-slate-50">
                  Direct & secure download
                </p>
              </div>
              <div className="flex flex-col items-end text-xs text-slate-400">
                <span className="text-slate-300">Size · 68 MB</span>
                <span>Min. Android 8.0+</span>
              </div>
            </div>

            <a
              href="https://github.com/mufeee09/APK/releases/download/v1.1.7/Sirat-An-Nur.apk"
              className="group block"
            >
              <button className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-emerald-950 shadow-[0_18px_45px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-base">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-300/20 via-transparent to-emerald-500/25 opacity-0 transition group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-950/20 text-xs">
                    ↓
                  </span>
                  Install APK
                </span>
              </button>
            </a>

            {/* <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
              By installing you agree to trust this APK outside of the Play
              Store. Always verify the download source and keep your device
              updated.
            </p> */}
          </div>
        </header>

        {/* Content grid */}
        <main className="flex flex-1 flex-col gap-10 pb-10 lg:flex-row lg:gap-8">
          {/* Left: screenshots */}
          <section className="w-full lg:w-7/12">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-slate-100 sm:text-base">
                  In-app experience
                </h2>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Swipe through the interface before you install.
                </p>
              </div>
              <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                {screenshots.length} screenshots
              </span>
            </div>

            <div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.9)]">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-16 rounded-b-full bg-gradient-to-b from-slate-950 to-transparent opacity-80" />
              <div className="flex gap-3 overflow-x-auto pb-3 pt-1 [scrollbar-width:none] [-ms-overflow-style:none]">
                <div className="flex gap-3">
                  {screenshots.map((shot) => (
                    <figure
                      key={shot.src}
                      className="relative h-[420px] w-[230px] shrink-0 overflow-hidden rounded-[1.6rem] border border-slate-800/80 bg-slate-900/50 shadow-[0_18px_45px_rgba(15,23,42,0.9)] sm:h-[460px] sm:w-[240px]"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-slate-50/5" />
                    </figure>
                  ))}
                </div>
              </div>
              <style>
                {`
                  .no-scrollbar::-webkit-scrollbar { display: none; }
                `}
              </style>
            </div>
          </section>

          {/* Right: features / about */}
          <section className="w-full space-y-6 lg:w-5/12">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-[0_14px_35px_rgba(15,23,42,0.85)]">
              <h2 className="text-base font-semibold tracking-wide text-slate-100 sm:text-lg">
                Built around your daily worship
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Sirat An-Nur brings together essential tools for a focused
                Islamic lifestyle — all in one beautifully simple experience.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2">
                <li className="flex items-start gap-2 rounded-2xl bg-slate-900/70 p-3 ring-1 ring-slate-800/80">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">Daily adhkar & duas</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Curated morning, evening, and situational remembrance to
                      keep your heart engaged.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2 rounded-2xl bg-slate-900/70 p-3 ring-1 ring-slate-800/80">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">Interactive questions</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Strengthen your understanding with simple, clear Islamic
                      Q&amp;A and quizzes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2 rounded-2xl bg-slate-900/70 p-3 ring-1 ring-slate-800/80">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">Prayer-focused reminders</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Gentle prompts so you never lose track of what matters
                      most.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2 rounded-2xl bg-slate-900/70 p-3 ring-1 ring-slate-800/80">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">Designed for calm focus</p>
                    <p className="mt-1 text-xs text-slate-400">
                      A quiet, distraction-free interface with deep contrast and
                      easy readability.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-5 text-sm leading-relaxed text-slate-300">
              <h2 className="text-sm font-semibold tracking-wide text-slate-100 sm:text-base">
                About this app
              </h2>
              <p className="mt-2">
                Sirat An-Nur is crafted as a gentle companion on your journey
                towards Allah. Whether you&apos;re at home, commuting, or taking
                a quiet moment between tasks, the app helps you reconnect with
                remembrance, knowledge, and reflection.
              </p>
              <p className="mt-2">
                Install the APK directly, explore the interface through the
                screenshots, and make Sirat An-Nur part of your daily routine.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-slate-800/80 pt-4 text-[11px] text-slate-500 sm:text-xs">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Sirat An-Nur · Team </p>
            <p className="text-slate-600">
              This is a standalone APK landing page and not affiliated with
              Google Play.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
