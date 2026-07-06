import {
  FaUserPlus,
  FaIdCard,
  FaSearch,
  FaHeart,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    number: "01",
    icon: <FaUserPlus />,
    title: "Register Account",
    description:
      "Create your free account in just a few minutes and begin your journey.",
  },
  {
    number: "02",
    icon: <FaIdCard />,
    title: "Complete Your Profile",
    description:
      "Add your personal details, preferences and upload your best photographs.",
  },
  {
    number: "03",
    icon: <FaSearch />,
    title: "Find Perfect Match",
    description:
      "Browse verified profiles and discover compatible life partners.",
  },
  {
    number: "04",
    icon: <FaHeart />,
    title: "Start New Journey",
    description:
      "Connect with your match and begin a beautiful lifelong relationship.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionTitle
          subtitle="How It Works"
          title="Find Your Soulmate in 4 Simple Steps"
          description="Our matchmaking process is simple, secure and designed to help you connect with genuine people."
        />

        <div className="relative mt-10 sm:mt-14 lg:mt-20">
          {/* Desktop Timeline */}
          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-[#F2E5BF] lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Icon Circle */}
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C7A54B] text-2xl text-white shadow-xl transition-transform duration-300 hover:scale-105 sm:h-24 sm:w-24 sm:text-3xl">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="mt-5 inline-flex rounded-full bg-[#FFF5D8] px-4 py-1 text-xs font-semibold text-[#C7A54B] sm:mt-6 sm:text-sm">
                  Step {step.number}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-[#C7A54B] sm:mt-5 sm:text-xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}