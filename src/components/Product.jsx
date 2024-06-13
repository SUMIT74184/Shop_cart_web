// import { useState } from "react";

import { useSelector } from "react-redux";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
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
    </div>
  );
};

export default Product;
