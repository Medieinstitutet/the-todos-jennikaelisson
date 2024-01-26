import { useState } from "react";
import { BucketItem } from "../models/BucketItem";
import { RemoveBucketItem } from "./RemoveBucketItem";
import { ToDoForm } from "./ToDoForm";
import { PresentTasks } from "./PresentTasks";
import "../bucketlist.css"

export const BucketList = () => {
  const [tasks, setTasks] = useState<BucketItem[]>(
    JSON.parse(
      localStorage.getItem("task") ||
        JSON.stringify([
          new BucketItem("Vanlife in Australia", false),
          new BucketItem("Find a way to work remotely", false),
          new BucketItem("Visit South America", false),
          new BucketItem("Buy land and build a tiny house", false),
        ])
    )
  );

  const addToList = (additionalListItem: string) => {
    setTasks([...tasks, new BucketItem(additionalListItem, false)]);
  };

  const taskDone = (bucketActivity: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.bucketActivity == bucketActivity) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      })
    );
  };

  const removeBucketItem = (bucketActivity: string) => {
    setTasks(
      tasks.filter((bucketItem) => bucketItem.bucketActivity !== bucketActivity)
    );
  };

  const handleSort = () => {
    setTasks(
      [...tasks].sort((a, b) =>
        a.bucketActivity.localeCompare(b.bucketActivity)
      )
    );
  };

  localStorage.setItem("task", JSON.stringify(tasks));

  return (
    <div id="container">
      <h1>Bucket List</h1>
      <div id="form-sort">
        <ToDoForm addNewItem={addToList} />
        <button id="sort" onClick={handleSort}>Sort</button>
      </div>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={`${Date.now()}-${Math.random()}`}>
              <PresentTasks items={task} finishedTask={taskDone} />
              <RemoveBucketItem
                RemoveItem={() => removeBucketItem(task.bucketActivity)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
