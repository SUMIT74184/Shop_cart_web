import React from "react";
import { FcDeleteDatabase } from "react-icon";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";


const CartItem = ({ item, itemIndex }) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed from Cart")
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>

        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p> 
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
