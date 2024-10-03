import axios from "axios";
import { Task } from "../definitions";

const PORT = 9000;
const LOCAL_DEV = `http://localhost:${PORT}/api/tasks`;
const REMOTE = "https://server-indol-kappa.vercel.app/api/tasks";

export const getAllTasks = async () => {
  try {
    // const res = await axios.get(LOCAL_DEV);
    const res = await axios.get(REMOTE);
    return res.data;
  } catch (error) {
    console.error("Error fetching all tasks", error);
  }
};

export const addTask = async (task: { description: string }) => {
  console.log("new task to add", task);

  try {
    const res = await axios.post(REMOTE, task);
    // const res = await axios.post(LOCAL_DEV, task);
    console.log(res.data);
  } catch (error) {
    console.error("Error adding task", error);
  }
};

export const editTask = async (task: Task) => {
  try {
    const res = await axios.put(REMOTE, task);
    // const res = await axios.put(LOCAL_DEV, task);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error editing task", error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const res = await axios.delete(`${REMOTE}/${id}`);
    // const res = await axios.delete(`${LOCAL_DEV}/${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error editing task", error);
  }
};
