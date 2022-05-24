import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <section className='Header'>
            <header>
                <Link style={{textDecoration: 'none'}}to="/">
                    <h1 className='Title'>Nc News</h1>
                </Link>
                <NavBar></NavBar>
            </header>
        </section>
    )
}

export default Header;