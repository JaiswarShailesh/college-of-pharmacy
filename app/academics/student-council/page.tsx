import PageHero from "@/components/PageHero";

export default function Page() {
  const councilData = [
    {
      sr: 1,
      name: "Dr. Vivekkumar Redasani",
      designation: "Principal",
      position: "Chairman",
    },
    {
      sr: 2,
      name: "Ms. Mohini Tayade",
      designation: "Assistant Professor",
      position: "Secretary",
    },
    {
      sr: 3,
      name: "Mr. Sahil Yadav",
      designation: "General Secretary",
      position: "Member",
    },
    {
      sr: 4,
      name: "Ms. Smruti Zodape",
      designation: "Cultural Secretary",
      position: "Member",
    },
    {
      sr: 5,
      name: "Mr. Chinmay Patil",
      designation: "Sports Secretary",
      position: "Member",
    },
    {
      sr: 6,
      name: "Ms. Tanishka Patil",
      designation: "Ladies Representative",
      position: "Member",
    },
    {
      sr: 7,
      name: "Ms. Purva Patil",
      designation: "Class Representative",
      position: "Member",
    },
    {
      sr: 8,
      name: "Mr. Kuldeep Yadav",
      designation: "Physical Director",
      position: "Member",
    },
  ];

  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Student Council"
        description="Meet the student council members representing leadership, academics, and student activities."
      />

      <section className="bg-gray-50 py-16 text-[#132347]">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold">
              Student Council Members
            </h2>
            <p className="text-gray-600">
              Academic Year 2025–2026
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              
              <thead className="bg-[#132347] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Sr. No.</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Designation</th>
                  <th className="px-4 py-3 text-left">Position</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-gray-700">
                {councilData.map((member) => (
                  <tr key={member.sr} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{member.sr}</td>
                    <td className="px-4 py-3">{member.name}</td>
                    <td className="px-4 py-3">{member.designation}</td>
                    <td className="px-4 py-3">{member.position}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </section>
    </>
  );
}