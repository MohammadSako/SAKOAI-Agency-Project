import Landing from "../components/homescreen/landing";
import Services from "../components/homescreen/Services";
import Sections from "../components/homescreen/sections";
import Contact from "../components/Sections/contact";
import Faq from "../components/Sections/faq";

export default function Home() {
  return (
    <main className="flex flex-col origin-center">
      <Landing />
      <Services />
      <Sections />
      <Faq />
      <Contact />
    </main>
  );
}
