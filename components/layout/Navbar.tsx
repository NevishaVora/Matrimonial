"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Container from "../common/Container";
import { navLinks } from "@/constants/navLinks";
import AuthModal from "../common/AuthModal";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const [authOpen, setAuthOpen] = useState(false);
    const [authType, setAuthType] = useState<"login" | "register">("login");

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const openLogin = () => {
        setAuthType("login");
        setAuthOpen(true);
    };

    const openRegister = () => {
        setAuthType("register");
        setAuthOpen(true);
    };

    return (
        <>
            {/* Background Blur Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                />
            )}

            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scroll
                        ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
                        : "bg-transparent py-5"
                    }`}
            >
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/#home" className="flex items-center">
                            <img
                                src="/Images/logo-bg.png"
                                alt="Logo"
                                className="w-[80px] h-[70px]"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="font-medium text-[#C7A54B]"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button
                                onClick={openLogin}
                                className="font-medium text-[#C7A54B] cursor-pointer"
                            >
                                Login
                            </button>

                            <button
                                onClick={openRegister}
                                className="rounded-full bg-[#C7A54B] px-5 py-2 text-white cursor-pointer hover:bg-[#aa8731]"
                            >
                                Register
                            </button>
                        </div>

                        {/* Mobile Icon */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="relative z-[60] lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg"
                        >
                            {open ? (
                                <HiXMark className="h-7 w-7 text-[#C7A54B]" />
                            ) : (
                                <HiBars3 className="h-7 w-7 text-[#C7A54B]" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`relative z-50 overflow-hidden transition-all duration-500 lg:hidden ${open ? "mt-5 max-h-[500px]" : "max-h-0"
                            }`}
                    >
                        <div className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-2xl">
                            {navLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="font-medium text-[#C7A54B]"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    openLogin();
                                }}
                                className="text-left font-medium text-[#C7A54B]"
                            >
                                Login
                            </button>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    openRegister();
                                }}
                                className="rounded-full bg-[#C7A54B] py-3 text-white hover:bg-[#aa8731]"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </Container>
            </header>

            <AuthModal
                open={authOpen}
                onClose={() => setAuthOpen(false)}
                type={authType}
            />
        </>
    );
}