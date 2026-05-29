"use client";

import PageHero from "@/components/PageHero";
import { 
  ExternalLink, 
  BookOpen, 
  Globe, 
  GraduationCap, 
  FileSpreadsheet, 
  Briefcase, 
  FileText,
  BookmarkCheck,
  Search
} from "lucide-react";

export default function OpenEResourcesPage() {
  // Comprehensive mapping of all 29 resources directly extracted from the institutional chart data
  const academicPortals = [
    { id: 1, name: "Pharmacy", url: "https://www.pharmacy.org/", icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 2, name: "World Digital Library", url: "https://www.wdl.org/en/", icon: <Globe className="w-4 h-4" /> },
    { id: 3, name: "Virtual Library: Pharmacy", url: "https://www.pharmacy.org/", icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 4, name: "National Digital Library of India", url: "https://ndl.iitkgp.ac.in/", icon: <GraduationCap className="w-4 h-4" /> },
    { id: 5, name: "SWAYAM", url: "https://swayam.gov.in/", icon: <GraduationCap className="w-4 h-4" /> },
    { id: 6, name: "ePathshala", url: "https://epathshala.nic.in/", icon: <BookOpen className="w-4 h-4" /> },
    { id: 7, name: "NDLI Club", url: "https://club.ndl.iitkgp.ac.in/club-home", icon: <GraduationCap className="w-4 h-4" /> },
    { id: 8, name: "Pharmacylibrary", url: "https://pharmacylibrary.com/", icon: <BookOpen className="w-4 h-4" /> },
  ];

  const journalsAndResearch = [
    { id: 9, name: "Medical Journals", url: "http://www.freemedicaljournals.com/", icon: <FileText className="w-4 h-4" /> },
    { id: 10, name: "Pharmacy Journals", url: "https://www.gfmer.ch/Medical_journals/Pharmacology_pharmacy.htm", icon: <FileText className="w-4 h-4" /> },
    { id: 11, name: "Elsevier journals", url: "https://www.elsevier.com/about/open-science/open-access/open-access-journals", icon: <FileText className="w-4 h-4" /> },
    { id: 12, name: "Science Direct", url: "https://www.sciencedirect.com/browse/journals-and-books", icon: <Search className="w-4 h-4" /> },
    { id: 13, name: "Springerlink", url: "https://link.springer.com/", icon: <Search className="w-4 h-4" /> },
    { id: 14, name: "Medical Journals", url: "https://www.gfmer.ch/Medical_journals/Pharmacology_pharmacy.htm", icon: <FileText className="w-4 h-4" /> },
    { id: 15, name: "DOAJ", url: "https://doaj.org/", icon: <Globe className="w-4 h-4" /> },
    { id: 16, name: "Familydoctor.org", url: "https://familydoctor.org/diseases-and-conditions/", icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 17, name: "WHO Guidelines", url: "https://www.who.int/publications/guidelines/en/", icon: <FileText className="w-4 h-4" /> },
    { id: 18, name: "Cocaine review", url: "https://www.cochranelibrary.com/cdsr/about-cdsr", icon: <Search className="w-4 h-4" /> },
    { id: 19, name: "Centerwatch", url: "https://www.centerwatch.com/", icon: <Globe className="w-4 h-4" /> },
    { id: 20, name: "NCBI journals", url: "https://www.ncbi.nlm.nih.gov/pubmed/", icon: <Search className="w-4 h-4" /> },
    { id: 21, name: "CDSCO", url: "https://cdsco.gov.in/opencms/opencms/en/Home/", icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 22, name: "CIMS", url: "http://www.cimssoftware.com/", icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: 23, name: "Medscape", url: "https://www.medscape.com/", icon: <Globe className="w-4 h-4" /> },
  ];

  const careerAndNews = [
    { id: 24, name: "World-Newspapers.com", url: "http://www.world-newspapers.com/", icon: <FileText className="w-4 h-4" /> },
    { id: 25, name: "Employment News", url: "http://employmentnews.gov.in/", icon: <Briefcase className="w-4 h-4" /> },
    { id: 26, name: "The Hindu: Shine Jobs", url: "https://www.thehindu.com/shine-jobs/", icon: <Briefcase className="w-4 h-4" /> },
    { id: 27, name: "TimesJobs.Com", url: "http://www.timesjobs.com/", icon: <Briefcase className="w-4 h-4" /> },
    { id: 28, name: "Hindu editorial", url: "https://www.thehindu.com/opinion/editorial/", icon: <FileText className="w-4 h-4" /> },
    { id: 29, name: "News papers India", url: "https://en.wikipedia.org/wiki/List_of_newspapers_in_India", icon: <FileText className="w-4 h-4" /> },
    { id: 30, name: "Indian Government Jobs", url: "https://www.indgovtjobs.in/", icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 font-sans text-gray-700 antialiased">
      {/* Hero Banner Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Open E-Resources"
        description="Direct external access to curated gateway platforms, government learning initiatives, specialized pharma journals, and professional vacancy networks."
      />

      {/* Directory Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          
          {/* Category 1: Pharmacy Portals & National Digitization */}
          <div>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Module 01</span>
              <h2 className="text-2xl font-extrabold text-[#132347] mt-3 tracking-tight flex items-center gap-2">
                Pharmacy Portals & E-Learning Networks
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {academicPortals.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-blue-50 text-[#132347] rounded-lg flex items-center justify-center font-mono text-xs font-black shrink-0 border border-blue-100/40">
                        {item.id}
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 tracking-tight leading-snug group-hover:text-[#146e8a] transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <div className="text-gray-300 group-hover:text-[#146e8a] transition-colors mt-0.5">
                      {item.icon}
                    </div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                    <span className="truncate max-w-[160px] font-mono">{item.url.replace('https://', '').replace('http://', '')}</span>
                    <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Category 2: Subscribed & Open Access Medical/Pharmacy Journals */}
          <div>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Module 02</span>
              <h2 className="text-2xl font-extrabold text-[#132347] mt-3 tracking-tight flex items-center gap-2">
                Scholarly Research & Medical Journals
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {journalsAndResearch.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-gray-50 text-[#132347] rounded-lg flex items-center justify-center font-mono text-xs font-black shrink-0 border border-gray-200/50">
                        {item.id}
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 tracking-tight leading-snug group-hover:text-[#146e8a] transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <div className="text-gray-300 group-hover:text-[#146e8a] transition-colors mt-0.5">
                      {item.icon}
                    </div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                    <span className="truncate max-w-[160px] font-mono">{item.url.replace('https://', '').replace('http://', '')}</span>
                    <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Category 3: Career Digests & National Public Utilities */}
          <div>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#146e8a] bg-blue-50/60 px-3 py-1 rounded-full">Module 03</span>
              <h2 className="text-2xl font-extrabold text-[#132347] mt-3 tracking-tight flex items-center gap-2">
                Employment Portals & Global Press Channels
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {careerAndNews.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-[#146e8a]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-emerald-50/40 text-[#132347] rounded-lg flex items-center justify-center font-mono text-xs font-black shrink-0 border border-emerald-100/30">
                        {item.id}
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 tracking-tight leading-snug group-hover:text-[#146e8a] transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <div className="text-gray-300 group-hover:text-[#146e8a] transition-colors mt-0.5">
                      {item.icon}
                    </div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                    <span className="truncate max-w-[160px] font-mono">{item.url.replace('https://', '').replace('http://', '')}</span>
                    <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-amber-500 transition-colors shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}