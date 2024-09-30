import React, { useState } from "react";
import SignUp from "./Modals/SignUp";
import Login from "./Modals/Login";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("login");

  const renderTabContent = () => {
    switch (activeTab) {
      case "sign-up":
        return <SignUp />;
      case "login":
        return <Login />;
        return (
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[70vh] flex items-center justify-center">
      <div className="w-full h-[500px] p-3">
        <div className="mb-4 border-b  border-gray-200 dark:border-gray-700 ">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "login"
                    ? "border-blue-500 text-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("login")}
                type="button"
                role="tab"
              >
                Login
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "sign-up"
                    ? "border-blue-500 text-blue-600"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("sign-up")}
                type="button"
                role="tab"
              >
                Sign-Up
              </button>
            </li>
          </ul>
        </div>
        <div>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default TabComponent;
