"use client";

import PageHero from "@/components/PageHero";
import { 
  KeyRound, 
  QrCode, 
  Smartphone, 
  Compass, 
  BookmarkCheck, 
  ShieldAlert, 
  ExternalLink,
  Cpu,
  User,
  Eye,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function RemoteAccessSmartServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Remote Access & Smart Services"
        description="Providing borderless academic lookup frameworks through specialized gateway authentication credentials and advanced mobile navigation layouts."
      />

      {/* Conceptual Framework Overview */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3.5 bg-blue-50 text-[#132347] rounded-2xl shadow-inner shrink-0 hidden sm:block">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Seamless Off-Campus Access</span>
              <h3 className="text-2xl font-extrabold text-[#132347] mt-3 mb-2 tracking-tight">Smart Learning Anywhere</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-4xl">
                Our central library architecture systematically bridges physical bounds. By combining secure remote data portal aggregators with localized mobile frameworks, students and researchers enjoy real-time academic validation from any global terminal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Credentials & Smart Facilities Bento Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Module 1: DELNET Remote Access Gateway - Dark Premium Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#132347] via-[#1a3264] to-[#0f1b35] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="p-3 bg-white/10 border border-white/10 rounded-2xl w-fit mb-6 shadow-md text-amber-400">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">DELNET Login Access</h3>
              <p className="text-blue-200/70 text-xs mb-6">Authorized institutional credentials for off-campus portal indexing</p>
              
              {/* Secure Login Details Presentation Block */}
              <div className="space-y-3 relative z-10">
                {/* User ID Row */}
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs group/row hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-blue-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-200">User ID</span>
                  </div>
                  <code className="text-sm font-mono font-black text-white bg-white/10 px-3 py-1 rounded-lg border border-white/5 tracking-wider select-all">
                    mhsvkmcp
                  </code>
                </div>

                {/* Password Row */}
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs group/row hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <Eye className="w-4 h-4 text-blue-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Password</span>
                  </div>
                  <code className="text-sm font-mono font-black text-amber-400 bg-white/10 px-3 py-1 rounded-lg border border-white/5 tracking-wider select-all">
                    svp11069
                  </code>
                </div>
              </div>
            </div>

            {/* Launch Action Module */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
              <a 
                href="http://www.delnet.in" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group/link"
              >
                <span>Launch DELNET Platform</span>
                <ExternalLink className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[10px] text-blue-300/50">External Server</span>
            </div>
          </div>

          {/* Module 2: Smart Access Facilities - Clean Flexible Layout */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-2xl w-fit mb-6 text-[#146e8a] shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#132347] mb-1 tracking-tight">Smart Access Facilities</h3>
              <p className="text-xs text-gray-400 mb-6">On-campus digital interfaces and mobile web integrations for real-time interaction</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "QR Code-Based Resource Access",
                    desc: "Quickly scan localized stack codes to instantly view contextual documentation maps and digital indices.",
                    icon: <QrCode className="w-4 h-4" />
                  },
                  {
                    title: "Mobile-Friendly OPAC System",
                    desc: "Run real-time accession checks, title availability queries, and shelf position maps seamlessly on any smartphone screen.",
                    icon: <Smartphone className="w-4 h-4" />
                  },
                  {
                    title: "Digital Bibliography Support",
                    desc: "Automate technical documentation compilation through integrated structural citation extraction tools.",
                    icon: <BookmarkCheck className="w-4 h-4" />
                  },
                  {
                    title: "Online Resource Navigation",
                    desc: "Trace complex pharmaceutical research streams through our dynamic internal catalog indexing grids.",
                    icon: <Compass className="w-4 h-4" />
                  }
                ].map((facility, i) => (
                  <div 
                    key={i} 
                    className="p-5 bg-gray-50/60 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#146e8a]/30 hover:shadow-xs transition-all flex flex-col justify-between group/item"
                  >
                    <div>
                      <div className="p-2 bg-white rounded-lg text-gray-400 group-hover/item:bg-blue-50 group-hover/item:text-[#146e8a] transition-colors shadow-2xs w-fit mb-3.5">
                        {facility.icon}
                      </div>
                      <h4 className="text-sm font-bold text-[#132347] tracking-tight mb-2 leading-snug">{facility.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{facility.desc}</p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-gray-100/80 flex items-center justify-between text-[10px] font-bold text-[#146e8a] uppercase tracking-wider opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <span>Initialize Service</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Compliance Notice Footer Box */}
      <section className="bg-white border-t border-gray-200/60 py-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3 shadow-2xs">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-rose-800 leading-relaxed">
                <strong>Data Authentication Security Directive:</strong> Subscribed credentials (including private credentials listed under the DELNET repository framework) are exclusively restricted to legitimate institutional scholars of the college. Unauthorized sharing, public mirroring, or commercial indexing of credential keys will initiate an immediate structural security lockdown of student user metrics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}