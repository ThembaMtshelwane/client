import axios from "axios";

export const getAllTasks = async () => {
  try {
    const res = await axios.get("http://localhost:9000/api");
    return res.data.tasks;
  } catch (error) {}
};
