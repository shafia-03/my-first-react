import React from 'react';
import AllIssuesPage from './AllIssuesPage';
import AddIssuepage from './AddIssuepage';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import IssueDetailspage from './IssueDetailspage';
import pagenotfound from './pagenotfound';

class Links extends React.Component {
    render() {
        return (
            <nav> <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;  <NavLink exact activeClassName="active" to="/">About</NavLink>
            &nbsp;          &nbsp;     &nbsp;     <NavLink  activeClassName="active" to="/issues">Issues </NavLink>
          
             
             </nav>
        );
    }
}
export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Links/>
                    <Switch>
                        <Route exact path="/" render={() => <h4>&nbsp; About: This application is used to track the status of the issues raised</h4> }/>
                        <Route path="/issues" component={AllIssuesPage} />
                        <Route path="/Add Issue" Component={AddIssuepage} />
                        <Route path="/Issue/:id" Component={IssueDetailspage}/>
                        <Route component={pagenotfound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}