import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My work history</h1>
        <p className="pl-desc">
          Want to know what all three websites do? Just click on the image below and it will take you to that website.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} desc={item.desc} name={item.name} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
