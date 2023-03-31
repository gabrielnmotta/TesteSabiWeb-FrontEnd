import { Header } from "../../components/Layout/Header/index.jsx";
import { Form } from "../../components/Form/index.jsx";
import { DataContext } from "../../context/DataContext.js";
import React, { useContext,useEffect } from "react";
import { useLocation } from "react-router-dom";




export function EditCustomer() {
  const { EditCustomer } = useContext(DataContext);
  const location = useLocation();
  const state = location.state

  function handleSubmit(data) {
    EditCustomer(data);
    }

  useEffect(() => {
    EditCustomer()
  }, []);

  return (
    <>
        <Header title="Editar Registro"/>
        <Form onSubmit={handleSubmit} EditData={state}/>

    </>
  );
}