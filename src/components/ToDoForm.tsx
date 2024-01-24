import { ChangeEvent, useState } from "react"

export const ToDoForm = () => {
    const [newItem, setNewItem] = useState("");
    console.log(newItem)
    return (
        <form>
            <input 
                type="text" 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewItem(e.target.value);
                }} 
                value={newItem}/>
            <button>Add bucket list item</button>
        </form>
    )
}