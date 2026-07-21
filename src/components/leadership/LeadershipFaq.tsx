import { leadershipFaqs } from "@/lib/leadership-data";

export function LeadershipFaq() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          FAQ
        </h2>
        <div className="space-y-4">
          {leadershipFaqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
