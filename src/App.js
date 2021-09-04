import Main from './Components/MainApp'
import Box from './Components/Library/Box';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <>
    <MetaTags>
            <title>Covid Certificate Downloader</title>
            
          </MetaTags>
    <Box
      width='100%'
      height='95vh'
      //bg='red'
      display='flex'
      justifyContent='center'
      alignItems= 'center'
      flexDirection = 'column'
    >
      <Header/>
      <Main/>
      <Footer/>
    </Box>
    
    
    </>
    
  );
}

export default App;