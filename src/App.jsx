import './App.css'
import Arte from './components/Arte'
import HomeUsuario from './components/HomeUsuario'
import { Auth } from './context/AuthContext'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Routes from './routes/AppRoutes'

function App() {
 

  return (
    <>

      {/* <Auth>
        <Routes />
      </Auth> */}

      {/* <HomeUsuario /> */}

      <Arte />
      
    </>
  )
}

export default App
