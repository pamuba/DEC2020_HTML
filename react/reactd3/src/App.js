import './App.css';
import ChartWrapper from './ChartWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
     <Navbar bg="light">
      <Navbar.Brand>BAR CHART</Navbar.Brand>
     </Navbar>
     <Container>
      <ChartWrapper />
     </Container>
    </div>
  );
}

export default App;
