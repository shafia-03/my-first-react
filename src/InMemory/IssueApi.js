import issuedata from "./issuedata";

export default class IssueApi {
    
    static  getAllIssues(){
        return issuedata.Issues;
    }
}