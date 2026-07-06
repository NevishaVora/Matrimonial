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
        <footer className="bg-[var(--color-golden-300)] py-10 text-[var(--color-maroon)] lg:py-16">
            <Container>
                {/* Top Section */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

                    {/* Company */}
                    <div className="lg:col-span-4">
                        <Link href="/#home" className="inline-flex">
                            <img
                                src="/Images/logo-bg.png"
                                alt="Logo"
                                className="w-[130px] h-[120px]"
                            />
                        </Link>

                        <p className="mt-5 max-w-md text-[15px] leading-8 text-[var(--color-maroon)]">
                            Aaha Kalyanam is a globally trusted matrimony service
                            offering verified profiles, personalized matchmaking,
                            privacy, and security to help you find your perfect
                            life partner with confidence and trust.
                        </p>

                        <p className="mt-5 font-medium text-[var(--color-maroon)]">
                            "May your bonds be wonderfully perfect! 💍"
                        </p>

                        <div className="mt-8 flex gap-4">
                            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                                (Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-golden-dark)] text-white transition duration-300 hover:bg-[var(--color-golden)]"
                                    >
                                        <Icon />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-5 lg:col-span-2">
                        <h3 className="mb-6 text-2xl font-semibold">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-base transition hover:text-[var(--color-golden)]"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="mt-5 lg:col-span-3">
                        <h3 className="mb-6 text-2xl font-semibold">
                            Our Services
                        </h3>

                        <ul className="space-y-4">
                            {services.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-base transition hover:text-[var(--color-golden)]"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="mt-5 lg:col-span-3">
                        <h3 className="mb-6 text-2xl font-semibold">
                            Contact Us
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="mt-1 text-[var(--color-golden)]" />
                                <p className="text-base">
                                    +91 98765 43210
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaEnvelope className="mt-1 text-[var(--color-golden)]" />
                                <p className="text-base break-all">
                                    info@matrimony.com
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="mt-1 text-[var(--color-golden)]" />
                                <p className="text-base leading-7">
                                    Ahmedabad, Gujarat, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-golden-800)] pt-8 lg:flex-row">
                    <p className="text-center text-sm lg:text-left">
                        © 2026 Aaha Kalyanam. All Rights Reserved.
                    </p>

                    <p className="flex items-center gap-2 text-sm">
                        Made with
                        <FaHeart className="text-[var(--color-maroon)]" />
                        for Happy Families
                    </p>
                </div>
            </Container>
        </footer>
    );
}