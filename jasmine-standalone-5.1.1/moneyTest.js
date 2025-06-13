import {formatCurrency} from '../formatCurrency.js'

describe('test suite: formatCurrency',() =>{
    it('converts into cents',() =>{
        expect(formatCurrency(200)).toEqual('200.00')
    })

      it('works with 0',() =>{
        expect(formatCurrency(0)).toEqual('0.00')
    })

    it('works with round',() =>{
        expect(formatCurrency(20.5)).toEqual('21.00')
    })
})