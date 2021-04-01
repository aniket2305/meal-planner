import "./AddItem.scss";
import React from 'react';

interface addItemProps {
    addItem: (item: string) => void
}

function AddItem({ addItem }: addItemProps) {
    const [item, setValue] = React.useState("");
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      if (!item) return;
      addItem(item);
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