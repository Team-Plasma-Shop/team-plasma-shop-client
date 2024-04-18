import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getTokenFromLs } from '../utils/getTokenFromLs';

function Header() {

    const [auth, setAuth] = useState<string | null>()

    useEffect(() => {
        setAuth(getTokenFromLs())
    }, [])

    return (
        <header className='flex w-full justify-between py-6'>
            <div>
                <Link to="/" className='text-3xl font-bold flex gap-2'>
                    <span>Team</span>
                    <span className='primary-glow-text'>Plasma</span>
                    <span>Shop</span>
                </Link>
            </div>
            <nav>
                <ul className='flex text-base gap-4'>
                    <li><Link to="/">Shop</Link> </li>
                    <li><Link to="/account">Compte</Link></li>
                    {
                        !auth ? (
                            <>
                                <li><Link to="/login">Connexion</Link> </li>
                                <li className='secondary-gradient bg-clip-text text-transparent secondary-glow font-bold'><Link to="/signup">Inscription</Link>  </li>
                            </>
                        ) : null
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header;