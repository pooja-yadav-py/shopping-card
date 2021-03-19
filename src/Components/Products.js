import ProductsJSON from "./Products.json";
import Header from "./Header";

 function Products(props) {
 	function addToCartClickHandler(cartItems){
 		const updateCartItems = props.updateCartItems;
 		const cartItemsProps = props.cartItems;
 		updateCartItems(() => [...cartItemsProps, cartItems]);
 		}

 	function renderProducts(){
 		if(ProductsJSON !== undefined) {
 			return ProductsJSON.result.map(function(productItem){
 				return (
                  <div className="m-3" key={productItem.name}>
                    <div className="card p-2" style={{weight: '30rem'}}>
                     <div className="card-img">
                      <img src={productItem.image} className="card-img-top"  alt="productpic" />
                     </div>
                    <div className="card-body" >
                      <h5 className="card-title text-start w-100">{productItem.name}</h5>
                       <p className="card-text text-start mb-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                       <h6 className="text-start "><b>Price: Rs.{productItem.price}</b><del>Rs.{productItem.mainPrice}</del></h6>
                       <button className="btn btn-primary w-60 pt-1 pb-1 mt-1" onClick={() => addToCartClickHandler(productItem)}>Add To Card</button>
                    </div>
                    </div>
                  </div> 

 					);
 			});
 		}
 	}
	

	return(
      <div>
        <h1 className="mt-2">Our items</h1>
          <div className="d-flex w-100 justify-content-center align-items-center">
            {renderProducts()}
          </div>
      </div>
		  );
}
export default Products;