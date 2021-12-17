import React, {memo} from 'react';
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navs.styled';

const Links = [
    {to: '/', text: 'Home'},
    {to: '/Starred', text: 'Starred'}
]

function Navigation() {

    const location = useLocation()

    return(
    <div>
        <NavList>
            {Links.map(link => <li key={link.to}>
                <LinkStyled to={link.to} className={location.pathname===link.to?'active':''}>{link.text}</LinkStyled>
                </li>
                )}
        </NavList>
    </div>);
}    

export default memo(Navigation)
