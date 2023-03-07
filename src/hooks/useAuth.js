import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);

    if(context === undefined){
      throw new Error('useAuth() can only be used within an AuthProvider wrapper!')
    }

    return context
}