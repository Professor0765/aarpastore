import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminPanel from './components/AdminPanel';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/panel" component={AdminPanel} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;