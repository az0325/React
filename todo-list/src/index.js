import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import modules from './modules';

// store
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(modules)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
