import React from "react";
import IssueList from "./jsonserver/IssueList";
import IssueApi from './jsonserver/IssueApi';
export default class AllIssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }
    componentDidMount() {
       // this.setState({ issues:IssueApi.getAllIssues() });
       IssueApi.getAllIssues(data => this.setState({ issues:data}));
    }
    render() {
        return (
            <>
                <h1>Issue List</h1>
                <IssueList issues={this.state.issues} />
            </>
        );
    }
}