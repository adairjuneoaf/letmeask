//FUNÇÕES REACT E BIBLIOTECAS
import { BrowserRouter, Route, Routes } from "react-router-dom";

//PAGINAS
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { GlobalStyle } from "./styles/global";

//CONTEXTOS
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </BrowserRouter>

      <GlobalStyle />
    </AuthContextProvider>
  );
}

export default App;
