import { BrowserRouter as Router, Route } from 'react-router-dom';
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