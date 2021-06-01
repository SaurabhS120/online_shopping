import './Cart.css';

function Cart(props){
    return(<div className="cart" id='cart'>
        <div className="cart-list" id='cart-list'>
        </div>
        <button className="proceed-button">Proceed</button>
    </div>);
}
export default Cart;