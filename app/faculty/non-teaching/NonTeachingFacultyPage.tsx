import PageHero from "@/components/PageHero";

const STAFF = [
  {
    sr: 1,
    name: "Mr. Dhanraj Marathe",
    designation: "Admin Clerk",
  },
  {
    sr: 2,
    name: "Mr. Sagar Bari",
    designation: "Accounts",
  },
  {
    sr: 3,
    name: "Mr. Hemant Bawa",
    designation: "Librarian",
  },
  {
    sr: 4,
    name: "Mr. Kuldeep Yadav",
    designation: "Physical Director",
  },
  {
    sr: 5,
    name: "Mr. Prashant Gurav",
    designation: "Purchase Department",
  },
  {
    sr: 6,
    name: "Mr. Danish Malik",
    designation: "Lab Technician",
  },
  {
    sr: 7,
    name: "Mrs. Vishakha Gosavi",
    designation: "Lab Technician",
  },
  {
    sr: 8,
    name: "Mr. Salman Pinjari",
    designation: "IT Technician",
  },
];

export default function NonTeachingFacultyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Non-Teaching Staff"
        description="Meet the dedicated administrative and technical staff supporting academic and institutional operations."
      />

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#132347] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Sr. No.</th>
                <th className="px-6 py-3 text-left">Name of Staff</th>
                <th className="px-6 py-3 text-left">Designation</th>
              </tr>
            </thead>

            <tbody>
              {STAFF.map((staff) => (
                <tr
                  key={staff.sr}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">{staff.sr}</td>
                  <td className="px-6 py-4 font-medium text-[#132347]">
                    {staff.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {staff.designation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}