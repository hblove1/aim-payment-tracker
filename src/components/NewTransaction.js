import React from 'react'

const NewTransaction = ({ player }) => {
  return (
    <div className="new-transaction">
      <span style={{ whiteSpace: 'nowrap' }}>{player.firstName + ' ' + player.lastName}</span>
      <form>
        <span className="form-control">
          <label htmlFor="amount">Amount</label>
          <input className="transaction-amount" type="number" name="amount" id="amount" defaultValue={player.balance} />
        </span>
        <span className="form-control">
          <label htmlFor="date">Date</label>{console.log(new Date().toLocaleDateString())}
          <input className="transaction-date" type="date" name="date" id="date" defaultValue={new Date().toISOString().substring(0, 10)} />
        </span>
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  )
}

export default NewTransaction