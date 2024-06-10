import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStud from './components/AddStud';
import RemoveStud from './components/RemoveStud';
import SearchStud from './components/SearchStud';
import ViewStud from './components/ViewStud';
import ViewStudTable from './components/ViewStudTable';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStud/>}/>
      <Route path='/r' element={<RemoveStud/>}/>
      <Route path='/s' element={<SearchStud/>}/>
      <Route path='/v' element={<ViewStud/>}/>
      <Route path='/vt' element={<ViewStudTable/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
