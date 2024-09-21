import React from 'react';
import { Connect } from './components/Connect';
import { InitializeContract } from './components/InitializeContract';
import { CreateVestingSchedule } from './components/CreateVestingSchedule';
import { ClaimTokens } from './components/ClaimTokens';
import { TransferTokens } from './components/TransferTokens';
import { ContractInfo } from './components/ContractInfo';
import { AppProvider } from './context/AppContext';
import './styles/index.css';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <header className="app-header">
          <h1>Vesting Contract Management</h1>
        </header>
        <main className="app-main">
          <Connect />
          <InitializeContract />
          <CreateVestingSchedule />
          <ClaimTokens />
          <TransferTokens />
          <ContractInfo />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
