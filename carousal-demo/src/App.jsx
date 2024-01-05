import './assets/style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGrid from './components/imageGrid'
import Controler from './controllers/constroler';

function App() { 
  const {apiError} = Controler();
  console.log('apiError',apiError);

  return (
    <> 
      {apiError ? <h1>API Connection Error, Please Connect</h1> :
      <ImageGrid />
    }
    </>
  )
}

export default App
