"use client";

import PageHero from "@/components/PageHero";
import { 
  Building, 
  Layers, 
  Monitor, 
  Armchair, 
  Cpu, 
  CheckCircle, 
  ChevronRight, 
  Image as ImageIcon,
  Compass,
  Sparkles
} from "lucide-react";

export default function GalleryLearningSpacesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Gallery & Learning Spaces"
        description="Explore our world-class institutional layout—combining advanced architectural designs, technology-driven workspaces, and ergonomic learning environments."
      />

      {/* Conceptual Intro Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3.5 bg-blue-50 text-[#132347] rounded-2xl shadow-inner shrink-0 hidden sm:block">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Campus Infrastructure</span>
              <h3 className="text-2xl font-extrabold text-[#132347] mt-3 mb-2 tracking-tight">Our Physical & Technological Footprint</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-4xl">
                The library architecture has been specifically optimized to support a spectrum of academic activities, from high-focus independent research to cross-disciplinary group projects. Each zone is structured to foster productivity and streamline resource discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Section Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a]">Architectural Modules</span>
            <h2 className="text-3xl font-extrabold text-[#132347] mt-1 tracking-tight flex items-center gap-2">
              <Building className="w-7 h-7 text-[#146e8a]" /> Library Environments
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-xs md:text-sm">
            A comprehensive mapping of the structural zones, processing check-ins, and study configurations.
          </p>
        </div>

        {/* Layout Bento Structure */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          
          {/* Item 1: Modern Circulation Counter */}
          <div className="bg-white border border-gray-200/70 rounded-3xl p-6 hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-blue-50 text-[#132347] rounded-2xl w-fit mb-5 shadow-2xs group-hover:bg-[#132347] group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#132347] tracking-tight mb-2">Modern Circulation Counter</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                The centralized transaction and navigation gateway of the library. Engineered for streamlined book distribution, digital system check-ins, and automated return processing workflows.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-medium">
              <span>Primary Entry Checkpoint</span>
              <ChevronRight className="w-3 h-3 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Item 2: Spacious Reading Halls */}
          <div className="bg-white border border-gray-200/70 rounded-3xl p-6 hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-blue-50 text-[#132347] rounded-2xl w-fit mb-5 shadow-2xs group-hover:bg-[#132347] group-hover:text-white transition-colors">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#132347] tracking-tight mb-2">Spacious Reading Halls</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Acoustically insulated zones designed for profound reading and continuous learning. These well-ventilated blocks are configured to support multi-student occupancy without compromising workspace separation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-medium">
              <span>150+ Seating Integration</span>
              <ChevronRight className="w-3 h-3 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Item 3: Digital Access Terminals */}
          <div className="bg-white border border-gray-200/70 rounded-3xl p-6 hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-blue-50 text-[#132347] rounded-2xl w-fit mb-5 shadow-2xs group-hover:bg-[#132347] group-hover:text-white transition-colors">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#132347] tracking-tight mb-2">Digital Access Terminals</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dedicated hardware workstations configured for instant OPAC lookups, global data catalog queries, and continuous electronic literature retrieval pipelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-medium">
              <span>High-Speed Broadband Links</span>
              <ChevronRight className="w-3 h-3 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Item 4: Comfortable Seating Arrangements */}
          <div className="bg-white border border-gray-200/70 rounded-3xl p-6 hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-blue-50 text-[#132347] rounded-2xl w-fit mb-5 shadow-2xs group-hover:bg-[#132347] group-hover:text-white transition-colors">
                <Armchair className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#132347] tracking-tight mb-2">Comfortable Seating Arrangements</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ergonomically selected fixtures deployed across the reading halls to prevent study fatigue, allowing research scholars to focus comfortably over extended library hours.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-medium">
              <span>Ergonomic Support Standards</span>
              <ChevronRight className="w-3 h-3 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Item 5: Technology-Enabled Learning Spaces (Spans 2 columns on large displays for asymmetrical visual style) */}
          <div className="sm:col-span-2 bg-gradient-to-br from-[#132347] via-[#1a3264] to-[#0f1b35] rounded-3xl p-6 lg:p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="p-3 bg-white/10 border border-white/10 rounded-2xl w-fit mb-5 shadow-md text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">Interactive Zone</span>
              <h3 className="text-xl font-bold tracking-tight mt-3 mb-2">Technology-Enabled Learning Spaces</h3>
              <p className="text-blue-200/70 text-xs leading-relaxed max-w-xl">
                Advanced structural environments synchronized with contemporary pharmaceutical education patterns. Designed to accommodate modern laptop configurations, presentation reviews, and collaborative research evaluations.
              </p>
            </div>

            {/* <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-100">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Fully Automated Ecosystem
              </div>
              <span className="text-[11px] text-blue-300/60 font-medium">SVKM Institutional Standards</span>
            </div> */}
          </div>

        </div>
      </section>

      {/* Visual Experience Callout */}
      <section className="bg-gray-100/60 border-t border-gray-200/60 py-16 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-3 bg-white border border-gray-200 w-fit mx-auto rounded-2xl shadow-2xs text-[#146e8a] mb-4">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <h4 className="text-xl font-bold text-[#132347] tracking-tight mb-2">Continuous Infrastructure Evolution</h4>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
            Our physical configurations are continually updated to follow emerging academic trends, ensuring compliance with global criteria for premium resource deployment and student support systems.
          </p>
        </div>
      </section>
    </main>
  );
}