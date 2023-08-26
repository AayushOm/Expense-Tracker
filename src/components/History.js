import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transactionhist from './Transsactionhist'

export default function History() {

  const {transactions}=useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction=>( <Transactionhist key={transaction.id} transaction={transaction}/>))}
        
      </ul>
    </>
  )
}
