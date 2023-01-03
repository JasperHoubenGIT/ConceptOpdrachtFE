import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";


function Header() {

    return (
        <header className="also-header">
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        <strong>HOTTEST POSTS</strong>
                    </NavLink>
                </li>
                <li>
                    <a href={"https://www.reddit.com"}
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        <strong>REDDIT</strong>
                    </a>
                </li>
                <li>
                    <NavLink to={"/subreddit/memes"}
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        <strong>MEMES</strong>
                    </NavLink>
                </li>
            </ul>
        </nav>

    </header>)
}

export default Header