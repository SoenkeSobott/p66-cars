import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Tell us about the car",
    description: "Share the listing link, location, and when you want to visit. Takes 2 minutes.",
  },
  {
    number: "02",
    title: "A mechanic accepts your request",
    description: "A verified local mechanic reviews your request and confirms availability.",
  },
  {
    number: "03",
    title: "Visit together, buy with confidence",
    description: "Your mechanic joins you at the viewing, inspects the car, and tells you the truth.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Avoid costly mistakes",
    description: "Hidden rust, engine issues, flood damage — a trained eye catches what you miss.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
      </svg>
    ),
    title: "Real expertise, no sales pitch",
    description: "Your mechanic works for you — not the seller. Honest assessment, every time.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
      </svg>
    ),
    title: "Direct WhatsApp contact",
    description: "Once matched, coordinate directly with your mechanic. No middleman, no app.",
  },
];

export default function BuyersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <nav className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          p66.cars
        </Link>
        <Link
          href="/mechanics"
          className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
        >
          Are you a mechanic? →
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-slate-900 px-6 py-24 flex flex-col items-center text-center gap-6">
        <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
          For car buyers
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-white max-w-2xl leading-tight">
          Don&apos;t buy a car without a mechanic
        </h1>
        <p className="text-slate-400 text-lg max-w-lg">
          Private sellers hide problems. Dealerships use pressure tactics. Bring a mechanic who has nothing to gain except your trust.
        </p>
        <Link
          href="#how-it-works"
          className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          See how it works
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </Link>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">How it works</h2>
        <div className="flex flex-col gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <span className="text-3xl font-bold text-slate-200 tabular-nums shrink-0 w-10">{step.number}</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-100 mx-6" />

      {/* Benefits */}
      <section className="px-6 py-20 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Why it matters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{b.title}</h3>
              <p className="text-slate-500 text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Ready to find a mechanic?</h2>
        <p className="text-slate-500 max-w-sm">
          Post your request. A mechanic in your area will accept and reach out via WhatsApp.
        </p>
        <button
          className="mt-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          disabled
        >
          Request a mechanic — coming soon
        </button>
      </section>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-slate-100">
        &copy; {new Date().getFullYear()} p66.cars
      </footer>
    </main>
  );
}
