import { useTonConnectUI } from '@tonconnect/ui-react';

export const TxForm = () => {
  const [tonConnect] = useTonConnectUI();

  const handleTransaction = async () => {
    try {
      const transactionResult = await tonConnect.sendTransaction({
        to: 'EQC9kx4URKPz5yZ9tnEJ2z6VQQY_dKQx-dksY9Tr8F3W4Ufw',
        value: 1, // 1 TON
        message: 'CollabTON Transaction',
      });
      console.log('Transaction Successful:', transactionResult);
    } catch (error) {
      console.error('Transaction Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleTransaction}>Send TON</button>
    </div>
  );
};
