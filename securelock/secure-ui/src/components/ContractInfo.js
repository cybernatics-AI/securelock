import React from 'react';
import { useAppContext } from '../context/AppContext';

export function ContractInfo() {
  const { contractInfo } = useAppContext();

  if (!contractInfo) return null;

  return (
    <div className="card">
      <h2>Contract Information</h2>
      <p>Name: {contractInfo.name}</p>
      <p>Symbol: {contractInfo.symbol}</p>
      <p>Decimals: {contractInfo.decimals}</p>
    </div>
  );
}
