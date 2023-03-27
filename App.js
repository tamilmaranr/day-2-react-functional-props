import './App.css';
import Book from './Book';

function App() {
  return (
    <div className="App">
      <center>
      <h1>BOOK STORE</h1>
      <Book name="The India Story" author="Bimal Jalal"/>
      <Book name="Listen to Your Heart: The London Adventure" author="Ruskin Bond"/>
      <Book name="Business of Sports: The Winning Formula for Success" author="Vinit Karnik"/>
      <Book name="A Place Called Home" author="Preeti Shenoy"/>
      <Book name="The Struggle for Police Reforms in India" author="Ex-IPS Prakash Singh"/>
      </center>
    </div>
  );
}

export default App;
