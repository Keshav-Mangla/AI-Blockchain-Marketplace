export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
        T
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold text-white">
          TrustChain AI
        </span>

        <span className="text-xs text-slate-400">
          The Future of AI Commerce
        </span>
      </div>
    </div>
  );
}