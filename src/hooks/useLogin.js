import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuth } from './useAuth';

export const useLogin = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try{
      
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      
      //dispatch login action

      dispatch({type: 'LOGIN', payload: res.user})
      
        setError(null)
        setIsPending(false)

    }catch(err){
        console.log(err.message);
        setError(err.message)
        setIsPending(false) 
    }
  }

  return { error, isPending, login}
}