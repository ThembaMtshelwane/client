import axios from "axios";
import { Task } from "../definitions";

const PORT = 9000;

export const getAllTasks = async () => {
  try {
    const res = await axios.get(`http://localhost:${PORT}/api/tasks`);
    return res.data;
  } catch (error) {
    console.error("Error fetching all tasks", error);
  }
};

export const addTask = async (task: { description: string }) => {
  console.log("new task to add", task);

  try {
    const res = await axios.post(`http://localhost:${PORT}/api/tasks`, task);
    console.log(res.data);
  } catch (error) {
    console.error("Error adding task", error);
  }
};

export const editTask = async (task: Task) => {
  try {
    const res = await axios.put(`http://localhost:${PORT}/api/tasks`, task);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error editing task", error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const res = await axios.delete(`http://localhost:${PORT}/api/tasks/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error editing task", error);
  }
};
