export  let cart;

export function getCart() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  return JSON.parse(localStorage.getItem('cart')) || [];
}

getCart();


function store(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function updateCart(productid){
    
       let matching;

       cart.forEach((cartItem) => {
         if(productid === cartItem.productid){
               matching=cartItem;
         }

       })

       if(matching){
         matching.quantity++;
         store();

       }
       else{
         cart.push({
         productid:productid,
         quantity:1
         
       })
       store();
      
      }
}


export function removeItem(productid) {
  cart = cart.filter((cartItem) => cartItem.productid !== productid);
  store();
  
  

}


