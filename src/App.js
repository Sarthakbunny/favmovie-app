import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import FavouriteComponent from './component/FavouriteComponent';
import HeaderComponent from './component/HeaderComponent';
import HomeComponent from './component/HomeComponent';
import MovieComponent from './component/MovieComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/home" component={HomeComponent}/>
        <Route path="/movie/:movieSlug" component={MovieComponent} />
        <Route path="/favourite" component={FavouriteComponent}/>
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
