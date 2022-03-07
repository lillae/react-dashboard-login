import React from 'react';
import Main from './pages/Main';
import { DashboardProvider } from './context/DashboardContext';
import 'bulma';

function App() {
  return (
    <DashboardProvider>
      <div className='App'>
        <Main />
      </div>
    </DashboardProvider>
  );
}

export default App;
