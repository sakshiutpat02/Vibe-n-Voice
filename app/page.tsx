import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <div className="flex w-full justify-center py-12">
        <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
      </div>
      <CTASection />
    </>
  );
}
