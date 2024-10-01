import axios from "axios";
import { Task } from "../definitions";

export const getAllTasks = async () => {
  try {
    const res = await axios.get("http://localhost:9000/api/tasks");
    return res.data;
  } catch (error) {
    console.error("Error fetching all tasks", error);
  }
};

export const addTask = async (task: { description: string }) => {
  console.log("new task to add", task);

  try {
    const res = await axios.post("http://localhost:9000/api/tasks", task);
    console.log(res.data);
  } catch (error) {
    console.error("Error adding task", error);
  }
};

export const editTask = async (task: Task) => {
  try {
    const res = await axios.put("http://localhost:9000/api/tasks", task);
    console.log(res.data);
  } catch (error) {
    console.error("Error editing task", error);
  }
};
