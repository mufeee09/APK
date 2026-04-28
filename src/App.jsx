import { useRef, useState, useEffect } from 'react'
import './App.css'

function App() {
  const sliderRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const screenshots = [
    { src: '/Image1.webp', alt: 'App screenshot 1' },
    { src: '/image7.webp', alt: 'App screenshot 2' },
    { src: '/Image3.webp', alt: 'App screenshot 3' },
    { src: '/Image4.webp', alt: 'App screenshot 4' },
    { src: '/Image5.webp', alt: 'App screenshot 5' },
    { src: '/Image6.webp', alt: 'App screenshot 6' },
    // { src: '/image8.webp', alt: 'App screenshot 8' },
  ]

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 5)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      checkScroll()
      slider.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        slider.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="flex flex-col gap-10 pb-12 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[2.2rem] border border-slate-700/60 bg-slate-900/70 shadow-[0_20px_50px_rgba(15,23,42,0.9)] sm:h-32 sm:w-32">
              <img
                src="/app_icon.png"
                alt="Sirat An-Nur app icon"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] border border-emerald-400/30 ring-1 ring-emerald-500/15" />
            </div>

            <div className="flex flex-col items-center space-y-4 sm:items-start">
              <div className="space-y-1.5">
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-200">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  NEW · v1.1.10 APK
                </p>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Sirat An-Nur
                </h1>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-100 ring-1 ring-slate-700/80">
                  By Team
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  Lifestyle · Spiritual Companion
                </span>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                Your focused daily companion for Qur&apos;an, dhikr, duas, and
                reminders — designed to help you stay connected to your Deen.
              </p>
            </div>
          </div>

          {/* Install card */}
          <div className="w-full max-w-sm self-center rounded-3xl border border-slate-700/70 bg-slate-900/60 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.9)] backdrop-blur-md lg:w-auto lg:min-w-[320px]">
            <div className="flex items-center justify-between gap-4 pb-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Android APK
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  Direct Download
                </p>
              </div>
              <div className="text-right text-[11px] text-slate-400">
                <p className="font-medium text-slate-200">93 MB</p>
                <p>v1.1.10</p>
              </div>
            </div>

            <a
              href="https://github.com/mufeee09/APK/releases/download/v1.1.10/Sirat-an-Nur.apk"
              className="group block"
            >
              <button className="relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-emerald-500 px-6 py-4 text-base font-bold text-emerald-950 shadow-[0_15px_40px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.5)] active:scale-[0.98]">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-0 transition group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1M7 10l5 5 5-5M12 3v12"
                    />
                  </svg>
                  Install APK
                </span>
              </button>
            </a>
            <p className="mt-4 text-center text-[11px] font-medium text-slate-500 lg:text-left">
              Secure · Min. Android 8.0+
            </p>
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

            <div className="group relative rounded-3xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.9)]">
              {/* Navigation Buttons */}
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="absolute -left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/90 text-slate-300 shadow-xl backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:text-emerald-400 hover:scale-110 active:scale-95 disabled:pointer-events-none disabled:opacity-0 sm:-left-5"
                aria-label="Previous screenshot"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="absolute -right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/90 text-slate-300 shadow-xl backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:text-emerald-400 hover:scale-110 active:scale-95 disabled:pointer-events-none disabled:opacity-0 sm:-right-5"
                aria-label="Next screenshot"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="pointer-events-none absolute inset-x-10 top-0 h-16 rounded-b-full bg-gradient-to-b from-slate-950 to-transparent opacity-80" />
              <div
                ref={sliderRef}
                className="no-scrollbar flex gap-3 overflow-x-auto pb-3 pt-1"
              >
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
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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
                    <p className="font-medium">Daily dhikr & duas</p>
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
