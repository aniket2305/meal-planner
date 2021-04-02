import React from "react";
import './ShoppingList.scss';
import AddItem from "../AddItem/AddItem";
import ShoppingListItems from "../ShoppingListItems/ShoppingListItems";
import { completeItem, unCompleteItem, removeItem } from "../../actions/actions";

// import {gql, useQuery} from '@apollo/client';

import { data } from "../../data";
import { shopplingListReducer } from "../../reducer/shoppingListReducer"

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

  const [items, dispatch] = React.useReducer(shopplingListReducer, data)

  const showExtra = items.shoppingList.some(item => item.shoppingCategory === "Extra");
  const showComplete = items.shoppingList.some(item => item.isCompleted === true);

  return (
    <div className="shopping-list-container">
        <h1>Shopping List</h1>

        <AddItem dispatch= {dispatch} />
        <div className="category-section">
           {showExtra && <h3>Extra</h3>}
           <ul className="item-list-container">
             {items.shoppingList.map((item) => (
               !item.isCompleted && 
               <ShoppingListItems
                 key={item.id}
                 item={item}
                 changeState={(id:string) =>dispatch(completeItem(id))}
                 removeItem= {(id:string) =>dispatch(removeItem(id))}
               />
             ))}
           </ul>
         </div>

        <div className="category-section">
           {showComplete && <h3>Completed</h3>}
           <ul className="item-list-container">
             {items.shoppingList.map((item) => (
               item.isCompleted && 
               <ShoppingListItems
                 key={item.id}
                 item={item}
                 changeState= {(id:string) =>dispatch(unCompleteItem(id))}
                 removeItem= {(id:string) =>dispatch(removeItem(id))}
               />
             ))}
           </ul>
         </div>
    </div>
  );
}

export default ShoppingList;




