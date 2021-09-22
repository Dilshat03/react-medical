import React from 'react';
import Aside from "./components/Aside";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Task from "./components/Task";
import Project from "./components/Project";
import Date from "./components/Date";
import Possibilities from "./components/Possibilities";

const App = () => {
    return (
        <Router>
            <Route exact path='/'><Aside /></Route>
            <Route  path='/task'><Task /></Route>
            <Route  path='/project'><Project /></Route>
            <Route  path='/data'><Date /></Route>
            <Route  path='/possibilities'><Possibilities /></Route>

        </Router>

    );
};

export default App;