import { Route  , useLocation, Routes} from 'react-router-dom'
import Validation from './page/Validation';
import Details from './page/Details';
function App() { 
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' Component={Validation}></Route>
        <Route path='/firstpage' Component={Validation}></Route>
        <Route path='/details/:id' Component={Details}></Route>
    </Routes>
  );
}
export default App;
