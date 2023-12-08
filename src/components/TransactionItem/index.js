import './index.css'

const TransactionItem = props => {
  const {usercardDetails, deleteItem} = props
  const {id, title, amount, type} = usercardDetails

  const toType = type === 'INCOME' ? 'Income' : 'Expenses'

  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="history-head-add-card">
      <p className="histroy-desc">{title}</p>
      <br />
      <p className="histroy-desc">Rs {amount}</p>
      <br />
      <p className="histroy-desc">{toType}</p>
      <br />
      <button
        type="button"
        data-testid="delete"
        className="delete-btn"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default TransactionItem
