"use client";

import PageHero from "@/components/PageHero";
import { 
  Globe, 
  Database, 
  Layers, 
  Search, 
  BookOpen, 
  Video, 
  GraduationCap, 
  FileText, 
  CheckCircle, 
  Cpu,
  BookmarkCheck,
  ExternalLink
} from "lucide-react";

export default function DigitalResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Digital Resources & Online Services"
        description="Seamlessly bridge physical boundaries with 24/7 institutional access to globally recognized learning networks, specialized e-journals, and advanced library automation platforms."
      />

      {/* Overview Intro Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3.5 bg-blue-50 text-[#132347] rounded-2xl shadow-inner shrink-0 hidden sm:block">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Virtual Ecosystem</span>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-3 max-w-4xl">
                The library provides access to a wide range of digital learning and research platforms, ensuring students, faculty, and scholars are connected directly to the forefront of pharmaceutical literature and global research systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms & E-Resources Bento Layout */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Major Digital Platforms - Grid Left (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#132347] via-[#1a3264] to-[#0f1b35] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="p-3 bg-white/10 border border-white/10 rounded-2xl w-fit mb-6 shadow-md text-amber-400">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Major Digital Platforms</h3>
              <p className="text-blue-200/70 text-xs mb-6">Subscribed scholarly indexes and authorized national storage networks</p>
              
              <div className="space-y-2.5">
                {[
                  "DELNET",
                  "National Digital Library of India",
                  "JSTOR",
                  "Directory of Open Access Journals",
                  "ScienceDirect",
                  "SpringerLink"
                ].map((platform, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group/item"
                  >
                    <span className="text-sm font-semibold tracking-wide text-blue-50 group-hover/item:text-white transition-colors">{platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-300/40 group-hover/item:text-amber-400 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* E-Resources Available - Grid Right (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-2xl w-fit mb-6 text-[#146e8a] shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#132347] mb-1 tracking-tight">E-Resources Available</h3>
              <p className="text-xs text-gray-400 mb-6">Categorized dynamic asset repositories available for internal query routing</p>
              
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  { name: "E-Books", icon: <BookOpen className="w-4 h-4" /> },
                  { name: "E-Journals", icon: <Globe className="w-4 h-4" /> },
                  { name: "Research Articles", icon: <FileText className="w-4 h-4" /> },
                  { name: "Online Video Lectures", icon: <Video className="w-4 h-4" /> },
                  { name: "NPTEL Learning Content", icon: <GraduationCap className="w-4 h-4" /> },
                  { name: "Open Access Pharmacy Resources", icon: <BookmarkCheck className="w-4 h-4" /> },
                  { name: "Institutional Question Papers", icon: <FileText className="w-4 h-4" /> },
                  { name: "B.Pharm Syllabus Repository", icon: <GraduationCap className="w-4 h-4" /> },
                ].map((resource, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-3.5 bg-gray-50/60 border border-gray-100 rounded-xl hover:bg-white hover:border-[#146e8a]/30 hover:shadow-xs transition-all group/res"
                  >
                    <div className="p-2 bg-white rounded-lg text-gray-400 group-hover/res:bg-blue-50 group-hover/res:text-[#146e8a] transition-colors shadow-2xs">
                      {resource.icon}
                    </div>
                    <span className="text-sm font-bold text-gray-700 group-hover/res:text-[#132347] transition-colors">{resource.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OPAC & Library Automation Feature Section */}
      <section className="bg-gray-100/60 py-20 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-100/60 px-3 py-1 rounded-full">Core Infrastructure</span>
              <h2 className="text-4xl font-extrabold text-[#132347] mt-4 mb-4 tracking-tight">
                OPAC & Library Automation
              </h2>
              <div className="w-12 h-1 bg-amber-500 mb-6 rounded-full" />
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                Our facilities feature integrated structural asset indexing. The library is fully automated using <strong className="text-[#132347]">KOHA Integrated Library Management Software</strong>, giving users complete, remote cross-referencing capabilities.
              </p>
              
              <div className="p-4 bg-white border border-gray-200/60 rounded-2xl flex items-start gap-4 shadow-2xs">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">KOHA Core Integration</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Real-time status tracking, automated circulation indexing, and localized shelf location coordinates.</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Features Matrix */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 shadow-xs p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <Search className="w-5 h-5 text-[#146e8a]" />
                <h3 className="font-extrabold text-lg text-[#132347] tracking-tight">Online Public Access Catalogue (OPAC) Features</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Online Book Search", desc: "Instantly query full catalog records across all subject segments from any device terminal." },
                  { title: "Accession Lookup", desc: "Trace specific institutional entry files directly via internal system data tracking identifiers." },
                  { title: "Subject-wise Browsing", desc: "Explore thematic categorical stacks aligned neatly to precise pharmaceutical disciplines." },
                  { title: "Author & Title Search", desc: "Isolate precise literature using multi-string parameter combinations instantly." },
                  { title: "Availability Status Tracking", desc: "View accurate on-shelf markers, issue state tracking, and anticipated return timelines." }
                ].map((feat, idx) => (
                  <div 
                    key={idx} 
                    className={`p-5 rounded-2xl border transition-all duration-200 group/feat ${
                      idx === 4 ? "sm:col-span-2 bg-gradient-to-r from-blue-50/40 to-transparent border-blue-100/70" : "bg-gray-50/50 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#146e8a] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#132347] tracking-tight group-hover/feat:text-[#146e8a] transition-colors">{feat.title}</h4>
                        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}