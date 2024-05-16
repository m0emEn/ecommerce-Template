import { useParams } from "react-router-dom";
import { productData } from "../assets/products";
import Breadcrumbs from "../Components/Breadcrumbs";
import Product from "../Components/Product";
const ProductPage = () => {
  const { id } = useParams();
  const product = productData.find((product) => product.id == id);
  return (
    <>
      <Breadcrumbs name={product.name} />
      <Product product={product} />
    </>
  );
};

export default ProductPage;
