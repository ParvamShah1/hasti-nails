import React from 'react';
import { Instagram } from 'lucide-react';

interface FooterProps {
  instagramClicked: boolean;
  onInstagramClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ instagramClicked, onInstagramClick }) => (
  <footer className="mt-12 text-center space-y-4">
    <p className="text-sm text-gray-500">
      {!instagramClicked 
        ? "Follow us on Instagram to reveal your discount" 
        : "Tap the card above to reveal your exclusive discount"}
    </p>
    <a
      href="https://www.instagram.com/zenailsby_hs/profilecard/?igsh=a2syd20ycG84MnJw"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onInstagramClick}
      className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors"
    >
      <Instagram className="w-5 h-5" />
      <span className="font-medium">@zenailsby_hs</span>
    </a>
  </footer>
);