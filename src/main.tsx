import { store } from '@/app/providers/storeProvider';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App.tsx';
import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
