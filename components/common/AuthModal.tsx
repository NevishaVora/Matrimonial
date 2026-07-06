"use client";

import { HiXMark } from "react-icons/hi2";

interface Props {
  open: boolean;
  onClose: () => void;
  type: "login" | "register";
}

export default function AuthModal({
  open,
  onClose,
  type,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-y-auto rounded-[24px] border border-[#F3E7C4] bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] sm:rounded-[30px] sm:p-8 lg:rounded-[35px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 transition hover:bg-[#FFF4D8] sm:right-5 sm:top-5"
        >
          <HiXMark className="h-6 w-6 text-gray-500 transition hover:text-[#C7A54B] sm:h-7 sm:w-7" />
        </button>

        {/* Heading */}
        <h2 className="mb-6 text-center text-2xl font-bold text-[#C7A54B] sm:mb-8 sm:text-3xl">
          {type === "login" ? "Login" : "Create Account"}
        </h2>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5">
          {/* Full Name */}
          {type === "register" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
          />

          {/* Confirm Password */}
          {type === "register" && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-[#C7A54B] bg-white px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C7A54B]/20 sm:px-5 sm:py-4"
            />
          )}

          {/* Forgot Password */}
          {type === "login" && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-[#C7A54B] transition hover:text-[#aa8731]"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#C7A54B] py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#aa8731] hover:shadow-lg sm:py-4 sm:text-lg"
          >
            {type === "login" ? "Login" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}