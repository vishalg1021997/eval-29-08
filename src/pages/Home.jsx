import React from "react";
import { AuthContext } from '../context/AuthContext';
import Login from "./Login";
import Products from "../components/Products"
const Home = () => {
  const {isAuth,toggleAuth,flag,toggel} = React.useContext(AuthContext)
  return <div>{/* Code here */}
      {
        flag ? <><Products/></>:<><Login/></>
      }
  </div>;
};

export default Home;
