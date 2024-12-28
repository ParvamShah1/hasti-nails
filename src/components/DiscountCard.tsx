import React from 'react';
import { Sparkles } from 'lucide-react';
import { useDiscount } from '../hooks/useDiscount';

interface DiscountCardProps {
  canReveal: boolean;
}

export const DiscountCard: React.FC<DiscountCardProps> = ({ canReveal }) => {
  const { discount, revealed, handleReveal } = useDiscount();

  return (
    <div 
      onClick={() => canReveal && handleReveal()}
      className={`
        transform transition-all duration-500
        ${!canReveal ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}
        ${revealed ? 'scale-105' : canReveal ? 'hover:scale-102' : ''}
        max-w-sm w-full bg-white rounded-2xl shadow-xl overflow-hidden
      `}
    >
      <div className="relative h-48">
        <img 
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
          alt="Elegant nail art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
      </div>
      
      <div className="p-6 text-center">
        {!revealed ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
              <h3 className="text-2xl font-bold text-gray-800 ml-2">
                {canReveal ? 'Tap to Reveal Your Discount' : 'Follow Us First'}
              </h3>
            </div>
            <p className="text-gray-600">
              {canReveal 
                ? 'Get an exclusive discount on your next nail art session'
                : 'Follow us on Instagram below to unlock your discount'}
            </p>
          </div>
        ) : (
          <div className="space-y-4 transform animate-reveal">
            <div className="text-4xl font-bold text-pink-500">
              {discount}% OFF
            </div>
            <p className="text-gray-600">
              Congratulations! Use this discount on your next visit
            </p>
            <p className="text-sm text-gray-500">
              Valid for 24 hours
            </p>
          </div>
        )}
      </div>
    </div>
  );
}