import Image from "next/image";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import {
  FaHeart,
  FaUserShield,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHeart className="text-lg text-[#C7A54B] sm:text-xl" />,
    title: "Trusted Matchmaking",
    description:
      "Helping families build lifelong relationships with trust.",
  },
  {
    icon: <FaUserShield className="text-lg text-[#C7A54B] sm:text-xl" />,
    title: "Verified Members",
    description:
      "Every profile is verified for a safe matchmaking experience.",
  },
  {
    icon: <FaUsers className="text-lg text-[#C7A54B] sm:text-xl" />,
    title: "Happy Families",
    description:
      "Thousands of successful marriages across the country.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-6 sm:py-10 lg:py-12">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Image */}
          <div className="relative order-1">
            <div className="overflow-hidden rounded-[24px] shadow-2xl sm:rounded-[30px] lg:rounded-[35px]">
              <Image
                src="/Images/about-2.jpg"
                alt="About"
                width={700}
                height={700}
                priority
                className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[650px]"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-2">
            <SectionTitle
              center={false}
              subtitle="About Us"
              title="Creating Beautiful Relationships Since 2000"
            />

            <p className="mb-8 text-base leading-7 text-gray-600 sm:mb-10 sm:text-lg sm:leading-8">
              We believe marriage is not just about finding a partner but
              building a lifetime relationship based on trust, understanding,
              and shared values. Our dedicated team ensures every profile is
              genuine, giving you complete confidence while searching for your
              perfect life partner.
            </p>

            {/* Features */}
            <div className="space-y-6 sm:space-y-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF7E5] sm:h-14 sm:w-14">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-[#C7A54B] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-[#C7A54B]" />
                <span className="text-sm font-medium text-[#C7A54B] sm:text-base">
                  100% Genuine Profiles
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-[#C7A54B]" />
                <span className="text-sm font-medium text-[#C7A54B] sm:text-base">
                  Privacy Protected
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-[#C7A54B]" />
                <span className="text-sm font-medium text-[#C7A54B] sm:text-base">
                  Trusted Families
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-[#C7A54B]" />
                <span className="text-sm font-medium text-[#C7A54B] sm:text-base">
                  24×7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}