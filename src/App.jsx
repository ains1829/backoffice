import { Route, useLocation, Routes } from 'react-router-dom'
import Validation from './page/Validation';
import Details from './page/Details';
import Statistique from './page/Statistique';
import Creation from './page/Creation';
import Login from './page/Login';
import Commission from './page/Commission';
function App() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' Component={Login}></Route>
      <Route path='/logout' Component={Login}></Route>
      <Route path='/firstpage' Component={Validation}></Route>
      <Route path='/details/:id' Component={Details}></Route>
      <Route path='/stat' Component={Statistique}></Route>
      <Route path='/creation' Component={Creation}></Route>
      <Route path='/commission' Component={Commission}></Route>
    </Routes>
  );
}
export default App;
