// Mock blockchain data
export const stats = {
  blockHeight: "15,234,567",
  transactions24h: "1,234,567",
  tps: "45.2",
  avgBlockTime: "12.3s",
  activeAddresses: "234,567",
  marketCap: "$1.2B"
}

export const recentBlocks = [
  { number: "15234567", txns: 234, miner: "0x742d35Cc6634C0532925a3b844Bc9e7595f4e8b9c", reward: "2.5 GBIT", time: "12 secs ago", gasUsed: "12,345,678", gasLimit: "30,000,000" },
  { number: "15234566", txns: 189, miner: "0x8a4c21Db6744F1C9527a3b899Bc9e7595f4e3f7a", reward: "2.5 GBIT", time: "24 secs ago", gasUsed: "10,123,456", gasLimit: "30,000,000" },
  { number: "15234565", txns: 312, miner: "0x5f2e19Ab8634C0542925a3b844Bc9e7595f4e6d4b", reward: "2.5 GBIT", time: "36 secs ago", gasUsed: "15,678,901", gasLimit: "30,000,000" },
  { number: "15234564", txns: 156, miner: "0x9c7a44Fc6634C0532925a3b844Bc9e7595f4e2e8f", reward: "2.5 GBIT", time: "48 secs ago", gasUsed: "8,234,567", gasLimit: "30,000,000" },
  { number: "15234563", txns: 278, miner: "0x3b8d52Ec6634C0532925a3b844Bc9e7595f4e9a1c", reward: "2.5 GBIT", time: "1 min ago", gasUsed: "14,567,890", gasLimit: "30,000,000" }
]

export const recentTransactions = [
  { 
    hash: "0xa7f4c3d2e1b9f8a7c6b5d4e3f2a1b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3d2e1",
    from: "0x742d35Cc6634C0532925a3b844Bc9e7595f4e8b9c", 
    to: "0x8a4c21Db6744F1C9527a3b899Bc9e7595f4e3f7a", 
    value: "12.5 GBIT", 
    time: "5 secs ago",
    block: "15234567",
    gasPrice: "25 Gwei",
    status: "Success"
  },
  { 
    hash: "0xb8e5d2c1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3",
    from: "0x5f2e19Ab8634C0542925a3b844Bc9e7595f4e6d4b", 
    to: "0x9c7a44Fc6634C0532925a3b844Bc9e7595f4e2e8f", 
    value: "8.3 GBIT", 
    time: "8 secs ago",
    block: "15234567",
    gasPrice: "22 Gwei",
    status: "Success"
  },
  { 
    hash: "0xc9f6e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2",
    from: "0x3b8d52Ec6634C0532925a3b844Bc9e7595f4e9a1c", 
    to: "0x742d35Cc6634C0532925a3b844Bc9e7595f4e8b9c", 
    value: "45.7 GBIT", 
    time: "15 secs ago",
    block: "15234566",
    gasPrice: "28 Gwei",
    status: "Success"
  },
  { 
    hash: "0xd1a7f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1",
    from: "0x8a4c21Db6744F1C9527a3b899Bc9e7595f4e3f7a", 
    to: "0x5f2e19Ab8634C0542925a3b844Bc9e7595f4e6d4b", 
    value: "3.2 GBIT", 
    time: "22 secs ago",
    block: "15234566",
    gasPrice: "20 Gwei",
    status: "Success"
  },
  { 
    hash: "0xe2b8g1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3d2",
    from: "0x9c7a44Fc6634C0532925a3b844Bc9e7595f4e2e8f", 
    to: "0x3b8d52Ec6634C0532925a3b844Bc9e7595f4e9a1c", 
    value: "19.8 GBIT", 
    time: "28 secs ago",
    block: "15234565",
    gasPrice: "24 Gwei",
    status: "Success"
  }
]

export const mockTokens = [
  { 
    name: "GBIT Token", 
    symbol: "GBIT", 
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f4e8b9c",
    totalSupply: "1,000,000,000",
    holders: "45,234",
    price: "$1.23",
    change24h: "+5.67%"
  },
  { 
    name: "Staked GBIT", 
    symbol: "sGBIT", 
    address: "0x8a4c21Db6744F1C9527a3b899Bc9e7595f4e3f7a",
    totalSupply: "500,000,000",
    holders: "12,456",
    price: "$1.45",
    change24h: "+3.21%"
  },
  { 
    name: "GBIT DAO", 
    symbol: "GDAO", 
    address: "0x5f2e19Ab8634C0542925a3b844Bc9e7595f4e6d4b",
    totalSupply: "100,000,000",
    holders: "8,901",
    price: "$8.90",
    change24h: "-1.23%"
  }
]

// Helper to get mock data by ID
export function getBlockByNumber(blockNumber: string) {
  const block = recentBlocks.find(b => b.number === blockNumber)
  return block || {
    number: blockNumber,
    txns: 187,
    miner: "0x742d35Cc6634C0532925a3b844Bc9e7595f4e8b9c",
    reward: "2.5 GBIT",
    time: "2 mins ago",
    gasUsed: "12,345,678",
    gasLimit: "30,000,000"
  }
}

export function getTransactionByHash(hash: string) {
  const tx = recentTransactions.find(t => t.hash === hash)
  return tx || {
    hash,
    from: "0x742d35Cc6634C0532925a3b844Bc9e7595f4e8b9c",
    to: "0x8a4c21Db6744F1C9527a3b899Bc9e7595f4e3f7a",
    value: "10.0 GBIT",
    time: "1 min ago",
    block: "15234567",
    gasPrice: "25 Gwei",
    status: "Success"
  }
}

export function getAddressData(address: string) {
  return {
    address,
    balance: "1,234.5678 GBIT",
    value: "$1,520.45 USD",
    transactions: "1,234",
    tokens: [
      { name: "GBIT Token", symbol: "GBIT", balance: "500.00" },
      { name: "Staked GBIT", symbol: "sGBIT", balance: "250.00" }
    ],
    recentTxs: recentTransactions.slice(0, 5).map(tx => ({
      ...tx,
      from: address,
      to: tx.to === address ? tx.from : tx.to
    }))
  }
}