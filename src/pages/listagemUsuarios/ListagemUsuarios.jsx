import "./ListagemUsuarios.css"
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import { Fragment } from "react";
import BotaoLogin from "../../components/botaoLogin/BotaoLogin";

const ListagemUsuarios = () => {
    return(
        <Fragment>
            <Header />
            <main>
                <div className="div_para_titulo">
                    <h1> Cadastro tipo de usuário</h1>
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
            <Lista nomeTitulo ="Lista tipo de usuário" nomeDaTabela="Titulo" nomeDaSegundaTabela="Tipo de usuário"/>
            <Footer />
        </Fragment>
    )
}

export default ListagemUsuarios;