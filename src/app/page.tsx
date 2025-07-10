import Landing from "../components/homescreen/landing";
import IconsList from "../components/homescreen/IconsList";
import Projects from "../components/homescreen/projects";
import TimeLine from "../components/projects/timeline";
import Lines from "../components/homescreen/lines";

export default function Home() {
  return (
    <main className="gap-10 flex flex-col origin-center">
      <Landing />
      <Lines />
      {/* <IconsList /> */}
      <Projects />
      {/* <TimeLine /> */}
    </main>
  );
}
