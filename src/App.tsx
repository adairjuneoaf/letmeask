//FUNÇÕES REACT E BIBLIOTECAS
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//PAGINAS
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { GlobalStyle } from "./styles/global";

//CONTEXTOS
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

export function App() {
  return (
    <AuthContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </AuthContextProvider>
  );
}
