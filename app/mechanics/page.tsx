import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description: "Add your name, location, experience, and phone number. Free and takes 3 minutes.",
  },
  {
    number: "02",
    title: "Review incoming requests",
    description: "See car inspection requests near you. Accept ones that fit your schedule.",
  },
  {
    number: "03",
    title: "Meet the buyer, get paid",
    description: "Join the viewing, do what you do best. Payment is agreed directly with the buyer via WhatsApp.",
  },
];

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Earn extra income",
    description: "A typical inspection pays €50–150. Do it on your day off or after work.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: "Fully flexible",
    description: "Accept only what you want. No quotas, no commitments. You set your availability.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Help real people",
    description: "Buyers are often clueless and nervous. Your expertise makes a real difference to their lives.",
  },
];

export default function MechanicsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <nav className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          p66.cars
        </Link>
        <Link
          href="/buyers"
          className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
        >
          Looking to buy? →
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-amber-400 px-6 py-24 flex flex-col items-center text-center gap-6">
        <span className="inline-flex items-center gap-2 bg-amber-900/10 text-amber-900 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
          For mechanics
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">
          Your knowledge is worth money
        </h1>
        <p className="text-amber-900/70 text-lg max-w-lg">
          People buy used cars every day and most of them have no idea what to look for. You do. Help them — and get paid for it.
        </p>
        <Link
          href="#how-it-works"
          className="mt-2 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">What you get</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                {b.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{b.title}</h3>
              <p className="text-slate-500 text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-400 px-6 py-20 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Ready to register?</h2>
        <p className="text-amber-900/70 max-w-sm">
          Add your profile and start receiving inspection requests in your area.
        </p>
        <button
          className="mt-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          disabled
        >
          Register as a mechanic — coming soon
        </button>
      </section>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-slate-100">
        &copy; {new Date().getFullYear()} p66.cars
      </footer>
    </main>
  );
}
