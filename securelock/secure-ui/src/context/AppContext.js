import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [userAddress, setUserAddress] = useState(null);
  const [contractInfo, setContractInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    userAddress,
    setUserAddress,
    contractInfo,
    setContractInfo,
    loading,
    setLoading,
    error,
    setError,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
