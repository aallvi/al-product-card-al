// import * as React from 'react';
import React from "react";
import renderer from 'react-test-renderer'
import ProductCard, {  ProductTitle } from '../../src/components'
import { product,  } from "../data/products";




describe('ProductTitle', () => { 


    test('debe mostrar el componente correctamente con el titulo personalizado', () => { 

            const wrapper = renderer.create(
                <ProductTitle title="Custom Product" className="custom-class" />
            )

         
            expect (wrapper.toJSON()).toMatchSnapshot()

     })


     test('should show component with name of the product', () => { 

        const wrapper = renderer.create(
                    <ProductCard  product={product} >

                {     () => (
                            <ProductTitle/>
                        )
                    }

                    </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()




      })



 })