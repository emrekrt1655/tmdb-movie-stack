import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from '../pages/Signup/Signup'
import Signin from '../pages/Signin/Signin'  
import Navbar from '../components/Navbar/Navbar'

function AppRouter() {
  return (
    <Router>
    <Navbar/>
    <Switch>
        <Route path='/signup' component={Signup} exact/>
        <Route path='/signin' component={Signin} exact/>
    </Switch>
   </Router>
  )
}

export default AppRouter;