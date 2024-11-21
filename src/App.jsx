import 'bootstrap/dist/css/bootstrap.css';
import DictionaryApp from './DictionaryApp';
import './App.css';


export default function App() {
  return (
    <div className='dictionary-container'>
      <h1>What word do you want to look up?</h1>
      <DictionaryApp />
    </div>
  )
  
}

