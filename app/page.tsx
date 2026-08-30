import type { Metadata } from "next";
import HomePage from "@/features/car-rental/components/HomePage";

export const metadata: Metadata = {
  title: "VMRS Travel | Premium Tourist Car Rental",
  description:
    "Book affordable tourist and rental cars for family trips, airport transfers, and local sightseeing with VMRS Travel.",
  keywords: ["tourist car rental", "airport taxi", "travel in Indore", "VMRS Travel"],
};

export default function Home() {
  return <HomePage />;
}
