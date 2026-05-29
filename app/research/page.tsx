import PageHero from "@/components/PageHero";
import Image from "next/image";
import {
  Award,
  User,
  Coins,
  GraduationCap,
  ShieldCheck,
  BookmarkCheck,
  Calendar,
  Building,
  ArrowUpRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore research initiatives, publications, and upcoming updates from SVKM's College of Pharmacy, Shirpur.",
};

export default function ResearchGrantShowcasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Banner Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Research & Innovation"
        description="Celebrating breakthrough milestones, external funding accolades, and competitive federal grant endowments driving global pharmaceutical research."
      />

      {/* Main Research Editorial Content Container */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Primary Research Article & Metrics (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Milestone Header */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-[#146e8a]" /> Research
                Milestone Achievement
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#132347] tracking-tight leading-tight">
                SVKM’s College of Pharmacy Secures 3rd National E-YUVA
                Fellowship Grant of ₹4 Lakh Under the Guidance of Dr. Krishna
                Swaroop Akey
              </h1>
              <div className="w-16 h-1 bg-amber-500 rounded-full mt-2" />
            </div>

            {/* Quick Context Intro Card */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              In a continuous testament to academic rigor and scientific
              enterprise, the institutional research ecosystem has reached a
              prestigious new paradigm. This competitive grant allocation
              targets translational research models, fostering real-world
              development in therapeutic sciences.
            </p>

            {/* Quantitative Milestone Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Metric 1 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs flex flex-col justify-between group hover:border-[#146e8a]/30 hover:shadow-xs transition-all">
                <div className="p-2.5 bg-blue-50 text-[#132347] rounded-xl w-fit mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider">
                    Fellowship
                  </span>
                  <span className="text-xl font-black text-[#132347] mt-1 block">
                    3rd National
                  </span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs flex flex-col justify-between group hover:border-[#146e8a]/30 hover:shadow-xs transition-all">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-3">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider">
                    Endowment
                  </span>
                  <span className="text-xl font-black text-[#132347] mt-1 block">
                    ₹4,000,000/-
                  </span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs flex flex-col justify-between group hover:border-[#146e8a]/30 hover:shadow-xs transition-all">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl w-fit mb-3">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider">
                    Principal Lead
                  </span>
                  <span className="text-sm font-bold text-[#132347] mt-1.5 block truncate">
                    Dr. K. S. Akey
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Project Core Coordinates */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#132347] tracking-tight border-b border-gray-100 pb-3 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-[#146e8a]" /> Project
                Parameters & Core Framework
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    label: "Mentorship & Guidance",
                    val: "Dr. Krishna Swaroop Akey",
                    icon: <User className="w-4 h-4" />,
                  },
                  {
                    label: "Grant Framework",
                    val: "E-YUVA Fellowship Scheme (Encouraging Youth for Undertaking Innovative Research as Venture Advancement)",
                    icon: <GraduationCap className="w-4 h-4" />,
                  },
                  {
                    label: "Institutional Host",
                    val: "Shree Vile Parle Kelavani Mandal’s College of Pharmacy",
                    icon: <Building className="w-4 h-4" />,
                  },
                  {
                    label: "Compliance Directives",
                    val: "Approved under National Development Innovation Parameters",
                    icon: <ShieldCheck className="w-4 h-4" />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-3 bg-gray-50/50 border border-gray-100 rounded-xl"
                  >
                    <div className="p-2 bg-white border border-gray-100 rounded-lg text-gray-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <p className="text-sm font-bold text-gray-800 mt-0.5 leading-snug">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Media Showcase & Flyer Block (5 Columns) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Visual Media Header Indicator */}
            {/* <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h4 className="text-sm font-extrabold text-[#132347] tracking-tight uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#146e8a]" /> Congratulations
              </h4>
            </div> */}

            {/* Interactive Image Frame */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 shadow-sm group hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-inner">
                <Image
                  src="/images/E-Yuva.jpeg"
                  alt="SVKM National E-YUVA Fellowship Grant Announcement Flyer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2 group-hover:scale-[1.01] transition-transform duration-500"
                  priority
                />

                <a
                  href="/images/E-Yuva.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                />
              </div>
            </div>

            {/* Quick Action System Navigation Link */}
            <div className="p-4 bg-gradient-to-r from-[#132347] to-[#1a3264] rounded-2xl text-white flex items-center justify-between shadow-xs group/action cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 border border-white/5 rounded-xl text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold tracking-tight">
                    Institutional Research Board
                  </h5>
                  <p className="text-[10px] text-blue-200/70 mt-0.5">
                    Browse historical funding repositories
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover/action:text-amber-400 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5 transition-all" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
