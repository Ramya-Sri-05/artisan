import { updateCart,cart,getCart } from "../cart.js";



describe('test suite: updateCart',()=>{
    it('adds an existing item into cart',() =>{

         spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(() =>{
            return JSON.stringify([]);
        })

        getCart();
        console.log(localStorage.getItem('cart'));

        updateCart('1');

        expect(cart.length).toEqual(1);
        console.log(cart[0].productid)
        expect(cart[0].productid).toEqual('1');
        expect(cart[0].quantity).toEqual(1);

        
    });

    
})