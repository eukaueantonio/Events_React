import "./Lista.css"
import Excluir from "../../assents/img/excluir.png"
import Editar from "../../assents/img/editar.png"
import { Link } from "react-router-dom"
const Lista = (props) => {
    return (
        <div className="cor_de_fundo">
        <section className=" layout_grid listagem">
            <h1>{props.nomeTitulo}</h1>
            <hr />

            <div className="tabela">
                <table>
                    {/* cabecalho da tabela */}
                    <thead>
                        {/* t de tabela e r de linha */}
                        <tr className="table_cabecalho">
                            {/* t tabela e h de cabeca */}
                            <th>{props.nomeDaTabela}</th>
                            {/* <th style={{display:props.visibilidade}}>Genero</th> */}
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody = corpo da tabela */}
                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome">{props.nomeDaSegundaTabela}</td>
                            {/* <td data-cell="Genero" style={{display:props.visibilidade}}>Acao</td> */}
                            <td data-cell="Editar"><Link to="/"><img src={Editar} alt="Caneta" /></Link></td>
                            <td data-cell="Excluir"><Link to="/"><img src={Excluir} alt="Lixeira" /></Link></td>
                        </tr>
                        
                     
                    </tbody>
                </table>
            </div>
        </section>

        </div>
    )
}

export default Lista;