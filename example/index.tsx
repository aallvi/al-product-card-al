import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductImage, ProductTitle,ProductButtons}  from '../.';
import ProductCard from '../dist/components';

const App = () => {

  const product = {
    id:'1',
    title:'Coffe mug - card!',
    // img:'./coffee-mug.png'
}


  return (
    <>
      <ProductCard   product={product} 
              
              initialValues={{
                count:4,
                maxCount:10,
              }}
              
              
              >

                {
                  ({reset,count, increaseBy, isMaxCountReached}) => (

                    <>
                        
                        <ProductImage  style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
                        <ProductTitle  activeClass="" title={''} />
                        <ProductButtons   />
       
                
                    </>

                  )
                }

         

              </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
