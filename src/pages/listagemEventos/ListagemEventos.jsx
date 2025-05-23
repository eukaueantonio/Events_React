import "./ListagemEventos.css"
import { Fragment } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import BotaoLogin from "../../components/botaoLogin/BotaoLogin";
import Lista from "../../components/lista/Lista";

const ListagemEventos = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <div className="div_para_titulo">
                    <h1> Cadastro tipo de evento</h1>
                    <hr />
                </div>
                <div className="apenas_para_ficar_do_lado">
                    <div className="div_para_imagem"></div>
                    <div className="div_para_esquerda">
                        <form className="div_para_colocar_um_embaixo_do_outro">
                            <input type="text" name="title" placeholder="Título" />
                            <BotaoLogin nomeDoBotao="Cadastrar" />
                        </form>
                    </div>
                </div>
            </main>
            <Lista nomeTitulo ="Lista tipo de evento" nomeDaTabela="Titulo" nomeDaSegundaTabela="Tipo Evento"/>
            <Footer />
        </Fragment>
    )
}

export default ListagemEventos;