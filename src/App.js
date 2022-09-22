import './App.css';
import Home from './component/Home'
import Project1 from './component/Project1';
import Project2 from './component/Project2';
import Project3 from './component/Project3';
import Header from './component/Header';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project1" element={<Project1/>}/>
        <Route path="/project2" element={<Project2/>}/>
        <Route path="/project3" element={<Project3/>}/>
      </Routes>
    </div>
  );
}

export default App;
