import Landing from "../components/homescreen/landing";
import Services from "../components/homescreen/Services";
import Sections from "../components/homescreen/sections";

export default function Home() {
  return (
    <main className="flex flex-col origin-center">
      <Landing />
      <Services />
      <Sections />
    </main>
  );
}
