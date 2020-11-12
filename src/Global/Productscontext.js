import React,{createContext,useState} from 'react'


import dslr from '../assests/dslr.jpg'
import headphone from '../assests/headphone.jpg'
import iphone from '../assests/iphone.jpg'
import microphone from '../assests/microphone.jpg'
import perfume from '../assests/perfume.jpg'
import ring from '../assests/ring.jpg'
import shoe from '../assests/shoe.jpg'
import watch from '../assests/watch.jpg'

export const ProductsContext = createContext()


const ProductscontextProvide = (props) => {

    const [products] = useState([
        {id:1,name:'DSLR',price:5000,image:dslr,status:'New'},
        {id:2,name:'Headphone',price:500,image:headphone,status:'Hot'},
        {id:3,name:'Iphone',price:50000,image:iphone,status:'Hot'},
        {id:4,name:'Microphone',price:8000,image:microphone,status:'New'},
        {id:5,name:'Perfume',price:300,image:perfume,status:'New'},
        {id:6,name:'Ring',price:800,image:ring,status:'New'},
        {id:7,name:'Shoe',price:1500,image:shoe,status:'Hot'},
        {id:8,name:'Shoe',price:3000,image:watch,status:'Hot'}

    ])

    return (

        <ProductsContext.Provider value={{products:[...products]}}>
      {props.children}
        </ProductsContext.Provider>
        
    )
}

export default ProductscontextProvide
