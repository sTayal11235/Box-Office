import React from 'react';
import { Link } from 'react-router-dom';

const Links = [
    {to: '/', text: 'Home'},
    {to: '/Starred', text: 'Starred'}
]

function Navigation() {
    return(
    <div>
        <ul>
            {Links.map(link => <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
                </li>
                )}
        </ul>
    </div>);
}    

export default Navigation
