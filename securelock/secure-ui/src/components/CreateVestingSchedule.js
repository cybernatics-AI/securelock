import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useContract } from '../hooks/useContract';

export function CreateVestingSchedule() {
  const [participant, setParticipant] = useState('');
  const [totalAllocation, setTotalAllocation] = useState('');
  const [startBlock, setStartBlock] = useState('');
  const [cliffDuration, setCliffDuration] = useState('');
  const [vestingDuration, setVestingDuration] = useState('');
  const [vestingInterval, setVestingInterval] = useState('');
  const { userAddress, loading } = useAppContext();
  const { callContractMethod } = useContract();

  const handleCreateSchedule = async (e) => {
    e.preventDefault();
    await callContractMethod('createVestingSchedule',
      participant,
      parseInt(totalAllocation, 10),
      parseInt(startBlock, 10),
      parseInt(cliffDuration, 10),
      parseInt(vestingDuration, 10),
      parseInt(vestingInterval, 10)
    );
  };

  if (!userAddress) return null;

  return (
    <div className="card">
      <h2>Create Vesting Schedule</h2>
      <form onSubmit={handleCreateSchedule}>
        <input
          type="text"
          placeholder="Participant Address"
          value={participant}
          onChange={(e) => setParticipant(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Total Allocation"
          value={totalAllocation}
          onChange={(e) => setTotalAllocation(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Start Block"
          value={startBlock}
          onChange={(e) => setStartBlock(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cliff Duration"
          value={cliffDuration}
          onChange={(e) => setCliffDuration(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Vesting Duration"
          value={vestingDuration}
          onChange={(e) => setVestingDuration(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Vesting Interval"
          value={vestingInterval}
          onChange={(e) => setVestingInterval(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating...' : 'Create Schedule'}
        </button>
      </form>
    </div>
  );
}
