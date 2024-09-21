import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useContract } from '../hooks/useContract';

export function InitializeContract() {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const { userAddress, loading, setContractInfo } = useAppContext();
  const { callContractMethod } = useContract();

  const handleInitialize = async (e) => {
    e.preventDefault();
    const result = await callContractMethod('initialize', name, symbol, parseInt(decimals, 10));
    if (result.success) {
      setContractInfo({ name, symbol, decimals: parseInt(decimals, 10) });
    }
  };

  if (!userAddress) return null;

  return (
    <div className="card">
      <h2>Initialize Contract</h2>
      <form onSubmit={handleInitialize}>
        <input
          type="text"
          placeholder="Token Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Token Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Decimals"
          value={decimals}
          onChange={(e) => setDecimals(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Initializing...' : 'Initialize'}
        </button>
      </form>
    </div>
  );
}