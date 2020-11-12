import React,{useContext} from 'react'
import { CartContext } from '../Global/CartContext'
import {ProductsContext}  from '../Global/Productscontext'
import Banner from './Banner'


const Products = () => {
    const {products} = useContext(ProductsContext)
    const {dispatch} = useContext(CartContext)
    
    return (
       
        <div className="container">  
         <Banner />
       <div className="products">

           {products.map((product) => (
               <div className="product" key={product.id}>
                
                   <div className="product-image">
                       <img src={product.image} alt="not found" />

                   </div>
                   <div className="product-details">
                       <div className="product-name">
                           {product.name}
                       </div>
                       <div className='product-price'>
                           ${product.price}.00
                       </div>
                   </div>
                 
                  
                   <div className="add-cart" onClick = {() => dispatch({
                       type:'Add_to_Cart',
                       id:product.id,
                       product
                })}>Add To Cart</div>
                   {product.status === 'Hot' ? <div className="hot">Hot</div> : ''}
                   {product.status === 'New' ? <div className="new">New</div> : ''}
                   </div>
           ))}

       </div>
       </div>
    )
}

export default Products
