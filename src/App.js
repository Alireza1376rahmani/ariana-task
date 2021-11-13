import './App.css';
import Chart from './components/Chart';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div>
        <Header/>
        <div className="container">
            <Form/>
            {/* <Chart/> */}
        </div>
    </div>
  );
}

export default App;
