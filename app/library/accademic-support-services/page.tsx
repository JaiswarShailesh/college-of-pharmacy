"use client";

import PageHero from "@/components/PageHero";
import { 
  BookCopy, 
  FileText, 
  History, 
  Printer, 
  Copy, 
  Scan, 
  Layers, 
  CheckCircle, 
  Download, 
  HelpCircle,
  GraduationCap
} from "lucide-react";

export default function AcademicSupportServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Academic Support Services"
        description="Enhancing academic success through specialized textbook lending programs, centralized examination repositories, and high-efficiency document processing facilities."
      />

      {/* Overview Intro Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3.5 bg-blue-50 text-[#132347] rounded-2xl shadow-inner shrink-0 hidden sm:block">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Student Success Framework</span>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-3 max-w-4xl">
                Our library is committed to offering specialized curriculum assistance that goes beyond standard book circulation. Through structural text resources and technical support rooms, we clear operational roadblocks to elevate your learning performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Module 1: Book Bank Facility - Dynamic Deep Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#132347] via-[#1a3264] to-[#0f1b35] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="p-3 bg-white/10 border border-white/10 rounded-2xl w-fit mb-6 shadow-md text-amber-400">
                <BookCopy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">Book Bank Facility</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-6">
                Extended textbook support for students through dedicated Book Bank services. This specialized framework guarantees semester-long possession of essential study materials to alleviate student academic pressure.
              </p>
            </div>

            <div className="space-y-2 relative z-10">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-400 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Semester-long textbook loan terms</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-blue-200 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Targeted supporting core syllabus modules</span>
              </div>
            </div>
          </div>

          {/* Module 2: Question Paper Repository - Bento Card Structure */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-2xl w-fit mb-6 text-[#146e8a] shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#132347] mb-1 tracking-tight">Question Paper Repository</h3>
              <p className="text-xs text-gray-400 mb-6">Central archive hosting previous academic reference materials for strategic exam revision</p>
              
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Internal Examination Papers", description: "Sessional assessment indexes", icon: <FileText className="w-4 h-4" /> },
                  { name: "University Question Papers", description: "End-semester regulatory sheets", icon: <Layers className="w-4 h-4" /> },
                  { name: "Previous Year Question Banks", description: "Historical subject patterns", icon: <History className="w-4 h-4" /> },
                ].map((repo, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col justify-between p-4 bg-gray-50/60 border border-gray-100 rounded-2xl hover:bg-white hover:border-[#146e8a]/30 hover:shadow-xs transition-all group/repo"
                  >
                    <div>
                      <div className="p-2.5 bg-white rounded-xl text-gray-400 group-hover/repo:bg-blue-50 group-hover/repo:text-[#146e8a] transition-colors shadow-2xs w-fit mb-4">
                        {repo.icon}
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover/repo:text-[#132347] transition-colors">{repo.name}</h4>
                      <p className="text-[11px] text-gray-400 mt-1.5">{repo.description}</p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-gray-100/80 flex items-center gap-1 text-[10px] font-bold text-[#146e8a] uppercase tracking-wider opacity-0 group-hover/repo:opacity-100 transition-opacity">
                      <span>Access Archive</span>
                      <Download className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Reprographic Services Facility */}
      <section className="bg-gray-100/60 py-20 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a]">Document Processing Capabilities</span>
            <h2 className="text-4xl font-extrabold text-[#132347] mt-1 tracking-tight">
              Reprographic Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm mt-2">
              High-efficiency machinery zones structured inside the library for quick content processing and material duplicating.
            </p>
            <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Printing",
                desc: "High-resolution crisp physical print network output configurations optimized for technical manuscripts and project submissions.",
                icon: <Printer className="w-5 h-5" />
              },
              {
                title: "Photocopying",
                desc: "Rapid journal page duplicates and immediate reference duplication services operating on strict non-commercial scales.",
                icon: <Copy className="w-5 h-5" />
              },
              {
                title: "Document Scanning",
                desc: "Fast digital scanning converting rare print indexes into mobile-friendly study files or accessible text data archives.",
                icon: <Scan className="w-5 h-5" />
              }
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200/70 rounded-2xl p-6 hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 bg-blue-50/50 rounded-xl w-fit text-[#146e8a] border border-blue-100/40 group-hover:bg-[#146e8a] group-hover:text-white transition-colors mb-5 shadow-2xs">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#132347] tracking-tight mb-2">{service.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}