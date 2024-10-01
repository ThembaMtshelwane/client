import React from "react";
import { isTask } from "../../utils";
import { addTask, editTask } from "../../api/api";

type Props = {
  id: string;
};

const EditForm = ({ id }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData) as {
      [key: string]: FormDataEntryValue;
    };
    const description: string = payload.description as string;
    const updatedTask = {
      description,
      id,
    };

    editTask(updatedTask);
  };

  return (
    <div className="p-4 md:p-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task Description
          </label>
          <textarea
            required
            name="description"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum tempora itaque voluptates corrupti aut?"
            className="h-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
