
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">$SHAK</h3>
            <p className="text-blue-100">Swimming on Solana Ocean</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><a href="#" className="text-blue-100 hover:text-white">Home</a></li>
                <li><a href="#tokenomics" className="text-blue-100 hover:text-white">Tokenomics</a></li>
                <li><a href="#supply" className="text-blue-100 hover:text-white">Token Supply</a></li>
                <li><a href="#community" className="text-blue-100 hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Social Media</h4>
              <ul className="space-y-1">
                <li><a href="https://twitter.com" className="text-blue-100 hover:text-white">Twitter</a></li>
                <li><a href="https://t.me" className="text-blue-100 hover:text-white">Telegram</a></li>
                <li><a href="https://instagram.com" className="text-blue-100 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-blue-500 text-center">
          <p className="text-blue-100">
            &copy; {new Date().getFullYear()} SHAK Token. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
