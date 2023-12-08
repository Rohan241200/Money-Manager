import './index.css'

const MoneyDetails = props => {
  const {yourbalance, yourincome, yourexpenses} = props

  return (
    <>
      <li className="user-your balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img-logo"
        />
        <div className="user-money">
          <p className="user-head">Your Balance</p>
          <p className="user-rupees" data-testid="balanceAmount">
            Rs {yourbalance}
          </p>
        </div>
      </li>
      <li className="user-your income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img-logo"
        />
        <div className="user-money">
          <p className="user-head">Your Income</p>
          <p className="user-rupees" data-testid="incomeAmount">
            Rs {yourincome}
          </p>
        </div>
      </li>
      <li className="user-your expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img-logo"
        />
        <div className="user-money">
          <p className="user-head">Your Expenses</p>
          <p className="user-rupees" data-testid="expensesAmount">
            Rs {yourexpenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
