import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useContract } from '../hooks/useContract';

export function Connect() {
  const { userAddress, setUserAddress, loading } = useAppContext();
  const { callContractMethod } = useContract();

  const connectWallet = async () => {
    const result = await callContractMethod('connectWallet');
    if (result.success) {
      setUserAddress(result.data.address);
    }
  };

  if (userAddress) {
    return <p className="connected-message">Connected: {userAddress}</p>;
  }

  return (
    <button className="btn btn-primary" onClick={connectWallet} disabled={loading}>
      {loading ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
