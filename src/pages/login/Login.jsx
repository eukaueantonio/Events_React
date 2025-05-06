import "./Login.css";
import Logo from "../../assents/img/logo.png";
import BotaoLogin from "../../components/botaoLogin/BotaoLogin";
//import Bannner from "../../assents/img/banner.png"

const Login = () => {
    return (

        <main className="main_login">
            {/* <img src={Logo} alt="Logo do Event Plus"/>
            <BotaoLogin nomeDoBotao ="Login"/>
            <img src={Bannner} alt="Banner do lado esquerdo"/> */}
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Event Plus" />
                <form action="" className="form_login">
                    <h1>Login</h1>

                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Username" />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Password" />
                        </div>
                    </div>
                    <div className="div_para_esqueceu_a_senha">
                        <a href="">Esqueceu a senha?</a>
                    </div>
                    <BotaoLogin nomeDoBotao="Login" />
                </form>
            </section>
        </main>


    )
}

export default Login;