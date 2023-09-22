import { useState } from "react";
import { useAuth } from "../utils/auth";
import Dashboard from "./Dashboard";
import Income from "./Income";
import Expense from "./Expense";

export const Tracker = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const auth = useAuth();

  return (
    <>
      <div className="grid grid-cols-[300px_minmax(800px,_1fr)_100px] gap-4">
        <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-2xl">
          <h1 className="mr-5 text-white ml-4 text-xl font-medium">Welcome {auth.user} !</h1>
          <ul className="space-y-2 font-medium text-xl mt-3">
            <li>
              <a
                href="#"
                onClick={() => setActiveTab("Dashboard")}
                className={
                  activeTab === "Dashboard"
                    ? "flex items-center p-2 ml-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    : "flex items-center p-2 ml-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActiveTab("Incomes")}
                className={
                  activeTab === "Incomes"
                    ? "flex items-center p-2 ml-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    : "flex items-center p-2 ml-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Incomes</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setActiveTab("Expenses")}
                className={
                  activeTab === "Expenses"
                    ? "flex items-center p-2 ml-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    : "flex items-center p-2 ml-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Expenses</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-2xl text-white show-box">
          {activeTab === "Dashboard" && (
            <div className="p-2 pt-0 show-box">
              <Dashboard />
            </div>
          )}
          {activeTab === "Incomes" && (
            <div className="p-2 pt-0 show-box">
              <Income />
            </div>
          )}
          {activeTab === "Expenses" && (
            <div className="p-2 pt-0 show-box">
              <Expense />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
