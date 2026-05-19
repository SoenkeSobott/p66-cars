import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <nav className="px-6 py-5">
        <span className="text-xl font-semibold tracking-tight text-slate-900">p66.cars</span>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 gap-6">
        <p className="text-sm font-medium tracking-widest uppercase text-slate-400">Who are you?</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center leading-tight max-w-xl">
          The smarter way to buy or inspect a car
        </h1>
        <p className="text-slate-500 text-center max-w-md text-lg">
          Buyers get expert eyes before they sign. Mechanics earn by doing what they already know.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-6">
          <Link
            href="/buyers"
            className="group rounded-2xl bg-slate-900 p-8 flex flex-col gap-4 hover:bg-slate-800 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">I want to buy a car</h2>
              <p className="text-slate-400 text-sm mt-1">Get a mechanic to check it before you commit</p>
            </div>
            <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Find a mechanic
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>

          <Link
            href="/mechanics"
            className="group rounded-2xl bg-amber-400 p-8 flex flex-col gap-4 hover:bg-amber-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-amber-900/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">I&apos;m a mechanic</h2>
              <p className="text-slate-700 text-sm mt-1">Earn money by helping buyers inspect cars</p>
            </div>
            <span className="text-slate-900 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              See how it works
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <footer className="text-center py-6 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} p66.cars
      </footer>
    </main>
  );
}
