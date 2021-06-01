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
    return this.state.items.map((item,i)=><CartItem key={i} num={i} item={item} removeFromCart={this.removeFromCart.bind(this)} />);
  }
  renderCart(){
    ReactDOM.render(this.cartBody(),document.getElementById('cart-list'));
  }
  isExist(x){
    for(var i=0;i<this.state.items.length;i++){
      if(this.state.items[i].name==x)return true;
    }
    return false;
  }
  increaseQuantity(x){
    for(var i=0;i<this.state.items.length;i++){
      if(this.state.items[i].name==x)this.state.items[i].quantity++;
    }
  }
  addToCart(item){
    if(this.isExist(item)){
      this.increaseQuantity(item);
    }
    else{
      var x={name:item,quantity:1};
      this.state.items.push(x);
    }
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
