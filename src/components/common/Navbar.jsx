import { NavLink } from 'react-router-dom';

import logoNavbar from '../../assets/images/logo.png';

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                <NavLink to="/" aria-label="Ir a la página principal">
                    <img src={logoNavbar} alt="Logotipo de Reclutavit en la barra de navegación" />
                </NavLink>
            </nav>
        </header>
    );
};
