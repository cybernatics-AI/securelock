// Validate Ethereum address
export function isValidAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }
  
  // Format large numbers with commas
  export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  // Convert from wei to ether
  export function weiToEther(wei) {
    return wei / 1e18;
  }
  
  // Convert from ether to wei
  export function etherToWei(ether) {
    return ether * 1e18;
  }
  
  // Truncate address for display
  export function truncateAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  
  // Format date from Unix timestamp
  export function formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }
  
  // Calculate vesting progress percentage
  export function calculateVestingProgress(startTime, endTime, currentTime) {
    if (currentTime >= endTime) return 100;
    if (currentTime <= startTime) return 0;
    return ((currentTime - startTime) / (endTime - startTime)) * 100;
  }
  
  // Debounce function for input handlers
  export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  