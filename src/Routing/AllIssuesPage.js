import React from "react";
import { Link } from 'react-router-dom';
import IssueList from "./IssueList";
import IssueApi from './data/IssueApi';
export default class AllIssuespage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }
    componentDidMount() {
     this.setState({ issues:IssueApi.getAllIssues() });
      // IssueApi.getAllIssues(data => this.setState({ issues:data}));//
    }
    render() {
        return (
            <>
                <h1>&nbsp;Issue List</h1>
                <IssueList issues={this.state.issues} />
                <br/>
                <Link to="/Add Issue">Add Issue</Link>
            </>
        );
    }
}