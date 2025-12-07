import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/ShowCase";
import Performance from "./components/Performance";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />

      <Performance />
      <Features />
    </main>
  );
}

export default App;
