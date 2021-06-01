import './ItemsList.css';
import Item from './Item.js';
function ItemsList(){
    return(<div className="item-list"><Item name='TV' image='tv.png'/>
    <Item name='Washing Machine' image='washing machine.jpeg'/>
    <Item name='Mobile'image='mobile.jpg'/></div>);
}
export default ItemsList;