import type { Metadata } from "next";
import TeachingFacultyPage from "./TeachingFacultyPage";

export const metadata: Metadata = {
  title: "Teaching Faculty",
  description:
    "Meet the teaching faculty members of SVKM's College of Pharmacy, Shirpur.",
};

export default function Page() {
  return <TeachingFacultyPage />;
}
