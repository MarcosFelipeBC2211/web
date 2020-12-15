import React from "react";
import Whatsapp from './assets/whatsapp.svg';
import Seta from './assets/arrow.svg';
import "./css/styles.css";
import { useHistory } from "react-router-dom";
import { signOut, getUsuario, getPerfil } from "../../services/security";


const Mensagens = () => {
  const UsuarioSessao = getUsuario();
  const history = useHistory();

  const handlerPerfil = () => {
    if (getPerfil() === "motorista") {

      history.push("/inicioMotorista")
    } else {
      history.push("/inicioCliente")

    }
  }
  return (
    <section className="section-container-inicio-cliente">
      {/* Coluna esquerda */}
      <div className="div-coluna-esquerda-inicio-cliente">
        <div className="div-foto-inicio-cliente">
          <img src={getUsuario().imagem} className="imagemDoCliente" />
        </div>
        <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
        <span className="span-itens-menu-inicio-cliente" onClick={handlerPerfil }>Perfil</span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarSolicitacao") }}>
          Criar Solicitação
        </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarPostagem") }}>
          Criar Postagem
        </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/orcamento") }}>
          Criar Orcamento
        </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/mensagens") }}>
          Mensagens
                </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/feedSolicitacoes") }}>
          Solicitações de Frete
                </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/feedVeiculos") }}>
          Veículos
                </span>
        <span className="span-itens-menu-inicio-cliente"
          onClick={() => {
            signOut();
            history.replace("/");
          }}>Sair</span>
      </div>
      <section className="section-container-mensagens">
        <div className="div-card-mensagens">
          <div className="div-titulo-mensagens">
            Mensagens
              </div>
          <div className="div-container-lista-mensagens">
            <div className="div-card-resposta">
              <div className="div-titulo-card-resposta">
                Resposta do motorista
        </div>
              <div className="div-container-resposta" style={{ border: "solid 2px #6F4A8E", borderBottomLeftRadius: "7px", borderBottomRightRadius: "7px" }}>
                <div className="div-container-itens-resposta">
                  <span className="span-resposta-itens-titulo">Sua Solicitaçao foi aceita</span>
                </div>
                <div className="div-container-itens-resposta">
                  <span className="span-resposta-itens-titulo">Nome do motorista</span>
                  <span className="span-resposta-itens">Marcos Felipe</span>
                </div>
                <div className="div-container-itens-resposta">
                  <span className="span-resposta-itens-titulo">E-mail</span>
                  <span className="span-resposta-itens">marcosfelipe@gmail.com</span>
                </div>
                <div className="div-container-itens-resposta">
                  <span className="span-resposta-itens-titulo">Valor</span>
                  <span className="span-resposta-itens">150,00</span>
                </div>
                <div className="div-container-itens-resposta">
                  <span className="span-resposta-itens-titulo">Celular</span>
                  <span className="span-resposta-itens">(11) 9 8765-4321</span>
                </div>
                <div className="div-container-resposta-whatsapp">
                  <span className="span-resposta-whatsapp">Contate-o via whatsapp</span>
                  <a href="https://wa.me/5511941005336" target="_blank"><div className="div-botao-resposta-whatsapp">
                    <img className="imagem-resposta-whatsapp" src={Whatsapp} alt="Whatsapp" />
                  </div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Mensagens;
