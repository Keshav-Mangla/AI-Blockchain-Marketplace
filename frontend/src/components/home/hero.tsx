export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-slate-950 px-6">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">

        {/* Badge */}

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
          🚀 AI + Blockchain Marketplace
        </span>

        {/* Heading */}

        <h1 className="mt-10 text-5xl font-black leading-tight text-white md:text-7xl">

          Build the Future of

          <span className="mt-3 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">

            AI Commerce

          </span>

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-400">

          TrustChain AI is a next-generation decentralized marketplace powered by Artificial Intelligence and Blockchain technology. Buy smarter, sell faster and trade securely.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-500">

            Explore Marketplace

          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">

            Become a Seller

          </button>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              12K+
            </h2>

            <p className="mt-2 text-slate-400">
              Active Users
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              8K+
            </h2>

            <p className="mt-2 text-slate-400">
              Products
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              150+
            </h2>

            <p className="mt-2 text-slate-400">
              Sellers
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              99.9%
            </h2>

            <p className="mt-2 text-slate-400">
              Secure
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}