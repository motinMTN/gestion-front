import ReactDOM from 'react-dom/client';
import './index.scss';
import 'animate.css';
import 'font-awesome/css/font-awesome.min.css';
import App from "./App";
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

// 👇 Cambia este import
import { HeroUIProvider } from '@heroui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const persistor = persistStore(store);

root.render(
  // <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <HeroUIProvider>
          <App />
        </HeroUIProvider>
      </Provider>
    </PersistGate>
  // </React.StrictMode>
);

