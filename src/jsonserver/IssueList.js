import React from 'react';
import Issue from './Issue';
export default class IssueList extends React.Component {
  render () {
    
    let IssueNodes = this.props.issues.map(issue => (
        <Issue Id={issue.Id} Description={issue.Description} severity={issue.severity} status={issue.status}>
         
        </Issue>
    ));
    return (
      <>
        <table border="2" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {IssueNodes}
          </tbody>
        </table>
      </>
    );
  }
}