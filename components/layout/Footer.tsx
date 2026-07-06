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
        <footer className="bg-[var(--color-golden-300)] pt-8 pb-8 text-[var(--color-maroon)] sm:pt-14 lg:pt-16">
            <Container>
                {/* Top Section */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                    {/* Company */}
                    <div>
                        <Link href="/#home" className="flex items-center">
                            <img
                                src="/Images/logo-bg.png"
                                alt="Logo"
                                className="w-[130px] h-[100px]"
                            />
                        </Link>

                        <p className="mt-5 text-sm leading-7 text-[var(--color-maroon)] sm:mt-6 sm:text-base sm:leading-8">
                            We help people find genuine life partners through a trusted,
                            secure and premium matchmaking platform.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                                (Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-golden-dark)] text-white transition hover:bg-[var(--color-golden)] sm:h-11 sm:w-11"
                                    >
                                        <Icon />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-4">
                        <h3 className="mb-5 text-lg font-semibold sm:mb-6 sm:text-xl">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 sm:space-y-4">
                            {quickLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-[var(--color-maroon)] transition hover:text-[var(--color-golden)] sm:text-base"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="mt-4">
                        <h3 className="mb-5 text-lg font-semibold sm:mb-6 sm:text-xl">
                            Our Services
                        </h3>

                        <ul className="space-y-3 sm:space-y-4">
                            {services.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-[var(--color-maroon)] transition hover:text-[var(--color-golden)] sm:text-base"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="mt-4">
                        <h3 className="mb-5 text-lg font-semibold sm:mb-6 sm:text-xl">
                            Contact Us
                        </h3>

                        <div className="space-y-5 sm:space-y-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <FaPhoneAlt className="mt-1 shrink-0 text-[var(--color-golden)]" />

                                <p className="text-sm text-[var(--color-maroon)] sm:text-base">
                                    +91 98765 43210
                                </p>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <FaEnvelope className="mt-1 shrink-0 text-[var(--color-golden)]" />

                                <p className="break-all text-sm text-[var(--color-maroon)] sm:text-base">
                                    info@matrimony.com
                                </p>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <FaMapMarkerAlt className="mt-1 shrink-0 text-[var(--color-golden)]" />

                                <p className="text-sm leading-6 text-[var(--color-maroon)] sm:text-base sm:leading-7">
                                    Ahmedabad, Gujarat, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-golden-800)] pt-6 text-center sm:mt-12 sm:pt-8 lg:flex-row lg:text-left">
                    <p className="text-sm text-[var(--color-maroon)] sm:text-base">
                        © 2026 Matrimony. All Rights Reserved.
                    </p>

                    <p className="flex items-center gap-2 text-sm text-[var(--color-maroon)] sm:text-base">
                        Made with
                        <FaHeart className="text-[var(--color-maroon)]" />
                        for Happy Families
                    </p>
                </div>
            </Container>
        </footer>
    );
}