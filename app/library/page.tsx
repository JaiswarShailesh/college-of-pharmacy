"use client";

import PageHero from "@/components/PageHero";
import { 
  Clock, 
  LandPlot, 
  LibraryBig, 
  Users, 
  Eye, 
  Target, 
  BookOpen, 
  Cpu, 
  Wifi, 
  Printer, 
  Layers,
  ChevronRight,
  BookMarked,
  Globe
} from "lucide-react";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Central Library"
        description="Empowering the future of pharmaceutical sciences through robust learning architectures, seamless access to global literature, and dedicated research spaces."
      />

      {/* Institutional Identity (About, Vision, Mission) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* About Section - Expansive Layout */}
          <div className="lg:col-span-12 bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
              <div className="p-4 bg-blue-50 text-[#132347] rounded-2xl shadow-inner shrink-0">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Knowledge Hub</span>
                <h3 className="text-3xl font-extrabold text-[#132347] mt-2 mb-4 tracking-tight">About the Library</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                  The Central Library of Shree Vile Parle Kelavani Mandal's College of Pharmacy serves as an innovative
                  knowledge and learning resource center dedicated to supporting pharmaceutical education, research, and academic excellence. 
                  The library provides seamless access to quality print, digital, and online resources to empower students, faculty members, 
                  researchers, and healthcare professionals.
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-2">
                  <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
                  <p className="text-sm font-semibold text-[#146e8a] italic">
                    Dedicated to the memory and contributions of Dr. S. R. Ranganathan, whose principles continue to inspire modern library services and knowledge organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision - High Contrast Impact Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#132347] via-[#1a3264] to-[#0f1b35] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="p-3 bg-white/10 border border-white/10 rounded-2xl w-fit mb-8 shadow-md">
                <Eye className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Library Vision</h3>
              <p className="text-blue-100/90 text-sm md:text-base leading-relaxed font-normal">
                To become a dynamic knowledge and learning center that empowers students, faculty, researchers, and healthcare professionals by providing seamless access to quality information resources, innovative library services, advanced technologies, and a collaborative academic environment that supports excellence in pharmaceutical education, research, lifelong learning, and professional development.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-blue-200/60 tracking-wider uppercase font-medium">
              SVKM Strategic Alignment
            </div>
          </div>

          {/* Mission - Structural Bento-Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl w-fit mb-6 text-amber-600 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#132347] mb-6 tracking-tight">Library Mission</h3>
              <div className="space-y-4">
                {[
                  "To provide comprehensive access to print, digital, and online information resources that support the academic and research needs of the College of Pharmacy.",
                  "To promote information literacy, research skills, ethical use of information, and lifelong learning among students and faculty members.",
                  "To create a user-friendly, technology-enabled, and intellectually stimulating library environment that encourages reading, innovation, and scholarly activities.",
                  "To support teaching, learning, and advanced research in pharmaceutical sciences through efficient library services and modern information systems.",
                  "To continuously enhance library collections, services, and infrastructure in alignment with emerging educational and research trends in pharmacy education."
                ].map((missionText, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-50 text-amber-600 font-bold text-xs mt-0.5 shrink-0 transition-colors group-hover/item:bg-amber-600 group-hover/item:text-white">
                      {idx + 1}
                    </span>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {missionText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Infrastructure At a Glance Grid */}
      <section className="bg-gray-100/60 py-16 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a]">Operational Matrix</span>
              <h2 className="text-4xl font-extrabold text-[#132347] mt-1 tracking-tight">
                At a Glance
              </h2>
            </div>
            <p className="text-gray-500 max-w-md text-sm md:text-base">
              A breakdown of the physical infrastructure, technical systems, and operating timelines governing our central workspace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Librarian In-Charge", value: "Mr. Jijabrao Patil", description: "Chief Administrator", icon: <LibraryBig className="w-6 h-6" /> },
              { label: "Total Area Assets", value: "767 Sq. Meters", description: "Spacious Layout", icon: <LandPlot className="w-6 h-6" /> },
              { label: "Seating Capacity", value: "150 Students", description: "Simultaneous Reading", icon: <Users className="w-6 h-6" /> },
              { label: "Library Automation", value: "Fully Automated", description: "Powered by KOHA Software", icon: <Cpu className="w-6 h-6" /> },
              { label: "Internet Facility", value: "Broadband Enabled", description: "High-Speed Access", icon: <Wifi className="w-6 h-6" /> },
              { label: "Library Timing", value: "10:00 AM To 05:00 PM", description: "Working Days", icon: <Clock className="w-6 h-6" /> },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200/60 shadow-sm p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:border-[#146e8a]/30 group"
              >
                <div className="p-3.5 bg-gradient-to-br from-[#132347] to-[#146e8a] rounded-xl text-white shadow-md transform group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-lg font-bold text-[#132347] mt-1 tracking-tight group-hover:text-[#146e8a] transition-colors">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Collections Layout */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a]">Resource Catalog</span>
          <h2 className="text-4xl font-extrabold text-[#132347] mt-1 tracking-tight">
            Library Asset Collections
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Books and Print Volume - Grid Left (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/70 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-[#132347] to-[#1e3a70] px-6 py-5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <BookMarked className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-lg tracking-tight">Print & Digital Volumes</h3>
              </div>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10">Active Inventory</span>
            </div>
            
            <div className="p-2 divide-y divide-gray-100">
              {[
                { title: "Total Book Titles", count: "512+", description: "Unique indexed accessions" },
                { title: "Total Book Volumes", count: "2,104+", description: "Physical shelf stock availability" },
                { title: "E-Books Cataloged", count: "18,305+", description: "Electronic remote text resources" }
              ].map((row, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 hover:bg-gray-50/80 transition-colors rounded-xl group/row">
                  <div>
                    <p className="font-bold text-gray-800 text-base group-hover/row:text-[#146e8a] transition-colors">{row.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{row.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-[#132347] bg-gray-100 group-hover/row:bg-blue-50 group-hover/row:text-[#146e8a] px-4 py-1.5 rounded-xl transition-all">
                      {row.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journals & Online Aggregators - Grid Right (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Journals Matrix Sub-Card */}
            <div className="bg-white rounded-3xl border border-gray-200/70 shadow-sm overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#146e8a]" />
                <h4 className="font-bold text-sm uppercase tracking-wider text-[#132347]">Periodical Subscriptions</h4>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-2xl border border-gray-100">
                  <span className="text-sm font-semibold text-gray-600">National Journals</span>
                  <span className="text-lg font-bold text-[#132347] bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">06</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-2xl border border-gray-100">
                  <span className="text-sm font-semibold text-gray-600">International Journals</span>
                  <span className="text-lg font-bold text-[#132347] bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">05</span>
                </div>
              </div>
            </div>

            {/* Digital Gateway Databases Highlight Card */}
            <div className="bg-gradient-to-br from-[#146e8a] to-[#0b3d5b] rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Globe className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 border border-white/10 px-2.5 py-0.5 rounded-full">Gateways</span>
                <h4 className="font-bold text-lg mt-2 mb-4 tracking-tight">Connected Digital Databases</h4>
                
                <div className="flex flex-wrap gap-2">
                  {["DELNET", "NDLI", "e-Kumbh", "JSTOR", "DOAJ"].map((db, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-bold bg-white text-[#0b3d5b] px-3 py-1.5 rounded-xl shadow-sm hover:scale-105 transition-transform cursor-default"
                    >
                      {db}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-blue-100/60 mt-4 italic">
                  * 24/7 internal terminal institutional indexing authorized.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Refined Institutional Services Matrix */}
      <section className="bg-white border-t border-gray-200/60 py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a]">Operational Capabilities</span>
            <h2 className="text-4xl font-extrabold text-[#132347] mt-1 tracking-tight">
              Library Services & Facilities
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Circulation Management", desc: "Book, Periodical issue, complete system return and auto renewals management" },
              { title: "OPAC Gateway", desc: "Online Public Access Catalogue for automated internal system title locating" },
              { title: "Plagiarism Verification", desc: "Turnitin validation infrastructure access for scholarly publications checking" },
              { title: "Library New Arrivals", desc: "Display and structural dynamic notification updates of freshly curated titles" },
              { title: "Article Alert Service", desc: "Direct alerts matching individual ongoing pharmaceutical research segments" },
              { title: "Reference & Referral", desc: "Professional librarian assistance pathways for niche research tracking" },
              { title: "Reprographics Room", desc: "Dedicated high-speed print and photocopying infrastructure modules" },
              { title: "Scanning Terminal", desc: "High-resolution archival scanning systems for document digitizing needs" },
              { title: "Digital Library Hub", desc: "Dedicated computer network workstations providing terminal database queries" },
              { title: "QR Code Navigation", desc: "Quick Response asset mapping systems across stack configurations" },
              { title: "Reading Architecture", desc: "Spacious, acoustic-managed and thoroughly well-lit study halls spaces" },
              { title: "Current Awareness Service", desc: "Periodic delivery updates containing current global discovery alerts" },
            ].map((srv, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ChevronRight className="w-4 h-4 text-[#146e8a] transform group-hover:translate-x-0.5 transition-transform" />
                    <h4 className="text-sm font-bold text-[#132347] tracking-tight">{srv.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}