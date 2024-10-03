import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import CopyOfAbout from "./components/CopyOfAbout";
import Brokerage from "./components/Brokerage";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/*Using flex-grow to push the footer to the bottom */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/copy-about" element={<CopyOfAbout />} />
            <Route path="/brokerage" element={<Brokerage />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
