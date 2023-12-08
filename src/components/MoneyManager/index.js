import {Component} from 'react'
import './index.css'
import {v4 as uuId} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    userTitle: '',
    userAmount: '',
    userType: transactionTypeOptions[0].optionId,
    userDetails: [],
    yourBalance: 0,
    yourIncome: 0,
    yourExpenses: 0,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userTitle, userAmount, userType} = this.state

    const newTransaction = {
      id: uuId(),
      title: userTitle,
      amount: userAmount,
      type: userType,
    }

    this.setState(prevState => ({
      userDetails: [...prevState.userDetails, newTransaction],
      userTitle: '',
      userAmount: '',
    }))

    const intoAmount = parseInt(userAmount)

    if (userType === 'INCOME') {
      this.setState(prevState => ({
        yourIncome: prevState.yourIncome + intoAmount,
        yourBalance: prevState.yourBalance + intoAmount,
      }))
    } else if (userType === 'EXPENSES') {
      this.setState(prevState => ({
        yourExpenses: prevState.yourExpenses + intoAmount,
        yourBalance: prevState.yourBalance - intoAmount,
      }))
    }
  }

  onDeleteItem = id => {
    const {userDetails} = this.state
    const filterDelete = userDetails.filter(each => each.id !== id)
    this.setState({userDetails: filterDelete})

    const deleteItem = userDetails.filter(each => each.id === id)
    this.setState(prevState => ({
      yourBalance: prevState.yourBalance + parseInt(deleteItem[0].amount),
      yourExpenses: prevState.yourExpenses - parseInt(deleteItem[0].amount),
    }))
  }

  onChangeTitle = event => {
    this.setState({userTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({userAmount: event.target.value})
  }

  onChangeType = event => {
    this.setState({userType: event.target.value})
  }

  render() {
    const {
      userDetails,
      userTitle,
      userAmount,
      userType,
      yourBalance,
      yourIncome,
      yourExpenses,
    } = this.state
    return (
      <div className="bg-container">
        <div className="bg-card">
          <div className="user-card-details">
            <h1 className="user-card-heading">Hi, Richard</h1>
            <p className="user-card-desc">
              Welcome back to your
              <span className="user-card-bank"> Money Manager</span>
            </p>
          </div>
          <ul className="money-lists">
            <MoneyDetails
              yourbalance={yourBalance}
              yourincome={yourIncome}
              yourexpenses={yourExpenses}
            />
          </ul>
          <div className="user-details-info-card">
            <form className="user-form-card" onSubmit={this.onSubmitForm}>
              <h1 className="user-trans-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                className="user-input"
                value={userTitle}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                className="user-input"
                value={userAmount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                className="user-input"
                onChange={this.onChangeType}
                value={userType}
              >
                {transactionTypeOptions.map(each => (
                  <option
                    value={each.optionId}
                    key={each.optionId}
                    className="select-options"
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>

            <ul className="history-items">
              <h1 className="user-trans-heading">History</h1>
              <li className="history-head">
                <p className="histroy-title-desc">Title</p>
                <br />
                <p className="histroy-title-desc">Amount</p>
                <br />
                <p className="histroy-title-desc">Type</p>
              </li>
              {userDetails.map(each => (
                <TransactionItem
                  usercardDetails={each}
                  key={each.id}
                  deleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
