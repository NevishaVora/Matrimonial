import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Ahmedabad",
    image: "/Images/ts-1.jpg",
    review:
      "We never imagined finding the perfect life partner would be this easy. Thank you for making our dream come true.",
  },
  {
    id: 2,
    name: "Rahul Patel",
    city: "Surat",
    image: "/Images/hero-couple.jpg",
    review:
      "The platform is secure, professional and easy to use. I highly recommend it to everyone looking for genuine matches.",
  },
  {
    id: 3,
    name: "Neha & Amit",
    city: "Vadodara",
    image: "/Images/about-1.jpg",
    review:
      "Excellent service and verified profiles. We found each other within a few weeks. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-6 sm:py-10 lg:py-12">
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Happy Couples Say"
          description="Real experiences from people who found their soulmate through our platform."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[24px] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl lg:rounded-[30px] lg:p-8 lg:hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute right-5 top-5 text-4xl text-[var(--color-golden)]/20 sm:right-6 sm:top-6 sm:text-5xl" />

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="h-16 w-16 rounded-full object-cover sm:h-[70px] sm:w-[70px]"
                />

                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-golden)] sm:text-xl">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[var(--color-maroon)] sm:text-base">
                    {item.city}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-5 flex gap-1 text-sm text-[var(--color-golden)] sm:mt-6 sm:text-base">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-7 text-[var(--color-maroon)] sm:mt-6 sm:text-base sm:leading-8">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}