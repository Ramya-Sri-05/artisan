import { updateCart,cart } from "../cart.js";

describe('test suite: updateCart',()=>{
    it('adds an existing item into cart',() =>{
        updateCart('1');
        expect(cart.length).toEqual(1);
        
    });

    it('adds an non-existing item into cart',() =>{
           updateCart('10');
          expect(cart.length).toEqual(0);
    })
})