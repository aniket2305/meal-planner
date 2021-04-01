import React from "react";
import './ShoppingList.scss';
import AddItem from "../AddItem/AddItem";
import ShoppingListItems from "../ShoppingListItems/ShoppingListItems";
// import {gql, useQuery} from '@apollo/client';

import { data }from "../../data";

// not sure for some reason this does not seem to work for me
// export const GET_LIST = gql`
//     query {
//       combinedShoppingList(recipes: [2]){
//         shoppingSection
//       }
//     }
// `;

function ShoppingList() {
  // const { data } = useQuery(GET_LIST);

  const [items, addItems] = React.useState<any[]>([]);


  const addItem = (value: string): void => {
    const itemsCopy = [{ value, isCompleted: false }, ...items];
    addItems(itemsCopy);
  };

  const completeItem = (index: number, category: string) => {
    if(category === "extra") {
      const itemsCopy = [...items];
      itemsCopy[index].isCompleted = true;
      addItems(itemsCopy);
    }
  };

  const unCompleteItem = (index: number, category: string) => {
    if(category === "extra") {
      const itemsCopy = [...items];
      itemsCopy[index].isCompleted = false;
      addItems(itemsCopy);
    }
  };

  const removeItem = (index: number, e:MouseEvent) => {
    e.stopPropagation()
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    addItems(itemsCopy);
  };

  return (
    <div className="shopping-list-container">
        <h1>Shopping List</h1>

        <AddItem addItem= {addItem} />
        <div className="category-section">
           <h3>Extra</h3>

           <ul className="item-list-container">
             {items.map((item, index) => (
               !item.isCompleted && 
               <ShoppingListItems
                 key={index}
                 item={item}
                 index={index}
                 category="extra"
                 changeItemState = {completeItem}
                 removeItem= {removeItem}
               />
             ))}
           </ul>
         </div>

        {data.map((itemData, index) => (
          <div className="category-section" key={index}>
           <h3>{itemData.shoppingCategory}</h3>
           
           <ul className="item-list-container">
             {itemData.shoppingIngredient.map((item, index) => (
               !item.isCompleted && 
               <ShoppingListItems
                 key={index}
                 item={item}
                 index={index}
                 category={itemData.shoppingCategory}
                 changeItemState = {completeItem}
               />
             ))}
           </ul>
         </div>
        ))}

        <div className="category-section">
           <h3>Completed</h3>
           <ul className="item-list-container">
             {items.map((item, index) => (
               item.isCompleted && 
               <ShoppingListItems
                 key={index}
                 item={item}
                 index={index}
                 category="extra"
                 changeItemState = {unCompleteItem}
                 removeItem = {removeItem}
               />
             ))}
           </ul>
         </div>
    </div>
  );
}

export default ShoppingList;




