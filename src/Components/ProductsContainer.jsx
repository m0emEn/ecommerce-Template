import Product from "./ProductCard";
const ProductsContainer = ({ name, products, title }) => {
  return (
    <div className={name}>
      <h2 className="products-container-title">{title}</h2>
      <div className="container products-container">
        {products.map((item, i) => (
          <Product item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
