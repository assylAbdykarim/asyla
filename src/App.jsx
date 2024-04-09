import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./companents/UI/Header/Header";
import Home from "./companents/pages/Home";
import About from "./companents/pages/About";
import Contacts from "./companents/pages/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
