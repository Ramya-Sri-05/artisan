import { cart,removeItem } from './cart.js';
import { formatCurrency } from './formatCurrency.js';
import { products } from './products.js';
import './backend-practice.js';

function renderCart(){

const container = document.getElementById("cart-container");
const summary = document.getElementById("cart-summary");

if (!cart || cart.length === 0) {
  container.innerHTML = `<img src="">
      <p>Oops! Your cart is empty`;
} else {
  let cartHTML = '';

  cart.forEach((cartItem) => {
    let cartid = Number(cartItem.productid);
  

    products.forEach((productItem) => {
      let productid = productItem.productid;
     

      if (productid === cartid) {
        cartHTML += `
          <div class="cart-item">
            <img src="${productItem.image}" alt="Product image" />
            <div>
              <p><strong>Title:</strong> Famous Painting</p>
              <p><strong>Price:</strong> $${productItem.price}</p>
              <p><strong>Quantity:</strong> ${cartItem.quantity}</p>
             <button class="remove-item js-update-item"">update-Cart</button>
              <button class="remove-item js-remove-item" data-product-remove-id="${productItem.productid}">Remove</button>
            </div>
          </div>
        `;
      }
    });
  });

  container.innerHTML = cartHTML;
}


document.querySelectorAll('.js-remove-item')
.forEach((item) => {
  let id=item.dataset.productRemoveId
    item.addEventListener('click',()=>{
      
       removeItem(id);
       renderCart();
      
    })
})

document.querySelectorAll('.js-update-item')
.forEach((item) => {
   item.addEventListener('click',()=>{
    let cartItem=item.closest('.cart-item');
    cartItem.remove();

   })
})


let totalPrice = 0;

cart.forEach((cartItem) => {
  let cartid = Number(cartItem.productid);
  products.forEach((productItem) => {
    if (productItem.productid === cartid) {
      totalPrice += productItem.price * cartItem.quantity;
    }
  });
});

summary.innerHTML = `
  <div class="summary-box">
    <h2>Cart Summary</h2>
    <p><strong>Total Price:</strong> $${formatCurrency(totalPrice)}</p>
    <button class="checkout-btn">Proceed to Buy</button>
  </div>
`;




}

renderCart();