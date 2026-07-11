export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          🚀 AI + Blockchain Marketplace
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          The Future of
          <span className="block text-blue-500">
            AI Commerce
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Buy, sell and discover products securely using Artificial
          Intelligence and Blockchain technology.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500">
            Explore Marketplace
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">
            Become a Seller
          </button>

        </div>

      </div>
    </section>
  );
}