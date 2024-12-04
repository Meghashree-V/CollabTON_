// src/components/ConnectWallet.js
import React, { useState } from 'react';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState(null);

  // Connect to TON wallet
  const connectWallet = async () => {
    if (window.ton && window.ton.connect) {
      try {
        const address = await window.ton.connect();
        setWalletAddress(address);
      } catch (error) {
        console.error('Failed to connect to TON Wallet:', error);
      }
    } else {
      alert('TON Wallet is not installed. Please install it to continue.');
    }
  };

  // Disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <div className="connect-wallet">
      {walletAddress ? (
        <div>
          <p>Connected Wallet Address: {walletAddress}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default ConnectWallet;
