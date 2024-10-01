import React from "react";
import EditModal from "./Modals/EditModal";

type Props = {};

const TaskItem = (props: Props) => {
  return (
    <div className="border-2 p-2 sm:flex max-w-[680px]">
      <section className="sm:w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </section>
      <section className=" w-fit space-x-4 mt-3 sm:mt-0 flex">
        <EditModal />
        <button
          className="flex gap-3 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          <p className="text-xl">Delete</p>
        </button>
      </section>
    </div>
  );
};

export default TaskItem;
