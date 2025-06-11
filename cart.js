export const cart=[];

export function updateCart(productid){
    
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
}