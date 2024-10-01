import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import AddTask from "../components/CUD UI/AddTask";
import { getAllTasks } from "../api/api";
import { Task } from "../definitions";

type Props = {};

const Dashbaord = (props: Props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const data = await getAllTasks();
      console.log(data);

      setTasks(data);
    };
    getTasks();
  }, []);

  const tasksUI = tasks.map((task: Task) => (
    <li key={task.id}>
      <TaskItem task={task} />
    </li>
  ));
  return (
    <section className="grid grid-rows-[1fr_1fr_5fr] h-[90vh]">
      <h1 className="text-2xl place-self-center">Welcome Username</h1>
      <section className="place-self-center flex items-center p-2 gap-3">
        <AddTask />
      </section>

      <ul className="p-2 space-y-3 mx-auto">{tasksUI}</ul>
    </section>
  );
};

export default Dashbaord;
