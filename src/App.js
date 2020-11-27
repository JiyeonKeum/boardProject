import React from "react";
import {Main} from './routers';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={Main}/>
            </Switch>
        </Router>
    );
}

export default App;