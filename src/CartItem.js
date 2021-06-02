import './CartItem.css';
function CartItem(props){
    return(
        <div className="cart-item">
            <p className="cart-item-name">{props.item.name+'\t- '+props.item.quantity+' nos.'}</p>
            <div className="cart-item-delete" onClick={props.removeFromCart.bind(this,props.num)} >X</div>
        </div>
    );
}
export default CartItem;