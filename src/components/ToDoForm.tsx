import { ChangeEvent, FormEvent, useState } from "react"
// import { BucketItem } from "../models/BucketItem";

interface IAddToListProps {
    addNewItem: (additionalListItem: string) => void;
}

export const ToDoForm = (props: IAddToListProps) => {
    const [newItem, setNewItem] = useState("");
    
    const handleClick = (e: FormEvent) => {
        e.preventDefault();

        props.addNewItem(newItem);
        setNewItem(""); 
        //localStorage.setItem('task', JSON.stringify(newItem));
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target);
        //console.log(e.target.value);
        setNewItem(e.target.value)
    }

   // const handleSave = (e: FormEvent) => { // behövs denna? 
     //   e.preventDefault();

       // console.log("Nytt item: ", newItem);
        
//    }

    return (
        <form>
            <input type="text" onChange={handleChange} value={newItem}/>
            <button onClick={handleClick}>Add bucket list item</button>
        </form>
    )
}

//(e: ChangeEvent<HTMLInputElement>) => {setNewItem(e.target.value);}
// <BucketItem>(new BucketItem("", false))
//  ...newItem, bucketActivity: 