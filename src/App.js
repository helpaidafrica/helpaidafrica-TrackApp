import React from 'react';
import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p><img src={logo} className="App-logo" alt="logo" style={{height: 200, width: 200}} /><br/></p>
        <p>
          Welcome to HelpAidAfrica - Box Tracking Client {process.env.AWS_BRANCH}
        </p>
      </header>
    </div>
  );
}

export default App;
