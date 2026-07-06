import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

import Container from "../common/Container";

const quickLinks = [
  "Home",
  "About",
  "How It Works",
  "Success Stories",
  "Testimonials",
  "FAQ",
];

const services = [
  "Bride Profiles",
  "Groom Profiles",
  "Premium Membership",
  "Privacy & Security",
  "Relationship Manager",
  "Contact Support",
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] pt-16 pb-8 text-white sm:pt-20 lg:pt-24">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-[#C7A54B] sm:text-3xl">
              Matrimony
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
              We help people find genuine life partners through a trusted,
              secure and premium matchmaking platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#252525] transition hover:bg-[#C7A54B] sm:h-11 sm:w-11"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold sm:mb-6 sm:text-xl">
              Quick Links
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[#C7A54B] sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold sm:mb-6 sm:text-xl">
              Our Services
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[#C7A54B] sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold sm:mb-6 sm:text-xl">
              Contact Us
            </h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <FaPhoneAlt className="mt-1 shrink-0 text-[#C7A54B]" />

                <p className="text-sm text-gray-400 sm:text-base">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaEnvelope className="mt-1 shrink-0 text-[#C7A54B]" />

                <p className="break-all text-sm text-gray-400 sm:text-base">
                  info@matrimony.com
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#C7A54B]" />

                <p className="text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-6 text-center sm:mt-12 sm:pt-8 lg:flex-row lg:text-left">
          <p className="text-sm text-gray-500 sm:text-base">
            © 2026 Matrimony. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-500 sm:text-base">
            Made with
            <FaHeart className="text-red-500" />
            for Happy Families
          </p>
        </div>
      </Container>
    </footer>
  );
}