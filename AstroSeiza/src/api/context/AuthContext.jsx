import {createContext,useState, useContext, useEffect} from 'react';
import {registerRequest , loginRequest} from '../auth'

export const AuthContext = createContext();

export const useAuth = () =>{
const context = useContext(AuthContext)
if (!context) {
    throw new Error('useAuth debe estar dentro del proveedor AuthContext')
}
return context
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState([]);


    const sigin = async (user) =>{
      try{
        const res =  await loginRequest(user)
        console.log(res)

      }catch(error){
        console.log(error)
        if(Array.isArray(error.response.data)){
            return([error.response.data])
        }
        setError(error.response.data.message)
    }
    }

    const singup  = async (user) =>{
        try{
            const res = await registerRequest(user)
        console.log(res.data)
        setUser(res.data)
        setIsAuthenticated(true)
        }catch(error){
            console.log(error.response.data)
            setError(error.response.data)
        }
    }

    useEffect(() => {
        if(error.length > 0){
         const timer =   setTimeout(() => {
                setError([])
            }, 5000);
            return ()=> clearTimeout(timer)
        }
    },[error])

    return (
        <AuthContext.Provider value={{
            singup,
            user,
            isAuthenticated,
            error,
            sigin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}