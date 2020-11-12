import './App.css';
import {BrowserRouter as Router , Switch,Route } from 'react-router-dom'
import Nav from './components/Nav';
import Products from './components/Products';
import ProductscontextProvide  from './Global/Productscontext';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import CartContextProvider from './Global/CartContext'

function App() {
  return (
    <div>
       <ProductscontextProvide>
         <CartContextProvider>
         <Router>
         <Nav />
           <Switch>
             <Route exact path="/" component={Products} />
             <Route exact path="/cart" component={Cart} />
             <Route component={NotFound} />
           </Switch>
         </Router>
         </CartContextProvider>
     </ProductscontextProvide>
    
    </div>
  );
}

export default App;
