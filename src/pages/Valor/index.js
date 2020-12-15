import React, { useState } from 'react';
import { api } from "../../services/api";
import { getUsuario } from "../../services/security";

import { useHistory } from "react-router-dom";
import "./css/styles.css";

const Valor = () => {
    const history = useHistory();

    const [motoristaOrcamentoController, setMotoristaOrcamentoController] = useState({
        valor: "",
    });

    const resposta = async (e) => {

        e.preventDefault();
        try {
            const retorno = await api.post("/orcamento/:id/resposta", motoristaOrcamentoController);
            if (retorno.status === 201) {
                return history.replace("/inicioMotorista");
            }
        } catch (erro) {
            if (erro.response) {
                return window.alert(erro.response.data.erro);
            }
            window.alert("Ops, algo deu errado. Tente novamente!");
        }
    };

    const handlerInput = (e) => {
        setMotoristaOrcamentoController({ ...motoristaOrcamentoController, [e.target.id]: e.target.value });
    };
    return (
        <form onSubmit={resposta}>
            <div className="divContainerValor">
                <div className="divCardValor">
                    <div className="divValorTitulo">
                        Qual o valor do transporte?
                </div>
                    <div className="form-field">
                        <label for="dataHora">Informe o valor</label>
                        <input type="text" id="valor"
                            value={motoristaOrcamentoController.valor}
                            onChange={handlerInput}
                            className="textoInput"
                            placeholder="Padrão R$ 00,00" />
                    </div>
                    <div className="divContainerBotoesEnviarCancelar">
                        <div className="divBotoesCancelarEnviar" onClick={() => { history.push("/feedSolicitacoes") }}>
                            Cancelar
                    </div>
                        <div className="divBotoesCancelarEnviar" onClick={() => { history.push("/feedSolicitacoes") }}>
                            <div onClick={() => {alert("Em breve o cliente entrará em contato!")}}>
                                Enviar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Valor;

