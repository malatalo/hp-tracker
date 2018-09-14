import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HpTracker from './HpTracker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HpTracker />, document.getElementById('root'));
registerServiceWorker();
