//引入react jsx写法的必须
import React from 'react';
import Home from './pages/home/home'
import Nav from "./components/nav/nav"
//引入一些模块
import { BrowserRouter as Router, Route, withRouter,Redirect } from "react-router-dom";
function router() {
    return (<Router>
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/" render={
      ()=> (
      <Redirect to="/home"/>)}>
    </Route>
    </Router>);
}
export default router;