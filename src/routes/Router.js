import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Principal } from "../pages/Principal/index";
import { CreateCustomer } from "../pages/CreateCustomer/index";
import { EditCustomer } from "../pages/EditCustomer/index";




export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Principal />} />
        <Route path="/CreateCustomer" element={<CreateCustomer />} />
        <Route path="/EditCustomer" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
};
