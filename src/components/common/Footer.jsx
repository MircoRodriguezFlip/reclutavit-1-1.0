import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer">
            <NavLink className="light-text" to="/politica-privacidad" title="Ver la política de privacidad">
                Política de privacidad
            </NavLink>
        </footer>
    );
};
