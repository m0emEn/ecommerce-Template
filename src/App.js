import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ProductPage from "./Screens/ProductPage";
import CategoryProduct from "./Screens/CategoryPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products/:category" element={<CategoryProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
