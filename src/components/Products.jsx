import React from "react";
import Product from './Product'
const Products = () => {

  const [data,setData] = React.useState([])

  const getdata = () =>{
    fetch('http://localhost:8080/products')
    .then((res) => res.json())
    .then((res) => setData(res))
  }

  React.useEffect(() => {
    getdata()
  },[])
  console.log(data)
  return <div>{/* Code here */}
      {
        data.map((el)=>(
          <div key={el.id}>
            <Product data={el}/>
          </div>
        ))
      }
  </div>;
};

export default Products;
