// import * as React from 'react';
import React from "react";
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components'
import {  product2 } from "../data/products";




describe('ProductTitle', () => { 


  
     test('should show component correct', () => { 

        const wrapper = renderer.create(
                 
                  <ProductCard product={product2}  >

                    {
                        () => (
                            <h1>Product Card</h1>
                        )
                    }

                  </ProductCard>
               
        )

        expect(wrapper.toJSON()).toMatchSnapshot()




      })



      test('should increment the counter', () => { 

        const wrapper = renderer.create(
                 
            <ProductCard product={product2}  >

                    {
                        ({count,increaseBy}) => (
                            <>
                                <h1>Product Card</h1>
                                <span> {count} </span>
                                <button  onClick={() => increaseBy(1) }  >  </button>
                            </>
                        )
                    }

             </ProductCard>
            
            );

            let tree = wrapper.toJSON()

            // expect(tree).toMatchSnapshot()

          

           



       })



 })