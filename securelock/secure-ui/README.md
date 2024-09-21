# Vesting Contract

## Overview

This smart contract implements a token vesting mechanism on the Stacks blockchain. It allows for the creation of vesting schedules for participants, where tokens are gradually unlocked over time according to predefined parameters.

## Features

- Token initialization with customizable name, symbol, and decimals
- Creation of vesting schedules for individual participants
- Cliff and linear vesting periods
- Token claiming for vested amounts
- Transfer of claimed tokens
- Querying of vesting schedules and vested amounts

## Contract Details

- **Contract Language**: Clarity
- **Blockchain**: Stacks

## Functions

### Administrative Functions

1. `initialize(name, symbol, decimals)`
   - Initializes the token contract with the given parameters
   - Can only be called once by the contract owner

2. `create-vesting-schedule(participant, total-allocation, start-block, cliff-duration, vesting-duration, vesting-interval)`
   - Creates a vesting schedule for a participant
   - Can only be called by the contract owner

### User Functions

1. `claim-vested-tokens()`
   - Allows a participant to claim their vested tokens
   - Transfers the claimable amount to the participant's balance

2. `transfer(amount, recipient)`
   - Transfers the specified amount of tokens to the recipient
   - Can only be used for claimed tokens

### Read-Only Functions

1. `get-vested-amount(participant)`
   - Returns the total vested amount for a participant

2. `get-balance(account)`
   - Returns the token balance of an account

3. `get-total-supply()`
   - Returns the total supply of tokens

4. `get-name()`
   - Returns the token name

5. `get-symbol()`
   - Returns the token symbol

6. `get-decimals()`
   - Returns the number of decimal places for the token

7. `get-vesting-schedule(participant)`
   - Returns the vesting schedule details for a participant

8. `is-initialized()`
   - Returns whether the contract has been initialized

## Deployment

To deploy this contract:

1. Ensure you have the Stacks CLI installed and configured
2. Deploy the contract using the Stacks CLI:

   ```
   stx deploy /path/to/vesting-contract.clar --network [mainnet/testnet]
   ```

3. Once deployed, initialize the contract by calling the `initialize` function with appropriate parameters

## Interacting with the Contract

You can interact with the contract using the Stacks CLI, the Stacks API, or through a web interface built using the `@stacks/transactions` library.

### Example: Creating a Vesting Schedule

```javascript
import { makeContractCall, standardPrincipalCV, uintCV, PostConditionMode } from '@stacks/transactions';

const txOptions = {
  contractAddress: 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9',
  contractName: 'vesting-contract',
  functionName: 'create-vesting-schedule',
  functionArgs: [
    standardPrincipalCV('SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9'),
    uintCV(1000000), // total allocation
    uintCV(100000),  // start block
    uintCV(10000),   // cliff duration
    uintCV(50000),   // vesting duration
    uintCV(1000)     // vesting interval
  ],


## Security Considerations

1. Ensure that only authorized addresses can call administrative functions
2. Verify that vesting schedules cannot be altered once created
3. Implement proper access controls for token transfers
4. Consider adding emergency functions (e.g., pause mechanism) for critical situations
5. Thoroughly test all functions, including edge cases
6. Consider getting a professional audit before deploying with significant value

