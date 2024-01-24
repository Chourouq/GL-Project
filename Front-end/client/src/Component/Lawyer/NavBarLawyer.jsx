import React from 'react';
import {Link} from 'react-router-dom';


function NavBarlawyer() {

    const profilePicture = './assets/user1.png';

    return (
        <nav className="h-3/4 w-full bg-center bg-cover " id='navBarLawyer'>
            <div className="flex items-center">
                <div>dz-mouhami</div>

                <div className="w-8 h-8 rounded-full bg-white">

                    <Link to="/profile">
                        <img
                            src={profilePicture}
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex space-x-4">

                <Link to='#home'>Acceuil</Link>
                <Link to="#About us">A propos de nous</Link>
                <Link to="#contact">Contact</Link>
                <Link to="#MesClients">Mes Clients</Link>
            </div>
        </nav>
    );
}

export default NavBarlawyer;