import React, { Component } from 'react';
import Header from "./Header.js";
import Meta from "./Meta.js";

class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default Page;