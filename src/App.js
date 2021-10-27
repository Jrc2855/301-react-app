import Container from 'react-bootstrap/Container'
import Header from './Header.js';
import Footer from './Footer.js'
import Main from './Main.js'
import beastObj from './data.json'

function App() {
  return (
    <Container>
      <Header title = '301 Horned Beasts'/>
      <Main message='These are the Beasts' beastObj={beastObj} />
      <Footer text = 'Footer'/>
    </Container>
  );
}


export default App;
