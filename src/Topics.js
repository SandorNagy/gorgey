import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getAllTopics } from "./data/topics";

class Topics extends Component {
    constructor(props) {
        super(props);
        this.createRows = this.createRows.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    createRows() {
        const topics = getAllTopics();
        const rows = [];
        const itemCounter = 4;
        const rowCounter = Math.ceil(topics.length / itemCounter);
        let startIndex = 0;
        let endIndex = 0;

        for (let i = 0; i < rowCounter; i++) {
            endIndex = startIndex + itemCounter < topics.length ? startIndex + itemCounter : topics.length;
            rows.push(
                <div className='row'>
                    {this.createItem(topics, startIndex, endIndex)}
                </div>
            );
            startIndex = endIndex;
        }

        return rows;
    }

    createItem(topics, startIndex, endIndex) {
        const items = [];

        for (let i = startIndex; i < endIndex; i++) {
            items.push(
                <div className='col-sm-3 mb-50 thumb'>
                    <Link className='topic-link' to={{ pathname: `/${topics[i].id}` }}>
                        <img src="https://d3e54v103j8qbb.cloudfront.net/img/placeholder-thumb.svg" width="215" alt="" />
                    </Link>
                </div>
            );
        }

        return items;
    }

    render() {
        return (
            <React.Fragment>
                {this.createRows()}
            </React.Fragment>
        );
    }
}



export default Topics