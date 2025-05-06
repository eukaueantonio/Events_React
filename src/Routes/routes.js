import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login"
import ListagemEventos from "../pages/listagemEventos/ListagemEventos";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/Eventos" element={<ListagemEventos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
