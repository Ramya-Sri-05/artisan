import {products} from './products.js';
import {cart} from './cart.js'

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

  
   


document.querySelectorAll('.js-addtocart')
.forEach((button) => {
      button.addEventListener('click',() => {
       const productid=button.dataset.productId;

       let matching;

       cart.forEach((cartItem) => {
         if(productid === cartItem.productid){
               matching=cartItem;
         }

       })

       if(matching){
         matching.quantity++;

       }
       else{
         cart.push({
         productid:productid,
         quantity:1
       })
      
      }
      let cartQuantity=0;

      cart.forEach((cartItems) => {
         cartQuantity+=cartItems.quantity;

      });


      document.querySelector(".js-cart-quantity")
      .innerHTML = cartQuantity;

       console.log(cartQuantity);
       console.log(cart)

      })
     

     

})




