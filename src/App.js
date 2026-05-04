import "./styles.css";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Projects from "./sections/Projects/Project";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
