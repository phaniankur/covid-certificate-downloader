import Main from './Components/MainApp'
import Box from './Components/Library/Box';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Box
      width='100%'
      height='95vh'
      //bg='red'
      display='flex'
      justifyContent='center'
      alignItems= 'center'
      flexDirection = 'column'
    >
      <Main/>
    </Box>
    <Footer/>
    
    </>
    
  );
}

export default App;