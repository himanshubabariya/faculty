import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allfaculty from "./Allfaculty";
import FacultyAdd from "./FacultyAdd";
import FacultyDetails from "./FacultyDetails";
import Home from "./Home";
import Layout from "./Layout";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/allfaculty" element={<Allfaculty />}></Route>
        <Route path="/Faculty/:FacultyId" element={<FacultyDetails />}></Route>
        <Route path="/Faculty/add" element={<FacultyAdd />}></Route>
        <Route path="Faculty/edit/:FacultyId" element={<FacultyAdd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
