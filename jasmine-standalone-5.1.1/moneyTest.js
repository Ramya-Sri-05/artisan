import {formatCurrency} from '../formatCurrency.js'

describe('test suite: formatCurrency',() =>{
    it('converts into cents',() =>{
        expect(formatCurrency(2000)).toEqual('20.00')
    })

      it('works with 0',() =>{
        expect(formatCurrency(0)).toEqual('0.00')
    })

    it('works with round',() =>{
        expect(formatCurrency(2000.5)).toEqual('20.01')
    })
})