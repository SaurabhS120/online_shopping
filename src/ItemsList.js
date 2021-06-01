import './ItemsList.css';
import Item from './Item.js';
function ItemsList(props){
    return(<div className="item-list">
        <Item name='TV' image='tv.png' addToCart={props.addToCart} />
        <Item name='Washing Machine' image='washing machine.jpeg' addToCart={props.addToCart} />
        <Item name='Mobile'image='mobile.jpg' addToCart={props.addToCart} />
        <Item name='Refrigerator'image='refrigerator.png' addToCart={props.addToCart} />
        <Item name='Laptop'image='laptop.jpg' addToCart={props.addToCart} />
        <Item name='Monitor'image='monitor.jpg' addToCart={props.addToCart} />
        <Item name='Gaming Laptop'image='gaming laptop.jpg' addToCart={props.addToCart} />
        
        
    </div>
    );
}
export default ItemsList;