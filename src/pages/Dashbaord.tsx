import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import AddTask from "../components/CUD UI/AddTask";
import { getAllTasks } from "../api/api";
import { Task } from "../definitions";

type Props = {};

const Dashboard = (props: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTasks = async () => {
      const data: Task[] = await getAllTasks();
      console.log(data);

      setTasks(data);
      setIsLoading(false);
    };
    getTasks();
  }, []);

  return (
    <section className="grid grid-rows-[1fr_1fr_5fr] h-[90vh]">
      <h1 className="text-2xl place-self-center">Welcome Username</h1>
      <section className="place-self-center flex items-center p-2 gap-3">
        <AddTask />
      </section>

      <section className="p-2 mx-auto w-[75%]">
        {isLoading ? (
          <h1>Loading</h1>
        ) : tasks ? (
          <ul className="space-y-3">
            {tasks.map((task: Task) => (
              <li key={task.description}>
                <TaskItem task={task} />
              </li>
            ))}
          </ul>
        ) : (
          "No availble tasks, please some"
        )}
      </section>
    </section>
  );
};

export default Dashboard;
