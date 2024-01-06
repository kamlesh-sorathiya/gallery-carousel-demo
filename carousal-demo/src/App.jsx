import './assets/style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGrid from './components/imageGrid'
import { GetImagesController } from './controllers/controllers';

function App() { 
  const {apiError} = GetImagesController();

  return (
    <> 
      {apiError ? <h1>API Connection Error, Please Connect</h1> :
      <ImageGrid />
    }
    </>
  )
}

export default App
