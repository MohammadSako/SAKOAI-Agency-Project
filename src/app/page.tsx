import Landing from "../components/homescreen/landing";
import IconsList from "../components/homescreen/IconsList";
import TimeLine from "../components/projects/timeline";
import Lines from "../components/homescreen/lines";
import Sections from "../components/homescreen/sections";

export default function Home() {
  return (
    <main className="gap-10 flex flex-col origin-center">
      <Landing />
      <Lines />
      {/* <IconsList /> */}
      {/* <Sections /> */}
      {/* <TimeLine /> */}
    </main>
  );
}
