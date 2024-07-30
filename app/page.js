import About from "./components/about";
import Carousel from "./components/carousel";
import Contact from "./components/contact";
import Counter from "./components/counter";

export default function Home() {
  return (
    <>
      <Carousel />
      <Counter />
      <About />
      <Contact />
    </>
  );
}
