
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';
import About from './container/About';
import Review from './container/Review';
function NotFound() {
  return (
      <div>
          <h1>404 - NOT FOUND</h1>
      </div>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/about" component={About}/>
        <Route path="/review" component={Review}/>
        
        <Route component={NotFound}/>

      </Switch>
    </div>
  );
}

export default App;
