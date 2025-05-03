import './styles/main.scss'; // Your SCSS entry point

import Navbar from './components/Navbar';  // Still a component, so keep it here
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
