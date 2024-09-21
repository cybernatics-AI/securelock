import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useContract } from '../hooks/useContract';

export function ClaimTokens() {
  const [vestedAmount, setVestedAmount] = useState(0);
  const [claimableAmount, setClaimableAmount] = useState(0);
  const { userAddress, loading } = useAppContext();
  const { callContractMethod } = useContract();

  useEffect(() => {
    if (userAddress) {
      fetchVestedAmount();
    }
  }, [userAddress]);

  const fetchVestedAmount = async () => {
    const result = await callContractMethod('getVestedAmount', userAddress);
    if (result.success) {
      setVestedAmount(result.data.vestedAmount);
      setClaimableAmount(result.data.claimableAmount);
    }
  };

  const handleClaim = async () => {
    const result = await callContractMethod('claimVestedTokens');
    if (result.success) {
      await fetchVestedAmount();
    }
  };

  if (!userAddress) return null;

  return (
    <div className="card">
      <h2>Claim Tokens</h2>
      <p>Vested Amount: {vestedAmount}</p>
      <p>Claimable Amount: {claimableAmount}</p>
      <button onClick={handleClaim} className="btn btn-primary" disabled={loading || claimableAmount === 0}>
        {loading ? 'Claiming...' : 'Claim Tokens'}
      </button>
    </div>
  );
}
