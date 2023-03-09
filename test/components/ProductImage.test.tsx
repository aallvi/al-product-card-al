// import * as React from 'react';
import React from "react";
import renderer from 'react-test-renderer'
import ProductCard, { ProductImage,  } from '../../src/components'
import {  product2 } from "../data/products";




describe('ProductTitle', () => { 


  
     test('should show component with image perzonalied', () => { 

        const wrapper = renderer.create(
                 
                            <ProductImage img="http://hola.jpg" />
               
        )

        expect(wrapper.toJSON()).toMatchSnapshot()




      })
     test('should show component image', () => { 

        const wrapper = renderer.create(
                    <ProductCard  product={product2} >

                {     () => (
                            <ProductImage/>
                        )
                    }

                    </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
     



      })



 })