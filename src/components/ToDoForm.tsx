import { ChangeEvent, FormEvent, useState } from "react"
import { BucketItem } from "../models/BucketItem";


export const ToDoForm = () => {
    const [newItem, setNewItem] = useState<BucketItem>(new BucketItem("", false));
    
    const handleNewItem = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);
        console.log(e.target.value);
        setNewItem({ ...newItem, bucketActivity: e.target.value })
    }

    const handleSave = (e: FormEvent) => {
        e.preventDefault();

        console.log("Nytt item: ", newItem);
        
    }

    return (
        <form onSubmit={handleSave}>
            <input type="text" onChange={handleNewItem} value={newItem.bucketActivity}/>
            <button>Add bucket list item</button>
        </form>
    )
}

//(e: ChangeEvent<HTMLInputElement>) => {setNewItem(e.target.value);}