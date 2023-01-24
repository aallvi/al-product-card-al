# paquete de pruebas despliegue npm

### alvaro

## Ejemplo

```
import {ProductCard,ProductImage, ProductTitle,ProductButtons} from 'al-product-card';
```

```

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
      
```