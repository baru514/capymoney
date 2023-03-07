import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuth } from '../hooks/useAuth';
import Toast from './Toast';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const { user } = useAuth();
  const [showToast, setShowToast] = useState(false);


  const {logout} = useLogout();

  const handleLogout =  () => {
    logout();
    setShowToast(true)
    setTimeout(()=>{
      setShowToast(false)
    }, 5000)
  }

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>CapyMoney</li>
        
        {!user && (
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </>
         )
        }

        {user && (  
          <> 
          <li className='hello'>hello, {user.displayName}</li>    
          <li><button 
            className='btn'
            onClick={handleLogout}>Logout</button>
          </li>
          </> 
        )}
      </ul>
      {showToast && <Toast type='success' message='Logged out successfully!' 
      setShowToast={setShowToast}/>}
    </nav>
  )
}
