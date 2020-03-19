import React from 'react';
import './App.css';

import AccountsSummaryPage from "./pages/accounts-summary-page/accounts-summary.page.component";
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <AccountsSummaryPage />
    </div>
  );
}

export default App;
