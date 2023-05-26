import './App.css';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { Navbar } from './components/navbar/Navbar';
import { PreLoader } from './components/preLoader/PreLoader';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <PreLoader />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
