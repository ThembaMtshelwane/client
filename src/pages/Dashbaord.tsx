import React from "react";
import TaskItem from "../components/TaskItem";
import AddModal from "../components/Modals/AddModal";

type Props = {};

const Dashbaord = (props: Props) => {
  return (
    <section className="grid grid-rows-[1fr_1fr_5fr] h-[90vh]">
      <h1 className="text-2xl place-self-center">Welcome Username</h1>
      <button className="place-self-center flex items-center p-2 gap-3">
        <AddModal />
      </button>

      <ul className="p-2 space-y-3 mx-auto">
        <li>
          <TaskItem />
        </li>
        <li>
          <TaskItem />
        </li>
        <li>
          <TaskItem />
        </li>
        <li>
          <TaskItem />
        </li>
      </ul>
    </section>
  );
};

export default Dashbaord;
