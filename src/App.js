import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ProductPage from "./Screens/ProductPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
