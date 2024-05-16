import { useParams } from "react-router-dom";
import { productData } from "../assets/products";
import Breadcrumbs from "../Components/Breadcrumbs";
import Product from "../Components/Product";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const ProductPage = () => {
  const { id } = useParams();

  const product = productData.find((product) => product.id == id);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Breadcrumbs name={product.name} />
      <Product product={product} />
    </>
  );
};

export default ProductPage;
