import './index.css';
import Hero from './Components/Hero';
import Aboutus from './Components/Aboutus';
import { DestinationsSection } from './Components/DestinationsSection';
import { Pricing } from './Components/Pricing';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
 

  return (
    <div className="bg-[#C5E188] bg-fixed text-gray-800">

      <Navbar />
      <Hero />
      <Aboutus />
      <DestinationsSection />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
