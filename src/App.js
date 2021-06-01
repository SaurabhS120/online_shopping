import './App.css';
import ItemsList from './ItemsList.js';
import Cart from './Cart.js';
import CartItem from './CartItem.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[]
    }
  }
  toggleCart(){
    document.querySelector('.cart').classList.toggle('collapsed');
  }
  cartBody(){
    return this.state.items.map((name,i)=><CartItem key={i} num={i} name={name} removeFromCart={this.removeFromCart.bind(this)} />);
  }
  renderCart(){
    ReactDOM.render(this.cartBody(),document.getElementById('cart-list'));
  }
  addToCart(item){
    this.state.items.push(item);
    this.renderCart();
  }
  removeFromCart(key){
    this.state.items=this.state.items.filter((x,i)=>i!=key);
    this.renderCart();
  }
  render(){
    return (
      <div className="App">
        <div className="Header">
          <p className="Heading">Online Shopping</p>
          <div className="cart-toggle">
            <button className="cart-toggle-button" onClick={this.toggleCart}>Cart</button>
          </div>
        </div>
        <Cart/>
        <ItemsList addToCart={this.addToCart.bind(this)}/>
      </div>
    );
  }
  
  
}

export default App;
