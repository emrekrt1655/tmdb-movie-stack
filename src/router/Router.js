import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../pages/Signup/Signup";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Signin from "../pages/Signin/Signin";
import Main from "../pages/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import {FireBaseAuthContext} from '../context/AuthContext'


function AppRouter() {
  const {currentUser} = useContext(FireBaseAuthContext);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} exact />
        <Route path="/signin" component={Signin} exact />
        <Route
          exact
          path="/detail/:id"
          component={currentUser ? MovieDetail : Signin}
        />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
