import "./ListagemEventos"
import { Fragment } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import BotaoLogin from "../../components/botaoLogin/BotaoLogin";

const ListagemEventos = () => {
    return(
        <Fragment>
            <Header/>
            <main>
            <div className="div_para_titulo">
                <h1> Cadastro tipo evento</h1>
            </div>
            <div className="div_para_imagem"></div>
            <div>
                <form>
                <label htmlFor="title">Email:</label>
                <input type="text" name="title" placeholder="Título" />
                <BotaoLogin nomeDoBotao="Cadastrar"/>
                </form>
            </div>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default ListagemEventos;