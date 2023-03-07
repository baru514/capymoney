import styles from './Toast.module.css';
import cx from 'classnames'

function Toast({type, message, setShowToast}) {

  return (
    <div className={cx(styles.container,styles[`${type}`])}>
      <div className={styles.text}>{message}</div>
      <div className={styles.close} onClick={()=>setShowToast(false)}>&#x2716;</div>
    </div>
  )
}

Toast.defaultProps = {
  type: 'default'
}

export default Toast
