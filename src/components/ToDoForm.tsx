import { ChangeEvent, FormEvent, useState } from "react"

interface IAddToListProps {
    addNewItem: (additionalListItem: string) => void;
}

export const ToDoForm = (props: IAddToListProps) => {
    const [newItem, setNewItem] = useState("");
    
    const handleClick = (e: FormEvent) => {
        e.preventDefault();

        props.addNewItem(newItem);
        setNewItem(""); 
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItem(e.target.value)
    }

    return (

        <form>
            <input type="text" onChange={handleChange} value={newItem} placeholder="Add to the bucket list!" />
            <button onClick={handleClick}>Add</button>
        </form>
        
    )
}