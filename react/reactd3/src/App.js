import './App.css';
import ChartWrapper from './ChartWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import PieChart from './PieChart';

function App() {
  const data = [{ label: 'Apples', value: 20 }, { label: 'Oranges', value: 20 },
  { label: 'Pie', value: 10 }, { label: 'Cakes', value: 10 },
  { label: 'Grapes', value: 20 },{ label: 'Strawbarries', value: 25 },
  { label: 'Cookies', value: 20 },{ label: 'Maples', value: 10 }];
  return (
    <div className="App">
     <Navbar bg="light">
      <Navbar.Brand>BAR CHART</Navbar.Brand>
     </Navbar>
     <Container>
      <ChartWrapper />
      <PieChart data={data} outerRadius={300} innerRadius={0}/>
     </Container>
    </div>
  );
}

export default App;
