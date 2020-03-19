import React from 'react';
import './App.css';

import AccountsSummaryPage from "./pages/accounts-summary-page/accounts-summary.page.component";
import Header from './components/header/header.component';
import AccountDetails from './components/account-details/account-details.component';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={AccountsSummaryPage} />
        <Route path='/account/:accountNumber' component={AccountDetails} />
      </Switch>
    </div>
  );
}

export default App;
