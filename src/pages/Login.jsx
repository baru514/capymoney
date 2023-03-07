import { useEffect, useRef, useState } from 'react'
import ShowPassword from '../components/ShowPassword'
import Toast from '../components/Toast'
import { useLogin } from '../hooks/useLogin'

// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin();
  const [showPass, setShowPass] = useState(false)
  const [showToast, setShowToast] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    if(error){
      setShowToast(true)
    }
  }

  useEffect(()=>{
    if(error){
      setShowToast(true)
    }
    setTimeout(()=>{
      setShowToast(false)
    }, 6000)
  },[error])

  return (
    <div className={styles['form-card']}>
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type={showPass ? "text" : "password"} 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          required
        />
        <ShowPassword showPass={showPass} setShowPass={setShowPass} />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn">loading</button>}
      {showToast && error && <Toast type='error' message={error} setShowToast={setShowToast}/>}
    </form>
    </div>
  )
}
