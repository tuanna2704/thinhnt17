import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  ListItems  from './components/ListItems';
import  ListItems2  from './components/ListItems2';
import  Add  from './components/Add';
import  Navbar  from './components/Navbar';
import  Edit  from './components/Edit';

function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route exact  path='/' element={<ListItems />} />
        <Route exact  path='/repos2' element={<ListItems2 />} />
        <Route exact  path='add' element={<Add />} />
        <Route exact  path='edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
