import { useFirestore } from '../hooks/useFirestore'
import styles from '../pages/Home.module.css'
import cx from 'classnames'

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions')
  const handleClick = (id) => {
    deleteDocument(id);
  }
  if(transactions.length === 0){
    return<ul className={styles.noItem} ><li>
    <p className={styles.name} style={{color:'rgba(230,0,0,0.8)'}}>No transactions to display yet!</p>
  </li></ul>
  }
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}&shy;</p>
          <p className={styles.amount}>&#8377;{transaction.amount}</p>
          <div className={styles.close} onClick={()=>handleClick(transaction.id)}>&#x2715;</div>
        </li>
      ))}
    </ul>
  )
}