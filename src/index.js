import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './containers/index.css';
import registerServiceWorker from './containers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
