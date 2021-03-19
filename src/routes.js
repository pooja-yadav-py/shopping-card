import React from "react";
import {Route} from "react-router";
import Products from "./Components/Products";
import Basket from "./Components/Basket";


// define the desired pathnames for your components here
export default (
	<Route>
			<Route path="/" updateCartItems={updateCartItems} cartItems={cartItems} component={Products} />
			<Route path="/page1" updateCartItems={updateCartItems} cartItems={cartItems} component={Basket} />
	</Route>
);