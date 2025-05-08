import "./CadastroEventos.css"
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import { Fragment } from "react";
import BotaoLogin from "../../components/botaoLogin/BotaoLogin";

const CadastroEventos = () => {
    return(
        <Fragment>
            <Header/>
            <main>
                <div className="div_para_titulo">
                    <h1> Cadastro de eventos</h1>
                    <hr />
                </div>
                <div className="apenas_para_ficar_do_lado">
                    <div className="div_para_imagem"></div>
                    <div className="div_para_esquerda">
                        <form className="div_para_colocar_um_embaixo_do_outro">
                            <input type="text" name="title" placeholder="Título" />
                            <select name="genero" id="">
                            <option value="" disabled selected>Selecione</option>
                            <option value="">opcao 1</option>
                            <option value="">opcao 2</option>
                            <option value="">opcao 3</option>
                        </select>
                            <BotaoLogin nomeDoBotao="Cadastrar" />
                        </form>
                    </div>
                </div>
            </main>
            <Lista nomeTitulo ="Lista de eventos" nomeDaTabela="Nome" nomeDaSegundaTabela="Nome Evento"/> 
            <Footer/>
        </Fragment>
    )
}

export default CadastroEventos;