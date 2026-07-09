import Logo from "@/components/common/logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Marketplace
          </a>

          <a href="#" className="transition hover:text-white">
            Categories
          </a>

          <a href="#" className="transition hover:text-white">
            AI Features
          </a>

          <a href="#" className="transition hover:text-white">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-slate-700 px-5 py-2 text-sm text-white transition hover:bg-slate-800">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}