import Item from "./pages/items/Item";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Empresa from "./pages/empresas/Empresa";
import Dashboard from "./pages/dashboard/Dashboard";
import EmpresaForm from "./pages/empresas/EmpresaForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/item/lista' element={<Item/>} />
      <Route path='/empresa/lista' element={<Empresa/>} />
      <Route path='/empresa/:id/item' element={<Item/>} />
      <Route path='/empresa/detalhes' element={<EmpresaForm/>} />
      <Route path='/empresa/detalhes/:id' element={<EmpresaForm/>} />
      <Route element={<PageNotFound/>} />
    </Routes>
  );
}