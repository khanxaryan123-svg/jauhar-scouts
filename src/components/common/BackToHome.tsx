import Link from "next/link";

export function BackToHome() {
  return (
    <div className="py-4 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-blue-700 transition-colors">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}