import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import NavBar from "./Components/NavBar";
import { Client } from "./Components/Clients";
import Projects from "./Components/Projects";

export default function App() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <Hero />
      <Features />
      <Client />
      <Projects />
      <Footer />
    </div>
  );
}
