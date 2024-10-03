import axios from "axios";
import { Task } from "../definitions";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllTasks = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching all tasks", error);
  }
};

export const addTask = async (task: { description: string }) => {
  console.log("new task to add", task);

  try {
    const res = await axios.post(BASE_URL, task);
    console.log(res.data);
  } catch (error) {
    console.error("Error adding task", error);
  }
};

export const editTask = async (task: Task) => {
  try {
    const res = await axios.put(BASE_URL, task);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error editing task", error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    // const res = await axios.delete(`${LOCAL_DEV}/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error editing task", error);
  }
};
