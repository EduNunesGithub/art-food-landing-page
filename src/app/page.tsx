import { HeroSection } from "@/app/page-client";
import { Benefits } from "@/components/benefits";
import { ContactCta } from "@/components/contact-cta";
import { HowItWorks } from "@/components/how-it-works";

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />

      <section className="bg-[#F4F5F7] flex items-center justify-center px-6 py-12 w-full">
        <div className="flex items-center max-w-278 w-full">
          <HowItWorks />
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-12 w-full">
        <div className="flex items-center max-w-278 w-full">
          <Benefits />
        </div>
      </section>

      <section className="bg-primary flex items-center justify-center px-6 py-12 w-full">
        <div className="flex items-center max-w-278 w-full">
          <ContactCta />
        </div>
      </section>
    </main>
  );
}
