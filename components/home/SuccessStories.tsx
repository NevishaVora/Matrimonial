import Image from "next/image";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const stories = [
  {
    id: 1,
    image: "/Images/ss-2.jpg",
    names: "Rahul & Priya",
    location: "Ahmedabad",
    text: "We found each other through this platform. The journey was smooth, secure, and truly life-changing.",
  },
  {
    id: 2,
    image: "/Images/ss-3.jpg",
    names: "Amit & Neha",
    location: "Surat",
    text: "Within a few weeks we met our perfect match. Thank you for helping us start our beautiful journey together.",
  },
  {
    id: 3,
    image: "/Images/ss-4.jpg",
    names: "Karan & Riya",
    location: "Vadodara",
    text: "A trusted platform with genuine profiles. We are grateful for finding our soulmate here.",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="stories"
      className="bg-[var(--color-golden-50)] py-6 sm:py-10 lg:py-12"
    >
      <Container>
        <SectionTitle
          subtitle="Success Stories"
          title="Real Couples, Real Happiness"
          description="Thousands of couples have started their beautiful journey with us."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="overflow-hidden rounded-[24px] bg-white shadow-lg transition-all duration-300 hover:shadow-2xl lg:hover:-translate-y-3 lg:rounded-[30px]"
            >
              {/* Image */}
              <div className="relative h-64 w-full sm:h-72 lg:h-[300px]">
                <Image
                  src={story.image}
                  alt={story.names}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 lg:p-8">
                <h3 className="text-lg font-semibold text-[var(--color-golden)] sm:text-xl">
                  {story.names}
                </h3>

                <p className="mt-2 text-sm font-medium text-[var(--color-golden)] sm:text-base">
                  {story.location}
                </p>

                <p className="mt-4 text-sm leading-6 text-[var(--color-maroon)] sm:mt-5 sm:text-base sm:leading-7">
                  {story.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}