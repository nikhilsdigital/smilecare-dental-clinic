import Doctors from "@/components/home/Doctors";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Process />
      <Doctors />
      <Testimonials />
      <FAQ />
    </main>
  );
}
