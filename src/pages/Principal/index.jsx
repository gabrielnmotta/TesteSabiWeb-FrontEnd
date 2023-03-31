import { Header } from "../../components/Layout/Header/index.jsx";
import React, { useContext, useEffect,useState } from "react";
import { DataContext } from "../../context/DataContext.js";
import { Table } from "../../components/TableComponent/index.jsx";
import { Search } from "../../components/Search/index.jsx";



export function Principal() {
    const { customers, fetchCustomers } = useContext(DataContext);
    const [search, setSearch] = useState("");


    const filteredList =
    search.length > 0
      ? customers
          .filter((item) =>
            item["TECL_NOME"].toLowerCase().includes(search.toLowerCase())
          )
      : customers


    useEffect(() => {
      fetchCustomers();
    }, []);

  return (
    <>
        <Header title="Teste ReactJS - SaibWeb"/>
        <Search setSearch={(e) => {
            setSearch(e);
          }}/>
        <Table pathAdd={"/CreateCustomer"} pathEdit={"/EditCustomer"} data={filteredList}/>
    </>
  );
}
