import PageHero from "@/components/PageHero";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Download,
  FileText,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment | SVKM's College of Pharmacy, Shirpur",
  description:
    "View current recruitment opportunities and faculty positions at SVKM's College of Pharmacy, Shirpur.",
};

const vacancies = [
  {
    post: "Principal",
    vacancies: "01",
    department: "—",
  },
  {
    post: "Professor",
    vacancies: "02",
    department: "Pharmaceutics – 01 | Pharmaceutical Chemistry – 01",
  },
  {
    post: "Associate Professor",
    vacancies: "03",
    department:
      "Pharmaceutics – 01 | Pharmaceutical Chemistry – 01 | Pharmacology – 01",
  },
  {
    post: "Assistant Professor",
    vacancies: "06",
    department:
      "Pharmaceutics – 02 | Pharmaceutical Chemistry – 02 | Pharmacology – 01 | Pharmacognosy – 01",
  },
  {
    post: "Librarian",
    vacancies: "01",
    department: "—",
  },
];

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Recruitment"
        description="Explore current career opportunities at SVKM's College of Pharmacy, Shirpur"
      />

      <main className="bg-gray-50">
        {/* Introduction */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 items-stretch">
              {/* Main introduction */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 md:p-9">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                    <BriefcaseBusiness className="w-6 h-6 text-sky-900" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
                      Career Opportunities
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                      Recruitment Advertisement
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 leading-7 mb-5">
                  Applications are invited from eligible candidates for the
                  following Permanent Non-Grantable positions for the
                  B. Pharmacy course at SVKM&apos;s College of Pharmacy,
                  Shirpur.
                </p>

                <p className="text-gray-600 leading-7">
                  Candidates are advised to carefully read the detailed
                  advertisement, eligibility criteria, experience
                  requirements and applicable conditions before submitting
                  their application.
                </p>

                {/* Quick details */}
                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <GraduationCap className="w-5 h-5 text-sky-900 mb-2" />

                    <p className="text-xs text-gray-500 mb-1">Course</p>

                    <p className="font-semibold text-gray-800">
                      B. Pharmacy
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <Users className="w-5 h-5 text-sky-900 mb-2" />

                    <p className="text-xs text-gray-500 mb-1">
                      Total Positions
                    </p>

                    <p className="font-semibold text-gray-800">
                      13 Positions
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <MapPin className="w-5 h-5 text-sky-900 mb-2" />

                    <p className="text-xs text-gray-500 mb-1">Location</p>

                    <p className="font-semibold text-gray-800">
                      Shirpur, Dhule
                    </p>
                  </div>
                </div>
              </div>

              {/* Advertisement card */}
              <div className="bg-sky-950 rounded-2xl p-7 md:p-8 text-white flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <FileText className="w-6 h-6 text-white" />
                  </div>

                  <p className="text-sky-200 text-sm font-medium mb-2">
                    Official Advertisement
                  </p>

                  <h3 className="text-2xl font-bold leading-snug">
                    Recruitment 2026
                  </h3>

                  <p className="text-sky-100/80 text-sm leading-6 mt-4">
                    View the complete recruitment advertisement including
                    qualifications, experience, pay scale and application
                    conditions.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="/docs/Advertisement_SVKM.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-white text-sky-950 font-semibold px-5 py-3 rounded-lg hover:bg-sky-50 transition"
                  >
                    View Advertisement
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <a
                    href="/docs/Advertisement_SVKM.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 w-full mt-3 border border-white/20 text-white font-medium px-5 py-3 rounded-lg hover:bg-white/10 transition"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vacancy section */}
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-7">
              <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
                Available Positions
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                Vacancies
              </h2>

              <div className="w-16 h-1 bg-sky-700 mt-4 rounded-full" />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-sky-950 text-white">
                      <th className="text-left px-6 py-4 text-sm font-semibold">
                        Sr. No.
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold">
                        Post
                      </th>

                      <th className="text-center px-6 py-4 text-sm font-semibold">
                        Number
                      </th>

                      <th className="text-left px-6 py-4 text-sm font-semibold">
                        Subject / Department
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {vacancies.map((item, index) => (
                      <tr
                        key={item.post}
                        className="border-b border-gray-100 last:border-0 hover:bg-sky-50/40 transition"
                      >
                        <td className="px-6 py-5 text-sm text-gray-500">
                          {String(index + 1).padStart(2, "0")}
                        </td>

                        <td className="px-6 py-5">
                          <span className="font-semibold text-gray-800">
                            {item.post}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-center">
                          <span className="inline-flex min-w-10 justify-center px-3 py-1 rounded-full bg-sky-50 text-sky-900 font-semibold text-sm">
                            {item.vacancies}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-sm text-gray-600 leading-6">
                          {item.department}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tfoot>
                    <tr className="bg-gray-50">
                      <td
                        colSpan={2}
                        className="px-6 py-4 text-right font-bold text-gray-800"
                      >
                        Total
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-sky-900">
                          13
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-gray-600">
                        Permanent Non-Grantable Positions
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-gray-100">
                {vacancies.map((item, index) => (
                  <div key={item.post} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs text-gray-400 font-medium mb-1">
                          Sr. No. {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="font-semibold text-gray-900">
                          {item.post}
                        </h3>
                      </div>

                      <span className="shrink-0 inline-flex min-w-10 justify-center px-3 py-1 rounded-full bg-sky-50 text-sky-900 font-semibold text-sm">
                        {item.vacancies}
                      </span>
                    </div>

                    {item.department !== "—" && (
                      <p className="text-sm text-gray-600 leading-6 mt-3">
                        {item.department}
                      </p>
                    )}
                  </div>
                ))}

                <div className="p-5 bg-gray-50 flex items-center justify-between">
                  <span className="font-bold text-gray-800">Total</span>

                  <span className="font-bold text-sky-900">
                    13 Positions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important information */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 md:p-9">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-sky-900" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
                    Important Information
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                    Before You Apply
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div className="flex gap-3">
                  <span className="text-sky-800 font-bold">01.</span>

                  <p className="text-sm text-gray-600 leading-6">
                    Educational qualifications, experience and pay scale
                    shall be as per applicable AICTE, PCI, Government of
                    Maharashtra and DBATU norms.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-sky-800 font-bold">02.</span>

                  <p className="text-sm text-gray-600 leading-6">
                    Candidates currently in service should apply through
                    the proper channel.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-sky-800 font-bold">03.</span>

                  <p className="text-sm text-gray-600 leading-6">
                    Incomplete applications or applications without
                    attested supporting documents will not be entertained.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-sky-800 font-bold">04.</span>

                  <p className="text-sm text-gray-600 leading-6">
                    No T.A. / D.A. will be paid for attending the
                    interview.
                  </p>
                </div>
              </div>

              {/* Deadline notice */}
              <div className="mt-8 rounded-xl bg-sky-50 border border-sky-100 p-5">
                <p className="text-sm text-sky-950 leading-6">
                  <strong>Application Deadline:</strong> Applications with
                  full particulars and attested copies of all supporting
                  documents should reach the college within{" "}
                  <strong>21 days from the date of publication</strong> of
                  the advertisement.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-7 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Interested candidates?
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Please refer to the official advertisement for complete
                    details.
                  </p>
                </div>

                <a
                  href="/docs/Advertisement_SVKM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-sky-900 hover:bg-sky-950 text-white font-medium px-5 py-3 rounded-lg transition"
                >
                  <FileText className="w-4 h-4" />
                  View Full Advertisement
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}