import { Link } from "react-router-dom";
import Berks from "../Components/Berks";
import ProductsContainer from "../Components/ProductsContainer";
import ProductsSlider from "../Components/ProductsSlider";
import banner from "../assets/banner.jpeg";
import { productData, productSlider } from "../assets/products";
const HomePage = () => {
  return (
    <main>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <Berks />
      <ProductsContainer
        name={"productsShow"}
        products={productSlider}
        title="Promotion Jogging femmes"
      />
      <ProductsSlider products={productSlider} />
      <ProductsContainer
        name={"products"}
        products={productData}
        title="Oversized Hoodie Anime"
      />
      <div className="btn-container">
        <Link to="/products">
          <div className="btn-black">Voir Plus</div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;