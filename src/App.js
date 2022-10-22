import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Page/Home';
import Vistorias from './Page/Vistorias';
import Associados from './Page/Associados';
import Financeiro from './Page/Financeiro';
import Plano from './Page/Plano';
import React from 'react';
import NavBar from './components/NavBar';
import AddDadosAssociados from './Page/Vistorias/AddDadosAssociados';
import AddDadosVeiculo from './Page/Vistorias/AddDadosVeiculo';
import AddDadosAvarias from './Page/Vistorias/AddDadosAvarias';
import AddDadosVeiculoFotos from './Page/Vistorias/AddDadosVeiculoFotos';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/vistorias' component={Vistorias} exact />
        <Route path='/vistorias/add/dadosassociados' component={AddDadosAssociados} />
        <Route path='/vistorias/add/dadosveiculo' component={AddDadosVeiculo} />
        <Route path='/vistorias/add/dadosveiculofotos' component={AddDadosVeiculoFotos} />
        <Route path='/vistorias/add/dadosavarias' component={AddDadosAvarias} />
        <Route path='/associados' component={Associados} />
        <Route path='/financeiro' component={Financeiro} />
        <Route path='/meuplano' component={Plano} />
      </Switch>
    </React.Fragment>
  );
}

export default App;