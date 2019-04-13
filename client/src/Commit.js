import React, { Component } from 'react';

class Commit extends Component {
    getClassNames() {
        let classes = ["commit"];
        if (this.props.isAhead) {
            classes.push("commit-is-ahead");
        }
        if (this.props.isRebasingCommit) {
            classes.push("commit-is-rebasing");
        }
        return  classes.join(" ");
    }

    render() {
        return (
            <li className={this.getClassNames()}
                id={this.props.isRebaseOnto ? "rebase-onto" : ""}
                {...(this.props.isRebaseOnto
                    ? { "data-tooltip": "this is the commit your rebase will be re-played onto" }
                    : this.props.isRebasingCommit
                        ? { "data-tooltip": "this commit is included in your rebase"}
                        : false)}
            >
                <span className="commit-dot" aria-hidden="true"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10"/></svg></span>
                <span className="commit-truncate">{this.props.hash}</span>
                <span className="commit-line" aria-hidden="true"></span>
            </li>
        );
    }
}

export default Commit;