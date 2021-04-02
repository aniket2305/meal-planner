import './ShoppingListItems.scss';
import {IShoppingList} from '../../interface';

interface ShoppingListItemsProps {
    item: IShoppingList,
    removeItem?: (id: string) => void;
    changeState: (id: string) => void;
}

function ShoppingListItems({ item, changeState, removeItem }: ShoppingListItemsProps) {
    return (
      <li
        className="list-item"
        onClick= {() => changeState(item.id)}
      >
        <span className={`check-element ${item.isCompleted ? "checked" : "unchecked"}`} ></span>            
        <span>{item.ingredient}</span>

        {(item.shoppingCategory === "Extra" && removeItem) && 
            <span className="close-icon" onClick= {() => removeItem(item.id)} >X</span>}
      </li>
    );
  }

  export default ShoppingListItems;
  