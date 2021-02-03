import React from 'react';
export default class Issue extends React.Component {
  render() {
    
    
    return (
        <tr>
          <td>{this.props.Id}</td>
          <td>{this.props.Description}</td>
          <td>{this.props.severity}</td>
          <td>{this.props.status}</td>
        </tr>
    );
  }
}