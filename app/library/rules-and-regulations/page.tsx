"use client";

import PageHero from "@/components/PageHero";
import { 
  BookOpen, 
  Clock, 
  RefreshCw, 
  AlertTriangle, 
  FileText, 
  CreditCard, 
  Calendar, 
  Coins, 
  VolumeX, 
  SmartphoneNfc, 
  Ban, 
  ShieldAlert,
  Scale
} from "lucide-react";

export default function RulesRegulationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Rules & Regulations"
        description="Guidelines, codes of conduct, and structural circulation policies designed to ensure an equitable, quiet, and resourceful academic environment for all."
      />

      {/* Main Core Regulatory Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Section Heading Module */}
          <div className="lg:col-span-12 flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Institutional Framework</span>
              <h2 className="text-3xl font-extrabold text-[#132347] mt-3 tracking-tight flex items-center gap-2">
                <Scale className="w-7 h-7 text-[#146e8a]" /> Library Operational Rules
              </h2>
            </div>
            <p className="text-gray-500 max-w-md text-sm">
              All students and researchers are required to adhere strictly to the following compliance modules while utilizing library infrastructure.
            </p>
          </div>

          {/* Module 1: Book Circulation - Interactive Dynamic Bento-Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-2xl w-fit mb-6 text-[#132347] shadow-sm">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#132347] mb-2 tracking-tight">Book Circulation Policy</h3>
              <p className="text-xs text-gray-400 mb-6">Standard operational borrowing limits allocated per individual account metadata</p>
              
              <div className="space-y-4">
                {/* Rule Item 1 */}
                <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 group transition-all hover:bg-white hover:border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-gray-400 group-hover:text-[#146e8a] transition-colors shadow-xs">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-gray-700">Maximum Issue Limit</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#132347] bg-white px-3 py-1.5 rounded-xl border border-gray-200">
                    2 Books per student
                  </span>
                </div>

                {/* Rule Item 2 */}
                <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 group transition-all hover:bg-white hover:border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-gray-400 group-hover:text-[#146e8a] transition-colors shadow-xs">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-gray-700">Standard Loan Period</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#132347] bg-white px-3 py-1.5 rounded-xl border border-gray-200">
                    7 Days
                  </span>
                </div>

                {/* Rule Item 3 */}
                <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 group transition-all hover:bg-white hover:border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-gray-400 group-hover:text-[#146e8a] transition-colors shadow-xs">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-gray-700">Renewal Framework</span>
                  </div>
                  <span className="text-xs font-bold text-[#146e8a] bg-blue-50/60 px-3 py-1.5 rounded-xl">
                    Subject to Availability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Duplicate Card Request - Compact Bento-Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-gray-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl w-fit mb-6 text-emerald-600 shadow-sm">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#132347] mb-2 tracking-tight">Duplicate Library Card</h3>
              <p className="text-xs text-gray-400 mb-6">Re-issuance procedure protocol following physical card loss</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100/60 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">Processing Timeline</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Cards are successfully re-issued within <span className="font-semibold text-emerald-700">7 working days</span> from official application date.</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Processing Fee</span>
                  </div>
                  <span className="text-lg font-extrabold text-[#132347]">
                    ₹50/-
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-400">
              * Valid administrative receipt required at processing terminal.
            </div>
          </div>

          {/* Module 3: Fine & Replacement Policy - High Impact Amber/Red Accent Layout */}
          <div className="lg:col-span-12 bg-gradient-to-br from-[#132347] via-[#1a3264] to-[#0f1b35] rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
            
            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="p-4 bg-white/10 border border-white/10 rounded-2xl w-fit mb-4 shadow-md">
                  <AlertTriangle className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">Fine Policy & Asset Damage</h3>
                <p className="text-blue-200/70 text-xs mt-1">Monetary compliance guidelines enforced systematically</p>
              </div>

              <div className="md:col-span-8 lg:col-span-9 grid sm:grid-cols-2 gap-4">
                {/* Fine Segment 1 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Overdue Penalty</span>
                  <p className="text-2xl font-black mt-1 mb-2 tracking-tight">₹2.00 <span className="text-xs font-medium text-blue-200">/ per book / per day</span></p>
                  <p className="text-xs text-blue-100/70 leading-relaxed">Applied automatically post the expiration of standard 7-day borrowing timeframe parameters.</p>
                </div>

                {/* Fine Segment 2 */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Lost or Damaged Assets</span>
                    <h4 className="text-sm font-bold mt-1 text-white">Compulsory Replacement</h4>
                  </div>
                  <p className="text-xs text-blue-100/70 leading-relaxed mt-2">
                    Damaged or misplaced resource assets must be entirely replaced or compensated explicitly at <span className="text-white font-semibold underline decoration-amber-400 decoration-2">current market value</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Module 4: Code of Conduct - Clean Grid Architecture Grid Section */}
      <section className="bg-white border-t border-gray-200/60 py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a]">Behavioral Mandate</span>
            <h2 className="text-4xl font-extrabold text-[#132347] mt-1 tracking-tight">
              Code of Conduct
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm mt-2">
              To cultivate an environment optimized for research and writing, visitors must strictly uphold these decorum conditions.
            </p>
            <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Absolute Silence",
                desc: "Maintain strict silence inside the library premises to respect reading and research zones.",
                icon: <VolumeX className="w-5 h-5" />
              },
              {
                title: "Device Protocols",
                desc: "Mobile phones and personal electronic systems must strictly remain inside silent configurations.",
                icon: <SmartphoneNfc className="w-5 h-5" />
              },
              {
                title: "Consumable Prohibitions",
                desc: "Eating, drinking, and chewing gum are strictly prohibited within stack areas and learning halls.",
                icon: <Ban className="w-5 h-5" />
              },
              {
                title: "Decorum & Care",
                desc: "Users must systematically maintain high discipline and absolute proper care of structural library resources.",
                icon: <ShieldAlert className="w-5 h-5" />
              }
            ].map((conduct, i) => (
              <div
                key={i}
                className="bg-gray-50 border-l-4 border-[#146e8a] rounded-r-2xl p-6 hover:bg-white hover:shadow-md hover:border-[#132347] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-2.5 bg-white rounded-xl w-fit text-[#146e8a] border border-gray-100 shadow-xs group-hover:bg-[#146e8a] group-hover:text-white transition-colors mb-4">
                    {conduct.icon}
                  </div>
                  <h4 className="text-base font-bold text-[#132347] tracking-tight mb-2">{conduct.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{conduct.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Warning Module */}
          <div className="mt-12 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-3 max-w-3xl mx-auto">
            <FileText className="w-5 h-5 text-rose-600 shrink-0" />
            <p className="text-xs text-rose-800 leading-relaxed">
              <strong>Compliance Notice:</strong> Failure to align with institutional regulations or any deliberate misuse of intellectual resource assets can result in the structural revocation of borrowing authorizations and subsequent disciplinary actions.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}