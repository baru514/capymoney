import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useAuth } from './hooks/useAuth'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const{ authReady, user } = useAuth();
  
  return (
    <div className="App">
      {authReady && (
        <BrowserRouter>
          <Navbar />
          <div className="AppMain">
          <Routes>
            <Route path='/' element={
             <>
             {!user && <Navigate to='/login' />}
             {user && <Home />}
             </>
            }/>
            <Route path='/signup' element={
              <>
              {!user && <Signup />}
              {user && <Navigate to='/' />}
              </>
            }/>
            <Route path='/Login' element={
              <>
              {!user && <Login />}
              {user && <Navigate to='/' />}
              </>
            }/>
          </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
