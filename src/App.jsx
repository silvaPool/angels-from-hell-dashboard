import "./App.css";
import Arte from "./components/Arte";
import HomeUsuario from "./components/HomeUsuario";
import Livros from "./components/Livros";
import PaginaArtista from "./components/PaginaArtista";
import { Auth } from "./context/AuthContext";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* <Auth>
        <Routes />
      </Auth> */}

      {/* <HomeUsuario /> */}

      {/* <Arte /> */}

      {/* <PaginaArtista /> */}

      <Livros />
    </>
  );
}

export default App;
