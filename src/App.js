import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/home';
import User from './component/User/user';
import NavBar from './component/NavBar/navbar';
import FixedContainer from "./component/fixedContainer";

function App() {
  return ( <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
            {/*<Route path='/' element={<FixedContainer />} />*/}
            <Route path='/' element={<Home/>} />
            <Route  path = "/users/:userId" element = {<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
