import { useGlobalContext } from "../context/globalContext";
import IncomeForm from "./IncomeForm";

const Income = () => {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();
  return (
    <div>
      <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Incomes
      </h1>
      <div className="mt-5">
        <IncomeForm />
      </div>
    </div>
  );
};

export default Income;
