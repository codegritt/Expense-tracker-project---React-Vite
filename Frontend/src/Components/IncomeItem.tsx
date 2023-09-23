import styled from "styled-components";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  console.log("type", type);

  return (
    <div className="mt-5">
      <IncomeItemStyled indicator={indicatorColor}>
        <div className="content">
          <span className="flex font-semibold">
            Title : <p className="ml-3">{title}</p>
          </span>
          <span className="flex font-semibold">
            Date : <p className="ml-3">{date}</p>
          </span>

          <div className="inner-content">
            <div className="text">
              <span className="flex font-semibold">
                Amount :<p className="ml-3">$ {amount}</p>
              </span>
              <span className="flex font-semibold">
                Comment : <p className="ml-3">{description}</p>
              </span>
            </div>

            <div className="btn-con">
              <button
                onClick={() => deleteItem(id)}
                className="text-gray-800 border dark:text-white hover:bg-gray-50 focus:ring-0 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-0"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </IncomeItemStyled>
    </div>
  );
}

const IncomeItemStyled = styled.div`
  background: grey;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 50%;
  color: #fff;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;

export default IncomeItem;
