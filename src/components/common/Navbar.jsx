import logoNavbar from '../../assets/images/logo.png';

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                <img src={logoNavbar} alt="Logotipo de Reclutavit en la barra de navegación" />
            </nav>
        </header>
    );
};
