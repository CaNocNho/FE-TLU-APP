 
import React from 'react';
import Header from '../../@core/components/Header/Header';
import MarksPage from '../marksPage/MarksContainer';

const HomePage: React.FC = () => (
  <div>
    <Header />
    <main className="p-4">
      <MarksPage />
    </main>
  </div>
);

export default HomePage;
