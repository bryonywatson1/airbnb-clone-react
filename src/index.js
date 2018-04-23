import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './components/hello.js';
const root = <div>
  <Hello firstName="Bryony" lastName="Lemon" />
  <Hello firstName="Lemony" lastName="Bryan" />
</div>;

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(root, document.getElementById('root'));
// registerServiceWorker();
