import Intro from "./components/Intro";
import Serve from "./components/Serve";
import Term from "./components/Term";
import Next from "./components/Next";
import CanvasRain from "./components/CanvasRain/CanvasRain";
import { useWow, useScrollHeader } from "./hooks";

export default function App() {
  useWow();
  useScrollHeader();

  return (
    <>
      <Intro />
      <Serve />
      <Term />
      <Next />
      <CanvasRain />
    </>
  );
}
