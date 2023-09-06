import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';

import Home from './pages/home'
import Login from './pages/login'
import UserLog from './pages/userLog'
import Header from './components/header';
import Footer from './components/footer';
import "./style/global.scss"
import configureStore from './redux/store';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <div className='page-content'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/userLog' element={<UserLog />} />
      </Routes>
      <Footer />
      </div>
    </Router>
    </Provider>
  </React.StrictMode>
);

