import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(){
    return(
        <header className='flex w-full justify-between py-6'>
            <div>
                <Link to="/" className='text-3xl font-bold flex gap-2'>
                    <span>Team</span>
                    <span className='primary-glow-text'>Plasma</span>
                    <span>Shop</span>
                </Link>
            </div>
            <nav>
                <ul className='flex text-xl gap-4'>
                    <li><Link to="/">Shop</Link> </li>
                    <li><Link to="/account">Compte</Link></li>
                    <li><Link to="/login">Connexion</Link> </li>
                    <li className='secondary-gradient bg-clip-text text-transparent secondary-glow font-bold'><Link to="/signup">Inscription</Link>  </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;