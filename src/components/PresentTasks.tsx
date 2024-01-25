import { BucketItem } from "../models/BucketItem";

interface IPresentationProps {
    items: BucketItem;
    finishedTask: (bucketActivity: string) => void;
}

export const PresentTasks = (props: IPresentationProps) => {
    const handleFinishTask = () => {
        props.finishedTask(props.items.bucketActivity);
    }
    return <>
               <h4 className={props.items.isDone ? "finished" : ""}>{props.items.bucketActivity}</h4>
               <button onClick={handleFinishTask}>Tick box</button>


        </>
}
