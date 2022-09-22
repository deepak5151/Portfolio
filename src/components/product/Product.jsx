import "./product.css";

const Product = ({ name, desc, img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <a href={link} target="_blank" rel="noreferrer" className="p-name">{name}</a>
        <br />
        <p className="p-desc">{desc}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
