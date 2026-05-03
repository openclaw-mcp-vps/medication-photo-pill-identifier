export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Pill Identification
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Identify Any Pill<br />
          <span className="text-[#58a6ff]">Instantly from a Photo</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Snap a photo of any pill or tablet. PillID uses computer vision to identify your medication, check for dangerous drug interactions, and flag allergy risks — all in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Identifying Pills — $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📸</div>
            <h3 className="font-semibold text-white mb-1">Photo Identification</h3>
            <p className="text-sm text-[#8b949e]">Upload or snap a photo of any pill. Our AI matches shape, color, and imprint to a database of thousands of medications.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="font-semibold text-white mb-1">Interaction Checker</h3>
            <p className="text-sm text-[#8b949e]">Automatically checks identified pills against your medication list for dangerous drug-drug interactions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Dosage Tracking</h3>
            <p className="text-sm text-[#8b949e]">Log identified medications to your personal dashboard and set reminders for your dosage schedule.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-white mb-1">PillID Pro</h3>
          <div className="text-5xl font-extrabold text-[#58a6ff] my-4">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Unlimited pill photo identifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Drug interaction & allergy checking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Personal medication dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Dosage schedule & reminders</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Caregiver sharing (up to 3 profiles)</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Export medication history as PDF</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the pill identification?</h3>
            <p className="text-sm text-[#8b949e]">PillID uses advanced computer vision trained on thousands of FDA-approved medications. Identification accuracy exceeds 95% for common pills with clear imprints. Always confirm with your pharmacist for critical decisions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I use it for a family member or patient I care for?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your subscription includes up to 3 caregiver profiles, so you can manage medications for elderly parents, children, or patients you look after — all from one account.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my health data private and secure?</h3>
            <p className="text-sm text-[#8b949e]">All data is encrypted in transit and at rest. We never sell your health information to third parties. You can delete your account and all associated data at any time from your dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        <p>© {new Date().getFullYear()} PillID. Not a substitute for professional medical advice.</p>
      </footer>
    </main>
  );
}
