import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Routes, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import ScrollTop from "./components/ScrollTop";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Animation

import { AnimatePresence } from "framer-motion/dist/framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />}></Route>
          <Route path="/work" exact element={<OurWork />}></Route>
          <Route path="/work/:id" exact element={<MovieDetail />}></Route>
          <Route path="/contact" exact element={<ContactUs />}></Route>
        </Routes>
        <ScrollTop />
      </AnimatePresence>
    </div>
  );
}

export default App;
