import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

export const useDiscount = () => {
  const [revealed, setRevealed] = useState(false);
  const [discount] = useState(() => {
    // Generate random number between 1-3 and multiply by 5 to get 5, 10, or 15
    return (Math.floor(Math.random() * 3) + 1) * 5;
  });

  const handleReveal = useCallback(() => {
    if (!revealed) {
      setRevealed(true);
      
      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#db2777', '#be185d'],
      });
    }
  }, [revealed]);

  return { discount, revealed, handleReveal };
};