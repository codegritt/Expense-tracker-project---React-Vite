import ExpenseForm from "./ExpenseForm";

const Expense = () => {
  return (
    <>
      <div>
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Expenses
        </h1>
        <div className="mt-5">
          <ExpenseForm />
        </div>
      </div>
    </>
  );
};

export default Expense;
