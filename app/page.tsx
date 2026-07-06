import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import RegisterForm from "@/components/home/RegisterForm";
import Stats from "@/components/home/Stats";
import SuccessStories from "@/components/home/SuccessStories";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <Process />
      <SuccessStories />
      <Testimonials />
      <RegisterForm />
      <Contact />
    </>
  );
}