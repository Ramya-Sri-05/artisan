import {products} from './products.js';
import {cart,updateCart} from './cart.js'

let productHTML=' ';


products.forEach((product)=>{
    productHTML += `
     <div class="product-list" >
        <img src="${product.image}"  title="famous painting" alt="pretty girl">
        <p>$${product.price}   <del>$${product.del}</del></p>
        <p>famous painting by $$$$</p>
         <div class="cart-added-msg css-added-msg"></div>
        <div class="cartbutton"><button class="js-addtocart" data-product-id="${product.productid}">Add to Cart</button></div>
     </div>`
    
});
document.querySelector(".js-product-container")
.innerHTML = productHTML;


   document.querySelectorAll('.js-addtocart')
   .forEach((cartbuttton) => {
      cartbuttton.addEventListener('click',()=>{
     let a= document.querySelectorAll('.cart-added-msg');
     a[parseInt(cartbuttton.dataset.productId)-1].innerHTML = '✅ added'

      setTimeout(()=>{
      a[parseInt(cartbuttton.dataset.productId)-1].innerHTML = ''
   },2000)
     
      
   })
      
   })

  function updateCartQunatity(){//it updates the web page so not moved to cart.js
      let cartQuantity=0;

      cart.forEach((cartItems) => {
         cartQuantity+=cartItems.quantity;

      });


      document.querySelector(".js-cart-quantity")
      .innerHTML = cartQuantity;

  }
   


document.querySelectorAll('.js-addtocart')
.forEach((button) => {
      button.addEventListener('click',() => {
       const productid=button.dataset.productId;

       updateCart(productid);
       updateCartQunatity();

   

       console.log(cart)

      })
     

     

})




