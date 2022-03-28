import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>,
    document.getElementById('root')
);
>>>>>>> 08-side-effects-reducers-context-api
