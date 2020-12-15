import React from 'react';
import { useHistory } from "react-router-dom";
import "./css/styles.css";

function Detalhes(){
    
  const history = useHistory();
    return(
        <section className="section-container-detalhes">
            <div className="div-card-detalhes">
                <div className="div-titulo-detalhes">
                    Detalhes
                </div>
                <div className="div-container-itens-detalhes">
                    <h6 className="h6-item-detalhes">Nome do solicitante</h6>
                    <h6 className="h6-nome-solicitante">Marcos Felipe</h6>
                </div>
                <div className="div-container-itens-detalhes">
                    <h6 className="h6-item-detalhes">Data e hora</h6>
                    <h6 className="h6-data-hora-solicitacao">20/12, 8:00</h6>
                </div>
                <div className="div-container-itens-detalhes">
                    <h6 className="h6-item-detalhes">Endereço de partida</h6>
                    <h6 className="h6-endereco-partida-solicitacao">Rua Amaralina, 26 - Jardim Sol Nascente - Jandira-SP</h6>
                </div>
                <div className="div-container-itens-detalhes">
                    <h6 className="h6-item-detalhes">Endereço de chegada</h6>
                    <h6 className="h6-endereco-chegada-solicitacao">Rua Alberto Ruffolo, 453 - Jardim Centro - Jandira-SP</h6>
                </div>
                <div className="div-container-itens-detalhes">
                    <h6 className="h6-item-detalhes">Item</h6>
                    <h6 className="h6-nome-item-solicitacao">Móveis</h6>
                </div>
                <div className="div-container-itens-detalhes">
                    <h6 className="h6-item-detalhes">Descrição</h6>
                    <h6 className="h6-descricao-item-solicitacao">Olá, preciso de um transporte para realizar minha mudança de endereço.</h6>
                </div>
                <div className="div-container-voltar-detalhes">
                    <div className="div-botao-voltar-detalhes" onClick={() => {history.push("/inicioMotorista")}}>
                        Voltar
                    </div>
                </div>
            </div>
        </section>
    );    
}

export default Detalhes;