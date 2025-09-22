import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background theme-transition">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Nature theme background */}
        <div className="absolute inset-0 nature-texture opacity-30 dark:opacity-0 theme-transition"></div>
        
        {/* Matrix theme background */}
        <div className="absolute inset-0 dark:opacity-10 opacity-0 theme-transition">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;