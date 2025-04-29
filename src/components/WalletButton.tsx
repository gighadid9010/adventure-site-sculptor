
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
        'rounded-md px-6 py-2 font-bold transition-all duration-300 border-2 border-black',
        connected 
          ? 'bg-amber-400 hover:bg-amber-500 text-black' 
          : 'bg-amber-400 hover:bg-amber-500 text-black',
        isMobile && 'w-full'
      )}
      style={{ boxShadow: '2px 2px 0 #000' }}
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

export default WalletButton;
