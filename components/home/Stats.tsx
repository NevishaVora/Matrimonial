import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { stats } from "@/constants/stats";

export default function Stats() {
  return (
    <section className="bg-[var(--color-golden-50)] py-6 sm:py-10 lg:py-12">
      <Container>
        <SectionTitle
          subtitle="Our Achievements"
          title="Trusted by Thousands of Families"
          description="We connect genuine people looking for meaningful relationships with complete trust and privacy."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-[var(--color-golden-300)] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-2xl lg:hover:-translate-y-2 lg:p-8"
            >
              <h3 className="text-3xl font-bold text-[var(--color-golden)] sm:text-4xl">
                {item.number}
              </h3>

              <h4 className="mt-4 text-lg font-semibold text-[var(--color-maroon)] sm:mt-5 sm:text-xl">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-[var(--color-maroon)] sm:mt-4 sm:leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}