import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import {SidebarProvider} from './sidebarContext'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import ListAll from './components/ListAll/ListAll'
import InStock from './components/InStock/InStock'
import CheckedOut from './components/CheckedOut/CheckedOut'
import LowStock from './components/LowStock/LowStock'
import Invoices from './components/Invoices/Invoices'
import Orders from './components/Orders/Orders'
import Reports from './components/Reports/Reports'
import PurchaseRequests from './components/PurchaseRequests/PurchaseRequests'
import NewEntry from './components/NewEntry/NewEntry'
import Settings from './components/Settings/Settings';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/new-item' element={<NewEntry/>} />
          <Route path='/list-all' element={<ListAll/>} />
          <Route path='/in-stock' element={<InStock/>} />
          <Route path='/checked-out' element={<CheckedOut/>} />
          <Route path='/low-stock' element={<LowStock/>} />
          <Route path='/all-invoices' element={<Invoices/>} />
          <Route path='/all-orders' element={<Orders/>} />
          <Route path='/all-requests' element={<PurchaseRequests/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
    </div>
  );
}

export default App;
