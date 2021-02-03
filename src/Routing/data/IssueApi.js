import Issuedata from './Issuedata';
let currentID = 3;
export default class IssueApi {
    
    static  getAllIssues(){
        return JSON.parse(JSON.stringify(Issuedata.issues));
    }
       static saveIssue(issue) {
           issue.id = ++currentID;
           Issuedata.issues.push(issue);
       }
}