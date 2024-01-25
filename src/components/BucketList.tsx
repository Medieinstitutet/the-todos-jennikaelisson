import { useState } from "react"
import { BucketItem } from "../models/BucketItem";

export const BucketList = () => {
    const [task, setTask] = useState<BucketItem[]>([
        new BucketItem('Vanlife in Australia', false),
        new BucketItem('Find a way to work remotely to be able to have the freedom I want', false), 
        new BucketItem('Visit South Amera', false)
    ]);

    const handleTick = () => {
        
    }

    const removeBucketItem = (bucketActivity: string) => {
        setTask(task.filter((bucketItem) => bucketItem.bucketActivity !== bucketActivity))
    }
    return ( 
        <>
        <h2>Bucket List</h2>
        <ul>
            {task.map((bucketItem) => {
                return (
                    <li>
                        <h4>{bucketItem.bucketActivity}</h4>
                        <p>Done?<input type="checkbox" checked={bucketItem.isDone} onChange={handleTick}/></p>
                        <button onClick={() => removeBucketItem(bucketItem.bucketActivity)}>Remove bucket list item</button>
                    </li>
                )
            })}
            
            
        </ul>
        </>
    )
}