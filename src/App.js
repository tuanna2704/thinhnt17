import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  ListItems  from './components/ListItems';
import  Add  from './components/Add';
import  Navbar  from './components/Navbar';
import  Edit  from './components/Edit';

function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route exact  path='/' element={<ListItems />} />
        <Route exact  path='add' element={<Add />} />
        <Route exact  path='edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
