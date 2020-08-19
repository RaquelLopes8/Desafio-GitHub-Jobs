import React, { Component } from 'react';

import './style.css'
class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="div-form">
                <form>
                    <div className="input-job descricao">
                        <h2>Job Description</h2>
                        <div>
                            <input/>
                        </div>    
                    </div>

                    <div className="input-job descricao">
                        <h2>Location</h2>
                        <div>
                            <input/>
                        </div>    
                    </div>

                    <div className="checkbox div-label">
                        <label className="label">
                            <input type="checkbox"/>
                            Full Time Only
                        </label>
                    </div>

                    <button type="submit">Search</button>
                </form>
            </div>
         );
    }
}
 
export default Form;