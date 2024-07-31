import logo from './logo.svg';
import './App.css';
import ViewAll from './Components/ViewAll';
import AddId from './Components/AddId';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddId/>}/>
          <Route path='/view' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
