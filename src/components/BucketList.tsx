import { useState } from "react"
import { BucketItem } from "../models/BucketItem";
import { RemoveBucketItem } from "./RemoveBucketItem";
import { ToDoForm } from "./ToDoForm";
import { PresentTasks } from "./PresentTasks";

export const BucketList = () => {
    const [tasks, setTasks] = useState<BucketItem[]>([
        new BucketItem('Vanlife in Australia', false),
        new BucketItem('Find a way to work remotely to have the freedom I want', false), 
        new BucketItem('Visit South America', false), 
        new BucketItem('Buy land and build a tiny house', false)
    ]);

    const taskDone = (bucketActivity: string) => {
        setTasks(tasks.map((task) => { 
            if (task.bucketActivity == bucketActivity) {
                return { ...task, isDone: true };
            } else {
                return task;
            } 
            })
        );        
    }

    const removeBucketItem = (bucketActivity: string) => {
        setTasks(tasks.filter((bucketItem) => bucketItem.bucketActivity !== bucketActivity))
    }


    return ( 
        <>
        <h2>Bucket List</h2>
        <ToDoForm />
        <ul>
            {tasks.map((task) => {
                return (
                    <li>
                        <PresentTasks items={task} finishedTask={taskDone} key={task.bucketActivity}/>
                        <RemoveBucketItem RemoveItem={() => removeBucketItem(task.bucketActivity)}/>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
