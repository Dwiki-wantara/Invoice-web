import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddData from "./Components/Fitur/AddData";
import UpdateData from "./Components/Fitur/UpdateData";
import DetailData from "./Components/Fitur/DetailData";
import DeleteData from "./Components/Fitur/ComfirmData";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adddata" element={<AddData />} />
        <Route path="/detail/:id" element={<DetailData />} />
        <Route path="/updatedata/:id" element={<UpdateData />} />
        <Route path="/delete/:id" element={<DeleteData />} />
      </Routes>
    </>
  );
}

export default App;
