import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext.js";
import plusImg from "../../assets/icons/plus.png";
import minusImg from "../../assets/icons/minus.png";
import editImg from "../../assets/icons/edit.png";
import "./table.css";


export function Table({  pathAdd,  data }) {
  const navigation = useNavigate();
  const { PreDeleteCustomer} = useContext(DataContext);


    return (
        <div class="main">
            <table>
                <thead>
                    <tr>
                        <th>
                        <Link to={pathAdd}>
                            <img src={plusImg} alt="Adicionar novo cliente" />
                        </Link>
                        </th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
          {data?.map((element) => {
            return (
              <tr key={element.TECL_ID}>
                <td>
                  <button
                    onClick={() => {
                      PreDeleteCustomer(element.TECL_ID)
                    }}
                  >
                    <img src={minusImg} alt="Deletar cliente" />
                  </button>
                  <button
                    onClick={() => {
                      navigation("/EditCustomer", {
                        state: {
                          id: element.TECL_ID,
                          name: element.TECL_NOME,
                          address: element.TECL_ENDERECO,
                          city: element.TECL_CIDADE,
                          uf: element.TECL_UF,
                          phone: element.TECL_TELEFONE,
                        },
                      });
                    }}
                  >
                    <img src={editImg} alt="Editar cliente" />
                  </button>
                </td>
                {Object.keys(element).map((key) => {
                     if (key !== "TECL_ID") {
                        return (
                          <td data-title={key}>{element[key]}</td>
                        );
                      }
                })}
              </tr>
            );
          })}
        </tbody>
            </table>
        </div>
    );
  }
  