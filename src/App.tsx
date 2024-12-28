import React, { useState } from 'react';
import { Header } from './components/Header';
import { DiscountCard } from './components/DiscountCard';
import { Footer } from './components/Footer';

function App() {
  const [instagramClicked, setInstagramClicked] = useState(false);

  const handleInstagramClick = () => {
    setInstagramClicked(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col items-center p-8">
      <Header />
      <DiscountCard canReveal={instagramClicked} />
      <Footer 
        instagramClicked={instagramClicked}
        onInstagramClick={handleInstagramClick}
      />
    </div>
  );
}

export default App;