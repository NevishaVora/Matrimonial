import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const benefits = [
  {
    title: "100% Verified Profiles",
    desc: "Genuine members with secure profile verification.",
  },
  {
    title: "Safe & Secure Platform",
    desc: "Your privacy is always protected with advanced security.",
  },
  {
    title: "Dedicated Support",
    desc: "Our relationship experts are here to help you anytime.",
  },
];

export default function RegisterForm() {
  return (
    <section className="bg-[var(--color-golden-50)] py-6 sm:py-10 lg:py-12">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <SectionTitle
              center={false}
              subtitle="Join Today"
              title="Create Your Profile & Find Your Perfect Match"
              description="Register today and become part of thousands of happy families who trusted our platform."
            />

            <div className="mt-8 space-y-6 sm:mt-10">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-golden-200)] text-lg font-bold text-[var(--color-golden)] sm:h-12 sm:w-12 sm:text-xl">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-golden)] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[var(--color-maroon)] sm:text-base sm:leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[24px] border border-[var(--color-golden-300)] bg-white p-6 shadow-xl sm:rounded-[30px] sm:p-8 lg:rounded-[35px] lg:p-10">
            <h3 className="mb-6 text-2xl font-bold text-[var(--color-golden)] sm:mb-8 sm:text-3xl">
              Register Now
            </h3>

            <form className="space-y-5">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-[var(--color-golden)] bg-white px-4 py-3 text-[var(--color-maroon)] placeholder:text-[var(--color-maroon)] outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-golden-20)] sm:px-5 sm:py-4"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[var(--color-golden)] bg-white px-4 py-3 text-[var(--color-maroon)] placeholder:text-[var(--color-maroon)] outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-golden-20)] sm:px-5 sm:py-4"
              />

              {/* Mobile */}
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl border border-[var(--color-golden)] bg-white px-4 py-3 text-[var(--color-maroon)] placeholder:text-[var(--color-maroon)] outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-golden-20)] sm:px-5 sm:py-4"
              />

              {/* Gender & Age */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-[var(--color-golden)] bg-white px-4 py-3 pr-10 text-[var(--color-maroon)] outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-golden-20)] sm:px-5 sm:py-4 sm:pr-12"
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>

                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-golden)]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-[var(--color-golden)] bg-white px-4 py-3 pr-10 text-[var(--color-maroon)] outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-golden-20)] sm:px-5 sm:py-4 sm:pr-12"
                  >
                    <option value="" disabled>
                      Age
                    </option>
                    <option>18 - 25</option>
                    <option>26 - 30</option>
                    <option>31 - 35</option>
                    <option>36 - 40</option>
                    <option>41+</option>
                  </select>

                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-golden)]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* City */}
              <input
                type="text"
                placeholder="City"
                className="w-full rounded-xl border border-[var(--color-golden)] bg-white px-4 py-3 text-[var(--color-maroon)] placeholder:text-[var(--color-maroon)] outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-golden-20)] sm:px-5 sm:py-4"
              />

              {/* Religion */}
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-[var(--color-golden)] bg-white px-4 py-3 pr-10 text-[var(--color-maroon)] outline-none transition-all duration-300 focus:ring-2 focus:ring-[var(--color-golden-20)] sm:px-5 sm:py-4 sm:pr-12"
                >
                  <option value="" disabled>
                    Religion
                  </option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Jain</option>
                  <option>Christian</option>
                  <option>Sikh</option>
                  <option>Other</option>
                </select>

                <svg
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-golden)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Button */}
              <Button className="w-full py-3 text-base sm:py-4 sm:text-lg">
                Create Free Account
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}