import PageHero from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News and Bulletins",
  description:
    "Read the latest announcements, notices, and event highlights from SVKM's College of Pharmacy, Shirpur.",
};

const newsData = [
  {
    title:
      "SVKM's College of Pharmacy Students Selected for National E-Yuva Fellowship",
    description:
      "Students of SVKM's College of Pharmacy, Shirpur achieved national recognition through the prestigious E-Yuva Fellowship program. Their research project focuses on developing a novel biodegradable film using ginger and pteridoxime extracts for market-ready nutraceutical applications, showcasing innovation and research excellence.",
    pdf: "/images/news/paper_news-EYuva_29052026.jpeg",
    image: "/images/news/paper_news-EYuva_29052026.jpeg",
    date: "16 May 2026",
  },
  {
    title: "Industrial Visit by SVKM's College of Pharmacy Students",
    description:
      "Students of SVKM's College of Pharmacy, Shirpur participated in an industrial visit to gain practical exposure to pharmaceutical manufacturing, packaging, and quality control processes.",
    pdf: "/docs/news/industrial_report_06052026.pdf",
    image: "/images/news/industrial_report_06052026.jpeg",
    date: "06 May 2026",
  },
  {
    title:
      "Students Serving first-aid service at Nageshwar temple on the auspicious occasion of Mahashivratri",
    description:
      "SVKM’s College of Pharmacy students conducted a social service activity at Nageshwar Temple on the occasion of Mahashivratri, showing their commitment to society.",
    pdf: "/images/news/student_serving_first_aid_service_at_nageshwar_temple_2.jpg",
    image:
      "/images/news/student_serving_first_aid_service_at_nageshwar_temple.jpg",
    date: "26 February 2026",
  },
  {
    title: "Parents-Teachers Meet",
    description:
      "Shri Vile Parle Kelavani Mandal's College of Pharmacy, Shirpur, held a successful meeting on January 24, 2026, to discuss student progress.",
    pdf: "/docs/news/parent_teacher_meet_24012026.pdf",
    image: "/images/news/parent_teacher_meet_24012026.jpeg",
    date: "24 January 2026",
  },
  {
    title: "Republic Day 2026",
    description:
      "The institution celebrated the 77th Republic Day on January 26, 2026 with a flag-hoisting ceremony and patriotic cultural activities.",
    pdf: "/docs/news/republic_day_26012026.pdf",
    image: "/images/news/republic_day_26012026.jpeg",
    date: "26 January 2026",
  },
  {
    title: "Faculty Achievement",
    description:
      "Dr. Aishwarya Jain won 1st prize at the 74th Indian Pharmaceutical Congress for nano-formulation research.",
    pdf: "/images/news/faculty_achievement.png",
    image: "/images/news/faculty_achievement.png",
    date: "28 December 2025",
  },
  {
    title: "150 Years of Vande Mataram",
    description:
      "SVKM's College of Pharmacy celebrated the 150th Anniversary of Vande Mataram.",
    pdf: "/docs/news/vande_matram.pdf",
    image: "/images/news/vande_matram.jpg",
    date: "07 November 2025",
  },
  {
    title: "Udaan - Induction Program for First Year B.Pharmacy",
    description:
      "The induction program for first-year B.Pharmacy students was successfully conducted.",
    pdf: "/docs/news/induction_program.pdf",
    image: "/images/news/induction_program.jpg",
    date: "19 November 2025",
  },
  {
    title: "Student Orientation Program",
    description:
      "The Student Orientation Program introduced newly admitted students to the curriculum.",
    pdf: "/docs/news/orientation_program.pdf",
    image: "/images/news/orientation_program.jpg",
    date: "22 May 2025",
  },
  {
    title: "National Pharmacy Week",
    description:
      "National Pharmacy Week (NPW) 2025 was celebrated with various academic and awareness activities.",
    pdf: "/docs/news/national_pharmacy_week.pdf",
    image: "/images/news/national_pharmacy_week.jpg",
    date: "22 November 2025",
  },
];

export default function Page() {
  // Sort news by newest date
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Latest News & Bulletins"
        description="Stay updated with the latest announcements and notices"
      />

      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.map((news, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Latest badge */}
                  {index === 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                      Latest
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded w-fit mb-3">
                    {news.date}
                  </span>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {news.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                    {news.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={news.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky-900 font-medium text-sm hover:underline"
                    >
                      View More
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
