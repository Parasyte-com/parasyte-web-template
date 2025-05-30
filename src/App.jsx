import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className="app-container flex">
      <Sidebar />
      <div className="main-content flex-1">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
