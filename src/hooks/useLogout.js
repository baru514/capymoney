import { useEffect, useState } from "react";
import { projectAuth } from '../firebase/config'
import { useAuth } from './useAuth'

export const useLogout = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuth();

  const logout = async () => {
    setError(null)
    setIsPending(true)

    try{
      await projectAuth.signOut();
      
      // dispatch logout action(no need to attach payload since user has been logged out)
      dispatch({type: 'LOGOUT'})

        setError(null);
        setIsPending(false);

    }catch(err){
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
    }
  }

  return { error, isPending , logout}
}