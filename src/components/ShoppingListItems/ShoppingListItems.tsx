import './ShoppingListItems.scss';

interface ShoppingListItemsProps {
    item: IItem,
    index: number;
    category: string;
    changeItemState: (index: number, category: string, item:IItem) => void;
    removeItem?: (index: number, e:any) => void;
}

interface IItem {
    value: string;
    isCompleted: boolean;
}

function ShoppingListItems({ item, index, category, changeItemState, removeItem }: ShoppingListItemsProps) {
    return (
      <li
        className="list-item"
        onClick= {() => changeItemState(index, category, item)}
      >
        <span className={`check-element ${item.isCompleted ? "checked" : "unchecked"}`} ></span>            
        <span>{item.value}</span>

        {(category === "extra" && removeItem)  && <span className="close-icon" onClick= {(e) => removeItem(index, e)}>X</span>}
      </li>
    );
  }

  export default ShoppingListItems;
  