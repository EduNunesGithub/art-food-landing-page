import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <main className="flex flex-col w-full">
      <section className="flex items-center justify-center mb-16 px-6 w-full">
        <div className="flex items-center max-w-278 w-full">
          <Hero />
        </div>
      </section>
    </main>
  );
}
