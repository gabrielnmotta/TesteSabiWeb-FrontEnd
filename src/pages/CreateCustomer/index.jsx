import { Header } from "../../components/Layout/Header/index.jsx";
import { Form } from "../../components/Form/index.jsx";
import { DataContext } from "../../context/DataContext.js";
import React, { useContext } from "react";
import './test.css';


export function CreateCustomer() {
  const { addCustomer } = useContext(DataContext);

    
    function handleSubmit(data) {
      addCustomer(data);
      }
  return (
    <>
     <Header title="Novo Registro"/>
     <div class="test">
        <Form onSubmit={handleSubmit} />
     </div>
    </>
    
  );
}
