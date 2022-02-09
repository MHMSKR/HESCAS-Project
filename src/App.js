import { Link,Routes,Route } from 'react-router-dom'
import './App.css';
import Signup from './pages/signup'

function App() {
  return (
    <div className="App">
      <div className="contianer">
        <div className="header">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
            <h3>HESCAS Web Testing</h3>
          </div>
        </div>
        <div className="navigation">
          <a className='link' href='#'>APIs</a>
          <Link className='link' to='/signup'>LOGIN</Link>
          <a className='link' href='#'>ENERGY</a>
        </div>
        <div className="link-display">
          <Routes>
            <Route path='/signup' element={<Signup/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
