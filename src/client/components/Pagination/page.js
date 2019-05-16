import React, { Component } from "react";

class Page extends Component {
    handleClick(e) {
        const {
            isDisabled,
            pageNumber
        } = this.props;

        e.preventDefault();

        if (isDisabled) {
            return;
        }

        this.props.onClick(pageNumber);
    }

    render() {
        const {
            isActive,
            pageNumber,
            pageText,
            onClick,


            href
        } = this.props;

        return (
            <li className={isActive ? 'active' : ''} onClick={this.handleClick.bind(this)}>
                <a href={href}>
                    {pageText}
                </a>
            </li>
        );
    }
}

export default Page;