import { TiMinus } from "react-icons/ti";
import { MdAdd } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState } from "react";

const Product = ({ product }) => {
  const [currColor, setCurrColor] = useState(0);
  const [currSize, setCurrSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [productImg, setProductImg] = useState(product.mainImg);
  const [productImgIndex, setProductImgIndex] = useState(0);

  const colorHandler = (index) => {
    setCurrColor(index);
  };
  const sizeHandler = (index) => {
    setCurrSize(index);
  };
  const imgHandler = (index) => {
    setProductImg(product.availbleImgs[index]);
    setProductImgIndex(index);
  };
  return (
    <div className="container">
      <div className="product">
        <div className="productMedia">
          <div className="mainProduct">
            <img src={productImg} />
          </div>
          <div className="relatedImgs">
            {product.availbleImgs &&
              product.availbleImgs.map((img, i) => (
                <img
                  src={img}
                  key={i}
                  alt="product"
                  className={i == productImgIndex ? "imgSelected" : ""}
                  onClick={() => imgHandler(i)}
                />
              ))}
          </div>
        </div>
        <div className="productDescription">
          <h1>{product.name}</h1>
          <div className="productPrice">
            <p>{product.newPrice} DT</p>
            {product.oldPrice && (
              <p className="oldPrice">{product.oldPrice} DT</p>
            )}
            {product.tag && <span>{product.tag}</span>}
          </div>
          <div className="productColors">
            <p>Couleurs:</p>
            <div className="productColors-btn">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  className={
                    i == currColor ? "productButton selected" : "productButton"
                  }
                  onClick={() => colorHandler(i)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          <div className="productSize">
            <p>Taille:</p>
            <div className="productSize-btn">
              {product.sizes.map((size, i) => (
                <button
                  key={i}
                  className={
                    i == currSize ? "productButton selected" : "productButton"
                  }
                  onClick={() => sizeHandler(i)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="productDesc">
            <ul>
              <li>Tissu 100% coton.</li>
              <li>Style Over-size.</li>
              <li>Impression résiste à l'eau.</li>
            </ul>
          </div>
          <div className="qty">
            <h5>Quantité</h5>
            <div className="qtyControl">
              <div className="qtyBtn qtyDecr">
                <button
                  className="decrBtn"
                  onClick={() => qty > 1 && setQty(qty - 1)}
                >
                  <TiMinus />
                </button>
              </div>
              <div className="qtyValue">
                <p>{qty}</p>
              </div>
              <div className="qtyBtn qtyIecr">
                <button className="decrItn" onClick={() => setQty(qty + 1)}>
                  <MdAdd size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="productBtns">
            <button className="btnAdd btn">
              <MdOutlineAddShoppingCart /> AJOUTER EN PANIER
            </button>
            <button className="btnBuy btn">Acheter maintenant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
