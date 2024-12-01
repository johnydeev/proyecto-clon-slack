import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workspace/:workspace_id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App
