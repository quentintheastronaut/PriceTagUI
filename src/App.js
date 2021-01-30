import logo from './logo.svg';
import './App.css';
import PriceBox from './Component/PriceBox';



function App({prices}) {
  return (
    <div className="App">
      
        {prices.map( price => {
          return(
            <PriceBox price={price} />
          )
        })}


    </div>
  );
}

export default App;
