import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"; 
import StatsSection from "./components/StatsSection";
import About from "./components/About";
import Brands from "./components/Brands";
import Album from "./components/Album";
import Expertise from "./components/Expertise";
import Wait from "./components/Wait";
import Clients from "./components/Clients";
import Insightfull from "./components/Insightfull";
import FAQFrenzy from "./components/FAQFrenzy";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      {/* Routes */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statssection" element={<StatsSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/album" element={<Album />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/wait" element={<Wait />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/insightfull" element={<Insightfull />} />
        <Route path="/FAQFrenzy" element={<FAQFrenzy />} />
        <Route path="/contact" element={<Contact />} />
        {/* Define other routes here */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
