import PageHero from "@/components/PageHero";
import { Download } from "lucide-react";

export default function Page() {
  const examData = [
    {
      date: "Monday, 09/03/2026",
      time: "10:00 AM – 01:00 PM",
      sem: "I",
      code: "BP101T",
      subject: "Human Anatomy and Physiology-I",
    },
    {
      date: "Wednesday, 11/03/2026",
      time: "10:00 AM – 01:00 PM",
      sem: "I",
      code: "BP102T",
      subject: "Pharmaceutical Analysis-I",
    },
    {
      date: "Friday, 13/03/2026",
      time: "10:00 AM – 01:00 PM",
      sem: "I",
      code: "BP103T",
      subject: "Pharmaceutics-I",
    },
    {
      date: "Saturday, 14/03/2026",
      time: "10:00 AM – 12:00 PM",
      sem: "I",
      code: "BP106T",
      subject: "Remedial Biology / Remedial Mathematics",
    },
    {
      date: "Monday, 16/03/2026",
      time: "10:00 AM – 01:00 PM",
      sem: "I",
      code: "BP104T",
      subject: "Pharmaceutical Inorganic Chemistry",
    },
    {
      date: "Tuesday, 17/03/2026",
      time: "10:00 AM – 12:00 PM",
      sem: "I",
      code: "BP105T",
      subject: "Communication Skills",
    },
  ];

  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Examination"
        description="Examination schedules, notices, and important updates for students."
      />

      <section className="bg-gray-50 py-16 text-[#132347]">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">
                End Semester Theory Examination – March 2026
              </h2>
              <p className="text-gray-600">
                First Year (Semester I) Bachelor of Pharmacy
              </p>
            </div>

            <a
              href="/docs/examinations/first_year_bachelor_of_pharmacy_2026.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#132347] text-white px-5 py-3 rounded-lg hover:bg-[#0f1c36] transition"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-[#132347] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Day & Date</th>
                  <th className="px-4 py-3 text-left">Time</th>
                  <th className="px-4 py-3 text-left">Semester</th>
                  <th className="px-4 py-3 text-left">Subject Code</th>
                  <th className="px-4 py-3 text-left">Subject Name</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-gray-700">
                {examData.map((exam, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{exam.date}</td>
                    <td className="px-4 py-3">{exam.time}</td>
                    <td className="px-4 py-3">{exam.sem}</td>
                    <td className="px-4 py-3">{exam.code}</td>
                    <td className="px-4 py-3">{exam.subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-sm text-gray-700">
            <p>
              <strong>Note:</strong> Practical examinations will be conducted
              after completion of theory examinations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
