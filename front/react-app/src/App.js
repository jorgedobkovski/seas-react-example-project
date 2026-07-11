import Item from "./pages/items/Item";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Empresa from "./pages/empresas/Empresa";
import Dashboard from "./pages/dashboard/Dashboard";
import EmpresaForm from "./pages/empresas/EmpresaForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/item/lista' component={Item} />
      <Route path='/empresa/lista' component={Empresa} />
      <Route path='/empresa/:id/item' component={Item} />
      <Route path='/empresa/detalhes/:id?' component={EmpresaForm} />
      <Route component={PageNotFound} />
    </Switch>
  );
}