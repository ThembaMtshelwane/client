import React from "react";
import DeleteModal from "./CUD UI/DeleteTask";
import EditTask from "./CUD UI/EditTask";
import { Task } from "../definitions";

type Props = { task: Task };

const TaskItem = ({ task }: Props) => {
  return (
    <div className="border-2 p-2 sm:flex max-w-[680px]">
      <section className="sm:w-[70%]">{task.description}</section>
      <section className=" w-fit space-x-4 mt-3 sm:mt-0 flex">
        <EditTask id={task.id} />
        <DeleteModal id={task.id} />
      </section>
    </div>
  );
};

export default TaskItem;
