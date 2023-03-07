import { useEffect, useState } from 'react'
import styles from './Signup.module.css'
import { useSignup } from '../hooks/useSignup'
import ShowPassword from '../components/ShowPassword'
import Toast from '../components/Toast'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const {signup, error, isPending} = useSignup();

  const [showPass, setShowPass] = useState(false)
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password, displayName)
    if(error){
      setShowToast(true)
    }else{
      setEmail('');
      setPassword('');
      setDisplayName('');
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
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>SignUp</h2>
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
      <label>
        <span>Display name:</span>
        <input 
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
          required
        />
      </label>
      {!isPending && <button className="btn">SignUp</button>}
      {isPending && <button className="btn">loading</button>}
      {showToast && <Toast type='error' message={error} setShowToast={setShowToast}/>}
    </form>
    </div>
  )
}
