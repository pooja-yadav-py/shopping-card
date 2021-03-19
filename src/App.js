import {useState} from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Basket from "./Components/Basket";
import {Router,Route} from "react-router";
import {Link} from "react-router-dom";
import {createBrowserHistory} from "history";
import './App.css';

let history = createBrowserHistory();


function App() {
  const [cartItems,updateCartItems]=useState([]);
  const [cartOpen,updateCartOpen]=useState(false);

   return (
    <div className="App">
    
      <Header cartItems={cartItems} updateCartOpen={updateCartOpen} />
     {!cartOpen && <Products updateCartItems={updateCartItems} cartItems={cartItems} />}
     {cartOpen && <Basket updateCartItems={updateCartItems} cartItems={cartItems} />}
        
    </div>
  );
}

export default App;
