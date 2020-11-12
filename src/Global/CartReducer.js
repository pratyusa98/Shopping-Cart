
export const CartReducer = (state,action) =>{

    const {shoppingCart,totalPrice,qty} = state

    let product
    let index
    let updatedPrice
    let updatedQty

   
    switch(action.type) {
        case 'Add_to_Cart':
            const check = shoppingCart.find(product => product.id === action.id)
            if(check){
                return state
            } else{
                product = action.product
                product['qty'] =1
                updatedQty = qty + 1
                updatedPrice = totalPrice + product.price
                return {shoppingCart:[product,...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}
            }
            break;

        case 'INC':
            product = action.cart
            product.qty = product.qty + 1
            updatedPrice = totalPrice+product.price
            updatedQty = qty+ 1
            index = shoppingCart.findIndex(cart => cart.id === action.id)
            shoppingCart[index] = product
            return {shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}



            break
        
        case 'DEC':
            product = action.cart
            if(product.qty >1){
                product.qty = product.qty - 1
                updatedPrice = totalPrice-product.price
                updatedQty = qty - 1
                index = shoppingCart.findIndex(cart => cart.id === action.id)
                shoppingCart[index] = product
                return {shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}

            }
            else{
                return state
            }

            break

        case 'DEL':
            const filtered = shoppingCart.filter(product => product.id !== action.id)
            product = action.cart
            updatedPrice = totalPrice-product.price*product.qty
            updatedQty = qty - product.qty
            return {shoppingCart:[...filtered],totalPrice:updatedPrice,qty:updatedQty}
 
            break
          

            default:
                return state

            
    }

}