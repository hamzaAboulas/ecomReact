import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
