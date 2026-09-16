import type { Metadata } from "next";
import CardShell from "@/components/card/cheezy-bytes/CardShell";
import CardHero from "@/components/card/cheezy-bytes/CardHero";
import QuickActions from "@/components/card/cheezy-bytes/QuickActions";
import CardInfoCard from "@/components/card/cheezy-bytes/CardInfoCard";
import ReviewsSection from "@/components/card/cheezy-bytes/ReviewsSection";
import CardOrderCta from "@/components/card/cheezy-bytes/CardOrderCta";

export const metadata: Metadata = {
  title: "Digital Business Card | Cheezy Bytes",
  description:
    "Save Cheezy Bytes' contact, get directions, or order on WhatsApp on the go.",
};

export default function CheezyBytesCardPage() {
  return (
    <CardShell>
      <CardHero />
      <QuickActions />
      <CardInfoCard />
      <ReviewsSection />
      <CardOrderCta />
    </CardShell>
  );
}
