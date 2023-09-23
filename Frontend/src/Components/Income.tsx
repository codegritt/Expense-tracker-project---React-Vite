import { useGlobalContext } from "../context/globalContext";
import IncomeForm from "./IncomeForm";
import IncomeItem from "./IncomeItem";

const Income = () => {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();
  return (
    <div>
      <h1 className="text-center text-2xl mb-3 font-semibold whitespace-nowrap dark:text-white">
        Incomes
      </h1>
      <hr></hr>
      <div className="mt-5">
        <IncomeForm />
      </div>
      <div className="incomes">
        {incomes.map((income) => {
          const { _id, title, amount, date, category, description, type } =
            income;
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
              deleteItem={deleteIncome}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Income;
