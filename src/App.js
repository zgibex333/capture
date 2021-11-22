import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />}></Route>
        <Route path="/work" exact element={<OurWork />}></Route>
        <Route path="/work/:id" exact element={<MovieDetail />}></Route>
        <Route path="/contact" exact element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
