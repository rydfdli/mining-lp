import About from "./components/about";
import Heroes from "./components/heroes";
import Contact from "./components/contact";
import Counter from "./components/counter";
import Services from "./components/services";
import Blogs from "./components/blogs";

export default function Home() {
  return (
    <>
      <Heroes />
      <Counter />
      <About />
      <Services />
      <Blogs />
      <Contact />
    </>
  );
}
