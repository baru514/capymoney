import { useState, useEffect, useRef } from 'react'
import { useFirestore } from '../hooks/useFirestore'


export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('transactions')
  const transactRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDocument({
      uid, 
      name, 
      amount,
    })
    setName('')
    setAmount('')
    transactRef.current.focus(null)
  }
  

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name}
            ref={transactRef}
          />
        </label>
        <label>
          <span>Amount (Rs):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)} 
            value={amount} 
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}