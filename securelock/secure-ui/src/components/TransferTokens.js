import React, { useState, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { useContract } from '../hooks/useContract';
import { isValidAddress, etherToWei, truncateAddress, debounce } from '../utils/helpers';

export function TransferTokens() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const { userAddress, loading } = useAppContext();
  const { callContractMethod } = useContract();

  const validateInput = useCallback(debounce(() => {
    if (recipient && !isValidAddress(recipient)) {
      setError('Invalid recipient address');
    } else if (amount && isNaN(parseFloat(amount))) {
      setError('Invalid amount');
    } else {
      setError('');
    }
  }, 300), [recipient, amount]);

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
    validateInput();
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    validateInput();
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (error) return;

    try {
      await callContractMethod('transfer', recipient, etherToWei(parseFloat(amount)));
      setRecipient('');
      setAmount('');
    } catch (err) {
      setError(err.message);
    }
  };

  if (!userAddress) return null;

  return (
    <div className="card">
      <h2>Transfer Tokens</h2>
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={handleRecipientChange}
          required
        />
        <input
          type="number"
          placeholder="Amount (in Ether)"
          value={amount}
          onChange={handleAmountChange}
          step="0.000000000000000001"
          min="0"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading || !!error}>
          {loading ? 'Transferring...' : `Transfer to ${truncateAddress(recipient)}`}
        </button>
      </form>
    </div>
  );
}
