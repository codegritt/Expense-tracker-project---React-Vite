import { useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import IncomeItem from "./IncomeItem";
import { useGlobalContext } from "../context/globalContext";

const Expense = () => {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <>
      <div>
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Expenses
        </h1>
        <div className="mt-5">
          <ExpenseForm />
        </div>
        <div className="incomes">
          {expenses.map((income) => {
            const { _id, title, amount, date, category, description, type } =
              income;
            console.log(income);
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Expense;
