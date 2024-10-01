import React from "react";
import DeleteModal from "./CUD UI/DeleteTask";
import EditTask from "./CUD UI/EditTask";

type Props = {};

const TaskItem = (props: Props) => {
  return (
    <div className="border-2 p-2 sm:flex max-w-[680px]">
      <section className="sm:w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </section>
      <section className=" w-fit space-x-4 mt-3 sm:mt-0 flex">
        <EditTask />
        <DeleteModal />
      </section>
    </div>
  );
};

export default TaskItem;
