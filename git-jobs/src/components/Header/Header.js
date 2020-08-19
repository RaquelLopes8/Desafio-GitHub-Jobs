import React, { Component } from 'react';

import './style.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="header">
                <div className="cont">
                    <h1 className="logo">GitHub Jobs</h1>

                    <ul className="link-nav">
                        <li>All jobs</li>
                        <li>Post a job</li>
                        <li>How it works</li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Header;