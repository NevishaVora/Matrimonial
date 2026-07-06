import {
  FaUserShield,
  FaHeart,
  FaGlobeAsia,
  FaHeadset,
  FaLock,
  FaHandshake,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const features = [
  {
    icon: <FaUserShield />,
    title: "Verified Profiles",
    description:
      "Every profile is manually verified to ensure a trusted matchmaking experience.",
  },
  {
    icon: <FaHeart />,
    title: "Perfect Matches",
    description:
      "Advanced matching helps you find the most compatible life partner.",
  },
  {
    icon: <FaLock />,
    title: "100% Privacy",
    description:
      "Your personal information stays protected with complete privacy control.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Support",
    description:
      "Our relationship experts are always available to help and guide you.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Worldwide Members",
    description:
      "Connect with verified brides and grooms from across the globe.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Since 2000",
    description:
      "Helping thousands of families build lifelong relationships with confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-golden-500)] py-6 sm:py-10 lg:py-12">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Families Trust Our Platform"
          description="We combine technology, trust, and personalized service to make your partner search simple and secure."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-2xl lg:hover:-translate-y-3 lg:p-8"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-golden-100)] text-2xl text-[var(--color-golden)] transition-all duration-300 group-hover:bg-[var(--color-golden)] group-hover:text-white sm:h-16 sm:w-16 sm:text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-[var(--color-golden)] sm:mt-6 sm:text-xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-[var(--color-maroon)] sm:mt-4 sm:text-base sm:leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}