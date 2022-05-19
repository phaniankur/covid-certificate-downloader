import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/MainApp'
import Box from './Components/Library/Box';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
    <Router>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/" component={Home}/>
    </Router>
    </>

  );
}

export default App;