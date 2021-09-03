import Main from './Components/MainApp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import crypt from './Pages/crypt';
import Box from './Components/Library/Box';

function App() {
  return (
    <>
    <Box
      width='100%'
      height='100vh'
      //bg='red'
        display='flex'
        justifyContent='center'
        alignItems= 'center'
        flexDirection = 'column'
    >
      <Main/>
    </Box>
    
    </>
    
  );
}

export default App;