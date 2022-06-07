import { Route } from 'react-router-dom';
import Home from './Views/Home';
import Videogames from './Views/Videogames';
import VideogameDetail from './Views/VideogameDetail';
import Form from './Views/Form';
import style from './Styles/Loading.module.css';
import { useSelector } from 'react-redux';

function App() {
  const loading = useSelector(state => state.app.loading)

  return (
    <div>
      <Route path='/' exact component={Home}/>
      {loading && (<div className={style.progressLine}></div>)}
      <Route path='/videogames' exact component={Videogames}/>
      <Route path='/videogame/:id' exact component={VideogameDetail}/>
      {loading && (<div className={style.progressLine}></div>)}
      <Route path='/videogame' exact component={Form}/>
    </div>
  );
}

export default App;
