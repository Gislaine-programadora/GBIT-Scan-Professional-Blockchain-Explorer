import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { BlockDetailsPage } from "./pages/BlockDetailsPage"
import { TransactionDetailsPage } from "./pages/TransactionDetailsPage"
import { AddressDetailsPage } from "./pages/AddressDetailsPage"
import { BlockchainPage } from "./pages/BlockchainPage"
import { TokensPage } from "./pages/TokensPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/block/:blockNumber" element={<BlockDetailsPage />} />
        <Route path="/tx/:txHash" element={<TransactionDetailsPage />} />
        <Route path="/address/:address" element={<AddressDetailsPage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
        <Route path="/tokens" element={<TokensPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
