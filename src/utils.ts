import { Task } from "./definitions";

export const isTask = (data: any): data is Task => {
  return typeof data.description === "string";
};
