import React from 'react';

export default class IssueForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
        event.preventDefault();
        var issue = {};
        issue.author = this.refs.author.Value;
        issue.text = this.refs.issuetext.Value;
        this.props.onSave(issue);
    }

    render() {
        return (
            <form>
                <h1>Add Issue</h1>
                Author:&nbsp;
                <input type="text"
                 ref="author" /><br/><br/>
                 Issue Text: &nbsp;
                 <input type="text"
                  ref="issuetext" /><br/><br/>
                  <input type="submit" value="Save" onClick={this.onSubmit}/>
            </form>
        );
    }
}