import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks}) {

  const mappedTaskList = tasks.map(task => (
    <Task key={uuid()}  text={task.text} category={task.category}/>
  ))

  return (
    <div className="tasks">
      {mappedTaskList}
    </div>
  );
}

export default TaskList;
