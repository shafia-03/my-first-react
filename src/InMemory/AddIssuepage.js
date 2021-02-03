import React from 'react';
import  {withRouter} from 'react-router-dom';

import IssueApi from './data/IssuetApi';
// Container Component
class AddIssuePage extends React.Component {
    constructor(props) {
      super(props);
      this.saveIssue = this.saveIssue.bind(this);
    }
    saveIssue(issue) {
        IssueApi.saveIssue(issue);
        this.props.history.push('/');
    }
    render() {
        return (
            <IssueForm onSave={this.saveIssue} />
        );
    }
}