import './App.css';
import DashBoard from './components/DashBoard';
import DSU from './components/DSU';
import Leaves from './components/Leaves';
import Login from './components/Login';
import Request from './components/Request';
import Singup from './components/Singup';
import Task from './components/Task';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>

        <Link to='/'>Login</Link>
        <Link to='/singup'>Singup</Link>
   
        <Link to='/task'>Task</Link>
        <Link to='/leaves'>Leaves</Link>
        <Link to='/dsu'>DSU</Link>
        <Link to='/req'>Request</Link>


      </nav>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/singup' element={ <Singup/>}/>
      <Route path='/dash' element={<DashBoard/>}/>

      <Route path='/task' element={<Task/>}/>
      <Route path='/leaves' element={<Leaves/>}/>
      <Route path='/dsu' element={<DSU/>}/>
      <Route path='/req' element={<Request/>}/>
      <Route path='*' element={<Pagenotfound/>}/>

      
      
      

  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
