import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import ClientDetails from "./containers/ClientDetails";


export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
        <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
        <AppliedRoute path="/client/new" exact component={ClientDetails} props={childProps} />

        { /* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>;