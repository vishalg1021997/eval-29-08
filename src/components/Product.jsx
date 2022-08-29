import React from "react";
import {CartContext} from '../context/CartContext'

const Product = ({data}) => {
  // Note: this id should come from api
  const product = { id: data.id };
  const { Count, handleCount} = React.useContext(CartContext)
  const [inCart,setIncart] = React.useState(false)

  const [addItem,setAddItem] = React.useState('')

  const [ItemCount,setItemCount] = React.useState(1)


  const handelAdd = (data) =>{
    var temp = {
      productId : data.id,
      count:1
    }
    fetch(`http://localhost:8080/cartItems`, {
            method: 'POST',
            body: JSON.stringify(temp),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => handleCount(1))
        
  }


 

 

  const getItemCount = (val) => {
    fetch(`http://localhost:8080/cartItems/${product.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ count: val}),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => setItemCount(res.count))
  }

  const reomve = () => {
    fetch(`http://localhost:8080/cartItems/${product.id}`,{
      method:'DELETE'
    })
    handleCount(-1)
  }
  
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>

      {
        inCart ? <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={() => getItemCount(ItemCount+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            ItemCount
          }
            


        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={() => getItemCount(ItemCount-1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={reomve}>Remove From Cart</button>
      </div>:<button data-cy="product-add-item-to-cart-button" onClick={() => handelAdd(data)}>Add To Cart</button>
      }
      
      
    </div>
  );
};

export default Product;
