import "../index.css";

function Header(props){
	return(
        <nav className="navbar navbar-light pt-1 pb-1">
          <div className="text-center w-100 text-light d-flex" >
          <div className="w-100 mt-1 mb-1">
          <div onClick={() => {props.updateCartOpen(false)}} className="d-flex me-5 ms-3 align-item-center" >
            <i className="fa fa-home me-2 mt-1 align-item-center"/>
          </div>
            <h5>Shopping Cart</h5> 
          </div>
          <div onClick={() => {props.updateCartOpen(true)}} className="d-flex me-5 mt-1 align-item-center" >
            <i className="fa fa-shopping-cart  me-2 mt-1 align-item-center"/>
            {props.cartItems.length}
          </div>
          </div>
        </nav>

		);
}

export default Header;
