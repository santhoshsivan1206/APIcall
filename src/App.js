import './App.css';
import Transactions from './transactions.json';

function App() {
  var answer=""
  fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => answer = data);
  return (
    <div className="App">
      <br/><br/><br/><br/>
       <h1>SMART CONTRACT TRANSACTIONS</h1>
       <br/><br/>

       {
          Transactions.map( transactions => {
            return(
              
              <div className="box" key={transactions.id}>

                  <strong>{" Product Name: "+transactions.productname}</strong>
                  <div className="box2">{" Product Price: "+transactions.productprice}</div>
              </div>
            )
          })
       }
    </div>
  );
}

export default App;
