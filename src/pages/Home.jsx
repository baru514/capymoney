import { useAuth } from '../hooks/useAuth'
import { useCollection } from '../hooks/useCollection'

// styles
import styles from './Home.module.css'

// components
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'
import { useState } from 'react'

export default function Home() {
  const { user } = useAuth()
  const { documents, error } = useCollection(
    'transactions', ["uid", "==", user.uid], ['createdAt', 'desc']
  )
  // const [docsShow, setDocsShow] = useState(true);

  // if(documents.length === 0){
  //   setDocsShow(false)
  // }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p className='error'>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
