import { useState, useEffect } from "react";
import { projectAuth } from '../firebase/config'
import { useAuth } from './useAuth'

export const useSignup = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuth();

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try{
      const res = await projectAuth.createUserWithEmailAndPassword(email,password)
      console.log(res);

      if(!res){
        throw new Error('Could not complete signup!')
      }

      await res.user.updateProfile({displayName})

      // dispatch login action

      dispatch({type: 'LOGIN', payload: res.user})

        setError(null);
        setIsPending(false);

    }catch(err){
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
    }
  }

  return { error, isPending, signup}
}