import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const DataContext = createContext();

export const DataProvider = ({ children, customer }) => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async() => {
    try {
      const res = await api.get("/v1/teste/clientes");
      setCustomers(res.data.data);
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  }

  const addCustomer = async(customer) => {
    try {
      const res = await api.post("/v1/teste/cliente", customer);
      if (res.data.sucess) {
        setCustomers([...customers, res.data.data]);
        alert("Cliente registrado com sucesso");
      }
    } catch (error) {
      alert("Ocorreu um erro ao resgistrar o cliente");
    }
  }

  const EditCustomer = async(customer) => {
    try {
      const res = await api.put("/v1/teste/cliente", customer);
      if (res.data.sucess) {
        setCustomers([...customers, res.data.data]);
        alert("Cliente editado com sucesso");
      }
    } catch (error) {
      alert("Ocorreu um erro ao resgistrar o cliente");
    }
  }

  const DeleteCustomer = async(id) => {
    try {
      const res = await api.delete(`/v1/teste/cliente/${id}`);
      if (res.data.sucess) {
        alert("Cliente deleteado com sucesso");
      }
    } catch (error) {
      alert("Ocorreu um erro ao resgistrar o cliente");
    }
  }

  const PreDeleteCustomer = (id) => {
    const confirm = window.confirm("Deseja realmente deletar este cliente?");
    if (confirm) {
      DeleteCustomer(id);
    } 
  }


  return (
    <DataContext.Provider value={{ customers, addCustomer, EditCustomer, DeleteCustomer, fetchCustomers, PreDeleteCustomer }}>
      {children}
    </DataContext.Provider>
  );
};
