import Image from "next/image";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-golden-50)] via-white to-white pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 lg:pb-20"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full bg-[var(--color-golden-10)] blur-3xl" />

      <div className="absolute bottom-0 right-0 h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full bg-pink-100 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full bg-[var(--color-golden-50)] px-4 py-2 text-xs font-semibold text-[var(--color-golden)] sm:px-5 sm:text-sm">
              ❤️ Trusted Matrimonial Platform
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-maroon)] sm:text-4xl lg:text-5xl">
                Find Your
              <span className="block text-[var(--color-golden)]">
                Perfect Life Partner
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--color-maroon)] sm:text-lg sm:leading-8 lg:mx-0">
                Join thousands of happy couples who found their soulmate through
              our trusted matrimonial platform. Start your beautiful journey
              today.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="w-full sm:w-auto">
                <Button>Register Free</Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button variant="outline">
                  Browse Profiles
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-5 border-t border-gray-200 pt-8 sm:gap-8 lg:mt-14">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-golden)] sm:text-3xl">
                  50K+
                </h2>

                <p className="mt-2 text-xs text-[var(--color-maroon)] sm:text-base">
                  Verified Profiles
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--color-golden)] sm:text-3xl">
                  12K+
                </h2>

                <p className="mt-2 text-xs text-[var(--color-maroon)] sm:text-base">
                  Happy Couples
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--color-golden)] sm:text-3xl">
                  25+
                </h2>

                <p className="mt-2 text-xs text-[var(--color-maroon)] sm:text-base">
                  Years Trust
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[330px] sm:max-w-[420px] lg:max-w-[500px] overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[40px] shadow-2xl">
              <Image
                src="/Images/couple-2.jpg"
                alt="Couple"
                width={500}
                height={650}
                priority
                quality={100}
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[650px]"
              />

              {/* Card 1 */}
              <div className="absolute left-3 top-4 rounded-xl bg-white px-3 py-2 shadow-xl sm:left-5 sm:top-6 sm:px-5 sm:py-4">
                <h4 className="text-sm font-semibold text-[var(--color-maroon)] sm:text-base">
                  💍 Verified Profiles
                </h4>

                <p className="mt-1 text-xs text-[var(--color-maroon)] sm:text-sm">
                  100% Genuine Members
                </p>
              </div>

              {/* Card 2 */}
              <div className="absolute bottom-4 right-3 rounded-xl bg-white px-3 py-2 shadow-xl sm:bottom-6 sm:right-5 sm:px-5 sm:py-4">
                <h4 className="text-sm font-semibold text-[var(--color-maroon)] sm:text-base">
                  ❤️ 12000+ Matches
                </h4>

                <p className="mt-1 text-xs text-[var(--color-maroon)] sm:text-sm">
                  Successful Marriages
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}