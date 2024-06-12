// import { useState } from "react";

const Product = ({ post }) => {
  // const [selected, setSelected] = useState();
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>{true ? <p>Remove Items</p> : <p>Add to Cart</p>}</button>
    </div>
  );
};

export default Product;