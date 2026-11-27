import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { ServiceArea } from "@/components/sections/service-area";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { ScrollMotion } from "@/components/ui/scroll-motion";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#layanan">
        Lewati ke layanan
      </a>
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollMotion />
    </>
  );
}
