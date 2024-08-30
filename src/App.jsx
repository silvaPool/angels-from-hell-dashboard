import "./App.css";
import Arte from "./components/Arte";
import Casas from "./components/Casas";
import HomeUsuario from "./components/HomeUsuario";
import Livros from "./components/Livros";
import PaginaArtista from "./components/PaginaArtista";
import Welcome from "./components/Welcome";
import { Auth } from "./context/AuthContext";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Auth>
        <Routes />
      </Auth>

      {/* <Perfil /> */}

      {/* <Welcome /> */}

      {/* <Casas /> */}

      {/* <HomeUsuario /> */}

      {/* <Arte /> */}

      {/* <PaginaArtista /> */}

      {/* <Livros /> */}
    </>
  );
}

export default App;
