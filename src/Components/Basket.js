import React from 'react';

function Basket(props){
		function removeClickHandler(cartItem)
		{
	 		let cartItems = props.cartItems;
	        
	        const productIndex=props.cartItems.findIndex((item) => { 
              return  item && (item.name === cartItem.name);
               });
	        cartItems = props.cartItems.filter(function(value, index){ 
	        	return productIndex != index;
	             });
	        props.updateCartItems(cartItems);
	 		  }
 		
 		if(props.cartItems.length == 0){
   	    return (<h3 className="mt-5">You Have Not Added Items Yet</h3>);
   	    }
   	    if(props.cartItems !== undefined){
		       return (
            <>
              <h5 className="ordered-item ">Your Ordered Items:</h5>
              {props.cartItems.map(function(productItem,index){
			     return(
				<div className="main" key={index}>
				 <div className="card-basket" style={{width: '50rem'}}>
                <div className="card-body d-flex">
                 <div className="image align-middle">
                   <img src={productItem.image} className="card-basket-img"  alt="productpic" />
                 </div>
                 <div className="text-center w-100">
                      <h5 className="card-title  w-100">{productItem.name}</h5>
                      <p className="card-text  mb-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                      <h6><b>Price: Rs.{productItem.price}</b></h6>
                 </div>
                 <div>
                  <button type="button" className="btn-remove btn-danger mt-4 me-3 px-2 shadow-sm rounded" onClick={() => removeClickHandler(productItem)}>Remove</button>
                 </div>
                </div>
         </div>
        </div>

				);
		})}
		</>
		);
	}
}
export default Basket;
