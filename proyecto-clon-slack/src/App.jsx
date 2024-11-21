import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App
