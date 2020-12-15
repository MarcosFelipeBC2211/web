import React from "react";

import "./css/styles.css";

function estrutura({ children }) {
    return (
        <div className="div-coluna-esquerda-inicio-motorista">
            <div className="div-foto-inicio-motorista">
                <img src={getUsuario().imagem} />
            </div>
            <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
            <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/inicioCliente") }}>Perfil</span>
            <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarSolicitacao") }}>
                Criar Solicitação
                </span>
            <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarPostagem") }}>
                Criar postagem
                </span>
            <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/orcamento") }}>
                Criar orcamento
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
    );
}

export default estrutura;