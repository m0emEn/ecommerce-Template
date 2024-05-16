import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import ProductsContainer from "../Components/ProductsContainer";
import { productData } from "../assets/products";
import { useEffect, useState } from "react";

const CategoryProduct = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState("popularity"); // Default filter value
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products based on category when category changes
  useEffect(() => {
    const filtered = productData.filter((item) => item.category === category);
    setFilteredProducts(filtered);
  }, [category]);

  // Sort products based on the selected filter
  useEffect(() => {
    const sortProducts = () => {
      switch (filter) {
        case "newest":
          setFilteredProducts(
            [...filteredProducts].sort((a, b) => a.id - b.id)
          );
          break;
        case "price-low":
          setFilteredProducts(
            [...filteredProducts].sort((a, b) => a.newPrice - b.newPrice)
          );
          break;
        case "price-high":
          setFilteredProducts(
            [...filteredProducts].sort((a, b) => b.newPrice - a.newPrice)
          );
          break;
        default:
          // "popularity" or unknown filter, do nothing
          break;
      }
    };

    sortProducts();
  }, [filter, filteredProducts]); // Include filteredProducts in the dependency array

  return (
    <>
      <div className="container categoryTitle">
        <h1 className="cTitle">{category}</h1>
        <div className="filter">
          <label>Trier Par:</label>
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="popularity">Les plus populaires</option>
            <option value="newest">Nouveaux produits</option>
            <option value="price-low">Prix croissant</option>
            <option value="price-high">Prix décroissant</option>
          </select>
        </div>
      </div>
      <Breadcrumbs name={category} />
      <ProductsContainer
        name={"products m-0"}
        initialProducts={filteredProducts}
        filter={filter}
        category={category}
      />
    </>
  );
};

export default CategoryProduct;
