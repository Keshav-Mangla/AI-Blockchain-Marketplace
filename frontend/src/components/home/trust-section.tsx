import {
  ShieldCheck,
  Brain,
  Zap,
  Star,
} from "lucide-react";

export default function TrustSection() {
  const stats = [
    {
      number: "12K+",
      label: "Active Users",
    },
    {
      number: "8K+",
      label: "AI Products",
    },
    {
      number: "150+",
      label: "Verified Sellers",
    },
    {
      number: "99.9%",
      label: "Secure Transactions",
    },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Powered",
    },
    {
      icon: ShieldCheck,
      title: "Blockchain Verified",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
    },
    {
      icon: Star,
      title: "Scam Detection",
    },
  ];

  return (
    <section className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            TRUSTED WORLDWIDE
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            Trusted by AI Professionals
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Thousands of buyers and sellers trust TrustChain AI
            for secure AI commerce powered by Blockchain.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.label}
              </p>

            </div>

          ))}

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-blue-400" />

                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}