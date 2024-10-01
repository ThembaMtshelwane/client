import axios from "axios";

export const getAllTasks = async () => {
  try {
    const res = await axios.get("http://localhost:9000/api/tasks");
    return res.data;
  } catch (error) {}
};
