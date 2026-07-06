import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FFFDF8] py-6 sm:py-10 lg:py-12"
    >
      <Container>
        <SectionTitle
          subtitle="Contact"
          title="Let's Help You Find Your Perfect Match"
          description="Have questions? Get in touch with our relationship experts."
        />

        <div className="mt-10 grid items-start gap-12 sm:mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF4D8] text-base text-[#C7A54B] shadow sm:h-14 sm:w-14 sm:text-lg">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#C7A54B] sm:text-xl">
                  Phone
                </h4>

                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF4D8] text-base text-[#C7A54B] shadow sm:h-14 sm:w-14 sm:text-lg">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#C7A54B] sm:text-xl">
                  Email
                </h4>

                <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
                  info@matrimony.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF4D8] text-base text-[#C7A54B] shadow sm:h-14 sm:w-14 sm:text-lg">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#C7A54B] sm:text-xl">
                  Office
                </h4>

                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[24px] border border-[#F3E7C4] bg-white p-6 shadow-xl sm:rounded-[30px] sm:p-8 lg:rounded-[35px] lg:p-10">
            <h3 className="mb-6 text-2xl font-bold text-[#C7A54B] sm:mb-8 sm:text-3xl">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
              />

              <textarea
                rows={6}
                placeholder="Write Your Message"
                className="w-full resize-none rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
              />

              <Button className="w-full py-3 text-base sm:py-4 sm:text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}