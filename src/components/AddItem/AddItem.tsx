import "./AddItem.scss";
import React from 'react';
import { addItem } from "../../actions/actions";

function AddItem({ dispatch }: any) {
    const [item, setValue] = React.useState("");
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      if (!item) return;
      dispatch(addItem(item));
      setValue("");
    };
  
    return (
       <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className="input"
                placeholder = "Add Item"
                value={item}
                onChange={e => setValue(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
       </div>
    );
  }

export default AddItem;