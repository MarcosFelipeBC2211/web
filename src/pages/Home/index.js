import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { api } from '../../services/api';
import { signIn } from '../../services/security';

import "./estilos/styles.css";
import Footer from '../footer/index';

import Animacao from './assets/animacao.gif';

function Home(){
    const history = useHistory();

    const [clienteLogin, setClienteLogin] = useState({
        email: "",
        senha: ""
    });

    const entrar = async (e) => {
        e.preventDefault();
        try {
            const retorno = await api.post("/sessao", clienteLogin);
            
            if (retorno.status === 201) {
                signIn(retorno.data);
                const { usuarioPerfil } = retorno.data.usuario;
                console.log(usuarioPerfil)

                if (usuarioPerfil === "motorista") {
                    return history.replace("/inicioMotorista");
                }else{
                    return history.replace("/inicioCliente");
                }
            
            }
        }catch(erro){
      
            if (erro.response) {
            return window.alert(erro.response.data.erro);
            }
            console.log(erro);
            window.alert("Ops, algo deu errado. Tente novamente!");
        }
    };

    const handlerInput = (e) => {
        setClienteLogin({ ...clienteLogin, [e.target.id]: e.target.value });
    };

    return(
        <body>
            <div className="container-home-web">        
                <header>
                    <div className="container-logo-empresa-home-web">
                        TransCorp
                    </div>
                    <div className="container-text-inputs-home-web">
                        <div className="input-fields inline texts-inputs-home-web">
                            <input
                            placeholder="Insira seu e-mail"
                            required
                            id="email"
                            type="email"
                            className="validate"
                            value={clienteLogin.email}
                            onChange={handlerInput}
                            />
                        </div>
                        <div className="input-fields inline texts-inputs-home-web">
                            <input
                            placeholder="Insira sua senha"
                            required
                            id="senha"
                            type="password"
                            className="validate"
                            value={clienteLogin.senha}
                            onChange={handlerInput}
                            />
                        </div>
                    </div>
                    <div className="container-buttons-home-web">
                    <button 
                        type="submit"
                        name="action"
                        onClick={entrar}
                    >
                        Entrar
                    </button>
                    <button
                        onClick={() => {
                            history.replace("/tipoDeCadastro")
                        }}
                    >
                        Registre-se
                    </button>
                </div> 
                </header>

                <main>
                    <div className="container-itens-main-home-web">
                        <span class="titulo-main-home-web">Precisa de uma entrega?</span>
                        <span class="subtitulo-main-home-web">Encontre um transportador</span>
                        <span class="descricao-main-home-web">De pequenas entregas à grandes mudanças</span>
                    </div>

                    <div className="container-itens-main-home container-animacao">
                        <img src={Animacao} className="animacao-home-web"/>
                    </div>
                </main>

                <Footer/>
            </div>
        </body>
    );
}

export default Home;