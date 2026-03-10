import type { Metadata } from "next";
import NonTeachingFacultyPage from "./NonTeachingFacultyPage";

export const metadata: Metadata = {
  title: "Non-Teaching Faculty",
  description:
    "Meet the non-teaching faculty members of SVKM's College of Pharmacy, Shirpur.",
};

export default function Page() {
  return <NonTeachingFacultyPage />;
}
