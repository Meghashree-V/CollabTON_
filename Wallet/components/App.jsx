import './App.scss';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TxForm } from './components/TxForm/TxForm';

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="http://localhost:3000/tonconnect-manifest.json" // Adjust manifest URL to localhost
      uiPreferences={{ theme: THEME.DARK }}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"],
          }
        ],
      }}
      actionsConfiguration={{
        twaReturnUrl: 'http://localhost:3000',
      }}
    >
      <div className="app">
        <Header />
        <TxForm />
        <Footer />
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
