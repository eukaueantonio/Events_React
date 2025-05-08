import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login"
import ListagemEventos from "../pages/listagemEventos/ListagemEventos";
import ListagemUsuarios from "../pages/listagemUsuarios/ListagemUsuarios";
import CadastroEventos from "../pages/cadastroEventos/CadastroEventos";
import Eventos from "../pages/eventos/Eventos";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/ListagemEventos" element={<ListagemEventos />} />
                <Route path="/ListagemUsuarios" element={<ListagemUsuarios />} />
                <Route path="/CadastroEventos" element={<CadastroEventos />} />
                <Route path="/Eventos" element={<Eventos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
