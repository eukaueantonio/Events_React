import "./Header.css"
import Logo from "../../assents/img/logo.png";
import { Link } from "react-router-dom";
import Porta from "../../assents/img/Vector.png"

const Header = () => {
    return(
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                <img src={Logo} alt="Logo do Event Plus" />
                </Link>
                <nav className="nav_header">
                    <Link className="link_header" to="/Home">Home</Link>
                    <Link className="link_header" to="/CadastroEventos">Eventos</Link>
                    <Link className="link_header" to="/ListagemUsuarios">Usuários</Link>
                    <Link className="link_header" to="/Contatos">Contatos</Link>
                    <Link className="link_header" to="/Administrador">Administrador</Link>
                    <Link to="/">
                    <img src={Porta} alt="Imagem de porta"/>
                    </Link>
                </nav>
            </div>   
        </header>
    )
}

export default Header;