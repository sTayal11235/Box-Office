import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
    <div>
        <ul>
            <li><Link to="/Starred">Starred</Link></li>
        </ul>
    </div>);
}    

export default Navigation
