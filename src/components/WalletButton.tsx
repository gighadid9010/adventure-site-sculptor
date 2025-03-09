
import React from 'react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { Wallet, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WalletButtonProps {
  isMobile?: boolean;
}

export const WalletButton = ({ isMobile = false }: WalletButtonProps) => {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  const openWalletModal = () => {
    setVisible(true);
  };

  // Format wallet address to show first 4 and last 4 characters
  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <Button 
      onClick={openWalletModal}
      className={cn(
        connected ? 'bg-solana-purple hover:bg-solana-purple/90' : 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900',
        isMobile && 'w-full'
      )}
    >
      {connected ? (
        <>
          <CheckCircle size={16} className="mr-2" />
          {publicKey ? formatWalletAddress(publicKey.toString()) : 'Connected'}
        </>
      ) : (
        <>
          <Wallet size={16} className="mr-2" />
          Connect Wallet
        </>
      )}
    </Button>
  );
};
