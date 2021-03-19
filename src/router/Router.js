import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from '../pages/Signup/Signup'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import Signin from '../pages/Signin/Signin'  
import Main from '../pages/Main/Main'  
import Navbar from '../components/Navbar/Navbar'

function AppRouter() {
  return (
    <Router>
    <Navbar/>
    <Switch>
        <Route path='/signup' component={Signup} exact/>
        <Route path='/signin' component={Signin} exact/>
        <Route path='/detail/:id' component={MovieDetail} exact/>
        <Route path='/' component={Main} />
    </Switch>
   </Router>
  )
}

export default AppRouter;