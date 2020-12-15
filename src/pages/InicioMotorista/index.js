import React from "react";

import "./css/styles.css";

import ImagemRecusar from './assets/recusar.svg';
import ImagemAceitar from './assets/aceitar.svg';

import { signOut, getUsuario, getPerfil } from "../../services/security";

import { useHistory } from "react-router-dom";

function InicioMotorista() {
    const history = useHistory();
    const UsuarioSessao = getUsuario();
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
                    <img src={getUsuario().imagem} alt="fotoDoUsuario" className="imagemDoCliente"/>
                </div>
                <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
                <span className="span-itens-menu-inicio-cliente" onClick={handlerPerfil}>Perfil</span>
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
            {/* Coluna direita */}
            <div className="div-coluna-direita-inicio-motorista">
                <div className="div-titulo-feed-morista">
                    Feed de solicitações
                </div>
                <div className="div-container-cards-solicitacao">
                    <div className="div-card-solicitacao">
                        <div className="div-coluna-esquerda-card-solicitacao">
                            Marcos Felipe solicitou um transporte
                        </div>
                        <div className="div-coluna-direita-card-solicitacao">
                            <div className="div-detalhes-card-solicitacao">
                                <span className="span-detalhes-card-solicitacao" onClick={() => { history.push("/detalhes") }}>Detalhes</span>
                            </div>
                            <div className="div-container-botoes-aceitar-recusar-card-solicitacao">
                                <div className="div-botoes-aceitar-recusar-card-solicitacao">
                                    <img src={ImagemRecusar} className="imagens-botoes-aceitar-recusar-card-solicitacao" alt="Recusar" onClick={() => {alert("tem certeza que deseja recusar essa solicitação?")}} />
                                </div>
                                <div className="div-botoes-aceitar-recusar-card-solicitacao">
                                    <img src={ImagemAceitar} className="imagens-botoes-aceitar-recusar-card-solicitacao" alt="Aceitar" onClick={() => { history.push("/valorOrcamento") }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default InicioMotorista;