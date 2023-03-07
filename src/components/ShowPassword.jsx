import styles from './ShowPassword.module.css'
import passView from '../images/password_visible.png'
import passNotView from '../images/password_NOT_visible.png'

export default function ShowPassword({ showPass, setShowPass }) {
 

  const handleClick = () => {
    if(showPass){
      setShowPass(false)
    }else{
      setShowPass(true)
    }
  }
  return (

    <div className={styles.showPassWrapper}>
      {!showPass && <img onClick={handleClick} src={passNotView} alt="Password visibility toggle icon" />}
      {showPass && <img onClick={handleClick} src={passView} alt="Password visibility toggle icon" />}
    </div>
  )
}
