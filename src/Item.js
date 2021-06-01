import './Item.css';
function Item(props){
    return(
        <div className="item-box">
            <img className="item-image" src={'images/'+props.image}></img>
            <p>{props.name}</p>
            <button className="add-cart-button" onClick={props.addToCart.bind(this,props.name)} >Add to Cart</button>
        </div>
    );
}
export default Item;