Smart Contract

## Overview

This Clarity smart contract implements a token vesting system designed for securing team or advisor tokens, ensuring long-term commitment, and managing vesting distribution over time to various participants. The contract allows for the creation of customized vesting schedules, token claiming, and transfers of vested tokens.

## Features

- Token initialization with custom name, symbol, and decimals
- Creation of personalized vesting schedules for participants
- Vesting period with customizable start time, cliff period, and vesting duration
- Calculation of vested tokens based on the current block height
- Claiming of vested tokens by participants
- Transfer of claimed tokens between participants
- Querying of token balances, vesting schedules, and contract information

## Contract Structure

The smart contract consists of the following main components:

1. Data Variables:
   - Token information (name, symbol, decimals)
   - Total supply
   - Contract initialization status

2. Data Maps:
   - Token balances
   - Vesting schedules

3. Public Functions:
   - `initialize`: Set up the token with basic information
   - `create-vesting-schedule`: Create a vesting schedule for a participant
   - `claim-vested-tokens`: Allow participants to claim their vested tokens
   - `transfer`: Enable transferring of claimed tokens

4. Read-Only Functions:
   - `get-vested-amount`: Calculate the amount of tokens vested for a participant
   - `get-balance`: Retrieve the token balance of an account
   - `get-total-supply`: Get the total token supply
   - `get-name`, `get-symbol`, `get-decimals`: Retrieve token information
   - `get-vesting-schedule`: Get the vesting schedule for a participant
   - `is-initialized`: Check if the contract has been initialized

## Setup and Deployment

To set up and deploy this smart contract:

1. Ensure you have [Clarinet](https://github.com/hirosystems/clarinet) installed.
2. Create a new Clarinet project: `clarinet new vesting-contract`
3. Replace the contents of `contracts/vesting-contract.clar` with the provided smart contract code.
4. Update the `Clarinet.toml` file to include the contract:

   ```toml
   [contracts.vesting-contract]
   path = "contracts/vesting-contract.clar"
   clarity_version = 2
   epoch = 2.4
   ```

5. Test the contract locally: `clarinet test`
6. Deploy the contract to a testnet or mainnet using Clarinet or other Stacks deployment tools.

## Security Considerations

- Only the contract owner can initialize the contract and create vesting schedules.
- Participants can only claim tokens that have vested according to their schedule.
- The contract uses various checks and balances to prevent unauthorized actions and ensure the integrity of the vesting process.

## Testing

Comprehensive unit tests should be written to cover all functions and edge cases. Use Clarinet's testing framework to write and run tests:


## Limitations and Future Improvements

- The contract doesn't support token minting or burning.
- There's no functionality to modify or revoke vesting schedules once created.
- Consider adding events (using `print`) to log important actions for off-chain tracking.
- Implement a function to allow participants to check their claimable token amount directly.


## Author

[Amobi Ndubuisi or dev.triggerfish@gmail.com]
# Vesting Smart Contract

## Overview

This Clarity smart contract implements a token vesting system designed for securing team or advisor tokens, ensuring long-term commitment, and managing vesting distribution over time to various participants. The contract allows for the creation of customized vesting schedules, token claiming, and transfers of vested tokens.

## Features

- Token initialization with custom name, symbol, and decimals
- Creation of personalized vesting schedules for participants
- Vesting period with customizable start time, cliff period, and vesting duration
- Calculation of vested tokens based on the current block height
- Claiming of vested tokens by participants
- Transfer of claimed tokens between participants
- Querying of token balances, vesting schedules, and contract information

## Contract Structure

The smart contract consists of the following main components:

1. Data Variables:
   - Token information (name, symbol, decimals)
   - Total supply
   - Contract initialization status

2. Data Maps:
   - Token balances
   - Vesting schedules

3. Public Functions:
   - `initialize`: Set up the token with basic information
   - `create-vesting-schedule`: Create a vesting schedule for a participant
   - `claim-vested-tokens`: Allow participants to claim their vested tokens
   - `transfer`: Enable transferring of claimed tokens

4. Read-Only Functions:
   - `get-vested-amount`: Calculate the amount of tokens vested for a participant
   - `get-balance`: Retrieve the token balance of an account
   - `get-total-supply`: Get the total token supply
   - `get-name`, `get-symbol`, `get-decimals`: Retrieve token information
   - `get-vesting-schedule`: Get the vesting schedule for a participant
   - `is-initialized`: Check if the contract has been initialized

## Setup and Deployment

To set up and deploy this smart contract:

1. Ensure you have [Clarinet](https://github.com/hirosystems/clarinet) installed.
2. Create a new Clarinet project: `clarinet new vesting-contract`
3. Replace the contents of `contracts/vesting-contract.clar` with the provided smart contract code.
4. Update the `Clarinet.toml` file to include the contract:

   ```toml
   [contracts.vesting-contract]
   path = "contracts/vesting-contract.clar"
   clarity_version = 2
   epoch = 2.4
   ```

5. Test the contract locally: `clarinet test`
6. Deploy the contract to a testnet or mainnet using Clarinet or other Stacks deployment tools.

## Security Considerations

- Only the contract owner can initialize the contract and create vesting schedules.
- Participants can only claim tokens that have vested according to their schedule.
- The contract uses various checks and balances to prevent unauthorized actions and ensure the integrity of the vesting process.

## Testing

Comprehensive unit tests should be written to cover all functions and edge cases. Use Clarinet's testing framework to write and run tests:


## Limitations and Future Improvements

- The contract doesn't support token minting or burning.
- There's no functionality to modify or revoke vesting schedules once created.
- Consider adding events (using `print`) to log important actions for off-chain tracking.
- Implement a function to allow participants to check their claimable token amount directly.


## Author

[Amobi Ndubuisi or dev.triggerfish@gmail.com
