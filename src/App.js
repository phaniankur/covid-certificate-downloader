import Main from './Components/MainApp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import crypt from './Pages/crypt';

function App() {
  return (
    <>
    <Main/>

    <Router>
            <Switch>
              <Route exact path='/crypt' component={crypt}></Route>
              
            </Switch>
       </Router>
    </>
    
  );
}

export default App;