import './App.css';
import Header from "./components/Header"
import Balance from "./components/Balance"
import Income from './components/Income';
import History from './components/History';
import Transaction from './components/Transaction';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container"> 
      <Balance/>
      <Income/>
      <History/>
      <Transaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
